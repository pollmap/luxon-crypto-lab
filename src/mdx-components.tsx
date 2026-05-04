import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/post/Callout";
import { Formula } from "@/components/post/Formula";
import { SourceFootnote } from "@/components/post/SourceFootnote";
import { SeriesNav } from "@/components/post/SeriesNav";
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
    <h1 className="mt-2 mb-4 font-sans text-[2rem] font-bold leading-[1.2] tracking-[-0.018em] text-[var(--ink-1)] md:text-[2.25rem]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-3 border-b border-[var(--rule)] pb-2 font-sans text-[1.45rem] font-bold leading-[1.25] tracking-[-0.012em] text-[var(--ink-1)] md:text-[1.625rem]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-7 mb-2 font-sans text-[1.125rem] font-bold leading-[1.3] text-[var(--ink-1)] md:text-[1.25rem]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-5 mb-1.5 font-sans text-[0.95rem] font-semibold text-[var(--ink-2)]">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-3.5 text-[var(--ink-1)]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-1 pl-6 text-[var(--ink-1)] marker:text-[var(--ink-4)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-1 pl-6 text-[var(--ink-1)] marker:font-mono marker:text-[var(--ink-4)]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-[1.7]">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-5 border-l-4 border-[var(--primary)] bg-[var(--bg-elev)] px-5 py-3 text-[var(--ink-2)]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded border border-[var(--rule)] bg-[var(--bg-elev)] px-1.5 py-0.5 font-mono text-[0.86em] text-[var(--ink-1)]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-5 overflow-x-auto rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] px-4 py-3.5 font-mono text-[13px] leading-[1.65] text-[var(--ink-1)]">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-[var(--link)] no-underline hover:underline"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-10 border-0 border-t border-[var(--rule)]" />,
  table: ({ children }) => (
    <div className="my-5 overflow-x-auto">
      <table className="w-full border-collapse text-[13.5px]" style={{ fontVariantNumeric: "tabular-nums" }}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[var(--bg-elev)]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-[var(--rule)] px-3 py-2 text-left font-sans text-[12.5px] font-semibold text-[var(--ink-1)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-[var(--rule)] px-3 py-2 text-[var(--ink-2)]">
      {children}
    </td>
  ),
  Callout,
  Formula,
  SourceFootnote,
  SeriesNav,
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
