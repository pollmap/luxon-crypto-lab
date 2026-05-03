"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";

interface MNAVPoint {
  company: string;
  mnav: number;
  category: "BTC" | "ETH" | "Mining";
}

const TREASURY_MNAV: MNAVPoint[] = [
  { company: "Strategy", mnav: 1.65, category: "BTC" },
  { company: "BitMine", mnav: 2.10, category: "ETH" },
  { company: "Metaplanet", mnav: 4.20, category: "BTC" },
  { company: "MARA", mnav: 1.00, category: "Mining" },
  { company: "Riot", mnav: 1.05, category: "Mining" },
];

const COLORS: Record<string, string> = {
  BTC: "var(--neon-cyan)",
  ETH: "var(--neon-magenta)",
  Mining: "var(--neon-green)",
};

export function MNAVChart({ data = TREASURY_MNAV, height = 280 }: { data?: MNAVPoint[]; height?: number }) {
  return (
    <figure className="my-6 ring-neon rounded p-4">
      <figcaption className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <span>mNAV (시가총액 / 보유 자산)</span>
        <span className="text-[var(--text-3)]">학술 자료 기반 (BitcoinTreasuries.net 기준 2026 Q1)</span>
      </figcaption>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis dataKey="company" stroke="var(--text-3)" />
          <YAxis stroke="var(--text-3)" />
          <Tooltip
            contentStyle={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border-glow)",
              fontFamily: "monospace",
            }}
          />
          <Bar dataKey="mnav" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={COLORS[d.category]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </figure>
  );
}
