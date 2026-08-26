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

function groupBySource(results: any[]) {
  const groups: Record<string, { total: number; needsYou: number }> = {};
  for (const p of results) {
    const props = p.properties || {};
    const source = props["Source database"]?.formula?.string || "Unassigned";
    const needsYou = !!props["Needs you"]?.formula?.boolean;
    if (!groups[source]) groups[source] = { total: 0, needsYou: 0 };
    groups[source].total++;
    if (needsYou) groups[source].needsYou++;
  }
  return Object.entries(groups).sort((a, b) => b[1].total - a[1].total);
}

export default async function BySource() {
  const data = await queryCommand();
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;

  if (setupRequired || errored || !data || !("results" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">command · by source</span>
          <div className="status-callout-message">
            {setupRequired
              ? "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project."
              : `Notion returned an error: ${(data as any)?.error}`}
          </div>
        </div>
      </div>
    );
  }

  const groups = groupBySource(data.results);

  if (groups.length === 0) {
    return (
      <div className="status-callout status-callout-empty">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">command · by source</span>
          <div className="status-callout-message">No rows in Command yet.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="tidbits">
      <AutoRefresh />
      {groups.map(([source, counts]) => (
        <div key={source} className="widget-shell" data-status={counts.needsYou > 0 ? "loading" : "fresh"}>
          <div className="widget-shell-body">
            <div className="widget-shell-topline">
              <span className="widget-shell-title">{source}</span>
            </div>
            <div className="widget-shell-value">{counts.total}</div>
            <div className="widget-shell-hint">
              {counts.needsYou > 0 ? `${counts.needsYou} need you` : "none need you"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
