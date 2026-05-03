import Link from "next/link";
import { getAllPosts, type PostMeta } from "@/lib/posts";

interface RelatedPostsProps {
  currentSlug: string;
  category?: string;
  tags?: string[];
  limit?: number;
}

function score(p: PostMeta, category?: string, tags?: string[]): number {
  let s = 0;
  if (category && p.category === category) s += 3;
  if (tags && p.tags) {
    const overlap = tags.filter((t) => p.tags?.includes(t)).length;
    s += overlap;
  }
  return s;
}

export function RelatedPosts({ currentSlug, category, tags, limit = 5 }: RelatedPostsProps) {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const ranked = all
    .map((p) => ({ post: p, s: score(p, category, tags) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit);

  if (ranked.length === 0) return null;

  return (
    <section className="mt-12 border-t border-[var(--border-soft)] pt-8">
      <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--neon-cyan)]">
        ▎관련 글
      </h2>
      <div className="space-y-3">
        {ranked.map(({ post }) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block border border-[var(--border-soft)] rounded p-3 hover:bg-[var(--bg-elev)]"
          >
            <div className="font-mono text-xs text-[var(--text-3)]">
              {post.publishedAt} · {post.category}
            </div>
            <div className="mt-1 text-[var(--text-1)]">{post.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
