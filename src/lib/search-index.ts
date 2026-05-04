import { getAllPosts, type PostMeta } from "./posts";

export interface SearchEntry {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  coin?: string;
  tags?: string[];
  publishedAt: string;
}

export function buildSearchIndex(): SearchEntry[] {
  return getAllPosts().map((p: PostMeta) => ({
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    category: p.category,
    coin: p.coin,
    tags: p.tags,
    publishedAt: p.publishedAt,
  }));
}
