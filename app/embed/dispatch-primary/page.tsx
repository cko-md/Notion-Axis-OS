import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, title, select, checkbox, formulaNumber } from "../_lib/notion";

export const dynamic = "force-dynamic";

const SIGNALS_DB_ID = process.env.NOTION_SIGNALS_DB_ID || "0d52f5d0-3342-41b3-8201-827aab536e89";

const kindClass: Record<string, string> = { Decision: "pill hi", Reply: "pill med", Read: "pill lo", Noise: "pill lo" };

export default async function DispatchPrimary() {
  const data = await queryDatabase(SIGNALS_DB_ID);
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;

  if (setupRequired || errored || !data || !("results" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">dispatch · untriaged</span>
          <div className="status-callout-message">
            {setupRequired ? "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project." : `Notion returned an error: ${(data as any)?.error}`}
          </div>
        </div>
      </div>
    );
  }

  const rows = data.results
    .filter((p: any) => !checkbox(p, "Triaged"))
    .map((p: any) => ({
      url: p.url,
      signal: title(p, "Signal"),
      kind: select(p, "Kind"),
      source: select(p, "Source"),
      age: formulaNumber(p, "Age (hrs)"),
      destination: select(p, "Destination"),
    }))
    .sort((a: any, b: any) => (b.age ?? 0) - (a.age ?? 0));

  if (rows.length === 0) {
    return (
      <div className="status-callout status-callout-success">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">dispatch · untriaged</span>
          <div className="status-callout-message">Nothing untriaged. Queue is clear.</div>
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
            <div className="task-title">{r.signal}</div>
            <div className="task-meta">
              {r.kind && <span className={kindClass[r.kind] || "pill lo"}>{r.kind}</span>}
              {r.source && <span>{r.source}</span>}
              {r.age != null && <span>{Math.round(r.age)}h old</span>}
              {r.destination && <span>→ {r.destination}</span>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
