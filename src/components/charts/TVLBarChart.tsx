"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import cachedTVL from "@/data/cache/defi-tvl.json";

interface TVLPoint {
  protocol: string;
  tvl: number; // billions USD
  category: string;
}

const DEFI_TVL: TVLPoint[] = (cachedTVL as Array<{ protocol: string; tvl: number; category: string }>).map((d) => ({
  protocol: d.protocol,
  tvl: d.tvl,
  category: d.category,
}));

const COLORS: Record<string, string> = {
  Lending: "var(--neon-cyan)",
  DEX: "var(--neon-magenta)",
  LST: "var(--neon-green)",
  Restaking: "var(--neon-amber)",
  Yield: "var(--neon-cyan)",
};

export function TVLBarChart({
  data = DEFI_TVL,
  height = 320,
  title = "DeFi Top 10 프로토콜 TVL",
}: {
  data?: TVLPoint[];
  height?: number;
  title?: string;
}) {
  return (
    <figure className="my-6 ring-neon rounded p-4">
      <figcaption className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <span>{title} (B USD)</span>
        <span className="text-[var(--text-3)]">DeFiLlama 기준 2026 Q1 학술 인용</span>
      </figcaption>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} layout="vertical" margin={{ left: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis type="number" stroke="var(--text-3)" />
          <YAxis type="category" dataKey="protocol" stroke="var(--text-3)" />
          <Tooltip
            contentStyle={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border-glow)",
              fontFamily: "monospace",
            }}
          />
          <Bar dataKey="tvl" radius={[0, 4, 4, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={COLORS[d.category]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </figure>
  );
}
