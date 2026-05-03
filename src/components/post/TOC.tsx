"use client";

import { useEffect, useState } from "react";

interface TOCEntry {
  id: string;
  text: string;
  level: number;
}

export function TOC() {
  const [entries, setEntries] = useState<TOCEntry[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3"),
    );
    const list: TOCEntry[] = headings
      .filter((h) => h.id)
      .map((h) => ({
        id: h.id,
        text: h.textContent ?? "",
        level: Number(h.tagName.substring(1)),
      }));
    setEntries(list);

    const observer = new IntersectionObserver(
      (items) => {
        const visible = items.find((it) => it.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0% -70% 0%" },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (entries.length === 0) return null;

  return (
    <nav className="sticky top-8 hidden text-sm xl:block" aria-label="Table of contents">
      <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        목차 / Contents
      </div>
      <ol className="space-y-2 border-l border-[var(--border-soft)]">
        {entries.map((e) => (
          <li key={e.id} style={{ paddingLeft: e.level === 3 ? "1.25rem" : "0.5rem" }}>
            <a
              href={`#${e.id}`}
              className={`block py-0.5 transition-colors ${
                active === e.id
                  ? "text-[var(--neon-cyan)] glow-cyan"
                  : "text-[var(--text-3)] hover:text-[var(--text-2)]"
              }`}
            >
              {e.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
