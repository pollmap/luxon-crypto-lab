import { getAllPosts, type PostMeta } from "./posts";

export interface TagSummary {
  tag: string;
  count: number;
  posts: PostMeta[];
}

export function getAllTags(): TagSummary[] {
  const all = getAllPosts();
  const map = new Map<string, PostMeta[]>();
  for (const p of all) {
    if (!p.tags) continue;
    for (const tag of p.tags) {
      if (!map.has(tag)) map.set(tag, []);
      map.get(tag)!.push(p);
    }
  }
  return Array.from(map.entries())
    .map(([tag, posts]) => ({ tag, count: posts.length, posts }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): PostMeta[] {
  const all = getAllPosts();
  return all.filter((p) => p.tags?.includes(tag));
}

export function getTagBySlug(slug: string): TagSummary | undefined {
  return getAllTags().find((t) => t.tag.toLowerCase() === slug.toLowerCase());
}
