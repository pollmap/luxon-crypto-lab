import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getTagBySlug } from "@/lib/tags";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded} · luxon-crypto-lab`,
    description: `태그 #${decoded} 의 모든 본문`,
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const summary = getTagBySlug(decoded);
  if (!summary) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">▎tag</div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">#{summary.tag}</h1>
        <p className="text-[var(--text-2)]">{summary.count} 본문</p>
      </header>

      <section className="space-y-4">
        {summary.posts.map((p) => (
          <Link
            key={p.slug}
            href={`/posts/${p.slug}`}
            className="ring-neon block rounded p-4 hover:bg-[var(--bg-elev)]"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
              {p.publishedAt} · {p.category}
            </div>
            <h2 className="mt-1 font-bold text-[var(--text-1)]">{p.title}</h2>
            {p.subtitle && <p className="mt-1 text-sm text-[var(--text-2)]">{p.subtitle}</p>}
          </Link>
        ))}
      </section>
    </div>
  );
}
