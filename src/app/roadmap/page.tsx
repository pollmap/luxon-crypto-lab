import Link from "next/link";
import { COINS } from "@/lib/coins";
import { HashBadge } from "@/components/neon/HashBadge";

export const metadata = { title: "Roadmap" };

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎series_calendar.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight text-[var(--neon-cyan)] glow-cyan">
          12-month roadmap
        </h1>
        <p className="text-[var(--text-2)]">
          2026년 6월 ~ 2027년 5월. 매월 1편 deep dive. 매크로 이벤트 동기화.
        </p>
      </header>

      <ol className="space-y-3">
        {COINS.map((coin) => (
          <li key={coin.symbol}>
            <Link
              href={`/coins/${coin.symbol.toLowerCase()}/`}
              className="group grid grid-cols-[80px_120px_140px_1fr] items-center gap-4 rounded border border-[var(--border-soft)] p-4 font-mono text-sm transition-all hover:border-[var(--neon-cyan)] hover:bg-[var(--bg-elev)]"
            >
              <div className="text-[var(--neon-cyan)] glow-cyan">
                #{String(coin.issue).padStart(2, "0")}
              </div>
              <div className="text-[var(--text-2)]">{coin.scheduledMonth}</div>
              <div>
                <HashBadge symbol={coin.symbol} category={coin.category} size="sm" />
              </div>
              <div>
                <div className="text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                  {coin.signature}
                </div>
                {coin.macroEvent && (
                  <div className="mt-1 text-xs text-[var(--text-3)]">
                    macro · {coin.macroEvent}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
