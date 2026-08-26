const NOTION_VERSION = "2022-06-28";

export type QueryResult = { results: any[] } | { error: string } | null;

/** Shared fetch: every embed queries one Notion database by id, no caching,
 * so each request (including AutoRefresh's periodic router.refresh()) gets
 * genuinely current rows rather than a stale build-time snapshot. */
export async function queryDatabase(dbId: string): Promise<QueryResult> {
  const token = process.env.NOTION_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
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

export const readAtNow = () => new Date().toISOString().slice(11, 16) + " UTC";

export const daysAgo = (n: number) => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
};

export const isThisWeek = (isoDate: string) => {
  if (!isoDate) return false;
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  return now - then <= 7 * 24 * 60 * 60 * 1000 && then <= now;
};

// Property readers — Notion's raw property JSON shapes, kept in one place so
// every embed page reads them the same way.
export const title = (p: any, name: string) => p?.properties?.[name]?.title?.[0]?.plain_text || "";
export const rich = (p: any, name: string) => p?.properties?.[name]?.rich_text?.[0]?.plain_text || "";
export const select = (p: any, name: string): string | null => p?.properties?.[name]?.select?.name || null;
export const status = (p: any, name: string): string | null => p?.properties?.[name]?.status?.name || null;
export const checkbox = (p: any, name: string): boolean => !!p?.properties?.[name]?.checkbox;
export const number = (p: any, name: string): number | null =>
  typeof p?.properties?.[name]?.number === "number" ? p.properties[name].number : null;
export const formulaNumber = (p: any, name: string): number | null => {
  const f = p?.properties?.[name]?.formula;
  return f && typeof f.number === "number" ? f.number : null;
};
export const formulaBool = (p: any, name: string): boolean => !!p?.properties?.[name]?.formula?.boolean;
export const formulaString = (p: any, name: string): string | null => p?.properties?.[name]?.formula?.string ?? null;
export const dateStart = (p: any, name: string): string | null => p?.properties?.[name]?.date?.start || null;
export const relationCount = (p: any, name: string): number => (p?.properties?.[name]?.relation || []).length;
export const multiSelect = (p: any, name: string): string[] =>
  (p?.properties?.[name]?.multi_select || []).map((o: any) => o.name);
