import type { MetadataRoute } from "next";
import { COINS } from "@/lib/coins";
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
  ];

  const coinRoutes: MetadataRoute.Sitemap = COINS.map((c) => ({
    url: `${BASE}/coins/${c.symbol.toLowerCase()}/`,
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

  return [...staticRoutes, ...coinRoutes, ...postRoutes];
}
