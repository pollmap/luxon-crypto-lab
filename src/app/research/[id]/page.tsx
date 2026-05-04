import { notFound } from "next/navigation";
import { RESEARCH_TOPICS, getResearchTopicById, RESEARCH_FIELD_COLOR } from "@/lib/research";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return RESEARCH_TOPICS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getResearchTopicById(id);
  if (!t) return {};
  return { title: t.name, description: t.signature };
}

export default async function ResearchTopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getResearchTopicById(id);
  if (!t) notFound();

  return (
    <DetailPage
      kicker="Research"
      badges={<Badge color={RESEARCH_FIELD_COLOR[t.field]}>{t.field}</Badge>}
      title={t.name}
      tagline={t.signature}
      description={t.description}
    >
      <section className="mb-12">
        <div className="mb-5 flex items-baseline justify-between border-b border-[var(--rule)] pb-2 md:mb-6">
          <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-2)]">
            Key Papers
          </h2>
          <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)]">
            {t.keyPapers.length}
          </span>
        </div>
        <ol className="space-y-4">
          {t.keyPapers.map((p, i) => (
            <li
              key={i}
              className="rounded-2xl border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-4 md:px-6 md:py-5"
            >
              <div className="mb-1.5 flex items-baseline gap-2 font-sans text-[12.5px] text-[var(--ink-3)]">
                <span className="font-mono tabular-nums text-[var(--signal)]">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="font-semibold text-[var(--ink-1)]">{p.authors}</span>
                <span>({p.year})</span>
              </div>
              <div className="mb-2 ml-8 font-display text-[15.5px] font-semibold leading-snug tracking-tight text-[var(--ink-1)] md:text-[16px]">
                {p.title}
              </div>
              <div className="ml-8 flex flex-wrap items-center gap-2 font-sans text-[11.5px] text-[var(--ink-3)]">
                <span>{p.venue}</span>
                {p.doi && <span className="text-[var(--ink-4)]">DOI: {p.doi}</span>}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-[var(--signal)] underline decoration-dotted decoration-1 underline-offset-2"
                >
                  link →
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <SubIssueList subIssues={t.subIssues} title="Posts" />
    </DetailPage>
  );
}
