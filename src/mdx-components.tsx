import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/post/Callout";
import { Formula } from "@/components/post/Formula";
import { SourceFootnote } from "@/components/post/SourceFootnote";
import { SeriesNav } from "@/components/post/SeriesNav";
import { TerminalBox } from "@/components/neon/TerminalBox";
import { HashBadge } from "@/components/neon/HashBadge";
import { GlowText } from "@/components/neon/GlowText";
import { PriceChart } from "@/components/charts/PriceChart";
import { ETFFlowChart } from "@/components/charts/ETFFlowChart";
import { HalvingTimeline } from "@/components/charts/HalvingTimeline";
import { CorrelationHeatmap } from "@/components/charts/CorrelationHeatmap";
import { MNAVChart } from "@/components/charts/MNAVChart";
import { TVLBarChart } from "@/components/charts/TVLBarChart";
import { KoreaPremiumChart } from "@/components/charts/KoreaPremiumChart";
import { L2TVLChart } from "@/components/charts/L2TVLChart";
import { LiquidationCascadeChart } from "@/components/charts/LiquidationCascadeChart";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-8 mb-5 font-display text-[28px] font-bold leading-[1.1] tracking-[-0.022em] text-[var(--ink-1)] md:mt-10 md:text-[36px]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-3 font-display text-[22px] font-bold leading-[1.18] tracking-[-0.018em] text-[var(--ink-1)] md:mt-14 md:text-[28px]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-2 font-display text-[17px] font-semibold leading-[1.3] tracking-[-0.014em] text-[var(--ink-1)] md:text-[19px]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-3)]">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-4 text-[var(--ink-1)]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-none pl-0 text-[var(--ink-1)]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal pl-6 text-[var(--ink-1)] marker:font-mono marker:text-[var(--ink-4)]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="relative my-1.5 pl-5 leading-[1.65] before:absolute before:left-0 before:top-[0.78em] before:h-[1.5px] before:w-2.5 before:bg-[var(--ink-5)]">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-[var(--signal)] pl-5 font-serif italic text-[var(--ink-2)]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-md bg-[var(--bg-elev)] px-1.5 py-0.5 font-mono text-[0.86em] text-[var(--ink-1)]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-5 -mx-2 overflow-x-auto rounded-xl bg-[var(--bg-elev)] px-5 py-4 font-mono text-[13px] leading-[1.65] text-[var(--ink-1)] md:mx-0">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-[var(--signal)] underline decoration-[var(--rule-strong)] decoration-1 underline-offset-[3px] hover:decoration-[var(--signal)]"
    >
      {children}
    </a>
  ),
  hr: () => (
    <hr className="my-12 border-0 border-t border-[var(--rule)]" />
  ),
  table: ({ children }) => (
    <div className="my-6 -mx-2 overflow-x-auto md:mx-0">
      <table className="w-full border-collapse font-sans text-[13.5px]" style={{ fontVariantNumeric: "tabular-nums" }}>
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b-2 border-[var(--rule-strong)] px-3 py-2.5 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--ink-3)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[var(--rule)] px-3 py-2.5 text-[var(--ink-2)]">
      {children}
    </td>
  ),
  Callout,
  Formula,
  SourceFootnote,
  SeriesNav,
  TerminalBox,
  HashBadge,
  GlowText,
  PriceChart,
  ETFFlowChart,
  HalvingTimeline,
  CorrelationHeatmap,
  MNAVChart,
  TVLBarChart,
  KoreaPremiumChart,
  L2TVLChart,
  LiquidationCascadeChart,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
