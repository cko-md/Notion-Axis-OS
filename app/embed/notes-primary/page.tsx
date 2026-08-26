import AutoRefresh from "../_components/AutoRefresh";
import { queryDatabase, title, select, status, multiSelect } from "../_lib/notion";

export const dynamic = "force-dynamic";

const NOTES_DB_ID = process.env.NOTION_NOTES_DB_ID || "6000e31e-e8b3-4216-bcdb-a579162a765f";
const kindClass: Record<string, string> = { Memo: "pill med", Meeting: "pill hi", Idea: "pill lo", Reading: "pill lo" };

export default async function NotesPrimary() {
  const data = await queryDatabase(NOTES_DB_ID);
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;

  if (setupRequired || errored || !data || !("results" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">notes · recent</span>
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
      note: title(p, "Note"),
      kind: select(p, "Kind"),
      st: status(p, "Status"),
      themes: multiSelect(p, "Themes"),
      created: p.created_time,
    }))
    .sort((a: any, b: any) => new Date(b.created).getTime() - new Date(a.created).getTime())
    .slice(0, 8);

  if (rows.length === 0) {
    return (
      <div className="status-callout status-callout-empty">
        <AutoRefresh />
        <div className="status-callout-body">
          <span className="status-callout-label">notes · recent</span>
          <div className="status-callout-message">No notes yet.</div>
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
            <div className="task-title">{r.note}</div>
            <div className="task-meta">
              {r.kind && <span className={kindClass[r.kind] || "pill lo"}>{r.kind}</span>}
              {r.st && <span>{r.st}</span>}
              {r.themes.length > 0 && <span>{r.themes.join(", ")}</span>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
