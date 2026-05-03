import Link from "next/link";
import { getCoinBySymbol } from "@/lib/coins";

interface SeriesNavProps {
  coinSymbol: string;
  currentSlug: string;
  position?: "top" | "bottom";
}

export function SeriesNav({ coinSymbol, currentSlug, position = "bottom" }: SeriesNavProps) {
  const coin = getCoinBySymbol(coinSymbol);
  if (!coin?.subIssues || coin.subIssues.length <= 1) return null;

  const subs = coin.subIssues;
  const idx = subs.findIndex((s) => s.slug === currentSlug);
  if (idx === -1) return null;

  const prev = idx > 0 ? subs[idx - 1] : null;
  const next = idx < subs.length - 1 ? subs[idx + 1] : null;

  return (
    <nav
      aria-label={`${coin.name} 시리즈 navigation`}
      className={`my-8 rounded border border-[var(--border-soft)] bg-[var(--bg-elev)] p-4 ${
        position === "top" ? "mb-12" : "mt-12"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎{coin.name} 시리즈 · {subs.length}편
        </div>
        <div className="flex gap-1.5">
          {subs.map((s, i) => (
            <span
              key={s.slug}
              className="size-2 rounded-full"
              style={{
                backgroundColor:
                  i === idx
                    ? "var(--neon-cyan)"
                    : i < idx
                      ? "var(--neon-green)"
                      : "var(--text-3)",
                boxShadow:
                  i === idx ? "0 0 8px var(--neon-cyan)" : undefined,
              }}
              title={s.label}
            />
          ))}
        </div>
      </div>

      <ol className="mb-4 space-y-1.5 font-mono text-xs">
        {subs.map((s, i) => {
          const isCurrent = i === idx;
          const isPast = i < idx;
          const status = isCurrent ? "🔵" : isPast ? "✅" : "⏳";
          return (
            <li
              key={s.slug}
              className={`flex items-center gap-2 ${
                isCurrent
                  ? "text-[var(--neon-cyan)] glow-cyan"
                  : isPast
                    ? "text-[var(--text-2)]"
                    : "text-[var(--text-3)]"
              }`}
            >
              <span>{status}</span>
              <span className="font-bold">{s.label}</span>
              {isCurrent || !isPast ? (
                <span>{s.title}{isCurrent ? " · 현재 글" : ""}</span>
              ) : (
                <Link href={`/posts/${s.slug}/`} className="hover:text-[var(--neon-cyan)]">
                  {s.title}
                </Link>
              )}
              <span className="ml-auto text-[var(--text-3)]">{s.publishedAt}</span>
            </li>
          );
        })}
      </ol>

      <div className="flex justify-between border-t border-[var(--border-soft)] pt-3 font-mono text-sm">
        {prev ? (
          <Link
            href={`/posts/${prev.slug}/`}
            className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]"
          >
            ← {prev.label} {prev.title}
          </Link>
        ) : (
          <span className="text-[var(--text-3)]">시리즈 시작</span>
        )}
        {next ? (
          <Link
            href={`/posts/${next.slug}/`}
            className="text-right text-[var(--text-2)] hover:text-[var(--neon-magenta)]"
          >
            {next.label} {next.title} →
          </Link>
        ) : (
          <span className="text-[var(--text-3)]">시리즈 완결</span>
        )}
      </div>
    </nav>
  );
}
