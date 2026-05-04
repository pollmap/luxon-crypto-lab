import { notFound } from "next/navigation";
import { EXCHANGES, getExchangeById, EXCHANGE_TYPE_COLOR } from "@/lib/exchanges";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return EXCHANGES.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ex = getExchangeById(id);
  if (!ex) return {};
  return { title: ex.name, description: ex.signature };
}

export default async function ExchangePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ex = getExchangeById(id);
  if (!ex) notFound();

  const stats: Array<{ label: string; value: string; accent?: boolean }> = [];
  if (ex.spotVolumeBillion !== undefined)
    stats.push({ label: "Daily Spot", value: `$${ex.spotVolumeBillion}B`, accent: true });
  if (ex.founded) stats.push({ label: "Founded", value: String(ex.founded) });
  stats.push({ label: "Episodes", value: `${ex.subIssues.length}편` });
  stats.push({ label: "Region", value: ex.region });

  return (
    <DetailPage
      kicker="Exchange"
      badges={
        <>
          <Badge color={EXCHANGE_TYPE_COLOR[ex.type]}>{ex.type}</Badge>
          <Badge>{ex.region}</Badge>
        </>
      }
      title={ex.name}
      tagline={ex.signature}
      description={ex.description}
      stats={stats}
    >
      <SubIssueList subIssues={ex.subIssues} title="Posts" />
    </DetailPage>
  );
}
