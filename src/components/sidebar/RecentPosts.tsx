import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { HashBadge } from "@/components/neon/HashBadge";
import { type CoinCategory } from "@/lib/coins";

interface RecentPostsProps {
  limit?: number;
  excludeSlug?: string;
}

export function RecentPosts({ limit = 5, excludeSlug }: RecentPostsProps) {
  const posts = getAllPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);

  if (posts.length === 0) {
    return (
      <aside className="glass rounded p-5">
        <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎recent posts
        </div>
        <p className="font-mono text-xs text-[var(--text-3)]">
          첫 글 발행 예정: 2026-06-01
        </p>
      </aside>
    );
  }

  return (
    <aside className="glass rounded p-5">
      <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        ▎recent posts
      </div>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/posts/${p.slug}/`}
              className="group block"
            >
              <div className="mb-1 flex items-center gap-1.5 font-mono text-xs text-[var(--text-3)]">
                <HashBadge symbol={p.coin} category={p.category as CoinCategory} size="sm" />
                <time>{p.publishedAt}</time>
              </div>
              <div className="text-sm leading-snug text-[var(--text-2)] group-hover:text-[var(--neon-cyan)]">
                {p.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
