import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, title, select, rich, formulaNumber } from "../_lib/notion";

export const dynamic = "force-dynamic";

const THREADS_DB_ID = process.env.NOTION_THREADS_DB_ID || "19691362-ecf4-4901-9586-3c909bc8da6c";

export default async function MailPrimary() {
  const data = await queryDatabase(THREADS_DB_ID);
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;

  if (setupRequired || errored || !data || !("results" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">mail · awaiting you</span>
          <div className="status-callout-message">
            {setupRequired ? "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project." : `Notion returned an error: ${(data as any)?.error}`}
          </div>
        </div>
      </div>
    );
  }

  const rows = data.results
    .filter((p: any) => select(p, "State") === "Awaiting you")
    .map((p: any) => ({
      url: p.url,
      thread: title(p, "Thread"),
      correspondent: rich(p, "Correspondent"),
      latency: formulaNumber(p, "Latency (hrs)"),
    }))
    .sort((a: any, b: any) => (b.latency ?? 0) - (a.latency ?? 0));

  if (rows.length === 0) {
    return (
      <div className="status-callout status-callout-success">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">mail · awaiting you</span>
          <div className="status-callout-message">Nothing awaiting you. Inbox is clear.</div>
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
            <div className="task-title">{r.thread}</div>
            <div className="task-meta">
              {r.correspondent && <span>{r.correspondent}</span>}
              {r.latency != null && <span className="pill hi">{Math.round(r.latency)}h</span>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
