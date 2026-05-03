import type { MetadataRoute } from "next";
import { COINS } from "@/lib/coins";
import { EXCHANGES } from "@/lib/exchanges";
import { TOPICS } from "@/lib/topics";
import { REGULATIONS } from "@/lib/regulations";
import { TREASURIES } from "@/lib/treasuries";
import { RESEARCH_TOPICS } from "@/lib/research";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://pollmap.github.io/luxon-crypto-lab";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/posts/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/roadmap/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/exchanges/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/topics/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/regulation/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/treasuries/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/research/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
  ];

  const coinRoutes: MetadataRoute.Sitemap = COINS.map((c) => ({
    url: `${BASE}/coins/${c.symbol.toLowerCase()}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const exchangeRoutes: MetadataRoute.Sitemap = EXCHANGES.map((e) => ({
    url: `${BASE}/exchanges/${e.id}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const topicRoutes: MetadataRoute.Sitemap = TOPICS.map((t) => ({
    url: `${BASE}/topics/${t.id}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const regulationRoutes: MetadataRoute.Sitemap = REGULATIONS.map((r) => ({
    url: `${BASE}/regulation/${r.region}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const treasuryRoutes: MetadataRoute.Sitemap = TREASURIES.map((t) => ({
    url: `${BASE}/treasuries/${t.id}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const researchRoutes: MetadataRoute.Sitemap = RESEARCH_TOPICS.map((t) => ({
    url: `${BASE}/research/${t.id}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${BASE}/posts/${p.slug}/`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    ...staticRoutes,
    ...coinRoutes,
    ...exchangeRoutes,
    ...topicRoutes,
    ...regulationRoutes,
    ...treasuryRoutes,
    ...researchRoutes,
    ...postRoutes,
  ];
}
