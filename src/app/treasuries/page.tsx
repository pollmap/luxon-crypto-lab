import { TREASURIES, TREASURY_TYPE_COLOR } from "@/lib/treasuries";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Treasury Companies" };

export default function TreasuriesPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Treasuries"
        title="Treasury Companies"
        description="상장사 가상자산 매집 회사 — Strategy · BitMine · Metaplanet · MARA · Riot."
      />
      <IndexList
        items={TREASURIES.map((t) => ({
          href: `/treasuries/${t.id}/`,
          title: `${t.name} (${t.ticker})`,
          signature: t.signature,
          badges: [
            { label: t.type, color: TREASURY_TYPE_COLOR[t.type] },
            { label: t.listing },
          ],
          meta:
            t.holdingsBTC !== undefined
              ? `${t.holdingsBTC.toLocaleString()} BTC`
              : t.holdingsETH !== undefined
                ? `${t.holdingsETH.toLocaleString()} ETH`
                : undefined,
        }))}
      />
    </div>
  );
}
