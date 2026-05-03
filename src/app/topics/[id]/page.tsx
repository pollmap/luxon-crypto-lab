import Link from "next/link";
import { notFound } from "next/navigation";
import { TOPICS, getTopicById } from "@/lib/topics";
import { getPostBySlug } from "@/lib/posts";

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
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎topic
        </div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">{t.name}</h1>
        <p className="mb-6 text-lg text-[var(--neon-magenta)] glow-magenta">{t.signature}</p>
        <p className="text-[var(--text-2)]">{t.description}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 font-mono text-sm md:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Episodes</dt>
            <dd className="text-[var(--text-1)]">{t.episodes}편</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">시작</dt>
            <dd className="text-[var(--text-1)]">{t.subIssues[0]?.publishedAt}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">완결</dt>
            <dd className="text-[var(--text-1)]">{t.subIssues[t.subIssues.length - 1]?.publishedAt}</dd>
          </div>
        </dl>
      </header>

      <section>
        <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">▎series · {t.subIssues.length}편</h2>
        <ol className="space-y-2">
          {t.subIssues.map((sub) => {
            const exists = getPostBySlug(sub.slug);
            return (
              <li key={sub.slug}>
                {exists ? (
                  <Link
                    href={`/posts/${sub.slug}/`}
                    className="group flex items-baseline gap-3 rounded border border-[var(--border-soft)] p-3 font-mono text-sm transition-colors hover:border-[var(--neon-magenta)]"
                  >
                    <span className="text-[var(--neon-magenta)]">{sub.label}</span>
                    <span className="text-[var(--text-1)] group-hover:text-[var(--neon-magenta)]">{sub.title}</span>
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
