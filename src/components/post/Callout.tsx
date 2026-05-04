import type { ReactNode } from "react";

type CalloutType = "info" | "beginner" | "opposing-view" | "warning" | "data";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const STYLE: Record<CalloutType, { bar: string; bg: string; label: string; icon: string }> = {
  info: { bar: "var(--note-bar)", bg: "var(--note-bg)", label: "노트", icon: "ⓘ" },
  beginner: { bar: "var(--tip-bar)", bg: "var(--tip-bg)", label: "1분 요약", icon: "▸" },
  "opposing-view": { bar: "var(--dust)", bg: "#f7eef5", label: "반대 시각", icon: "‡" },
  warning: { bar: "var(--warning-bar)", bg: "var(--warning-bg)", label: "고지", icon: "⚠" },
  data: { bar: "var(--info-bar)", bg: "var(--info-bg)", label: "데이터 노트", icon: "#" },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const s = STYLE[type];
  return (
    <aside
      className="my-6 overflow-hidden rounded-md border border-[var(--rule)]"
      style={{ background: s.bg, borderLeft: `4px solid ${s.bar}` }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2 font-sans text-[12px] font-bold uppercase tracking-[0.06em]"
        style={{ color: s.bar }}
      >
        <span aria-hidden className="text-[14px] leading-none">{s.icon}</span>
        <span>{title ?? s.label}</span>
      </div>
      <div className="px-4 pb-3 pt-0 font-sans text-[14.5px] leading-[1.7] text-[var(--ink-1)]">
        {children}
      </div>
    </aside>
  );
}
