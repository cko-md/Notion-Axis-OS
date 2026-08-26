export const metadata = {
  title: "AXIS — Notion asset host",
  description: "Asset host and live embeds for the AXIS Notion workspace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/ds/styles.css" />
      </head>
      <body style={{ margin: 0, background: "var(--bg, #0a0b0e)", color: "var(--ink, #ece8e0)" }}>
        {children}
      </body>
    </html>
  );
}
