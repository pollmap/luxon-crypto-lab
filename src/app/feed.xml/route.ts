import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxon-crypto-lab.vercel.app";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const posts = getAllPosts().slice(0, 50);
  const items = posts
    .map((p) => {
      const link = `${BASE}/posts/${p.slug}/`;
      const pub = new Date(p.publishedAt).toUTCString();
      const desc = p.subtitle ?? `${p.category} · luxon-crypto-lab`;
      const cats = (p.tags ?? []).map((t) => `<category>${escapeXml(t)}</category>`).join("");
      return `<item>
  <title>${escapeXml(p.title)}</title>
  <link>${link}</link>
  <guid isPermaLink="true">${link}</guid>
  <pubDate>${pub}</pubDate>
  <description>${escapeXml(desc)}</description>
  <author>${escapeXml(p.author ?? "이찬희")}</author>
  ${cats}
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>luxon-crypto-lab</title>
  <link>${BASE}/</link>
  <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
  <description>Top 10 cryptocurrency · academic deep-dive · 한국어 학술 framework</description>
  <language>ko</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
