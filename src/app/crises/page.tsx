import { CRISES, CRISIS_TYPE_COLOR } from "@/lib/crises";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Crypto Crises & Hacks" };

export default function CrisesPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Crises"
        title="Crises · Hacks"
        description="가상자산 사태 · 해킹 · 사기 사례 — Luna · Mt.Gox · FTX · 2022 Contagion · DAO · Bridges · 한국 케이스."
      />
      <IndexList
        items={CRISES.map((c) => ({
          href: `/crises/${c.id}/`,
          title: c.name,
          signature: c.signature,
          badges: [
            { label: c.type, color: CRISIS_TYPE_COLOR[c.type] },
            { label: String(c.year) },
          ],
          meta: c.lossUSDB > 0 ? `손실 $${c.lossUSDB}B` : undefined,
        }))}
      />
    </div>
  );
}
