import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border-soft)] bg-[var(--bg-elev)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="mb-3 font-mono text-sm font-bold uppercase tracking-wider text-[var(--neon-cyan)] glow-cyan">
            luxon-crypto-lab
          </div>
          <p className="text-sm text-[var(--text-2)]">
            Top 10 시가총액 코인을 매크로와 가치투자 프레임으로 매월 deep dive.
          </p>
        </div>
        <div>
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">Series</div>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link href="/roadmap/" className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]">
                12개월 로드맵
              </Link>
            </li>
            <li>
              <Link href="/posts/" className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]">
                전체 글
              </Link>
            </li>
            <li>
              <Link href="/about/" className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">Source</div>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a
                href="https://github.com/pollmap/luxon-crypto-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]"
              >
                GitHub
              </a>
            </li>
            <li className="text-[var(--text-3)]">MIT License</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border-soft)] py-4 text-center font-mono text-xs text-[var(--text-3)]">
        © 2026 pollmap · Built with Next.js · Deployed on GitHub Pages
      </div>
    </footer>
  );
}
