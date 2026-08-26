import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, title, select, checkbox, dateStart } from "../_lib/notion";

export const dynamic = "force-dynamic";

const EVENTS_DB_ID = process.env.NOTION_EVENTS_DB_ID || "3ab4e40d-b637-4de7-b5bb-a8a1471d0bc3";
const kindClass: Record<string, string> = { "Deep work": "pill med", Meeting: "pill hi", Training: "pill lo", Personal: "pill lo" };

export default async function SchedulePrimary() {
  const data = await queryDatabase(EVENTS_DB_ID);
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;

  if (setupRequired || errored || !data || !("results" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">schedule · upcoming</span>
          <div className="status-callout-message">
            {setupRequired ? "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project." : `Notion returned an error: ${(data as any)?.error}`}
          </div>
        </div>
      </div>
    );
  }

  const rows = data.results
    .map((p: any) => ({
      url: p.url,
      block: title(p, "Block"),
      kind: select(p, "Kind"),
      start: dateStart(p, "Start"),
      protected: checkbox(p, "Protected"),
    }))
    .filter((r: any) => !!r.start)
    .sort((a: any, b: any) => new Date(a.start).getTime() - new Date(b.start).getTime())
    .slice(0, 8);

  if (rows.length === 0) {
    return (
      <div className="status-callout status-callout-empty">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">schedule · upcoming</span>
          <div className="status-callout-message">No dated blocks yet.</div>
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
            <div className="task-title">{r.block}</div>
            <div className="task-meta">
              {r.kind && <span className={kindClass[r.kind] || "pill lo"}>{r.kind}</span>}
              <span>{new Date(r.start).toLocaleString("en-US", { weekday: "short", hour: "numeric", minute: "2-digit", timeZone: "UTC" })} UTC</span>
              {r.protected && <span>protected</span>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
