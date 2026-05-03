import Link from "next/link";
import { notFound } from "next/navigation";
import { COINS, type CoinCategory, CATEGORY_COLOR } from "@/lib/coins";
import { HashBadge } from "@/components/neon/HashBadge";
import { GlowText } from "@/components/neon/GlowText";

const CATEGORY_LIST: CoinCategory[] = [
  "L1-PoW",
  "L1-PoS",
  "CEX-L1",
  "Payment",
  "Stable",
  "Meme",
  "RWA",
  "Series",
];

const CATEGORY_DESCRIPTION: Record<CoinCategory, string> = {
  "L1-PoW": "작업증명 기반 layer-1 — Bitcoin 등. 채굴자 경제학과 해시 보안.",
  "L1-PoS": "지분증명 기반 layer-1 — Ethereum / Solana 등. 검증자 + 자본 효율.",
  "CEX-L1": "거래소 발행 + L1 — BNB 등. Burn yield 모델.",
  Payment: "결제·정산 자산 — XRP / TRON. ODL · 스테이블 백본.",
  Stable: "스테이블코인 — USDT · USDC · USDS · PYUSD 등. 디지털 달러 인프라.",
  Meme: "밈 / 셸링 포인트 — DOGE 등. 사회적 합의 기반 가치.",
  RWA: "실물자산 토큰화 — FIGR_HELOC 등. 온체인 vs 오프체인 검증 논쟁.",
  Series: "종합 회고 / 백테스트 — 시리즈 통합 분석.",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_LIST.map((c) => ({ category: c.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const matched = CATEGORY_LIST.find((c) => c.toLowerCase() === category);
  if (!matched) return {};
  return {
    title: `${matched} · Category`,
    description: CATEGORY_DESCRIPTION[matched],
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const matched = CATEGORY_LIST.find((c) => c.toLowerCase() === category);
  if (!matched) notFound();

  const coins = COINS.filter((c) => c.category === matched);
  const color = CATEGORY_COLOR[matched];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-10 border-b border-[var(--border-soft)] pb-6">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎category
        </div>
        <h1 className="mb-2 font-mono text-4xl font-bold tracking-tight" style={{ color }}>
          <GlowText color="cyan">{matched}</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">{CATEGORY_DESCRIPTION[matched]}</p>
      </header>

      {coins.length === 0 ? (
        <p className="font-mono text-sm text-[var(--text-3)]">이 카테고리에 등록된 자산이 없습니다.</p>
      ) : (
        <ol className="space-y-6">
          {coins.map((coin) => (
            <li key={coin.symbol}>
              <Link
                href={`/coins/${coin.symbol.toLowerCase()}/`}
                className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-cyan)]"
              >
                <div className="mb-2 flex items-center gap-3">
                  <HashBadge symbol={coin.symbol} category={coin.category} size="md" />
                  <span className="font-mono text-xs text-[var(--text-3)]">
                    #{String(coin.issue).padStart(2, "0")} · {coin.scheduledMonth}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                  {coin.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--neon-cyan)] glow-cyan">{coin.signature}</p>
                <p className="mt-2 text-sm text-[var(--text-2)]">{coin.description}</p>
                {coin.subIssues && coin.subIssues.length > 0 && (
                  <ul className="mt-3 space-y-1 border-t border-[var(--border-soft)] pt-3 font-mono text-xs">
                    {coin.subIssues.map((sub) => (
                      <li key={sub.slug} className="flex items-center gap-2 text-[var(--text-3)]">
                        <span className="text-[var(--text-2)]">{sub.label}</span>
                        <span>{sub.title}</span>
                        <span className="ml-auto">{sub.publishedAt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
