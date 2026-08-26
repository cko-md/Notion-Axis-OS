import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, readAtNow, status, formulaBool, dateStart } from "../_lib/notion";

export const dynamic = "force-dynamic";

const ACTIONS_DB_ID = process.env.NOTION_ACTIONS_DB_ID || "e5428701-7d59-4ffb-a191-c41b024819f1";

function computeStats(results: any[]) {
  const today = new Date().toISOString().slice(0, 10);
  let available = 0;
  let overdue = 0;
  let doneToday = 0;
  const total = results.length;
  for (const p of results) {
    const st = status(p, "State");
    const due = dateStart(p, "Due");
    if (formulaBool(p, "Available") && st !== "Done") available++;
    if (due && due < today && st !== "Done") overdue++;
    if (st === "Done") {
      const edited = (p.last_edited_time || "").slice(0, 10);
      if (edited === today) doneToday++;
    }
  }
  return { available, overdue, doneToday, total };
}

export default async function AgendaStrip() {
  const data = await queryDatabase(ACTIONS_DB_ID);
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;
  const stats = data && "results" in data ? computeStats(data.results) : null;
  const readAt = readAtNow();

  const tileStyle: React.CSSProperties = { minWidth: 0 };
  const valueStyle: React.CSSProperties = { fontFamily: "'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 28, lineHeight: 1 };
  const labelStyle: React.CSSProperties = { color: "var(--ink-faint, #969087)", fontSize: 12, marginTop: 6 };
  const hintStyle: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--ink-faint, #969087)", marginTop: 4, letterSpacing: ".02em" };

  return (
    <div style={{ padding: "2px 0" }}>
      <AutoRefresh />
      {setupRequired || errored || !stats ? (
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--clay-2, #d98a5f)", padding: "12px 2px" }}>
          SETUP REQUIRED — {setupRequired ? "NOTION_TOKEN is not set on this Vercel project." : `Notion returned an error: ${(data as any).error}`} Showing no values rather than stale ones.
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--accent, #c9a463)" }}>{stats.available}</div>
            <div style={labelStyle}>Available now</div>
            <div style={hintStyle}>live · {readAt}</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--clay-2, #d98a5f)" }}>{stats.overdue}</div>
            <div style={labelStyle}>Overdue</div>
            <div style={hintStyle}>Due &lt; today</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--up, #7fa86a)" }}>{stats.doneToday}</div>
            <div style={labelStyle}>Done today</div>
            <div style={hintStyle}>State = Done, edited today</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--ink-faint, #969087)" }}>{stats.total}</div>
            <div style={labelStyle}>Total actions</div>
            <div style={hintStyle}>Agenda · live</div>
          </div>
        </div>
      )}
    </div>
  );
}
