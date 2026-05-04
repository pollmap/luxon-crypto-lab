import type { ReactNode } from "react";

type CalloutType = "info" | "beginner" | "opposing-view" | "warning" | "data";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const STYLE: Record<CalloutType, { accent: string; label: string; bg: string }> = {
  info: { accent: "var(--signal)", label: "노트", bg: "rgba(240,168,48,0.05)" },
  beginner: { accent: "var(--moss)", label: "1분 요약", bg: "rgba(78,196,139,0.05)" },
  "opposing-view": { accent: "var(--dust)", label: "반대 시각", bg: "rgba(201,138,163,0.05)" },
  warning: { accent: "var(--rust)", label: "고지", bg: "rgba(255,107,74,0.05)" },
  data: { accent: "var(--signal)", label: "데이터 노트", bg: "rgba(240,168,48,0.05)" },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const s = STYLE[type];
  return (
    <aside
      className="my-7 rounded-2xl border border-[var(--rule)] px-5 py-4 md:px-6 md:py-5"
      style={{ background: s.bg }}
    >
      <div
        className="mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: s.accent }}
      >
        {title ?? s.label}
      </div>
      <div className="font-serif text-[15px] leading-[1.65] text-[var(--ink-1)] md:text-[15.5px]">
        {children}
      </div>
    </aside>
  );
}
