import { notFound } from "next/navigation";
import { TOPICS, getTopicById } from "@/lib/topics";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTopicById(id);
  if (!t) return {};
  return { title: t.name, description: t.signature };
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTopicById(id);
  if (!t) notFound();

  return (
    <DetailPage
      kicker="Topic"
      title={t.name}
      tagline={t.signature}
      description={t.description}
      stats={[
        { label: "Episodes", value: `${t.episodes}편`, accent: true },
        { label: "시작", value: t.subIssues[0]?.publishedAt ?? "—" },
        { label: "완결", value: t.subIssues[t.subIssues.length - 1]?.publishedAt ?? "—" },
      ]}
    >
      <SubIssueList subIssues={t.subIssues} title="Series" />
    </DetailPage>
  );
}
