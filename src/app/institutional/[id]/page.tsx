import { notFound } from "next/navigation";
import {
  INSTITUTIONS,
  getInstitutionById,
  INSTITUTION_TYPE_COLOR,
  INSTITUTION_REGION_LABEL,
} from "@/lib/institutional";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSTITUTIONS.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const i = getInstitutionById(id);
  if (!i) return {};
  return { title: i.name, description: i.signature };
}

export default async function InstitutionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const inst = getInstitutionById(id);
  if (!inst) notFound();

  const stats: Array<{ label: string; value: string; accent?: boolean }> = [];
  if (inst.aumOrAssetsB !== undefined)
    stats.push({ label: "AUM/자산", value: `$${inst.aumOrAssetsB}B`, accent: true });
  if (inst.cryptoExposureB !== undefined)
    stats.push({ label: "디지털 자산 노출", value: `$${inst.cryptoExposureB}B`, accent: true });
  stats.push({ label: "지역", value: INSTITUTION_REGION_LABEL[inst.region] });
  stats.push({ label: "Type", value: inst.type });

  return (
    <DetailPage
      kicker="Institutional"
      badges={
        <>
          <Badge color={INSTITUTION_TYPE_COLOR[inst.type]}>{inst.type}</Badge>
          <Badge>{INSTITUTION_REGION_LABEL[inst.region]}</Badge>
        </>
      }
      title={inst.name}
      tagline={inst.signature}
      description={inst.description}
      stats={stats}
    >
      <SubIssueList subIssues={inst.subIssues} title="Posts" />
    </DetailPage>
  );
}
