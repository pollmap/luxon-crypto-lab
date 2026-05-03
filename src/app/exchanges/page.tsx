import Link from "next/link";
import { EXCHANGES, EXCHANGE_TYPE_COLOR } from "@/lib/exchanges";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "Exchanges" };

export default function ExchangesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎exchanges_index.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="cyan">Exchanges</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          글로벌 CEX·DEX·실패 사례 6편 시리즈 — Binance·Coinbase·Upbit·Uniswap·Hyperliquid·FTX/Mt.Gox
        </p>
      </header>

      <ol className="space-y-3">
        {EXCHANGES.map((ex) => (
          <li key={ex.id}>
            <Link
              href={`/exchanges/${ex.id}/`}
              className="group grid grid-cols-[80px_1fr_120px] items-center gap-4 rounded border border-[var(--border-soft)] p-4 font-mono text-sm transition-all hover:border-[var(--neon-cyan)] hover:bg-[var(--bg-elev)]"
            >
              <div className="text-[var(--neon-cyan)] glow-cyan">{ex.subIssues[0].label}</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                    {ex.name}
                  </span>
                  <span
                    className="rounded border px-1.5 py-0.5 text-xs"
                    style={{ borderColor: EXCHANGE_TYPE_COLOR[ex.type], color: EXCHANGE_TYPE_COLOR[ex.type] }}
                  >
                    {ex.type}
                  </span>
                </div>
                <div className="mt-1 text-xs text-[var(--text-3)]">{ex.signature}</div>
              </div>
              <div className="text-right text-xs text-[var(--text-3)]">{ex.subIssues[0].publishedAt}</div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
