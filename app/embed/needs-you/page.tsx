export const dynamic = "force-dynamic";

const NOTION_VERSION = "2022-06-28";
const COMMAND_DB_ID = process.env.NOTION_COMMAND_DB_ID || "2bd81e34fb8148c582ebabd082eac79f";

type Row = {
  url: string;
  title: string;
  priority: string | null;
  why: string | null;
  due: string | null;
  status: string | null;
};

type QueryResult = { rows: Row[] } | { error: string } | null;

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
    const rows: Row[] = (data.results || [])
      .filter((p: any) => !!p.properties?.["Needs you"]?.formula?.boolean)
      .map((p: any) => {
        const props = p.properties || {};
        return {
          url: p.url,
          title: props["Item"]?.title?.[0]?.plain_text || "Untitled",
          priority: props["Priority"]?.select?.name || null,
          why: props["Why it surfaced"]?.rich_text?.[0]?.plain_text || null,
          due: props["Due"]?.date?.start || null,
          status: props["Status"]?.status?.name || null,
        };
      });
    return { rows };
  } catch (e: any) {
    return { error: `Fetch failed — ${e?.message || String(e)}` };
  }
}

const priorityRank: Record<string, number> = { Critical: 0, Actionable: 1, Information: 2, Archived: 3 };
const priorityClass: Record<string, string> = { Critical: "pill hi", Actionable: "pill med", Information: "pill lo", Archived: "pill lo" };

export default async function NeedsYou() {
  const data = await queryCommand();
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;

  if (setupRequired || errored || !data || !("rows" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <div className="status-callout-body">
          <span className="status-callout-label">command · needs you</span>
          <div className="status-callout-message">
            {setupRequired
              ? "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project."
              : `Notion returned an error: ${(data as any)?.error}`}
          </div>
        </div>
      </div>
    );
  }

  const rows = [...data.rows].sort(
    (a, b) => (priorityRank[a.priority || ""] ?? 9) - (priorityRank[b.priority || ""] ?? 9)
  );

  if (rows.length === 0) {
    return (
      <div className="status-callout status-callout-success">
        <div className="status-callout-body">
          <span className="status-callout-label">command · needs you</span>
          <div className="status-callout-message">Nothing needs you right now.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {rows.map((r, i) => (
        <a
          key={i}
          href={r.url}
          target="_blank"
          rel="noreferrer"
          className="task-row"
          style={{ textDecoration: "none", color: "inherit", display: "flex" }}
        >
          <div className="task-main">
            <div className="task-title">{r.title}</div>
            <div className="task-meta">
              {r.priority && <span className={priorityClass[r.priority] || "pill lo"}>{r.priority}</span>}
              {r.why && <span>{r.why}</span>}
              {r.due && <span>due {r.due}</span>}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
