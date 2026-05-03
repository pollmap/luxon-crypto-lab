import Link from "next/link";
import { TOPICS } from "@/lib/topics";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "Topics" };

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎topics_index.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="magenta">Topics</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          광범 토픽 시리즈 — 자산 단위가 아니라 개념·논쟁·메커니즘 단위 분석
        </p>
      </header>

      <ol className="space-y-4">
        {TOPICS.map((t) => (
          <li key={t.id}>
            <Link
              href={`/topics/${t.id}/`}
              className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-magenta)]"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--text-3)]">{t.episodes}편 시리즈</span>
                <span className="text-xs text-[var(--text-3)]">{t.subIssues[0]?.publishedAt} 시작</span>
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-magenta)]">
                {t.name}
              </h2>
              <p className="mt-1 text-sm text-[var(--neon-magenta)] glow-magenta">{t.signature}</p>
              <p className="mt-2 text-sm text-[var(--text-2)]">{t.description}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
