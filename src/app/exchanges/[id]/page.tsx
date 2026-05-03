import Link from "next/link";
import { notFound } from "next/navigation";
import { EXCHANGES, getExchangeById, EXCHANGE_TYPE_COLOR } from "@/lib/exchanges";
import { getPostBySlug } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return EXCHANGES.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ex = getExchangeById(id);
  if (!ex) return {};
  return { title: `${ex.name}`, description: ex.signature };
}

export default async function ExchangePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ex = getExchangeById(id);
  if (!ex) notFound();

  const color = EXCHANGE_TYPE_COLOR[ex.type];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3 flex items-center gap-3">
          <span
            className="rounded border px-2 py-0.5 font-mono text-xs uppercase tracking-wider"
            style={{ borderColor: color, color, backgroundColor: "rgba(20,20,29,0.6)" }}
          >
            {ex.type}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
            {ex.region}
          </span>
        </div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">{ex.name}</h1>
        <p className="mb-6 text-lg text-[var(--neon-cyan)] glow-cyan">{ex.signature}</p>
        <p className="text-[var(--text-2)]">{ex.description}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 font-mono text-sm md:grid-cols-3">
          {ex.spotVolumeBillion !== undefined && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Daily Spot</dt>
              <dd className="text-[var(--text-1)]">${ex.spotVolumeBillion}B</dd>
            </div>
          )}
          {ex.founded && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Founded</dt>
              <dd className="text-[var(--text-1)]">{ex.founded}</dd>
            </div>
          )}
          <div>
            <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Episodes</dt>
            <dd className="text-[var(--text-1)]">{ex.subIssues.length}편</dd>
          </div>
        </dl>
      </header>

      <section>
        <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">▎posts</h2>
        <ol className="space-y-2">
          {ex.subIssues.map((sub) => {
            const exists = getPostBySlug(sub.slug);
            return (
              <li key={sub.slug}>
                {exists ? (
                  <Link
                    href={`/posts/${sub.slug}/`}
                    className="group flex items-baseline gap-3 rounded border border-[var(--border-soft)] p-3 font-mono text-sm transition-colors hover:border-[var(--neon-cyan)]"
                  >
                    <span className="text-[var(--neon-cyan)]">{sub.label}</span>
                    <span className="text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">{sub.title}</span>
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
