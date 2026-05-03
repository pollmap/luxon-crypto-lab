import Link from "next/link";
import { ONCHAIN_TOPICS, ONCHAIN_CATEGORY_COLOR } from "@/lib/onchain";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "On-Chain Data & Trading Signals" };

export default function OnchainPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎onchain_data_trading_signals.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="cyan">On-Chain</GlowText>{" "}
          <span className="text-[var(--text-1)]">·</span>{" "}
          <GlowText color="magenta">Trading Signals</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          알트시즌 인덱스 · 펀딩비 · 청산 · 거래소 reserve · 김치 프리미엄 · NUPL/SOPR · 옵션 IV · Fear & Greed
        </p>
      </header>

      <ol className="space-y-3">
        {ONCHAIN_TOPICS.map((t) => (
          <li key={t.id}>
            <Link
              href={`/onchain/${t.id}/`}
              className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-cyan)]"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="rounded border px-2 py-0.5 font-mono text-xs uppercase"
                  style={{
                    borderColor: ONCHAIN_CATEGORY_COLOR[t.category],
                    color: ONCHAIN_CATEGORY_COLOR[t.category],
                  }}
                >
                  {t.category}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                    {t.name}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--neon-cyan)] glow-cyan">{t.signature}</p>
                </div>
                <span className="font-mono text-xs text-[var(--text-3)]">{t.dataSource}</span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
