import { RESEARCH_TOPICS, RESEARCH_FIELD_COLOR } from "@/lib/research";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Research"
        title="Research · Papers"
        description="arXiv · NY Fed · NIST · Vitalik · Lyn Alden — 가상자산 학술 논문 deep read."
      />
      <IndexList
        items={RESEARCH_TOPICS.map((t) => ({
          href: `/research/${t.id}/`,
          title: t.name,
          signature: t.signature,
          badges: [{ label: t.field, color: RESEARCH_FIELD_COLOR[t.field] }],
          meta: `${t.keyPapers.length} papers`,
        }))}
      />
    </div>
  );
}
