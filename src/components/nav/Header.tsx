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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--rule)] bg-[var(--bg-base)] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-4 md:h-16 md:px-6 md:gap-5">
          <Link
            href="/"
            className="flex items-center gap-2 font-sans text-[15px] font-bold tracking-tight text-[var(--ink-1)] md:text-[16px]"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-[var(--primary)] text-[14px] font-bold leading-none text-white">
              ⌬
            </span>
            <span>luxon-crypto-lab</span>
          </Link>

          <nav
            className="ml-2 hidden flex-1 items-center gap-0 lg:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-1.5 font-sans text-[14px] font-medium tracking-tight text-[var(--ink-2)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink-1)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <Link
              href="/search/"
              aria-label="검색"
              className="hidden items-center gap-2 rounded-full border border-[var(--rule)] bg-[var(--bg-soft)] px-3 py-1.5 font-sans text-[12.5px] text-[var(--ink-3)] transition-colors hover:border-[var(--rule-strong)] hover:text-[var(--ink-1)] md:flex"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
              <span>검색</span>
              <kbd className="ml-1 rounded border border-[var(--rule)] bg-[var(--bg-base)] px-1.5 font-mono text-[10px] text-[var(--ink-4)]">/</kbd>
            </Link>

            <Link
              href="/search/"
              aria-label="검색"
              className="tap-target rounded text-[var(--ink-3)] hover:bg-[var(--bg-elev)] hover:text-[var(--ink-1)] md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
            </Link>

            <a
              href="https://github.com/pollmap/luxon-crypto-lab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="tap-target rounded text-[var(--ink-3)] hover:bg-[var(--bg-elev)] hover:text-[var(--ink-1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.1-3.2.69-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.65.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .3.21.67.8.55C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
              </svg>
            </a>

            <button
              type="button"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="tap-target rounded text-[var(--ink-3)] hover:bg-[var(--bg-elev)] hover:text-[var(--ink-1)] lg:hidden"
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
          className="fixed inset-x-0 top-14 z-30 h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-[var(--rule)] bg-[var(--bg-base)] lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="mx-auto max-w-[640px] px-5 pt-4 pb-12" aria-label="Mobile">
            <ul className="divide-y divide-[var(--rule)]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3.5 font-sans text-[16px] font-medium text-[var(--ink-1)] active:bg-[var(--bg-elev)]"
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
            <div className="mt-4 border-t border-[var(--rule)] pt-4">
              <Link
                href="/search/"
                className="flex items-center gap-3 rounded-md bg-[var(--bg-elev)] px-4 py-3"
                onClick={() => setOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--primary)]" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3-3" />
                </svg>
                <span className="font-sans text-[14.5px] text-[var(--ink-1)]">전체 본문 검색</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
