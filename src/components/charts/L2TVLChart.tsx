"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts";

interface L2TVLPoint {
  name: string;
  tvl: number; // billion USD
  type: "Optimistic" | "ZK" | "Other";
}

const L2_TVL: L2TVLPoint[] = [
  { name: "Arbitrum", tvl: 4.0, type: "Optimistic" },
  { name: "Base", tvl: 5.0, type: "Optimistic" },
  { name: "Optimism", tvl: 1.5, type: "Optimistic" },
  { name: "zkSync Era", tvl: 0.8, type: "ZK" },
  { name: "Linea", tvl: 0.4, type: "ZK" },
  { name: "Scroll", tvl: 0.2, type: "ZK" },
  { name: "Other L2", tvl: 1.0, type: "Other" },
];

const COLORS: Record<string, string> = {
  Optimistic: "var(--neon-cyan)",
  ZK: "var(--neon-magenta)",
  Other: "var(--neon-amber)",
};

export function L2TVLChart({ data = L2_TVL, height = 320 }: { data?: L2TVLPoint[]; height?: number }) {
  return (
    <figure className="my-6 ring-neon rounded p-4">
      <figcaption className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <span>Ethereum L2 TVL 분포 (B USD)</span>
        <span className="text-[var(--text-3)]">L2Beat 기준 2026 Q1</span>
      </figcaption>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            dataKey="tvl"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={(entry: { name?: string; value?: number }) => `${entry.name ?? ""}: $${entry.value ?? 0}B`}
            labelLine={false}
          >
            {data.map((d, i) => (
              <Cell key={i} fill={COLORS[d.type]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border-glow)",
              fontFamily: "monospace",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </figure>
  );
}
