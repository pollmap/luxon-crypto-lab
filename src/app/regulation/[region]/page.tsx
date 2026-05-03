import Link from "next/link";
import { notFound } from "next/navigation";
import { REGULATIONS, getRegulationByRegion, REGULATION_STATUS_COLOR } from "@/lib/regulations";
import { getPostBySlug } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return REGULATIONS.map((r) => ({ region: r.region }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegulationByRegion(region);
  if (!r) return {};
  return { title: `${r.name} 규제`, description: r.signature };
}

export default async function RegulationRegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegulationByRegion(region);
  if (!r) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3 flex items-baseline gap-3">
          <span className="text-4xl">{r.flag}</span>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">regulation</span>
        </div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">{r.name}</h1>
        <p className="mb-6 text-lg text-[var(--neon-cyan)] glow-cyan">{r.signature}</p>
        <p className="text-[var(--text-2)]">{r.description}</p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">▎key laws</h2>
        <ul className="space-y-2">
          {r.keyLaws.map((law, i) => (
            <li
              key={i}
              className="flex items-center justify-between rounded border border-[var(--border-soft)] p-3 font-mono text-sm"
            >
              <span className="text-[var(--text-1)]">{law.name}</span>
              <div className="flex items-center gap-2">
                {law.effectiveDate && (
                  <span className="text-xs text-[var(--text-3)]">{law.effectiveDate}</span>
                )}
                <span
                  className="rounded border px-2 py-0.5 text-xs uppercase"
                  style={{
                    borderColor: REGULATION_STATUS_COLOR[law.status],
                    color: REGULATION_STATUS_COLOR[law.status],
                  }}
                >
                  {law.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">▎posts</h2>
        <ol className="space-y-2">
          {r.subIssues.map((sub) => {
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
