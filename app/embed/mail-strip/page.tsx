import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, readAtNow, select, formulaBool } from "../_lib/notion";

export const dynamic = "force-dynamic";

const THREADS_DB_ID = process.env.NOTION_THREADS_DB_ID || "19691362-ecf4-4901-9586-3c909bc8da6c";

function computeStats(results: any[]) {
  let awaitingYou = 0;
  let needsChase = 0;
  let waitingOnThem = 0;
  let cleared = 0;
  for (const p of results) {
    const st = select(p, "State");
    if (st === "Awaiting you") awaitingYou++;
    if (st === "Waiting on them") waitingOnThem++;
    if (st === "Cleared") cleared++;
    if (formulaBool(p, "Needs chase")) needsChase++;
  }
  return { awaitingYou, needsChase, waitingOnThem, cleared };
}

export default async function MailStrip() {
  const data = await queryDatabase(THREADS_DB_ID);
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
            <div style={{ ...valueStyle, color: "var(--accent, #c9a463)" }}>{stats.awaitingYou}</div>
            <div style={labelStyle}>Awaiting you</div>
            <div style={hintStyle}>live · {readAt}</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--clay-2, #d98a5f)" }}>{stats.needsChase}</div>
            <div style={labelStyle}>Needs chase</div>
            <div style={hintStyle}>waiting &gt; 120h</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--ink, #ece8e0)" }}>{stats.waitingOnThem}</div>
            <div style={labelStyle}>Waiting on them</div>
            <div style={hintStyle}>State = Waiting on them</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--up, #7fa86a)" }}>{stats.cleared}</div>
            <div style={labelStyle}>Cleared</div>
            <div style={hintStyle}>State = Cleared</div>
          </div>
        </div>
      )}
    </div>
  );
}
