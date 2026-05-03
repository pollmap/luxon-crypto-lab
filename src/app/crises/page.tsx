import Link from "next/link";
import { CRISES, CRISIS_TYPE_COLOR } from "@/lib/crises";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "Crypto Crises & Hacks" };

export default function CrisesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎crypto_crises_and_hacks.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="red">Crises</GlowText>{" "}
          <span className="text-[var(--text-1)]">·</span>{" "}
          <GlowText color="magenta">Hacks</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          가상자산 사태 · 해킹 · 사기 사례 — Luna · Mt.Gox · FTX · 2022 Contagion · DAO · Bridges · 한국 케이스
        </p>
      </header>

      <ol className="space-y-3">
        {CRISES.map((c) => (
          <li key={c.id}>
            <Link
              href={`/crises/${c.id}/`}
              className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-amber)]"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="rounded border px-2 py-0.5 font-mono text-xs uppercase"
                  style={{
                    borderColor: CRISIS_TYPE_COLOR[c.type],
                    color: CRISIS_TYPE_COLOR[c.type],
                  }}
                >
                  {c.type}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
                  {c.year}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-amber)]">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--neon-cyan)] glow-cyan">{c.signature}</p>
                </div>
                {c.lossUSDB > 0 && (
                  <span className="font-mono text-xs text-[var(--neon-amber)]">
                    손실 ${c.lossUSDB}B
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
