import Link from "next/link";
import { COINS } from "@/lib/coins";
import { getBlogStats } from "@/lib/posts";

export function Footer() {
  const stats = getBlogStats();
  const totalSubIssues = COINS.reduce((acc, c) => acc + (c.subIssues?.length ?? 0), 0);

  return (
    <footer className="mt-24 border-t border-[var(--border-soft)] bg-[var(--bg-elev)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider">
            <span className="text-[var(--neon-cyan)] glow-cyan">⌬</span>
            <span className="text-[var(--text-1)]">luxon-crypto-lab</span>
          </div>
          <p className="mb-4 text-sm text-[var(--text-2)]">
            Top 10 시가총액 코인을 매크로 사이클 × 온체인 메트릭 × 모멘텀 관점으로 매월 한 편씩 deep dive.
          </p>
          <p className="text-xs text-[var(--text-3)]">
            작성자: <span className="text-[var(--text-2)]">@pollmap</span> · 충북대 경영 · CUFA 회장 · KDA 키움 4기
          </p>
          <p className="mt-1 text-xs text-[var(--text-3)]">
            포지션: <span className="text-[var(--neon-magenta)]">Discretionary Trend-Following Macro Trader</span>
          </p>
        </div>

        <div>
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">Series</div>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/" className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]">홈</Link></li>
            <li><Link href="/posts/" className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]">전체 글</Link></li>
            <li><Link href="/roadmap/" className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]">12개월 로드맵</Link></li>
            <li><Link href="/about/" className="text-[var(--text-2)] hover:text-[var(--neon-cyan)]">About</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">Stats</div>
          <dl className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between">
              <dt className="text-[var(--text-3)]">Published</dt>
              <dd className="text-[var(--neon-cyan)]">{stats.publishedPosts}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--text-3)]">Draft</dt>
              <dd className="text-[var(--neon-magenta)]">{stats.draftPosts}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--text-3)]">Planned</dt>
              <dd className="text-[var(--text-1)]">{totalSubIssues}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--text-3)]">Coins</dt>
              <dd className="text-[var(--text-1)]">{COINS.length}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="border-t border-[var(--border-soft)] py-4 text-center font-mono text-xs text-[var(--text-3)]">
        © 2026 pollmap · MIT License · Built with Next.js · Deployed on GitHub Pages ·{" "}
        <a
          href="https://github.com/pollmap/luxon-crypto-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--neon-cyan)]"
        >
          source
        </a>
      </div>
    </footer>
  );
}
