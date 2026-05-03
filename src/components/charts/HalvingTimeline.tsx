"use client";

interface HalvingEvent {
  date: string;
  block: number;
  reward: number;
  priceUsd?: number;
  label: string;
}

const HALVINGS: HalvingEvent[] = [
  { date: "2012-11-28", block: 210000, reward: 25, priceUsd: 12, label: "1차" },
  { date: "2016-07-09", block: 420000, reward: 12.5, priceUsd: 650, label: "2차" },
  { date: "2020-05-11", block: 630000, reward: 6.25, priceUsd: 8500, label: "3차" },
  { date: "2024-04-20", block: 840000, reward: 3.125, priceUsd: 64000, label: "4차" },
  { date: "2028-04-17", block: 1050000, reward: 1.5625, label: "5차 (예정)" },
];

export function HalvingTimeline() {
  return (
    <figure className="my-6 ring-neon rounded p-6">
      <figcaption className="mb-6 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        Bitcoin Halving Timeline · Block subsidy schedule
      </figcaption>
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-[var(--neon-magenta)]" />
        <div className="relative grid grid-cols-5 gap-2">
          {HALVINGS.map((h, i) => {
            const isLast = i === HALVINGS.length - 1;
            return (
              <div key={h.block} className="flex flex-col items-center text-center">
                <div className="mb-2 text-xs text-[var(--text-3)] font-mono">{h.date}</div>
                <div
                  className="mb-2 size-4 rounded-full"
                  style={{
                    backgroundColor: isLast ? "var(--neon-magenta)" : "var(--neon-cyan)",
                    boxShadow: `0 0 12px ${isLast ? "var(--neon-magenta)" : "var(--neon-cyan)"}`,
                  }}
                />
                <div className={`text-sm font-bold ${isLast ? "text-[var(--neon-magenta)] glow-magenta" : "text-[var(--neon-cyan)] glow-cyan"}`}>
                  {h.label}
                </div>
                <div className="mt-1 font-mono text-xs text-[var(--text-2)]">
                  {h.reward} BTC
                </div>
                {h.priceUsd !== undefined && (
                  <div className="mt-0.5 font-mono text-xs text-[var(--text-3)]">
                    ${h.priceUsd.toLocaleString()}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </figure>
  );
}
