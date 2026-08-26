const NOTION_CONFIGURED = !!process.env.NOTION_TOKEN;

export default function StatusPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px", fontFamily: "Archivo, ui-sans-serif, sans-serif" }}>
      <div style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ink-faint, #969087)" }}>
        System / Asset host
      </div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginTop: 8, marginBottom: 8 }}>AXIS — Notion asset host</h1>
      <p style={{ color: "var(--ink-faint, #969087)", lineHeight: 1.55, fontSize: 13 }}>
        This deployment serves the AXIS design-system tokens, the compiled component bundle, module icons, and
        the live embeds that render inside the AXIS Notion workspace. Nothing here is duplicated by hand — the
        embeds below read the Notion databases they name directly at request time.
      </p>

      <div
        style={{
          marginTop: 24,
          padding: "10px 14px",
          borderRadius: 3,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: ".04em",
          border: "1px solid rgba(255,255,255,.16)",
          background: NOTION_CONFIGURED ? "rgba(127,168,106,.08)" : "rgba(217,138,95,.1)",
          color: NOTION_CONFIGURED ? "var(--up, #7fa86a)" : "var(--clay-2, #d98a5f)",
        }}
      >
        {NOTION_CONFIGURED
          ? "NOTION_TOKEN is set — live embeds are reading real data."
          : "SETUP REQUIRED — NOTION_TOKEN is not set on this Vercel project. Embeds below render their setup-required state rather than a stale or invented one."}
      </div>

      <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--ink-faint, #969087)", marginTop: 36 }}>
        Live embeds
      </h2>
      <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
        <li><code>/embed/command-strip</code> — Command&apos;s four-tile metric strip.</li>
        <li><code>/embed/command-brief</code> — a one-paragraph live read of what needs you and what&apos;s blocked, computed from real rows, never invented.</li>
        <li><code>/embed/needs-you</code> — every row where the Needs you formula is true, sorted by priority.</li>
        <li><code>/embed/by-source</code> — row counts grouped by the Source database formula.</li>
        <li><code>/embed/database-note</code> — the static explainer of how Command&apos;s database works, styled to match.</li>
        <li>All five read the Command database live and are embedded on the Command page as Notion embed blocks.</li>
      </ul>

      <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--ink-faint, #969087)", marginTop: 28 }}>
        Static assets
      </h2>
      <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
        <li><code>/ds/styles.css</code>, <code>/ds/tokens/*.css</code>, <code>/ds/patterns/*.css</code> — the AXIS token and pattern CSS, unmodified.</li>
        <li><code>/ds/_ds_bundle.js</code> — the compiled AXIS component bundle, pulled in whole.</li>
        <li><code>/icons/*.png</code> — module and section-group glyphs, addressable for Notion page icons.</li>
      </ul>

      <h2 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".14em", color: "var(--ink-faint, #969087)", marginTop: 28 }}>
        Setup
      </h2>
      <ol style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
        <li>Create a Notion internal integration and copy its secret.</li>
        <li>Share the <code>Command</code> database (in <code>_Databases</code>) with that integration.</li>
        <li>Set <code>NOTION_TOKEN</code> (and optionally <code>NOTION_COMMAND_DB_ID</code>) as environment variables on this Vercel project, then redeploy.</li>
      </ol>
    </main>
  );
}
