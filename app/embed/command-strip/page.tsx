import AutoRefresh from "../_components/AutoRefresh";

export const dynamic = "force-dynamic";

const NOTION_VERSION = "2022-06-28";
const COMMAND_DB_ID = process.env.NOTION_COMMAND_DB_ID || "2bd81e34fb8148c582ebabd082eac79f";

type QueryResult = { results: any[] } | { error: string } | null;

async function queryCommand(): Promise<QueryResult> {
  const token = process.env.NOTION_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${COMMAND_DB_ID}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 100 }),
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { error: `Notion returned ${res.status}${text ? ` — ${text.slice(0, 160)}` : ""}` };
    }
    const data = await res.json();
    return { results: data.results || [] };
  } catch (e: any) {
    return { error: `Fetch failed — ${e?.message || String(e)}` };
  }
}

function computeStats(results: any[]) {
  const today = new Date().toISOString().slice(0, 10);
  let needsYou = 0;
  let blocked = 0;
  let clearedToday = 0;
  for (const p of results) {
    const props = p.properties || {};
    const status = props["Status"]?.status?.name;
    const blockedCount = props["Blocked count"]?.rollup?.number ?? 0;
    if (status === "Not started") needsYou++;
    if (blockedCount > 0) blocked++;
    if (status === "Done") {
      const edited = (p.last_edited_time || "").slice(0, 10);
      if (edited === today) clearedToday++;
    }
  }
  return { needsYou, blocked, clearedToday, total: results.length };
}

export default async function CommandStrip() {
  const data = await queryCommand();
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;
  const stats = data && "results" in data ? computeStats(data.results) : null;
  const readAt = new Date().toISOString().slice(11, 16) + " UTC";

  const tileStyle: React.CSSProperties = { minWidth: 0 };
  const valueStyle: React.CSSProperties = {
    fontFamily: "'Archivo Narrow', sans-serif",
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1,
  };
  const labelStyle: React.CSSProperties = { color: "var(--ink-faint, #969087)", fontSize: 12, marginTop: 6 };
  const hintStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    color: "var(--ink-faint, #969087)",
    marginTop: 4,
    letterSpacing: ".02em",
  };

  return (
    <div style={{ padding: "2px 0" }}>
      <AutoRefresh />
      {setupRequired || errored || !stats ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "var(--clay-2, #d98a5f)",
            padding: "12px 2px",
          }}
        >
          SETUP REQUIRED —{" "}
          {setupRequired
            ? "NOTION_TOKEN is not set on this Vercel project."
            : `Notion returned an error: ${(data as any).error}`}{" "}
          Showing no values rather than stale ones.
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--accent, #c9a463)" }}>{stats.needsYou}</div>
            <div style={labelStyle}>Needs you</div>
            <div style={hintStyle}>live · {readAt}</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--clay-2, #d98a5f)" }}>{stats.blocked}</div>
            <div style={labelStyle}>Blocked</div>
            <div style={hintStyle}>rollup · Projects.Blocked by</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--up, #7fa86a)" }}>{stats.clearedToday}</div>
            <div style={labelStyle}>Cleared today</div>
            <div style={hintStyle}>Status = Done, edited today</div>
          </div>
          <div style={tileStyle}>
            <div style={{ ...valueStyle, color: "var(--ink-faint, #969087)" }}>{stats.total}</div>
            <div style={labelStyle}>Total in queue</div>
            <div style={hintStyle}>Command · live</div>
          </div>
        </div>
      )}
    </div>
  );
}
