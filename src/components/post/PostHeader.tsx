import type { PostMeta } from "@/lib/posts";
import { HashBadge } from "@/components/neon/HashBadge";
import { type CoinCategory } from "@/lib/coins";

interface PostHeaderProps {
  meta: PostMeta;
}

export function PostHeader({ meta }: PostHeaderProps) {
  return (
    <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
      <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <HashBadge symbol={meta.coin} category={meta.category as CoinCategory} size="sm" />
        <span>#{String(meta.issue).padStart(2, "0")}</span>
        <span>·</span>
        <time dateTime={meta.publishedAt}>{meta.publishedAt}</time>
        {meta.estimatedReadTime && (
          <>
            <span>·</span>
            <span>{meta.estimatedReadTime} min read</span>
          </>
        )}
        {meta.draft && (
          <span
            className="rounded px-2 py-0.5"
            style={{
              border: "1px solid var(--neon-magenta)",
              color: "var(--neon-magenta)",
              boxShadow: "0 0 8px rgba(255,0,255,0.3)",
            }}
          >
            DRAFT · 발행 예정 {meta.publishedAt}
          </span>
        )}
      </div>
      <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-[var(--text-1)] md:text-5xl">
        {meta.title}
      </h1>
      {meta.subtitle && (
        <p className="text-lg text-[var(--text-2)] md:text-xl">{meta.subtitle}</p>
      )}
      {meta.tags && meta.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-[var(--text-3)]">
          {meta.tags.map((tag) => (
            <span key={tag} className="rounded border border-[var(--border-soft)] px-2 py-0.5">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
