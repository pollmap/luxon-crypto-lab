"use client";

import Link from "next/link";
import { useState } from "react";
import { GlowText } from "@/components/neon/GlowText";

const NAV_ITEMS = [
  { href: "/", label: "HOME" },
  { href: "/posts/", label: "POSTS" },
  { href: "/exchanges/", label: "EXCH" },
  { href: "/topics/", label: "TOPICS" },
  { href: "/regulation/", label: "REGUL" },
  { href: "/treasuries/", label: "TREAS" },
  { href: "/institutional/", label: "INSTIT" },
  { href: "/crises/", label: "CRISES" },
  { href: "/research/", label: "RES" },
  { href: "/onchain/", label: "ONCHAIN" },
  { href: "/tags/", label: "TAGS" },
  { href: "/search/", label: "SEARCH" },
  { href: "/about/", label: "ABOUT" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[rgba(10,10,15,0.85)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider"
          onClick={() => setOpen(false)}
        >
          <span className="text-[var(--neon-cyan)] glow-cyan">⌬</span>
          <span className="text-[var(--text-1)]">luxon</span>
          <GlowText color="magenta">crypto</GlowText>
          <span className="text-[var(--text-3)]">_lab</span>
        </Link>

        <nav className="hidden items-center gap-1 font-mono text-xs uppercase tracking-wider lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-2 py-1.5 text-[var(--text-2)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--neon-cyan)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="메뉴 토글"
          aria-expanded={open}
          className="rounded border border-[var(--border-soft)] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-2)] hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--border-soft)] bg-[rgba(10,10,15,0.95)] lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 font-mono text-sm uppercase tracking-wider">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-2.5 text-[var(--text-2)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--neon-cyan)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
