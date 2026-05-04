import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const SECTIONS: Array<{ label: string; href: string; categories: string[] }> = [
  { label: "BTC", href: "/coins/btc/", categories: ["L1-PoW"] },
  { label: "ETH", href: "/coins/eth/", categories: ["L1-PoS"] },
  { label: "L2", href: "/topics/l2-networks/", categories: ["L2"] },
  { label: "DeFi", href: "/topics/defi-protocols/", categories: ["DeFi"] },
  { label: "RWA", href: "/posts/", categories: ["RWA"] },
  { label: "NFT", href: "/posts/", categories: ["NFT"] },
  { label: "CBDC", href: "/posts/", categories: ["CBDC"] },
  { label: "MEV", href: "/posts/", categories: ["MEV"] },
  { label: "Stables", href: "/posts/", categories: ["Stable"] },
  { label: "Treasury", href: "/treasuries/", categories: ["Treasury-Pure", "Treasury-Hybrid"] },
  { label: "Institutional", href: "/institutional/", categories: ["Institutional"] },
  { label: "Onchain", href: "/onchain/", categories: ["On-Chain"] },
  { label: "Crisis", href: "/crises/", categories: ["Crisis"] },
  { label: "Regulation", href: "/regulation/", categories: ["Regulation"] },
  { label: "Research", href: "/research/", categories: ["Research"] },
  { label: "Beginner", href: "/topics/beginner-guide/", categories: ["Beginner"] },
  { label: "Korea Fintech", href: "/topics/korea-fintech/", categories: ["Korea-Fintech"] },
];

export function WikiNav({ activeSlug }: { activeSlug?: string }) {
  const posts = getAllPosts();
  const grouped = SECTIONS.map((s) => {
    const matched = posts.filter((p) => s.categories.some((c) => p.category?.includes(c)));
    return { ...s, posts: matched };
  }).filter((g) => g.posts.length > 0);

  return (
    <nav className="text-sm" aria-label="Site contents">
      <div className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-3)]">
        Contents
      </div>
      <ol className="space-y-5">
        {grouped.map((g) => (
          <li key={g.label}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <Link
                href={g.href}
                className="font-display text-[12.5px] font-semibold tracking-tight text-[var(--ink-2)] hover:text-[var(--signal)]"
              >
                {g.label}
              </Link>
              <span className="font-mono text-[10px] tabular-nums text-[var(--ink-4)]">
                {g.posts.length}
              </span>
            </div>
            <ul className="space-y-px">
              {g.posts.slice(0, 6).map((p) => {
                const isActive = activeSlug === p.slug;
                return (
                  <li key={p.slug}>
                    <Link
                      href={`/posts/${p.slug}/`}
                      className={`block truncate py-1 font-sans text-[12px] leading-snug transition-colors ${
                        isActive
                          ? "text-[var(--signal)]"
                          : "text-[var(--ink-3)] hover:text-[var(--ink-1)]"
                      }`}
                      title={p.title}
                    >
                      {p.title}
                    </Link>
                  </li>
                );
              })}
              {g.posts.length > 6 && (
                <li className="py-0.5 font-mono text-[10.5px] text-[var(--ink-4)]">
                  +{g.posts.length - 6} more
                </li>
              )}
            </ul>
          </li>
        ))}
      </ol>
    </nav>
  );
}
