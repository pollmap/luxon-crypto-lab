"use client";

interface CorrelationHeatmapProps {
  variables?: string[];
  asset?: string;
  values?: Record<string, number>;
}

const DEFAULT_VALUES: Record<string, number> = {
  DXY: -0.65,
  US10Y: -0.4,
  M2: 0.55,
  GOLD: 0.68,
  SP500: 0.62,
  NASDAQ: 0.7,
};

function colorFor(v: number): string {
  const intensity = Math.min(Math.abs(v), 1);
  if (v > 0) return `rgba(0, 255, 136, ${intensity * 0.7 + 0.15})`;
  return `rgba(255, 51, 102, ${intensity * 0.7 + 0.15})`;
}

export function CorrelationHeatmap({
  variables,
  asset = "BTC",
  values = DEFAULT_VALUES,
}: CorrelationHeatmapProps) {
  const vars = variables ?? Object.keys(values);
  return (
    <figure className="my-6 ring-neon rounded p-4">
      <figcaption className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <span>{asset} correlation · 24-month rolling</span>
        <span>mock</span>
      </figcaption>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {vars.map((v) => {
          const val = values[v] ?? 0;
          return (
            <div
              key={v}
              className="flex items-center justify-between rounded border border-[var(--border-soft)] px-3 py-2 font-mono text-sm"
              style={{ backgroundColor: colorFor(val) }}
            >
              <span className="font-bold text-[var(--bg-base)]">{v}</span>
              <span className="text-[var(--bg-base)]">
                {val > 0 ? "+" : ""}
                {val.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-3 font-mono text-xs text-[var(--text-3)]">
        <span className="flex items-center gap-1">
          <span className="size-3 rounded-sm" style={{ backgroundColor: "var(--neon-red)" }} />
          음의 상관
        </span>
        <span className="flex items-center gap-1">
          <span className="size-3 rounded-sm" style={{ backgroundColor: "var(--neon-green)" }} />
          양의 상관
        </span>
      </div>
    </figure>
  );
}
