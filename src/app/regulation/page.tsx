import Link from "next/link";
import { REGULATIONS, REGULATION_STATUS_COLOR } from "@/lib/regulations";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "Regulation" };

export default function RegulationPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎regulation_world_map.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="cyan">Regulation</GlowText>{" "}
          <span className="text-[var(--text-1)]">·</span>{" "}
          <GlowText color="magenta">World Map</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          전 세계 13개 지역의 가상자산 규제·법안 최신 현황 — 2026년 5월 기준
        </p>
      </header>

      <ol className="space-y-3">
        {REGULATIONS.map((r) => (
          <li key={r.region}>
            <Link
              href={`/regulation/${r.region}/`}
              className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-cyan)]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-3xl">{r.flag}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                    {r.name}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--neon-cyan)] glow-cyan">{r.signature}</p>
                </div>
                <span className="font-mono text-xs text-[var(--text-3)]">{r.subIssues.length}편</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {r.keyLaws.slice(0, 4).map((law, i) => (
                  <span
                    key={i}
                    className="rounded border px-2 py-0.5 font-mono text-xs"
                    style={{
                      borderColor: REGULATION_STATUS_COLOR[law.status],
                      color: REGULATION_STATUS_COLOR[law.status],
                    }}
                  >
                    {law.name}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
