import Link from "next/link";
import { notFound } from "next/navigation";
import { COINS, type CoinCategory } from "@/lib/coins";
import { DetailPage } from "@/components/detail/DetailPage";
import { Badge } from "@/components/detail/Badge";

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
  Payment: "결제 · 정산 자산 — XRP / TRON. ODL · 스테이블 백본.",
  Stable: "스테이블코인 — USDT · USDC · USDS · PYUSD 등. 디지털 달러 인프라.",
  Meme: "밈 · 셸링 포인트 — DOGE 등. 사회적 합의 기반 가치.",
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
  return { title: `${matched} · Category`, description: CATEGORY_DESCRIPTION[matched] };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const matched = CATEGORY_LIST.find((c) => c.toLowerCase() === category);
  if (!matched) notFound();

  const coins = COINS.filter((c) => c.category === matched);

  return (
    <DetailPage
      kicker="Category"
      title={matched}
      tagline={CATEGORY_DESCRIPTION[matched]}
    >
      {coins.length === 0 ? (
        <p className="font-sans text-[14px] text-[var(--ink-3)]">
          이 카테고리에 등록된 자산이 없습니다.
        </p>
      ) : (
        <ol className="divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
          {coins.map((coin) => (
            <li key={coin.symbol}>
              <Link
                href={`/coins/${coin.symbol.toLowerCase()}/`}
                className="group grid grid-cols-[60px_minmax(0,1fr)_max-content] items-baseline gap-3 py-5 active:bg-[var(--bg-soft)] md:grid-cols-[80px_minmax(0,1fr)_max-content] md:gap-5 md:py-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[12px] tabular-nums text-[var(--signal)]">
                    {coin.symbol}
                  </span>
                  <span className="font-mono text-[10.5px] tabular-nums text-[var(--ink-4)]">
                    #{String(coin.issue).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-[18px] font-semibold leading-[1.25] tracking-[-0.014em] text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] md:text-[20px]">
                    {coin.name}
                  </h2>
                  <p className="mt-1 font-serif text-[14px] leading-[1.55] text-[var(--ink-2)]">
                    {coin.signature}
                  </p>
                </div>
                <Badge>{coin.scheduledMonth}</Badge>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </DetailPage>
  );
}
