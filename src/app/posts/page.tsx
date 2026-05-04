import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Posts" };

export default function PostsPage() {
  const posts = getAllPosts();
  const byYear = posts.reduce<Record<string, typeof posts>>((acc, p) => {
    const year = (p.publishedAt ?? "").slice(0, 4) || "—";
    if (!acc[year]) acc[year] = [];
    acc[year].push(p);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-16 md:px-6 md:pt-14 md:pb-24">
      <header className="mb-10 md:mb-14">
        <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-3)]">
          Archive
        </div>
        <h1 className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.024em] text-[var(--ink-1)] md:text-[56px]">
          All Posts
        </h1>
        <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.6] text-[var(--ink-2)] md:text-[17px]">
          전체 {posts.length}편 — 발행 순. {years.length}개 연도.
        </p>
      </header>

      <div className="space-y-12 md:space-y-16">
        {years.map((year) => (
          <section key={year}>
            <div className="mb-5 flex items-baseline gap-3 md:mb-6">
              <h2 className="font-display text-[28px] font-bold tracking-[-0.022em] text-[var(--ink-1)] md:text-[36px]">
                {year}
              </h2>
              <span className="font-mono text-[12px] tabular-nums text-[var(--ink-4)]">
                {byYear[year].length} posts
              </span>
            </div>
            <ol className="divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
              {byYear[year].map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/posts/${p.slug}/`}
                    className="group grid grid-cols-1 items-baseline gap-x-6 gap-y-1 py-4 md:grid-cols-[80px_minmax(0,1fr)_120px] md:py-5"
                  >
                    <time className="order-2 font-mono text-[11px] tabular-nums text-[var(--ink-4)] md:order-1 md:text-[12px]">
                      {p.publishedAt?.slice(5)}
                    </time>
                    <div className="order-1 min-w-0 md:order-2">
                      <h3 className="font-display text-[17px] font-semibold leading-[1.3] tracking-[-0.012em] text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] md:text-[19px]">
                        {p.title}
                      </h3>
                      {p.subtitle && (
                        <p className="mt-1 line-clamp-1 font-serif text-[13.5px] leading-[1.5] text-[var(--ink-3)]">
                          {p.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="order-3 flex flex-wrap items-baseline gap-2 font-sans text-[10.5px] uppercase tracking-[0.1em] text-[var(--ink-4)] md:justify-end">
                      <span>{p.category}</span>
                      {p.coin && p.coin !== "NONE" && (
                        <span className="text-[var(--signal)]">{p.coin}</span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
