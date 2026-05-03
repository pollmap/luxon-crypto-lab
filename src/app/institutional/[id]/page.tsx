import Link from "next/link";
import { notFound } from "next/navigation";
import {
  INSTITUTIONS,
  getInstitutionById,
  INSTITUTION_TYPE_COLOR,
  INSTITUTION_REGION_LABEL,
} from "@/lib/institutional";
import { getPostBySlug } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSTITUTIONS.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const i = getInstitutionById(id);
  if (!i) return {};
  return { title: i.name, description: i.signature };
}

export default async function InstitutionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const inst = getInstitutionById(id);
  if (!inst) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3 flex items-baseline gap-3">
          <span
            className="rounded border px-2 py-0.5 font-mono text-xs uppercase"
            style={{
              borderColor: INSTITUTION_TYPE_COLOR[inst.type],
              color: INSTITUTION_TYPE_COLOR[inst.type],
            }}
          >
            {inst.type}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
            {INSTITUTION_REGION_LABEL[inst.region]}
          </span>
        </div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">
          {inst.name}
        </h1>
        <p className="mb-6 text-lg text-[var(--neon-cyan)] glow-cyan">{inst.signature}</p>
        <p className="text-[var(--text-2)]">{inst.description}</p>
      </header>

      <section className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {inst.aumOrAssetsB !== undefined && (
          <div className="rounded border border-[var(--border-soft)] p-3">
            <div className="font-mono text-xs uppercase text-[var(--text-3)]">AUM/자산</div>
            <div className="font-mono text-lg text-[var(--neon-cyan)]">${inst.aumOrAssetsB}B</div>
          </div>
        )}
        {inst.cryptoExposureB !== undefined && (
          <div className="rounded border border-[var(--border-soft)] p-3">
            <div className="font-mono text-xs uppercase text-[var(--text-3)]">디지털 자산 노출</div>
            <div className="font-mono text-lg text-[var(--neon-amber)]">
              ${inst.cryptoExposureB}B
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">
          ▎posts
        </h2>
        <ol className="space-y-2">
          {inst.subIssues.map((sub) => {
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
