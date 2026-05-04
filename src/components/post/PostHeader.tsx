import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface PostHeaderProps {
  meta: PostMeta;
}

export function PostHeader({ meta }: PostHeaderProps) {
  return (
    <header className="mb-10 md:mb-12">
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--ink-3)]">
        <span className="text-[var(--signal)]">{meta.category}</span>
        {meta.coin && meta.coin !== "NONE" && (
          <>
            <span aria-hidden className="text-[var(--ink-5)]">·</span>
            <span>{meta.coin}</span>
          </>
        )}
        <span aria-hidden className="text-[var(--ink-5)]">·</span>
        <time dateTime={meta.publishedAt} className="font-mono tabular-nums">
          {meta.publishedAt}
        </time>
        {meta.estimatedReadTime && (
          <>
            <span aria-hidden className="text-[var(--ink-5)]">·</span>
            <span>{meta.estimatedReadTime} min</span>
          </>
        )}
        {meta.draft && (
          <span className="rounded-full border border-[var(--dust)] px-2 py-0.5 text-[var(--dust)]">
            DRAFT
          </span>
        )}
      </div>
      <h1 className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.022em] text-[var(--ink-1)] md:text-[44px]">
        {meta.title}
      </h1>
      {meta.subtitle && (
        <p className="mt-3 font-serif text-[17px] leading-[1.55] text-[var(--ink-2)] md:text-[20px]">
          {meta.subtitle}
        </p>
      )}
      {meta.author && (
        <div className="mt-5 font-sans text-[12.5px] text-[var(--ink-3)]">
          글 · <span className="text-[var(--ink-1)]">{meta.author}</span>
        </div>
      )}
      {meta.tags && meta.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--rule)] pt-5">
          {meta.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}/`}
              className="rounded-full bg-[var(--bg-elev)] px-2.5 py-1 font-mono text-[10.5px] text-[var(--ink-3)] transition-colors hover:bg-[var(--bg-card)] hover:text-[var(--signal)]"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
