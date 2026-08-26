"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Notion's <embed> block is a plain iframe: it loads the route once and never
 * re-requests it on its own, so a server-rendered "live" widget actually shows
 * whatever was true at the moment someone last opened or reloaded the Notion
 * page. This component closes that gap from inside the iframe itself — it
 * calls router.refresh() on an interval, which re-runs the server component
 * (a fresh Notion query, a fresh timestamp) without a full page navigation.
 *
 * Render it once per embed page, alongside the server-rendered content:
 *   return (<><AutoRefresh /><div>...</div></>)
 *
 * intervalMs defaults to 45s — frequent enough that "live" is true within a
 * browsing session, infrequent enough not to hammer the Notion API or run up
 * Vercel function invocations across ~47 embedded routes.
 */
export default function AutoRefresh({ intervalMs = 45_000 }: { intervalMs?: number }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== "undefined" && document.visibilityState === "hidden") {
      // still schedule below; visibility is rechecked on each tick
    }
    const id = setInterval(() => {
      if (document.visibilityState !== "hidden") {
        router.refresh();
      }
    }, intervalMs);
    return () => clearInterval(id);
  }, [router, intervalMs]);

  return null;
}
