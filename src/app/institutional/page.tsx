import { INSTITUTIONS, INSTITUTION_TYPE_COLOR, INSTITUTION_REGION_LABEL } from "@/lib/institutional";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Institutional Adoption" };

export default function InstitutionalPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Institutional"
        title="Institutional Adoption"
        description="기관 투자자의 디지털 자산 진출 — BlackRock · 한국 4대 은행 · 일본 메가뱅크 · 중동 SWF · 미국 수탁사 · 글로벌 연기금."
      />
      <IndexList
        items={INSTITUTIONS.map((i) => ({
          href: `/institutional/${i.id}/`,
          title: i.name,
          signature: i.signature,
          badges: [
            { label: i.type, color: INSTITUTION_TYPE_COLOR[i.type] },
            { label: INSTITUTION_REGION_LABEL[i.region] },
          ],
          meta: i.aumOrAssetsB !== undefined ? `AUM $${i.aumOrAssetsB}B` : undefined,
        }))}
      />
    </div>
  );
}
