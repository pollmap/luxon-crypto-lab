import Link from "next/link";
import { TREASURIES, TREASURY_TYPE_COLOR } from "@/lib/treasuries";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "Treasury Companies" };

export default function TreasuriesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎corporate_crypto_treasuries.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="cyan">Treasury</GlowText>{" "}
          <span className="text-[var(--text-1)]">·</span>{" "}
          <GlowText color="magenta">Companies</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          상장사 가상자산 매집 회사들 — Strategy · BitMine · Metaplanet · MARA · Riot
        </p>
      </header>

      <ol className="space-y-3">
        {TREASURIES.map((t) => (
          <li key={t.id}>
            <Link
              href={`/treasuries/${t.id}/`}
              className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-cyan)]"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="rounded border px-2 py-0.5 font-mono text-xs uppercase"
                  style={{
                    borderColor: TREASURY_TYPE_COLOR[t.type],
                    color: TREASURY_TYPE_COLOR[t.type],
                  }}
                >
                  {t.type}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                    {t.name}{" "}
                    <span className="font-mono text-sm text-[var(--text-3)]">
                      ({t.ticker})
                    </span>
                  </h2>
                  <p className="mt-1 text-sm text-[var(--neon-cyan)] glow-cyan">{t.signature}</p>
                </div>
                {t.holdingsBTC && (
                  <span className="font-mono text-xs text-[var(--text-3)]">
                    {t.holdingsBTC.toLocaleString()} BTC
                  </span>
                )}
                {t.holdingsETH && (
                  <span className="font-mono text-xs text-[var(--text-3)]">
                    {t.holdingsETH.toLocaleString()} ETH
                  </span>
                )}
              </div>
              {t.marketCapBillion && (
                <div className="mt-2 font-mono text-xs text-[var(--text-3)]">
                  시총 ${t.marketCapBillion}B · {t.listing}
                  {t.ceo ? ` · ${t.ceo.split(" · ")[0]}` : ""}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
