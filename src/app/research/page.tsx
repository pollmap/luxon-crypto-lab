import Link from "next/link";
import { RESEARCH_TOPICS, RESEARCH_FIELD_COLOR } from "@/lib/research";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎academic_papers_index.bib
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="cyan">Research</GlowText>{" "}
          <span className="text-[var(--text-1)]">·</span>{" "}
          <GlowText color="magenta">Papers</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          arXiv · NY Fed · NIST · Vitalik · Lyn Alden — 가상자산 학술 논문 deep read
        </p>
      </header>

      <ol className="space-y-3">
        {RESEARCH_TOPICS.map((t) => (
          <li key={t.id}>
            <Link
              href={`/research/${t.id}/`}
              className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-cyan)]"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="rounded border px-2 py-0.5 font-mono text-xs uppercase"
                  style={{
                    borderColor: RESEARCH_FIELD_COLOR[t.field],
                    color: RESEARCH_FIELD_COLOR[t.field],
                  }}
                >
                  {t.field}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                    {t.name}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--neon-cyan)] glow-cyan">{t.signature}</p>
                </div>
                <span className="font-mono text-xs text-[var(--text-3)]">
                  {t.keyPapers.length} papers
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
