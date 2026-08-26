import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, title, status, formulaNumber, formulaBool, dateStart } from "../_lib/notion";

export const dynamic = "force-dynamic";

const ACTIONS_DB_ID = process.env.NOTION_ACTIONS_DB_ID || "e5428701-7d59-4ffb-a191-c41b024819f1";

export default async function AgendaPrimary() {
  const data = await queryDatabase(ACTIONS_DB_ID);
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;

  if (setupRequired || errored || !data || !("results" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">agenda · ranked</span>
          <div className="status-callout-message">
            {setupRequired ? "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project." : `Notion returned an error: ${(data as any)?.error}`}
          </div>
        </div>
      </div>
    );
  }

  const rows = data.results
    .filter((p: any) => status(p, "State") !== "Done")
    .map((p: any) => ({
      url: p.url,
      action: title(p, "Action"),
      state: status(p, "State"),
      score: formulaNumber(p, "Score"),
      available: formulaBool(p, "Available"),
      due: dateStart(p, "Due"),
    }))
    .sort((a: any, b: any) => (b.available === a.available ? (b.score ?? 0) - (a.score ?? 0) : b.available ? 1 : -1));

  if (rows.length === 0) {
    return (
      <div className="status-callout status-callout-success">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">agenda · ranked</span>
          <div className="status-callout-message">Nothing open. Queue is clear.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AutoRefresh />
      {rows.map((r: any, i: number) => (
        <a key={i} href={r.url} target="_blank" rel="noreferrer" className="task-row" style={{ textDecoration: "none", color: "inherit", display: "flex" }}>
          <div className="task-main">
            <div className="task-title">{r.action}</div>
            <div className="task-meta">
              <span className={r.available ? "pill med" : "pill lo"}>{r.available ? "Available" : "Blocked"}</span>
              {r.score != null && <span>score {Math.round(r.score)}</span>}
              {r.due && <span>due {r.due}</span>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
