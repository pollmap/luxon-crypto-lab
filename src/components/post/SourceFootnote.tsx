import type { PostSource } from "@/lib/posts";

interface SourceFootnoteProps {
  sources: PostSource[];
}

export function SourceFootnote({ sources }: SourceFootnoteProps) {
  if (!sources?.length) return null;
  return (
    <section className="mt-12 border-t border-[var(--border-soft)] pt-8">
      <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--neon-cyan)] glow-cyan">
        영문 1차 소스 / Sources
      </h3>
      <ol className="space-y-2 text-sm text-[var(--text-2)]">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-mono text-[var(--text-3)]">[{i + 1}]</span>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--neon-cyan)] underline decoration-dotted underline-offset-4 hover:text-[var(--neon-magenta)]"
            >
              {s.name}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
