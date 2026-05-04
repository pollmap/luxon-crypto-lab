import { notFound } from "next/navigation";
import { CRISES, getCrisisById, CRISIS_TYPE_COLOR } from "@/lib/crises";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return CRISES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = getCrisisById(id);
  if (!c) return {};
  return { title: c.name, description: c.signature };
}

export default async function CrisisDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const c = getCrisisById(id);
  if (!c) notFound();

  const stats: Array<{ label: string; value: string; accent?: boolean }> = [
    { label: "발생 연도", value: String(c.year) },
  ];
  if (c.lossUSDB > 0) {
    stats.push({ label: "손실 규모", value: `$${c.lossUSDB}B`, accent: true });
  }

  return (
    <DetailPage
      kicker="Crisis"
      badges={
        <>
          <Badge color={CRISIS_TYPE_COLOR[c.type]}>{c.type}</Badge>
          <Badge>{c.year}</Badge>
        </>
      }
      title={c.name}
      tagline={c.signature}
      description={c.description}
      stats={stats}
    >
      <SubIssueList subIssues={c.subIssues} title="Posts" />
    </DetailPage>
  );
}
