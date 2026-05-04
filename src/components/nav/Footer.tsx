import Link from "next/link";
import { getBlogStats } from "@/lib/posts";

const COL_BROWSE = [
  { href: "/posts/", label: "Posts" },
  { href: "/topics/", label: "Topics" },
  { href: "/coins/btc/", label: "Coins" },
  { href: "/tags/", label: "Tags" },
  { href: "/search/", label: "Search" },
];

const COL_DOMAIN = [
  { href: "/onchain/", label: "On-Chain" },
  { href: "/regulation/", label: "Regulation" },
  { href: "/treasuries/", label: "Treasuries" },
  { href: "/institutional/", label: "Institutional" },
  { href: "/crises/", label: "Crises" },
  { href: "/research/", label: "Research" },
];

const COL_ABOUT = [
  { href: "/about/", label: "About" },
  { href: "/roadmap/", label: "Roadmap" },
  { href: "/feed.xml", label: "RSS Feed" },
  { href: "https://github.com/pollmap/luxon-crypto-lab", label: "Source ↗", external: true },
];

export function Footer() {
  const stats = getBlogStats();

  return (
    <footer className="mt-20 border-t border-[var(--rule)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1180px] px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1.5 font-display text-[18px] font-semibold tracking-[-0.012em] text-[var(--ink-1)]">
              <span aria-hidden className="text-[var(--signal)]">⌬</span>
              <span>luxon</span>
              <span className="text-[var(--ink-3)]">·</span>
              <span className="text-[var(--ink-2)]">crypto</span>
            </Link>
            <p className="mt-3 max-w-md font-serif text-[14px] leading-[1.65] text-[var(--ink-2)]">
              암호자산을 매크로 사이클 × 온체인 × 산업 모멘텀의 학술 framework 으로 깊이 분석.
            </p>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1.5 font-mono text-[11px] tabular-nums text-[var(--ink-3)]">
              <span><span className="text-[var(--ink-4)]">posts</span> {stats.publishedPosts}</span>
              <span><span className="text-[var(--ink-4)]">coins</span> {stats.uniqueCoins}</span>
              <span><span className="text-[var(--ink-4)]">cats</span> {stats.uniqueCategories}</span>
            </div>
          </div>

          <FooterColumn title="Browse" items={COL_BROWSE} />
          <FooterColumn title="Domain" items={COL_DOMAIN} />
          <FooterColumn title="About" items={COL_ABOUT} />
        </div>

        <div className="mt-10 flex flex-col items-baseline justify-between gap-3 border-t border-[var(--rule)] pt-6 font-sans text-[12px] text-[var(--ink-3)] md:flex-row md:gap-2">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span>© 2026 이찬희</span>
            <span aria-hidden className="text-[var(--ink-5)]">·</span>
            <span>MIT</span>
            <span aria-hidden className="text-[var(--ink-5)]">·</span>
            <span>Built with Next.js</span>
          </div>
          <div className="text-[var(--ink-4)]">
            Discretionary trend-following macro · 학술 분석 기록
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ href: string; label: string; external?: boolean }>;
}) {
  return (
    <nav>
      <h2 className="mb-3 font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-3)]">
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.href}>
            {it.external ? (
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] text-[var(--ink-2)] hover:text-[var(--signal)]"
              >
                {it.label}
              </a>
            ) : (
              <Link
                href={it.href}
                className="font-sans text-[13px] text-[var(--ink-2)] hover:text-[var(--signal)]"
              >
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
