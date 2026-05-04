import type { ReactNode } from "react";

export interface DetailStat {
  label: string;
  value: string;
  accent?: boolean;
}

export interface DetailPageProps {
  kicker?: string;
  badges?: ReactNode;
  title: string;
  tagline?: string;
  description?: string;
  stats?: DetailStat[];
  meta?: ReactNode;
  children?: ReactNode;
}

export function DetailPage({
  kicker,
  badges,
  title,
  tagline,
  description,
  stats,
  meta,
  children,
}: DetailPageProps) {
  return (
    <div className="mx-auto max-w-[860px] px-5 pt-8 pb-20 md:px-6 md:pt-12 md:pb-24">
      <header className="mb-8 border-b border-[var(--rule)] pb-6 md:mb-10 md:pb-8">
        {kicker && (
          <div className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--primary)]">
            {kicker}
          </div>
        )}
        {badges && <div className="mb-3 flex flex-wrap items-center gap-2">{badges}</div>}
        <h1 className="font-sans text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[var(--ink-1)] md:text-[40px]">
          {title}
        </h1>
        {tagline && (
          <p className="mt-2 font-sans text-[15.5px] leading-[1.55] text-[var(--primary)] md:text-[17.5px]">
            {tagline}
          </p>
        )}
        {description && (
          <p className="mt-2 max-w-2xl font-sans text-[14.5px] leading-[1.6] text-[var(--ink-2)] md:text-[16px]">
            {description}
          </p>
        )}
        {stats && stats.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[var(--rule)] pt-5 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i}>
                <dt className="font-sans text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-4)]">
                  {s.label}
                </dt>
                <dd
                  className="mt-1 font-sans text-[16px] font-semibold tabular-nums tracking-tight md:text-[18px]"
                  style={{ color: s.accent ? "var(--primary)" : "var(--ink-1)" }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
        {meta}
      </header>

      {children}
    </div>
  );
}
