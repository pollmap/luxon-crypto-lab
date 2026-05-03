import Link from "next/link";
import { COINS } from "@/lib/coins";
import { getAllPosts } from "@/lib/posts";
import { GlowText } from "@/components/neon/GlowText";
import { GridBackground } from "@/components/neon/GridBackground";
import { HashBadge } from "@/components/neon/HashBadge";
import { TerminalBox } from "@/components/neon/TerminalBox";
import { MotionFadeIn } from "@/components/neon/MotionFadeIn";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <GridBackground />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-[var(--border-glow)] bg-[var(--bg-elev)] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--neon-cyan)]">
            <span className="size-1.5 animate-pulse rounded-full bg-[var(--neon-cyan)]" />
            12 months · 12 posts · macro × cycle × momentum
          </div>
          <h1 className="mb-6 font-mono text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            <GlowText color="cyan">Top 10</GlowText>{" "}
            <span className="text-[var(--text-1)]">cryptocurrency</span>
            <br />
            <span className="text-[var(--text-1)]">monthly</span>{" "}
            <GlowText color="magenta">deep dive</GlowText>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-[var(--text-2)] md:text-xl">
            시가총액 Top 10 코인을 매크로 사이클(Fed·DXY·M2)과 온체인 메트릭(NVT·MVRV·해시·Burn yield),
            그리고 산업 턴어라운드·모멘텀 관점에서 매월 한 편씩 deep dive 합니다.
            한국어 권역에서 거의 다루지 않는 영문 1차 소스(Messari·Glassnode·BIS·NY Fed)를 정직하게 인용합니다.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/roadmap/"
              className="rounded border border-[var(--neon-cyan)] bg-[var(--neon-cyan)] px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-[var(--bg-base)] transition-all hover:bg-transparent hover:text-[var(--neon-cyan)]"
            >
              View Roadmap →
            </Link>
            <Link
              href="/posts/"
              className="rounded border border-[var(--border-glow)] px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-[var(--text-1)] transition-colors hover:border-[var(--neon-magenta)] hover:text-[var(--neon-magenta)]"
            >
              Read Posts
            </Link>
          </div>
        </div>
      </section>

      <MotionFadeIn>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between border-b border-[var(--border-soft)] pb-4">
            <h2 className="font-mono text-2xl font-bold uppercase tracking-wider text-[var(--neon-cyan)] glow-cyan">
              ▎12-month roadmap
            </h2>
            <Link href="/roadmap/" className="font-mono text-xs uppercase tracking-wider text-[var(--text-2)] hover:text-[var(--neon-cyan)]">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
            {COINS.map((coin, i) => (
              <MotionFadeIn key={coin.symbol} delay={i * 0.04} y={12}>
                <Link
                  href={`/coins/${coin.symbol.toLowerCase()}/`}
                  className="group glass block rounded p-3 transition-all hover:ring-neon"
                >
                  <div className="mb-2 flex items-center justify-between font-mono text-xs text-[var(--text-3)]">
                    <span>#{String(coin.issue).padStart(2, "0")}</span>
                    <span>{coin.scheduledMonth}</span>
                  </div>
                  <div className="mb-2">
                    <HashBadge symbol={coin.symbol} category={coin.category} size="sm" />
                  </div>
                  <div className="text-xs leading-snug text-[var(--text-2)] group-hover:text-[var(--text-1)]">
                    {coin.signature}
                  </div>
                </Link>
              </MotionFadeIn>
            ))}
          </div>
        </section>
      </MotionFadeIn>

      <MotionFadeIn>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between border-b border-[var(--border-soft)] pb-4">
            <h2 className="font-mono text-2xl font-bold uppercase tracking-wider text-[var(--neon-magenta)] glow-magenta">
              ▎latest posts
            </h2>
            <Link href="/posts/" className="font-mono text-xs uppercase tracking-wider text-[var(--text-2)] hover:text-[var(--neon-magenta)]">
              All posts →
            </Link>
          </div>
        {posts.length === 0 ? (
          <TerminalBox title="status" blink>
            첫 글은 2026년 6월 1일 발행 예정 — Bitcoin: 디지털 금인가?
          </TerminalBox>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/posts/${p.slug}/`}
                className="group glass rounded p-5 transition-all hover:ring-neon"
              >
                <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[var(--text-3)]">
                  <HashBadge symbol={p.coin} size="sm" />
                  <span>#{String(p.issue).padStart(2, "0")}</span>
                  <span>·</span>
                  <time>{p.publishedAt}</time>
                </div>
                <h3 className="mb-2 text-lg font-bold leading-tight text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">
                  {p.title}
                </h3>
                {p.subtitle && (
                  <p className="text-sm text-[var(--text-2)]">{p.subtitle}</p>
                )}
              </Link>
            ))}
          </div>
        )}
        </section>
      </MotionFadeIn>
    </>
  );
}
