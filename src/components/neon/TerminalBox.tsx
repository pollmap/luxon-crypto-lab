import type { ReactNode } from "react";

interface TerminalBoxProps {
  children: ReactNode;
  prompt?: string;
  blink?: boolean;
  title?: string;
}

export function TerminalBox({ children, prompt = ">", blink = false, title }: TerminalBoxProps) {
  return (
    <div className="my-6 ring-neon overflow-hidden rounded">
      {title && (
        <div className="flex items-center gap-2 border-b border-[var(--border-soft)] bg-[var(--bg-elev)] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          <span className="size-2 rounded-full bg-[var(--neon-red)]" />
          <span className="size-2 rounded-full bg-[var(--neon-amber)]" />
          <span className="size-2 rounded-full bg-[var(--neon-green)]" />
          <span className="ml-2">{title}</span>
        </div>
      )}
      <div className="bg-[var(--bg-card)] p-4 font-mono text-sm leading-relaxed text-[var(--text-1)]">
        <div className="flex gap-2">
          <span className="select-none text-[var(--neon-cyan)]">{prompt}</span>
          <div className={`flex-1 ${blink ? "caret" : ""}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
