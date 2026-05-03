import Link from "next/link";
import { COINS } from "@/lib/coins";
import { getBlogStats } from "@/lib/posts";

const TRACK_RECORD = [
  { label: "DOGE", note: "150원 → 600원대" },
  { label: "Mitsui E&S", note: "조선·중공업 턴 ~2배" },
  { label: "Palantir", note: "저점 성장주 +30%" },
];

const BIO_TAGS = ["충북대 경영", "CUFA 회장", "KDA 4기", "디지털자산 트랙"];

export function ProfileCard() {
  const stats = getBlogStats();
  const totalSubIssues = COINS.reduce((acc, c) => acc + (c.subIssues?.length ?? 0), 0);

  return (
    <aside className="glass rounded p-5">
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex size-12 items-center justify-center rounded font-mono text-2xl font-bold"
          style={{
            color: "var(--neon-cyan)",
            border: "1px solid var(--neon-cyan)",
            boxShadow: "0 0 12px rgba(0,255,255,0.3), inset 0 0 12px rgba(0,255,255,0.1)",
          }}
        >
          ⌬
        </div>
        <div>
          <div className="font-mono text-base font-bold text-[var(--text-1)]">pollmap</div>
          <div className="font-mono text-xs text-[var(--text-3)]">@pollmap · github</div>
        </div>
      </div>

      <p className="mb-3 text-sm text-[var(--neon-cyan)] glow-cyan">
        Discretionary Trend-Following Macro Trader
      </p>
      <p className="mb-4 text-xs leading-relaxed text-[var(--text-2)]">
        매크로 사이클과 산업 턴어라운드를 직관적으로 포착하고, 작은 탐색 진입 후 맞는 포지션에
        피라미딩하는 집중형 추세추종 투자자.
      </p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {BIO_TAGS.map((tag) => (
          <span
            key={tag}
            className="rounded border border-[var(--border-soft)] px-2 py-0.5 font-mono text-xs text-[var(--text-3)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <dl className="mb-4 grid grid-cols-3 gap-2 border-y border-[var(--border-soft)] py-3 font-mono text-xs">
        <div>
          <dt className="text-[var(--text-3)]">PUBLISHED</dt>
          <dd className="mt-0.5 text-base font-bold text-[var(--neon-cyan)]">{stats.publishedPosts}</dd>
        </div>
        <div>
          <dt className="text-[var(--text-3)]">DRAFT</dt>
          <dd className="mt-0.5 text-base font-bold text-[var(--neon-magenta)]">{stats.draftPosts}</dd>
        </div>
        <div>
          <dt className="text-[var(--text-3)]">PLANNED</dt>
          <dd className="mt-0.5 text-base font-bold text-[var(--text-1)]">{totalSubIssues}</dd>
        </div>
      </dl>

      <div className="mb-4">
        <div className="mb-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎track record
        </div>
        <ul className="space-y-1 font-mono text-xs">
          {TRACK_RECORD.map((t) => (
            <li key={t.label} className="flex items-baseline justify-between gap-2">
              <span className="text-[var(--neon-green)]">{t.label}</span>
              <span className="text-right text-[var(--text-3)]">{t.note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 font-mono text-xs">
        <a
          href="https://github.com/pollmap"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-[var(--border-glow)] px-2.5 py-1 text-[var(--text-2)] hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]"
        >
          GitHub
        </a>
        <a
          href="https://github.com/pollmap/luxon-crypto-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-[var(--border-glow)] px-2.5 py-1 text-[var(--text-2)] hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]"
        >
          Repo
        </a>
        <Link
          href="/about/"
          className="rounded border border-[var(--border-glow)] px-2.5 py-1 text-[var(--text-2)] hover:border-[var(--neon-magenta)] hover:text-[var(--neon-magenta)]"
        >
          About
        </Link>
      </div>
    </aside>
  );
}
