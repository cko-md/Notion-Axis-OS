import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, readAtNow, title, select, checkbox, formulaNumber, formulaString } from "../_lib/notion";

export const dynamic = "force-dynamic";

const SIGNALS_DB_ID = process.env.NOTION_SIGNALS_DB_ID || "0d52f5d0-3342-41b3-8201-827aab536e89";

function computeStats(results: any[]) {
  const now = Date.now();
  let untriaged = 0;
  let stale = 0;
  let triagedThisWeek = 0;
  let decisionsPending = 0;
  for (const p of results) {
    const triaged = checkbox(p, "Triaged");
    const kind = select(p, "Kind");
    const staleFlag = formulaString(p, "Stale");
    if (!triaged) untriaged++;
    if (staleFlag === "Stale") stale++;
    if (triaged) {
      const edited = new Date(p.last_edited_time || 0).getTime();
      if (now - edited <= 7 * 24 * 60 * 60 * 1000) triagedThisWeek++;
    }
    if (kind === "Decision" && !triaged) decisionsPending++;
  }
  return { untriaged, stale, triagedThisWeek, decisionsPending };
}

export default async function DispatchStrip() {
  const data = await queryDatabase(SIGNALS_DB_ID);
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
            <div style={{ ...valueStyle, color: "var(--accent, #c9a463)" }}>{stats.untriaged}</div>
            <div style={labelStyle}>Untriaged</div>
            <div style={hintStyle}>live · {readAt}</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--clay-2, #d98a5f)" }}>{stats.stale}</div>
            <div style={labelStyle}>Older than 48h</div>
            <div style={hintStyle}>Stale formula</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--up, #7fa86a)" }}>{stats.triagedThisWeek}</div>
            <div style={labelStyle}>Triaged this week</div>
            <div style={hintStyle}>Triaged, edited ≤7d</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--ink-faint, #969087)" }}>{stats.decisionsPending}</div>
            <div style={labelStyle}>Decisions pending</div>
            <div style={hintStyle}>Kind = Decision</div>
          </div>
        </div>
      )}
    </div>
  );
}
