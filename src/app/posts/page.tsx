import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { HashBadge } from "@/components/neon/HashBadge";
import { TerminalBox } from "@/components/neon/TerminalBox";
import { type CoinCategory } from "@/lib/coins";

export const metadata = { title: "Posts" };

export default function PostsPage() {
  const posts = getAllPosts();
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎archive
        </div>
        <h1 className="font-mono text-4xl font-bold tracking-tight text-[var(--neon-cyan)] glow-cyan">
          All Posts
        </h1>
        <p className="mt-3 text-[var(--text-2)]">
          Top 10 코인 12개월 시리즈 — 발행 순으로 정렬
        </p>
      </header>

      {posts.length === 0 ? (
        <TerminalBox title="status" blink>
          아직 발행된 글이 없습니다. 첫 글: 2026년 6월 1일 BTC.
        </TerminalBox>
      ) : (
        <ul className="divide-y divide-[var(--border-soft)]">
          {posts.map((p) => (
            <li key={p.slug} className="py-6">
              <Link href={`/posts/${p.slug}/`} className="group block">
                <div className="mb-2 flex items-center gap-3 font-mono text-xs text-[var(--text-3)]">
                  <HashBadge symbol={p.coin} category={p.category as CoinCategory} size="sm" />
                  <span>#{String(p.issue).padStart(2, "0")}</span>
                  <time>{p.publishedAt}</time>
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-1)] transition-colors group-hover:text-[var(--neon-cyan)]">
                  {p.title}
                </h2>
                {p.subtitle && (
                  <p className="mt-1 text-[var(--text-2)]">{p.subtitle}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
