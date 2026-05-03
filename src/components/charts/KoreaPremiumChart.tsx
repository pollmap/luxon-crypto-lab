"use client";

import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface PremiumPoint {
  date: string;
  premium: number; // % above global
}

const KOREA_PREMIUM: PremiumPoint[] = [
  { date: "2024-01", premium: 3.5 },
  { date: "2024-04", premium: 4.2 },
  { date: "2024-07", premium: 6.5 },
  { date: "2024-10", premium: 8.3 },
  { date: "2025-01", premium: 5.4 },
  { date: "2025-04", premium: 4.8 },
  { date: "2025-07", premium: 7.6 },
  { date: "2025-10", premium: 12.8 },
  { date: "2026-01", premium: 4.2 },
  { date: "2026-04", premium: 3.1 },
];

export function KoreaPremiumChart({ data = KOREA_PREMIUM, height = 280 }: { data?: PremiumPoint[]; height?: number }) {
  return (
    <figure className="my-6 ring-neon rounded p-4">
      <figcaption className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <span>김치 프리미엄 (한국 vs 글로벌 BTC 가격 차이, %)</span>
        <span className="text-[var(--text-3)]">CoinGecko + 업비트 시계열, 학술 가공</span>
      </figcaption>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis dataKey="date" stroke="var(--text-3)" />
          <YAxis stroke="var(--text-3)" unit="%" />
          <Tooltip
            contentStyle={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border-glow)",
              fontFamily: "monospace",
            }}
          />
          <ReferenceLine y={0} stroke="var(--text-3)" strokeDasharray="3 3" />
          <Line type="monotone" dataKey="premium" stroke="var(--neon-magenta)" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </figure>
  );
}
