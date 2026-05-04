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
    <div className="mx-auto max-w-[1080px] px-5 pt-8 pb-16 md:px-6 md:pt-12 md:pb-20">
      <header className="mb-8 border-b border-[var(--rule)] pb-6 md:mb-10 md:pb-8">
        <div className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--primary)]">
          Archive
        </div>
        <h1 className="font-sans text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--ink-1)] md:text-[44px]">
          전체 본문
        </h1>
        <p className="mt-2 font-sans text-[14.5px] leading-[1.6] text-[var(--ink-2)] md:text-[16px]">
          총 {posts.length}편 — 발행 순. {years.length}개 연도.
        </p>
      </header>

      <div className="space-y-10 md:space-y-14">
        {years.map((year) => (
          <section key={year}>
            <div className="mb-4 flex items-baseline gap-3 md:mb-5">
              <h2 className="font-sans text-[24px] font-bold tracking-[-0.018em] text-[var(--ink-1)] md:text-[28px]">
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
                    className="group grid grid-cols-1 items-baseline gap-x-5 gap-y-1 py-3.5 hover:bg-[var(--bg-soft)] md:grid-cols-[80px_minmax(0,1fr)_140px] md:gap-x-6 md:py-4"
                  >
                    <time className="order-2 font-mono text-[11.5px] tabular-nums text-[var(--ink-4)] md:order-1 md:text-[12px]">
                      {p.publishedAt?.slice(5)}
                    </time>
                    <div className="order-1 min-w-0 md:order-2">
                      <h3 className="font-sans text-[15.5px] font-semibold leading-[1.3] tracking-tight text-[var(--ink-1)] transition-colors group-hover:text-[var(--link)] md:text-[16.5px]">
                        {p.title}
                      </h3>
                      {p.subtitle && (
                        <p className="mt-0.5 line-clamp-1 font-sans text-[13px] leading-[1.5] text-[var(--ink-3)]">
                          {p.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="order-3 flex flex-wrap items-baseline gap-2 font-sans text-[10.5px] uppercase tracking-[0.06em] text-[var(--ink-4)] md:justify-end">
                      <span className="font-semibold text-[var(--primary)]">{p.category}</span>
                      {p.coin && p.coin !== "NONE" && (
                        <span>{p.coin}</span>
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
