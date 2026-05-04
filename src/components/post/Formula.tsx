import type { ReactNode } from "react";

interface FormulaProps {
  children: ReactNode;
  caption?: string;
  number?: string;
}

export function Formula({ children, caption, number }: FormulaProps) {
  return (
    <figure className="my-6">
      <div
        className="rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-4 font-mono text-[13.5px] leading-[1.7] text-[var(--ink-1)]"
        style={{ whiteSpace: "pre-wrap", fontVariantNumeric: "tabular-nums" }}
      >
        {children}
      </div>
      {(caption || number) && (
        <figcaption className="mt-1.5 flex items-baseline justify-end gap-3 px-1 font-sans text-[11.5px] tracking-tight text-[var(--ink-4)]">
          {caption && <span>{caption}</span>}
          {number && <span className="text-[var(--primary)]">({number})</span>}
        </figcaption>
      )}
    </figure>
  );
}
