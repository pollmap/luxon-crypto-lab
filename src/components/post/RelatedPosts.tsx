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
    <section className="mt-12 border-t border-[var(--rule)] pt-8">
      <h2 className="mb-4 font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--ink-3)]">
        관련 글
      </h2>
      <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
        {ranked.map(({ post }) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}/`}
              className="group grid grid-cols-1 items-baseline gap-1 py-3 hover:bg-[var(--bg-soft)] md:grid-cols-[110px_minmax(0,1fr)] md:gap-4"
            >
              <div className="font-mono text-[11px] tabular-nums text-[var(--ink-4)]">
                {post.publishedAt}
              </div>
              <div>
                <div className="font-sans text-[14.5px] font-medium leading-snug text-[var(--ink-1)] group-hover:text-[var(--link)] md:text-[15px]">
                  {post.title}
                </div>
                <div className="mt-0.5 font-sans text-[11.5px] text-[var(--ink-4)]">
                  {post.category}
                  {post.coin && post.coin !== "NONE" && ` · ${post.coin}`}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
