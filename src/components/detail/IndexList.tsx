import Link from "next/link";
import { Badge } from "./Badge";

export interface IndexItem {
  href: string;
  title: string;
  signature?: string;
  description?: string;
  badges?: Array<{ label: string; color?: string }>;
  meta?: string;
}

interface Props {
  items: IndexItem[];
}

export function IndexList({ items }: Props) {
  return (
    <ol className="divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            className="group grid grid-cols-1 items-baseline gap-x-5 gap-y-2 py-5 active:bg-[var(--bg-soft)] md:grid-cols-[180px_minmax(0,1fr)_max-content] md:py-6"
          >
            <div className="flex flex-wrap items-center gap-1.5 md:flex-col md:items-start md:gap-1.5">
              {it.badges?.map((b, i) => (
                <Badge key={i} color={b.color}>{b.label}</Badge>
              ))}
            </div>
            <div className="min-w-0">
              <h2 className="font-display text-[20px] font-semibold leading-[1.2] tracking-[-0.014em] text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] md:text-[22px]">
                {it.title}
              </h2>
              {it.signature && (
                <p className="mt-1 font-serif text-[14.5px] leading-[1.5] text-[var(--signal)]">
                  {it.signature}
                </p>
              )}
              {it.description && (
                <p className="mt-1.5 font-serif text-[13.5px] leading-[1.55] text-[var(--ink-3)]">
                  {it.description}
                </p>
              )}
            </div>
            {it.meta && (
              <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)] md:text-[12px]">
                {it.meta}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function IndexHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10 md:mb-14">
      {kicker && (
        <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-3)]">
          {kicker}
        </div>
      )}
      <h1 className="font-display text-[40px] font-bold leading-[1.04] tracking-[-0.024em] text-[var(--ink-1)] md:text-[64px]">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-2xl font-serif text-[15.5px] leading-[1.6] text-[var(--ink-2)] md:mt-4 md:text-[18px]">
          {description}
        </p>
      )}
    </header>
  );
}
