import { REGULATIONS } from "@/lib/regulations";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Regulation" };

export default function RegulationPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Regulation"
        title="Regulation · World Map"
        description="전 세계 13개 지역의 가상자산 규제·법안 최신 현황 (2026 Q2 기준)."
      />
      <IndexList
        items={REGULATIONS.map((r) => ({
          href: `/regulation/${r.region}/`,
          title: `${r.flag} ${r.name}`,
          signature: r.signature,
          badges: [{ label: r.region.toUpperCase() }],
          meta: `${r.subIssues.length}편 · ${r.keyLaws.length} laws`,
        }))}
      />
    </div>
  );
}
