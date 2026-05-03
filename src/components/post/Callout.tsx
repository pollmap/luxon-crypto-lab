import type { ReactNode } from "react";

type CalloutType = "info" | "beginner" | "opposing-view" | "warning" | "data";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const STYLE: Record<CalloutType, { border: string; label: string; color: string }> = {
  info: { border: "var(--neon-cyan)", label: "INFO", color: "var(--neon-cyan)" },
  beginner: { border: "var(--neon-green)", label: "입문자 가이드", color: "var(--neon-green)" },
  "opposing-view": { border: "var(--neon-magenta)", label: "반대 시각", color: "var(--neon-magenta)" },
  warning: { border: "var(--neon-red)", label: "리스크", color: "var(--neon-red)" },
  data: { border: "var(--neon-amber)", label: "데이터 한계", color: "var(--neon-amber)" },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const s = STYLE[type];
  return (
    <aside
      className="my-6 rounded p-4"
      style={{
        borderLeft: `3px solid ${s.border}`,
        backgroundColor: "rgba(20, 20, 29, 0.7)",
        boxShadow: `inset 0 0 16px ${s.border}11`,
      }}
    >
      <div
        className="mb-2 font-mono text-xs font-bold uppercase tracking-wider"
        style={{ color: s.color }}
      >
        {title ?? s.label}
      </div>
      <div className="text-sm leading-relaxed text-[var(--text-2)]">{children}</div>
    </aside>
  );
}
