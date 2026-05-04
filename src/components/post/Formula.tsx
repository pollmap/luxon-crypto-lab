import type { ReactNode } from "react";

interface FormulaProps {
  children: ReactNode;
  caption?: string;
  number?: string;
}

export function Formula({ children, caption, number }: FormulaProps) {
  return (
    <figure className="my-7">
      <div
        className="rounded-xl bg-[var(--bg-elev)] px-5 py-4 font-mono text-[13.5px] leading-[1.7] text-[var(--ink-1)] md:px-6 md:py-5 md:text-[14px]"
        style={{ whiteSpace: "pre-wrap", fontVariantNumeric: "tabular-nums" }}
      >
        {children}
      </div>
      {(caption || number) && (
        <figcaption className="mt-2 flex items-baseline justify-end gap-3 px-1 font-sans text-[11px] tracking-tight text-[var(--ink-4)]">
          {caption && <span>{caption}</span>}
          {number && <span className="text-[var(--signal)]">({number})</span>}
        </figcaption>
      )}
    </figure>
  );
}
