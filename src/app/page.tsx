import Link from "next/link";
import { getAllPosts, getBlogStats } from "@/lib/posts";

const HERO_LINKS: Array<{ label: string; href: string; desc: string }> = [
  { label: "Posts", href: "/posts/", desc: "전체 본문 색인" },
  { label: "Topics", href: "/topics/", desc: "주제 시리즈" },
  { label: "Coins", href: "/coins/btc/", desc: "자산별 분석" },
  { label: "On-Chain", href: "/onchain/", desc: "온체인 메트릭" },
  { label: "Treasuries", href: "/treasuries/", desc: "기업 보유" },
  { label: "Institutional", href: "/institutional/", desc: "기관 진출" },
  { label: "Crises", href: "/crises/", desc: "사이클 위기" },
  { label: "Regulation", href: "/regulation/", desc: "지역 규제" },
  { label: "Research", href: "/research/", desc: "학술 토픽" },
  { label: "Tags", href: "/tags/", desc: "태그 색인" },
];

export default function HomePage() {
  const posts = getAllPosts();
  const recent = posts.slice(0, 8);
  const stats = getBlogStats();

  return (
    <>
      {/* Wiki-style hero */}
      <section className="border-b border-[var(--rule)] bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-[1200px] px-5 pt-12 pb-10 md:px-6 md:pt-20 md:pb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-14">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary-light)] px-3 py-1 font-sans text-[12px] font-semibold text-[var(--primary-soft)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--primary)]" aria-hidden />
                <span>{stats.publishedPosts} essays · 학술 분석</span>
              </div>
              <h1 className="font-sans text-[34px] font-bold leading-[1.12] tracking-[-0.022em] text-[var(--ink-1)] sm:text-[42px] md:text-[52px]">
                암호자산 학술 위키
              </h1>
              <p className="mt-4 max-w-2xl font-sans text-[15.5px] leading-[1.7] text-[var(--ink-2)] md:text-[17px]">
                매크로 사이클 · 온체인 메트릭 · 산업 모멘텀의 framework 으로 매주 한 편씩.
                NY Fed · BIS · NBER · RFS 1차 자료를 정직하게 인용. 강성현 강연 톤.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
                <Link
                  href="/posts/"
                  className="tap-target inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-5 py-2.5 font-sans text-[14.5px] font-semibold tracking-tight text-white transition-colors hover:bg-[var(--primary-soft)]"
                >
                  본문 읽기 →
                </Link>
                <Link
                  href="/search/"
                  className="tap-target inline-flex items-center gap-2 rounded-md border border-[var(--rule-strong)] bg-[var(--bg-base)] px-5 py-2.5 font-sans text-[14.5px] font-semibold tracking-tight text-[var(--ink-1)] hover:bg-[var(--bg-elev)]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3-3" />
                  </svg>
                  검색
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-4 rounded-lg border border-[var(--rule)] bg-[var(--bg-base)] p-5 md:p-6">
              <Stat label="Posts" value={stats.publishedPosts} />
              <Stat label="Coins" value={stats.uniqueCoins} />
              <Stat label="Cats" value={stats.uniqueCategories} />
            </dl>
          </div>
        </div>
      </section>

      {/* Two-column: recent + index */}
      <section className="border-b border-[var(--rule)]">
        <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-6 md:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_280px] md:gap-12">
            <div>
              <div className="mb-4 flex items-baseline justify-between border-b border-[var(--rule)] pb-2">
                <h2 className="font-sans text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--ink-1)]">
                  최근 dispatches
                </h2>
                <Link
                  href="/posts/"
                  className="font-sans text-[13px] font-medium text-[var(--link)] hover:underline"
                >
                  전체 →
                </Link>
              </div>
              <ol className="divide-y divide-[var(--rule)]">
                {recent.map((p, i) => (
                  <li key={p.slug}>
                    <Link
                      href={`/posts/${p.slug}/`}
                      className="group grid grid-cols-[36px_minmax(0,1fr)_max-content] items-baseline gap-3 py-3.5 active:bg-[var(--bg-soft)] md:gap-5 md:py-4"
                    >
                      <span className="font-mono text-[11.5px] tabular-nums text-[var(--ink-4)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="truncate font-sans text-[15px] font-semibold leading-[1.3] tracking-tight text-[var(--ink-1)] group-hover:text-[var(--link)] md:text-[16px]">
                          {p.title}
                        </h3>
                        <div className="mt-0.5 flex items-baseline gap-2 font-sans text-[11px] text-[var(--ink-4)]">
                          <span className="text-[var(--primary)]">{p.category}</span>
                          {p.coin && p.coin !== "NONE" && <span>· {p.coin}</span>}
                          {p.tags && p.tags.length > 0 && (
                            <span className="hidden truncate md:inline">
                              · {p.tags.slice(0, 3).join(" · ")}
                            </span>
                          )}
                        </div>
                      </div>
                      <time className="font-mono text-[11px] tabular-nums text-[var(--ink-4)]">
                        {p.publishedAt}
                      </time>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <aside>
              <div className="mb-4 border-b border-[var(--rule)] pb-2">
                <h2 className="font-sans text-[14px] font-bold uppercase tracking-[0.08em] text-[var(--ink-1)]">
                  Index
                </h2>
              </div>
              <ul className="space-y-1">
                {HERO_LINKS.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="flex items-baseline justify-between gap-3 rounded px-2 py-1.5 font-sans text-[13.5px] text-[var(--ink-2)] hover:bg-[var(--bg-elev)] hover:text-[var(--link)]"
                    >
                      <span>{s.label}</span>
                      <span className="text-[11px] text-[var(--ink-4)]">{s.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Editorial colophon */}
      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-6 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <Pillar title="Editorial Stance">
              투자 자문 아님. 모든 본문은 공개 데이터 기반 학술 framework 분석. 1차 자료(NY Fed · BIS · Cong et al. RFS) 정직 인용. 양쪽 시각 균형, 미스터리는 미스터리로 인정.
            </Pillar>
            <Pillar title="Tone">
              강성현 강연 톤. 학술 강의 + 비판적·객관적 + 깊은 역사적 맥락 + 친근한 비유. 5,000–8,000자/편.
            </Pillar>
            <Pillar title="Author">
              <>이찬희 (pollmap). 충북대 경영 · CUFA · KDA 키움 4기.{" "}
              <a
                href="https://github.com/pollmap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--link)] hover:underline"
              >
                github
              </a>.</>
            </Pillar>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--ink-4)]">
        {label}
      </dt>
      <dd className="mt-1 font-sans text-[24px] font-bold tabular-nums tracking-tight text-[var(--ink-1)] md:text-[28px]">
        {value}
      </dd>
    </div>
  );
}

function Pillar({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t-2 border-[var(--primary)] pt-5">
      <h3 className="mb-2 font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--primary)]">
        {title}
      </h3>
      <p className="font-sans text-[14.5px] leading-[1.7] text-[var(--ink-2)]">{children}</p>
    </div>
  );
}
