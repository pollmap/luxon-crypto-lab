"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface PricePoint {
  date: string;
  price: number;
}

interface PriceChartProps {
  data?: PricePoint[];
  height?: number;
  color?: string;
  symbol?: string;
}

const MOCK_BTC: PricePoint[] = [
  { date: "2025-10", price: 126000 },
  { date: "2025-11", price: 110000 },
  { date: "2025-12", price: 91000 },
  { date: "2026-01", price: 102000 },
  { date: "2026-02", price: 88000 },
  { date: "2026-03", price: 79000 },
  { date: "2026-04", price: 82000 },
  { date: "2026-05", price: 78600 },
];

export function PriceChart({
  data = MOCK_BTC,
  height = 280,
  color = "var(--neon-cyan)",
  symbol = "BTC",
}: PriceChartProps) {
  return (
    <figure className="my-6 ring-neon rounded p-4">
      <figcaption className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        <span>{symbol} · USD · Monthly close</span>
        <span className="text-[var(--text-3)]">mock data</span>
      </figcaption>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
          <defs>
            <linearGradient id={`fill-${symbol}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--border-soft)" strokeDasharray="2 4" />
          <XAxis dataKey="date" stroke="var(--text-3)" tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }} />
          <YAxis stroke="var(--text-3)" tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
          <Tooltip
            contentStyle={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border-glow)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
            }}
            labelStyle={{ color: color }}
            formatter={(value) => [`$${Number(value).toLocaleString()}`, symbol]}
          />
          <Area type="monotone" dataKey="price" stroke={color} strokeWidth={2} fill={`url(#fill-${symbol})`} />
        </AreaChart>
      </ResponsiveContainer>
    </figure>
  );
}
