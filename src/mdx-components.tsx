import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/post/Callout";
import { SourceFootnote } from "@/components/post/SourceFootnote";
import { TerminalBox } from "@/components/neon/TerminalBox";
import { HashBadge } from "@/components/neon/HashBadge";
import { GlowText } from "@/components/neon/GlowText";
import { PriceChart } from "@/components/charts/PriceChart";
import { ETFFlowChart } from "@/components/charts/ETFFlowChart";
import { HalvingTimeline } from "@/components/charts/HalvingTimeline";
import { CorrelationHeatmap } from "@/components/charts/CorrelationHeatmap";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-12 mb-6 text-4xl font-bold tracking-tight text-[var(--text-1)]">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-[var(--neon-cyan)] glow-cyan">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-[var(--text-1)]">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-7 text-[var(--text-2)]">{children}</p>
  ),
  ul: ({ children }) => <ul className="my-4 list-disc pl-6 text-[var(--text-2)]">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 list-decimal pl-6 text-[var(--text-2)]">{children}</ol>,
  li: ({ children }) => <li className="my-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-[var(--neon-cyan)] pl-4 italic text-[var(--text-2)]">{children}</blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-[var(--bg-elev)] px-1.5 py-0.5 font-mono text-sm text-[var(--neon-cyan)]">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded border border-[var(--border-glow)] bg-[var(--bg-elev)] p-4 font-mono text-sm">{children}</pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-[var(--neon-cyan)] underline decoration-dotted underline-offset-4 hover:text-[var(--neon-magenta)]"
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse font-mono text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-[var(--border-glow)] bg-[var(--bg-elev)] px-3 py-2 text-left text-[var(--neon-cyan)]">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-[var(--border-glow)] px-3 py-2 text-[var(--text-2)]">{children}</td>
  ),
  Callout,
  SourceFootnote,
  TerminalBox,
  HashBadge,
  GlowText,
  PriceChart,
  ETFFlowChart,
  HalvingTimeline,
  CorrelationHeatmap,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
