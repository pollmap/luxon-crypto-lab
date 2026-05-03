import Link from "next/link";
import { INSTITUTIONS, INSTITUTION_TYPE_COLOR, INSTITUTION_REGION_LABEL } from "@/lib/institutional";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "Institutional Adoption" };

export default function InstitutionalPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎institutional_crypto_adoption.json
        </div>
        <h1 className="mb-3 font-mono text-4xl font-bold tracking-tight">
          <GlowText color="cyan">Institutional</GlowText>{" "}
          <span className="text-[var(--text-1)]">·</span>{" "}
          <GlowText color="magenta">Adoption</GlowText>
        </h1>
        <p className="text-[var(--text-2)]">
          기관 투자자의 디지털 자산 진출 — BlackRock · 한국 4대 은행 · 일본 메가뱅크 · 중동 SWF · 미국 수탁사 · 글로벌 연기금
        </p>
      </header>

      <ol className="space-y-3">
        {INSTITUTIONS.map((i) => (
          <li key={i.id}>
            <Link
              href={`/institutional/${i.id}/`}
              className="group block rounded border border-[var(--border-soft)] p-5 transition-colors hover:border-[var(--neon-cyan)]"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="rounded border px-2 py-0.5 font-mono text-xs uppercase"
                  style={{
                    borderColor: INSTITUTION_TYPE_COLOR[i.type],
                    color: INSTITUTION_TYPE_COLOR[i.type],
                  }}
                >
                  {i.type}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
                  {INSTITUTION_REGION_LABEL[i.region]}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                    {i.name}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--neon-cyan)] glow-cyan">{i.signature}</p>
                </div>
                {i.aumOrAssetsB !== undefined && (
                  <span className="font-mono text-xs text-[var(--text-3)]">
                    AUM ${i.aumOrAssetsB}B
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
