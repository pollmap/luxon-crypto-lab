"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface LiquidationPoint {
  event: string;
  longLiq: number; // billion USD
  shortLiq: number;
}

const LIQ_EVENTS: LiquidationPoint[] = [
  { event: "2021.5 BTC dump", longLiq: 8.6, shortLiq: 0.5 },
  { event: "2022.5 Luna 폭락", longLiq: 4.2, shortLiq: 1.1 },
  { event: "2022.11 FTX", longLiq: 2.8, shortLiq: 0.8 },
  { event: "2024.8 캐리트레이드", longLiq: 1.5, shortLiq: 1.2 },
  { event: "2025.10 BTC peak crash", longLiq: 2.3, shortLiq: 0.6 },
];

export function LiquidationCascadeChart({
  data = LIQ_EVENTS,
  height = 300,
}: {
  data?: LiquidationPoint[];
  height?: number;
}) {
  return (
    <figure className="my-6 ring-neon rounded p-4">
      <figcaption className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <span>주요 청산 캐스케이드 사건 (24h, B USD)</span>
        <span className="text-[var(--text-3)]">Coinglass + Glassnode 학술 인용</span>
      </figcaption>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis dataKey="event" stroke="var(--text-3)" tick={{ fontSize: 10 }} />
          <YAxis stroke="var(--text-3)" />
          <Tooltip
            contentStyle={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border-glow)",
              fontFamily: "monospace",
            }}
          />
          <Bar dataKey="longLiq" stackId="a" fill="var(--neon-magenta)" name="Long 청산" />
          <Bar dataKey="shortLiq" stackId="a" fill="var(--neon-cyan)" name="Short 청산" />
        </BarChart>
      </ResponsiveContainer>
    </figure>
  );
}
