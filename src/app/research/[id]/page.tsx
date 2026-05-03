import Link from "next/link";
import { notFound } from "next/navigation";
import { RESEARCH_TOPICS, getResearchTopicById, RESEARCH_FIELD_COLOR } from "@/lib/research";
import { getPostBySlug } from "@/lib/posts";

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
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3">
          <span
            className="rounded border px-2 py-0.5 font-mono text-xs uppercase"
            style={{
              borderColor: RESEARCH_FIELD_COLOR[t.field],
              color: RESEARCH_FIELD_COLOR[t.field],
            }}
          >
            {t.field}
          </span>
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-[var(--text-1)] md:text-4xl">
          {t.name}
        </h1>
        <p className="mb-6 text-lg text-[var(--neon-cyan)] glow-cyan">{t.signature}</p>
        <p className="text-[var(--text-2)]">{t.description}</p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">
          ▎key papers
        </h2>
        <ol className="space-y-3">
          {t.keyPapers.map((p, i) => (
            <li
              key={i}
              className="rounded border border-[var(--border-soft)] p-4 font-mono text-sm"
            >
              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-[var(--text-3)]">[{i + 1}]</span>
                <span className="text-[var(--text-1)]">{p.authors}</span>
                <span className="text-[var(--text-3)]">({p.year})</span>
              </div>
              <div className="mb-1 ml-7 text-[var(--neon-cyan)]">{p.title}</div>
              <div className="ml-7 flex items-center gap-2 text-xs">
                <span className="text-[var(--text-3)]">{p.venue}</span>
                {p.doi && <span className="text-[var(--text-3)]">· DOI: {p.doi}</span>}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-[var(--neon-magenta)] hover:underline"
                >
                  link →
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">
          ▎posts
        </h2>
        <ol className="space-y-2">
          {t.subIssues.map((sub) => {
            const exists = getPostBySlug(sub.slug);
            return (
              <li key={sub.slug}>
                {exists ? (
                  <Link
                    href={`/posts/${sub.slug}/`}
                    className="group flex items-baseline gap-3 rounded border border-[var(--border-soft)] p-3 font-mono text-sm transition-colors hover:border-[var(--neon-cyan)]"
                  >
                    <span className="text-[var(--neon-cyan)]">{sub.label}</span>
                    <span className="text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                      {sub.title}
                    </span>
                    <span className="ml-auto text-xs text-[var(--text-3)]">{sub.publishedAt}</span>
                  </Link>
                ) : (
                  <div className="flex items-baseline gap-3 rounded border border-dashed border-[var(--border-soft)] p-3 font-mono text-sm text-[var(--text-3)]">
                    <span>{sub.label}</span>
                    <span>{sub.title}</span>
                    <span className="ml-auto">예정 · {sub.publishedAt}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
