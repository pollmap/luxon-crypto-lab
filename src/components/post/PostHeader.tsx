import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface PostHeaderProps {
  meta: PostMeta;
}

export function PostHeader({ meta }: PostHeaderProps) {
  return (
    <header className="mb-8 border-b border-[var(--rule)] pb-6 md:mb-10 md:pb-7">
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-sans text-[12px] text-[var(--ink-3)]">
        <span className="font-semibold text-[var(--primary)]">{meta.category}</span>
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
            <span>{meta.estimatedReadTime} min read</span>
          </>
        )}
        {meta.author && (
          <>
            <span aria-hidden className="text-[var(--ink-5)]">·</span>
            <span>by <span className="text-[var(--ink-1)] font-medium">{meta.author}</span></span>
          </>
        )}
        {meta.draft && (
          <span className="rounded-full border border-[var(--dust)] bg-[var(--bg-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--dust)]">
            DRAFT
          </span>
        )}
      </div>
      <h1 className="font-sans text-[28px] font-bold leading-[1.18] tracking-[-0.018em] text-[var(--ink-1)] md:text-[40px]">
        {meta.title}
      </h1>
      {meta.subtitle && (
        <p className="mt-3 font-sans text-[16px] leading-[1.6] text-[var(--ink-2)] md:text-[18px]">
          {meta.subtitle}
        </p>
      )}
      {meta.tags && meta.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {meta.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}/`}
              className="rounded-full border border-[var(--rule)] bg-[var(--bg-soft)] px-2.5 py-0.5 font-mono text-[10.5px] text-[var(--ink-3)] hover:border-[var(--link)] hover:text-[var(--link)]"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
