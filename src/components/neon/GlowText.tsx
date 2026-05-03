import type { ReactNode } from "react";

type GlowColor = "cyan" | "magenta" | "green" | "red";

interface GlowTextProps {
  children: ReactNode;
  color?: GlowColor;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
}

const COLOR_VAR: Record<GlowColor, string> = {
  cyan: "var(--neon-cyan)",
  magenta: "var(--neon-magenta)",
  green: "var(--neon-green)",
  red: "var(--neon-red)",
};

export function GlowText({ children, color = "cyan", as: As = "span", className = "" }: GlowTextProps) {
  return (
    <As className={`glow-${color} ${className}`} style={{ color: COLOR_VAR[color] }}>
      {children}
    </As>
  );
}
