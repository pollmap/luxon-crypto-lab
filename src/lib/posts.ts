import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

export interface PostSource {
  name: string;
  url: string;
}

export interface PostFrontmatter {
  slug: string;
  title: string;
  subtitle?: string;
  coin: string;
  issue: number;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags?: string[];
  heroImage?: string;
  sources?: PostSource[];
  estimatedReadTime?: number;
  draft?: boolean;
  author?: string;
}

export interface PostMeta extends PostFrontmatter {
  filename: string;
}

function readDir(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function toIsoDate(v: unknown): string | undefined {
  if (v == null) return undefined;
  if (typeof v === "string") return v;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}

function parseFile(filename: string): PostMeta {
  const fullPath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  const fm = data as Record<string, unknown>;
  if (!fm.slug || typeof fm.slug !== "string") {
    throw new Error(`Missing slug in ${filename}`);
  }
  return {
    ...(fm as unknown as PostFrontmatter),
    publishedAt: toIsoDate(fm.publishedAt) ?? "",
    updatedAt: toIsoDate(fm.updatedAt),
    filename,
  };
}

function getAllPostsRaw(): PostMeta[] {
  return readDir()
    .map(parseFile)
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getAllPosts(): PostMeta[] {
  return getAllPostsRaw().filter((p) => !p.draft);
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  return getAllPostsRaw().find((p) => p.slug === slug);
}

export function getPostsByCoin(symbol: string): PostMeta[] {
  return getAllPosts().filter((p) => p.coin?.toLowerCase() === symbol.toLowerCase());
}

export function getAllSlugs(): string[] {
  return getAllPostsRaw().map((p) => p.slug);
}

export interface BlogStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  uniqueCoins: number;
  uniqueCategories: number;
}

export function getBlogStats(): BlogStats {
  const all = getAllPostsRaw();
  const published = all.filter((p) => !p.draft);
  return {
    totalPosts: all.length,
    publishedPosts: published.length,
    draftPosts: all.length - published.length,
    uniqueCoins: new Set(all.map((p) => p.coin).filter(Boolean)).size,
    uniqueCategories: new Set(all.map((p) => p.category).filter(Boolean)).size,
  };
}
