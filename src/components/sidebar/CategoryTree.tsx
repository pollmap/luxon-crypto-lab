import Link from "next/link";
import { COINS, type CoinCategory, CATEGORY_COLOR } from "@/lib/coins";

const CATEGORY_LABELS: Record<CoinCategory, string> = {
  "L1-PoW": "L1 · PoW",
  "L1-PoS": "L1 · PoS",
  "CEX-L1": "CEX 토큰 · L1",
  Payment: "결제 · 정산",
  Stable: "스테이블코인",
  Meme: "밈 · 셸링",
  RWA: "RWA · 토큰화",
  Series: "종합 회고",
};

const CATEGORY_ORDER: CoinCategory[] = [
  "L1-PoW",
  "L1-PoS",
  "CEX-L1",
  "Payment",
  "Stable",
  "RWA",
  "Meme",
  "Series",
];

export function CategoryTree({ activeSlug }: { activeSlug?: string } = {}) {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    coins: COINS.filter((c) => c.category === cat),
  })).filter((g) => g.coins.length > 0);

  return (
    <aside className="glass rounded p-5">
      <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        ▎categories
      </div>
      <ol className="space-y-3 text-sm">
        {grouped.map(({ category, coins }) => {
          const total = coins.reduce((acc, c) => acc + (c.subIssues?.length ?? 0), 0);
          return (
            <li key={category}>
              <Link
                href={`/categories/${category.toLowerCase()}/`}
                className="mb-1.5 flex items-center justify-between font-mono text-xs uppercase tracking-wider hover:text-[var(--neon-cyan)]"
                style={{ color: CATEGORY_COLOR[category] }}
              >
                <span>{CATEGORY_LABELS[category]}</span>
                <span className="text-[var(--text-3)]">({total})</span>
              </Link>
              <ul className="ml-2 space-y-1.5 border-l border-[var(--border-soft)] pl-3">
                {coins.map((coin) => (
                  <li key={coin.symbol}>
                    <Link
                      href={`/coins/${coin.symbol.toLowerCase()}/`}
                      className="flex items-baseline gap-2 text-xs text-[var(--text-2)] hover:text-[var(--neon-cyan)]"
                    >
                      <span className="font-mono font-bold" style={{ color: CATEGORY_COLOR[category] }}>
                        {coin.symbol}
                      </span>
                      <span className="truncate">{coin.signature}</span>
                    </Link>
                    {coin.subIssues && coin.subIssues.length > 0 && (
                      <ul className="ml-3 mt-1 space-y-0.5">
                        {coin.subIssues.map((sub) => {
                          const isActive = activeSlug === sub.slug;
                          return (
                            <li key={sub.slug} className="flex items-baseline gap-1.5 font-mono text-xs">
                              <Link
                                href={`/posts/${sub.slug}/`}
                                className={`block truncate ${
                                  isActive
                                    ? "text-[var(--neon-cyan)] glow-cyan"
                                    : "text-[var(--text-3)] hover:text-[var(--text-2)]"
                                }`}
                              >
                                <span className="text-[var(--text-3)]">{sub.label}</span>{" "}
                                {sub.title.length > 20 ? sub.title.slice(0, 20) + "…" : sub.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
