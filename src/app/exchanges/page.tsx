import { EXCHANGES, EXCHANGE_TYPE_COLOR } from "@/lib/exchanges";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Exchanges" };

export default function ExchangesPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Exchanges"
        title="Exchanges"
        description="글로벌 CEX · DEX · 실패 사례 — Binance · Coinbase · Upbit · Uniswap · Hyperliquid · FTX/Mt.Gox."
      />
      <IndexList
        items={EXCHANGES.map((ex) => ({
          href: `/exchanges/${ex.id}/`,
          title: ex.name,
          signature: ex.signature,
          badges: [
            { label: ex.type, color: EXCHANGE_TYPE_COLOR[ex.type] },
            { label: ex.region },
          ],
          meta:
            ex.spotVolumeBillion !== undefined
              ? `$${ex.spotVolumeBillion}B/d`
              : undefined,
        }))}
      />
    </div>
  );
}
