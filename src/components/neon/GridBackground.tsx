interface GridBackgroundProps {
  size?: number;
  opacity?: number;
}

export function GridBackground({ size = 48, opacity = 0.06 }: GridBackgroundProps) {
  const id = `grid-${size}`;
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} className="text-[var(--neon-cyan)]" />
    </svg>
  );
}
