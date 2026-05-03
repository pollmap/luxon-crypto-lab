import Link from "next/link";
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
  { href: "/about/", label: "ABOUT" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[rgba(10,10,15,0.7)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider">
          <span className="text-[var(--neon-cyan)] glow-cyan">⌬</span>
          <span className="text-[var(--text-1)]">luxon</span>
          <GlowText color="magenta">crypto</GlowText>
          <span className="text-[var(--text-3)]">_lab</span>
        </Link>
        <nav className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-1.5 text-[var(--text-2)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--neon-cyan)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
