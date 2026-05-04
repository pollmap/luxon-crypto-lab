import { notFound } from "next/navigation";
import { ONCHAIN_TOPICS, getOnchainTopicById, ONCHAIN_CATEGORY_COLOR } from "@/lib/onchain";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return ONCHAIN_TOPICS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getOnchainTopicById(id);
  if (!t) return {};
  return { title: t.name, description: t.signature };
}

export default async function OnchainDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getOnchainTopicById(id);
  if (!t) notFound();

  return (
    <DetailPage
      kicker="On-Chain"
      badges={<Badge color={ONCHAIN_CATEGORY_COLOR[t.category]}>{t.category}</Badge>}
      title={t.name}
      tagline={t.signature}
      description={t.description}
      meta={
        <p className="mt-5 rounded-2xl border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-3 font-sans text-[13px] text-[var(--ink-2)]">
          <span className="font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
            Data sources
          </span>
          <span className="ml-2 text-[var(--ink-1)]">{t.dataSource}</span>
        </p>
      }
    >
      <SubIssueList subIssues={t.subIssues} title="Posts" />
    </DetailPage>
  );
}
