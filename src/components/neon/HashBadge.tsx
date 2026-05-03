import { CATEGORY_COLOR, type CoinCategory } from "@/lib/coins";

interface HashBadgeProps {
  symbol: string;
  category?: CoinCategory;
  size?: "sm" | "md" | "lg";
}

const SIZE_CLASS: Record<NonNullable<HashBadgeProps["size"]>, string> = {
  sm: "text-xs px-1.5 py-0.5",
  md: "text-sm px-2 py-1",
  lg: "text-base px-3 py-1.5",
};

export function HashBadge({ symbol, category, size = "md" }: HashBadgeProps) {
  const color = category ? CATEGORY_COLOR[category] : "var(--neon-cyan)";
  return (
    <span
      className={`inline-flex items-center font-mono font-bold uppercase tracking-wider ${SIZE_CLASS[size]}`}
      style={{
        color,
        border: `1px solid ${color}`,
        backgroundColor: "rgba(20, 20, 29, 0.6)",
        boxShadow: `0 0 8px ${color}33, inset 0 0 12px ${color}11`,
      }}
    >
      [{symbol}]
    </span>
  );
}
