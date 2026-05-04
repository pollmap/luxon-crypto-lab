"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_ITEMS: Array<{ href: string; label: string }> = [
  { href: "/posts/", label: "Posts" },
  { href: "/topics/", label: "Topics" },
  { href: "/coins/btc/", label: "Coins" },
  { href: "/onchain/", label: "On-Chain" },
  { href: "/regulation/", label: "Regulation" },
  { href: "/research/", label: "Research" },
  { href: "/tags/", label: "Tags" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--rule)] bg-[rgba(0,0,0,0.72)] backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-14 max-w-[1180px] items-center gap-2 px-4 md:h-16 md:px-6">
          <Link
            href="/"
            className="-ml-1 flex h-11 items-center gap-1.5 px-2 font-display text-[15px] font-semibold tracking-[-0.01em] text-[var(--ink-1)] md:text-[16px]"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden className="text-[var(--signal)] text-[18px] leading-none">⌬</span>
            <span>luxon</span>
            <span className="text-[var(--ink-3)]">·</span>
            <span className="text-[var(--ink-2)]">crypto</span>
          </Link>

          <nav
            className="ml-2 hidden flex-1 items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 font-sans text-[13px] font-medium tracking-tight text-[var(--ink-2)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink-1)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <Link
              href="/search/"
              aria-label="검색"
              className="tap-target rounded-full text-[var(--ink-2)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink-1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
            </Link>

            <button
              type="button"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="tap-target rounded-full text-[var(--ink-2)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink-1)] lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-14 z-30 h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-[var(--rule)] bg-[rgba(0,0,0,0.96)] backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="mx-auto max-w-[640px] px-6 pt-6 pb-12" aria-label="Mobile">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-[20px] font-semibold tracking-tight text-[var(--ink-1)] active:bg-[var(--bg-elev)]"
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--ink-4)]" aria-hidden>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-[var(--rule)] pt-6">
              <Link
                href="/search/"
                className="flex items-center gap-3 rounded-xl bg-[var(--bg-elev)] px-4 py-3.5"
                onClick={() => setOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--signal)]" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3-3" />
                </svg>
                <span className="font-sans text-[15px] text-[var(--ink-1)]">전체 본문 검색</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
