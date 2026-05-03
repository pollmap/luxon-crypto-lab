import Link from "next/link";

export interface NavSectionItem {
  href: string;
  label: string;
  badge?: string;
  count?: number;
  color?: string;
}

interface NavSectionProps {
  title: string;
  titleColor?: string;
  href?: string;
  items: NavSectionItem[];
}

export function NavSection({ title, titleColor = "var(--neon-cyan)", href, items }: NavSectionProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        {href ? (
          <Link
            href={href}
            className="font-mono text-xs uppercase tracking-wider hover:text-[var(--neon-cyan)]"
            style={{ color: titleColor }}
          >
            ▎{title}
          </Link>
        ) : (
          <span className="font-mono text-xs uppercase tracking-wider" style={{ color: titleColor }}>
            ▎{title}
          </span>
        )}
        <span className="font-mono text-xs text-[var(--text-3)]">{items.length}</span>
      </div>
      <ul className="space-y-1 border-l border-[var(--border-soft)] pl-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-baseline gap-2 text-xs text-[var(--text-2)] hover:text-[var(--neon-cyan)]"
            >
              {item.badge && (
                <span className="font-mono font-bold" style={{ color: item.color ?? titleColor }}>
                  {item.badge}
                </span>
              )}
              <span className="truncate">{item.label}</span>
              {item.count !== undefined && (
                <span className="ml-auto text-[var(--text-3)]">{item.count}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
