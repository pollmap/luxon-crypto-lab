import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";

export interface SubIssue {
  slug: string;
  label: string;
  title: string;
  publishedAt?: string;
}

interface Props {
  subIssues: readonly SubIssue[];
  title?: string;
  count?: number;
}

export function SubIssueList({ subIssues, title = "Series", count }: Props) {
  if (!subIssues || subIssues.length === 0) return null;
  return (
    <section>
      <div className="mb-5 flex items-baseline justify-between border-b border-[var(--rule)] pb-2 md:mb-6">
        <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-2)]">
          {title}
        </h2>
        <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)]">
          {count ?? subIssues.length} {(count ?? subIssues.length) === 1 ? "post" : "posts"}
        </span>
      </div>
      <ol className="divide-y divide-[var(--rule)]">
        {subIssues.map((sub) => {
          const exists = getPostBySlug(sub.slug);
          if (exists) {
            return (
              <li key={sub.slug}>
                <Link
                  href={`/posts/${sub.slug}/`}
                  className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-baseline gap-3 py-3.5 active:bg-[var(--bg-soft)] md:grid-cols-[60px_minmax(0,1fr)_auto] md:gap-5 md:py-4"
                >
                  <span className="font-mono text-[11px] tabular-nums text-[var(--signal)] md:text-[12px]">
                    {sub.label}
                  </span>
                  <span className="truncate font-display text-[15px] font-medium tracking-tight text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] md:text-[16.5px]">
                    {sub.title}
                  </span>
                  {sub.publishedAt && (
                    <time className="font-mono text-[10.5px] tabular-nums text-[var(--ink-4)] md:text-[11.5px]">
                      {sub.publishedAt}
                    </time>
                  )}
                </Link>
              </li>
            );
          }
          return (
            <li key={sub.slug} className="grid grid-cols-[40px_minmax(0,1fr)_auto] items-baseline gap-3 py-3.5 md:grid-cols-[60px_minmax(0,1fr)_auto] md:gap-5 md:py-4">
              <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)] md:text-[12px]">
                {sub.label}
              </span>
              <span className="truncate font-display text-[15px] tracking-tight text-[var(--ink-3)] md:text-[16.5px]">
                {sub.title}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-4)]">
                예정
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
