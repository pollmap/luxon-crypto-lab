import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: string;
  variant?: "outline" | "soft";
}

export function Badge({ children, color, variant = "outline" }: BadgeProps) {
  const c = color ?? "var(--ink-3)";
  if (variant === "soft") {
    return (
      <span
        className="inline-flex items-center rounded-full px-2.5 py-1 font-sans text-[10.5px] font-medium uppercase tracking-[0.08em]"
        style={{ background: "var(--bg-elev)", color: c }}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-sans text-[10.5px] font-medium uppercase tracking-[0.08em]"
      style={{ borderColor: c, color: c }}
    >
      {children}
    </span>
  );
}
