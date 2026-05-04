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
    <ol className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            className="group grid grid-cols-1 items-baseline gap-x-5 gap-y-2 py-4 hover:bg-[var(--bg-soft)] md:grid-cols-[180px_minmax(0,1fr)_max-content] md:py-5"
          >
            <div className="flex flex-wrap items-center gap-1.5 md:flex-col md:items-start md:gap-1.5">
              {it.badges?.map((b, i) => (
                <Badge key={i} color={b.color}>{b.label}</Badge>
              ))}
            </div>
            <div className="min-w-0">
              <h2 className="font-sans text-[17px] font-semibold leading-[1.25] tracking-[-0.012em] text-[var(--ink-1)] transition-colors group-hover:text-[var(--link)] md:text-[19px]">
                {it.title}
              </h2>
              {it.signature && (
                <p className="mt-1 font-sans text-[13.5px] leading-[1.5] text-[var(--primary)]">
                  {it.signature}
                </p>
              )}
              {it.description && (
                <p className="mt-1 font-sans text-[13px] leading-[1.55] text-[var(--ink-3)]">
                  {it.description}
                </p>
              )}
            </div>
            {it.meta && (
              <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)]">
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
    <header className="mb-8 border-b border-[var(--rule)] pb-6 md:mb-10 md:pb-8">
      {kicker && (
        <div className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--primary)]">
          {kicker}
        </div>
      )}
      <h1 className="font-sans text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--ink-1)] md:text-[44px]">
        {title}
      </h1>
      {description && (
        <p className="mt-2 max-w-2xl font-sans text-[14.5px] leading-[1.6] text-[var(--ink-2)] md:text-[16px]">
          {description}
        </p>
      )}
    </header>
  );
}
