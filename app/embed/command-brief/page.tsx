export const dynamic = "force-dynamic";

const NOTION_VERSION = "2022-06-28";
const COMMAND_DB_ID = process.env.NOTION_COMMAND_DB_ID || "2bd81e34fb8148c582ebabd082eac79f";

type Row = {
  title: string;
  priority: string | null;
  why: string | null;
  needsYou: boolean;
  blockedBy: string | null;
  surfacedAt: string;
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
    const rows: Row[] = (data.results || []).map((p: any) => {
      const props = p.properties || {};
      return {
        title: props["Item"]?.title?.[0]?.plain_text || "Untitled",
        priority: props["Priority"]?.select?.name || null,
        why: props["Why it surfaced"]?.rich_text?.[0]?.plain_text || null,
        needsYou: !!props["Needs you"]?.formula?.boolean,
        blockedBy: props["Blocked by"]?.rich_text?.[0]?.plain_text || null,
        surfacedAt: p.created_time || "",
      };
    });
    return { rows };
  } catch (e: any) {
    return { error: `Fetch failed — ${e?.message || String(e)}` };
  }
}

const priorityRank: Record<string, number> = { Critical: 0, Actionable: 1, Information: 2, Archived: 3 };

function buildBrief(rows: Row[]) {
  const needsYou = rows
    .filter((r) => r.needsYou)
    .sort((a, b) => (priorityRank[a.priority || ""] ?? 9) - (priorityRank[b.priority || ""] ?? 9));
  const blocked = rows.filter((r) => !!r.blockedBy);

  if (needsYou.length === 0 && blocked.length === 0) {
    return "Nothing on Command needs you right now, and nothing is blocked. Queue is clear.";
  }

  const trimWhy = (why: string | null) => (why || "").replace(/\.+\s*$/, "");
  const parts: string[] = [];
  if (needsYou.length === 1) {
    const why = trimWhy(needsYou[0].why);
    parts.push(`One item needs you: “${needsYou[0].title}”${why ? ` — ${why}` : ""}.`);
  } else if (needsYou.length > 1) {
    const why = trimWhy(needsYou[0].why);
    parts.push(`${needsYou.length} items need you. Top priority: “${needsYou[0].title}”${why ? ` — ${why}` : ""}.`);
  }
  if (blocked.length > 0) {
    parts.push(
      `${blocked.length} item${blocked.length === 1 ? " is" : "s are"} blocked: ${blocked
        .slice(0, 2)
        .map((r) => `“${r.title}”`)
        .join(", ")}${blocked.length > 2 ? `, +${blocked.length - 2} more` : ""}.`
    );
  }
  return parts.join(" ");
}

export default async function CommandBrief() {
  const data = await queryCommand();
  const setupRequired = data === null;
  const errored = data !== null && "error" in data;
  const readAt = new Date().toISOString().slice(11, 16) + " UTC";

  if (setupRequired || errored || !data || !("rows" in data)) {
    return (
      <div className="status-callout status-callout-setup_required">
        <div className="status-callout-body">
          <span className="status-callout-label">axis · live read</span>
          <div className="status-callout-message">
            {setupRequired
              ? "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project."
              : `Notion returned an error: ${(data as any)?.error}`}
          </div>
        </div>
      </div>
    );
  }

  const brief = buildBrief(data.rows);

  return (
    <div className="status-callout status-callout-info">
      <div className="status-callout-body">
        <span className="status-callout-label">axis · live read · {readAt}</span>
        <div className="status-callout-message" style={{ fontFamily: "var(--serif)", fontSize: 13.5, lineHeight: 1.62, color: "var(--ink-2)" }}>
          {brief}
        </div>
      </div>
    </div>
  );
}
