import { COINS } from "@/lib/coins";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Roadmap" };

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Roadmap"
        title="Series Calendar"
        description="자산별 deep-dive 계획. 매크로 이벤트 동기화 발행."
      />
      <IndexList
        items={COINS.map((coin) => ({
          href: `/coins/${coin.symbol.toLowerCase()}/`,
          title: `${coin.symbol} · ${coin.name}`,
          signature: coin.signature,
          description: coin.macroEvent,
          badges: [
            { label: `#${String(coin.issue).padStart(2, "0")}` },
            { label: coin.category },
          ],
          meta: coin.scheduledMonth,
        }))}
      />
    </div>
  );
}
