import { ONCHAIN_TOPICS, ONCHAIN_CATEGORY_COLOR } from "@/lib/onchain";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "On-Chain Data & Trading Signals" };

export default function OnchainPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="On-Chain"
        title="On-Chain · Signals"
        description="알트시즌 인덱스 · 펀딩비 · 청산 · 거래소 reserve · 김치 프리미엄 · NUPL/SOPR · 옵션 IV · Fear & Greed."
      />
      <IndexList
        items={ONCHAIN_TOPICS.map((t) => ({
          href: `/onchain/${t.id}/`,
          title: t.name,
          signature: t.signature,
          badges: [{ label: t.category, color: ONCHAIN_CATEGORY_COLOR[t.category] }],
          meta: t.dataSource,
        }))}
      />
    </div>
  );
}
