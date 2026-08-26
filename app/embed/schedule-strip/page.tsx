import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, readAtNow, select, checkbox, number, dateStart, formulaBool } from "../_lib/notion";

export const dynamic = "force-dynamic";

const EVENTS_DB_ID = process.env.NOTION_EVENTS_DB_ID || "3ab4e40d-b637-4de7-b5bb-a8a1471d0bc3";

function computeStats(results: any[]) {
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  let deepWorkMin = 0;
  let meetings = 0;
  let unrelated = 0;
  let protectedCount = 0;
  for (const p of results) {
    const kind = select(p, "Kind");
    const start = dateStart(p, "Start");
    const inWindow = start ? new Date(start).getTime() >= weekAgo && new Date(start).getTime() <= now + 7 * 24 * 60 * 60 * 1000 : false;
    if (kind === "Deep work" && inWindow) deepWorkMin += number(p, "Duration") || 0;
    if (kind === "Meeting" && inWindow) meetings++;
    if (formulaBool(p, "Unrelated")) unrelated++;
    if (checkbox(p, "Protected")) protectedCount++;
  }
  return { deepWorkHrs: (deepWorkMin / 60).toFixed(1), meetings, unrelated, protectedCount };
}

export default async function ScheduleStrip() {
  const data = await queryDatabase(EVENTS_DB_ID);
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
            <div style={{ ...valueStyle, color: "var(--accent, #c9a463)" }}>{stats.deepWorkHrs}h</div>
            <div style={labelStyle}>Deep work, ±7d</div>
            <div style={hintStyle}>live · {readAt}</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--ink, #ece8e0)" }}>{stats.meetings}</div>
            <div style={labelStyle}>Meetings, ±7d</div>
            <div style={hintStyle}>Kind = Meeting</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--clay-2, #d98a5f)" }}>{stats.unrelated}</div>
            <div style={labelStyle}>Unrelated blocks</div>
            <div style={hintStyle}>no Client or Project</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--up, #7fa86a)" }}>{stats.protectedCount}</div>
            <div style={labelStyle}>Protected</div>
            <div style={hintStyle}>auto-decline on</div>
          </div>
        </div>
      )}
    </div>
  );
}
