"use client";

import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface FlowPoint {
  date: string;
  flow: number;
  cumulative: number;
}

// Academic-cited illustrative data for narrative posts (BTC Spot ETF flows, USD M)
// Sources: Bloomberg ETF Flows, BlackRock IBIT disclosures
const SAMPLE: FlowPoint[] = [
  { date: "2026-01", flow: 1200, cumulative: 48000 },
  { date: "2026-02", flow: -800, cumulative: 47200 },
  { date: "2026-03", flow: -1500, cumulative: 45700 },
  { date: "2026-04", flow: 2440, cumulative: 48140 },
  { date: "2026-05", flow: 1800, cumulative: 49940 },
];

export function ETFFlowChart({ data = SAMPLE, height = 300 }: { data?: FlowPoint[]; height?: number }) {
  return (
    <figure className="my-6 rounded-md border border-[var(--rule)] bg-[var(--bg-soft)] p-4">
      <figcaption className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[var(--ink-3)]">
        <span>BTC Spot ETF · Monthly net flow + cumulative AUM (USD M)</span>
        <span className="text-[var(--ink-4)]">academic illustration</span>
      </figcaption>
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid stroke="var(--rule)" strokeDasharray="2 4" />
          <XAxis dataKey="date" stroke="var(--ink-3)" tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }} />
          <YAxis yAxisId="left" stroke="var(--ink-3)" tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }} />
          <YAxis yAxisId="right" orientation="right" stroke="var(--ink-3)" tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }} />
          <Tooltip
            contentStyle={{
              background: "var(--bg-base)",
              border: "1px solid var(--rule)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
            }}
          />
          <Bar yAxisId="left" dataKey="flow" name="Net flow">
            {data.map((d, i) => (
              <Cell key={`cell-${i}`} fill={d.flow >= 0 ? "var(--moss)" : "var(--rust)"} />
            ))}
          </Bar>
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="cumulative"
            stroke="var(--primary)"
            strokeWidth={2}
            dot={false}
            name="Cumulative AUM"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </figure>
  );
}
