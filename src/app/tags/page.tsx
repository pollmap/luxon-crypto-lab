import Link from "next/link";
import { getAllTags } from "@/lib/tags";

export const metadata = {
  title: "Tags · luxon-crypto-lab",
  description: "모든 태그 색인 — 145+ 본문의 학술 분류",
};

export default function TagsIndexPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">▎tags</div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">태그 색인</h1>
        <p className="text-[var(--text-2)]">총 {tags.length}개 태그 · 본문별 학술 분류</p>
      </header>

      <section className="flex flex-wrap gap-3">
        {tags.map((t) => (
          <Link
            key={t.tag}
            href={`/tags/${encodeURIComponent(t.tag)}`}
            className="ring-neon rounded px-3 py-1.5 font-mono text-sm hover:bg-[var(--bg-elev)]"
          >
            <span className="text-[var(--neon-cyan)]">#{t.tag}</span>
            <span className="ml-2 text-[var(--text-3)]">{t.count}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
