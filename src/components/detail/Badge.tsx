import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: string;
  variant?: "outline" | "soft";
}

export function Badge({ children, color, variant = "soft" }: BadgeProps) {
  const c = color ?? "var(--ink-3)";
  if (variant === "outline") {
    return (
      <span
        className="inline-flex items-center rounded-full border bg-[var(--bg-base)] px-2.5 py-0.5 font-sans text-[10.5px] font-medium uppercase tracking-[0.06em]"
        style={{ borderColor: c, color: c }}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center rounded-full bg-[var(--bg-elev)] px-2.5 py-0.5 font-sans text-[10.5px] font-medium uppercase tracking-[0.06em]"
      style={{ color: c }}
    >
      {children}
    </span>
  );
}
