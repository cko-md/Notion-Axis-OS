import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, readAtNow, formulaBool, multiSelect, dateStart } from "../_lib/notion";

export const dynamic = "force-dynamic";

const NOTES_DB_ID = process.env.NOTION_NOTES_DB_ID || "6000e31e-e8b3-4216-bcdb-a579162a765f";

function computeStats(results: any[]) {
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const in14d = now + 14 * 24 * 60 * 60 * 1000;
  let writtenThisWeek = 0;
  let unlinked = 0;
  let withThemes = 0;
  let revisitSoon = 0;
  for (const p of results) {
    const created = new Date(p.created_time || 0).getTime();
    if (created >= weekAgo) writtenThisWeek++;
    if (formulaBool(p, "Unlinked")) unlinked++;
    if (multiSelect(p, "Themes").length > 0) withThemes++;
    const revisit = dateStart(p, "Revisit");
    if (revisit && new Date(revisit).getTime() <= in14d) revisitSoon++;
  }
  return { writtenThisWeek, unlinked, withThemes, revisitSoon };
}

export default async function NotesStrip() {
  const data = await queryDatabase(NOTES_DB_ID);
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
            <div style={{ ...valueStyle, color: "var(--accent, #c9a463)" }}>{stats.writtenThisWeek}</div>
            <div style={labelStyle}>Written this week</div>
            <div style={hintStyle}>live · {readAt}</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--clay-2, #d98a5f)" }}>{stats.unlinked}</div>
            <div style={labelStyle}>Unlinked</div>
            <div style={hintStyle}>no relation set</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--up, #7fa86a)" }}>{stats.withThemes}</div>
            <div style={labelStyle}>Tagged with a theme</div>
            <div style={hintStyle}>Themes not empty</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--ink-faint, #969087)" }}>{stats.revisitSoon}</div>
            <div style={labelStyle}>Revisit within 14d</div>
            <div style={hintStyle}>Revisit date</div>
          </div>
        </div>
      )}
    </div>
  );
}
