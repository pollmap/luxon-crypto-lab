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
      <div className="mb-4 flex items-baseline justify-between border-b border-[var(--rule)] pb-2 md:mb-5">
        <h2 className="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--ink-1)]">
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
                  className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-baseline gap-3 py-3 hover:bg-[var(--bg-soft)] md:grid-cols-[60px_minmax(0,1fr)_auto] md:gap-5 md:py-3.5"
                >
                  <span className="font-mono text-[11px] tabular-nums text-[var(--primary)] md:text-[12px]">
                    {sub.label}
                  </span>
                  <span className="truncate font-sans text-[14.5px] font-medium tracking-tight text-[var(--ink-1)] transition-colors group-hover:text-[var(--link)] md:text-[15.5px]">
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
            <li key={sub.slug} className="grid grid-cols-[40px_minmax(0,1fr)_auto] items-baseline gap-3 py-3 md:grid-cols-[60px_minmax(0,1fr)_auto] md:gap-5 md:py-3.5">
              <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)] md:text-[12px]">
                {sub.label}
              </span>
              <span className="truncate font-sans text-[14.5px] tracking-tight text-[var(--ink-3)] md:text-[15.5px]">
                {sub.title}
              </span>
              <span className="rounded-full bg-[var(--bg-elev)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--ink-4)]">
                예정
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
