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
    <div className="mx-auto max-w-[820px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <header className="mb-10 md:mb-14">
        {kicker && (
          <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-3)]">
            {kicker}
          </div>
        )}
        {badges && <div className="mb-4 flex flex-wrap items-center gap-2">{badges}</div>}
        <h1 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.024em] text-[var(--ink-1)] md:text-[56px]">
          {title}
        </h1>
        {tagline && (
          <p className="mt-3 font-serif text-[17px] leading-[1.55] text-[var(--signal)] md:mt-4 md:text-[20px]">
            {tagline}
          </p>
        )}
        {description && (
          <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.65] text-[var(--ink-2)] md:text-[17px]">
            {description}
          </p>
        )}
        {stats && stats.length > 0 && (
          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--rule)] pt-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i}>
                <dt className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                  {s.label}
                </dt>
                <dd
                  className="mt-1 font-display text-[18px] font-semibold tracking-tight md:text-[20px]"
                  style={{ color: s.accent ? "var(--signal)" : "var(--ink-1)" }}
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
