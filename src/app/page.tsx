import Link from "next/link";
import { getAllPosts, getBlogStats } from "@/lib/posts";

const SECTIONS: Array<{ label: string; href: string; desc: string }> = [
  { label: "Posts", href: "/posts/", desc: "전체 본문" },
  { label: "Topics", href: "/topics/", desc: "주제 시리즈" },
  { label: "Coins", href: "/coins/btc/", desc: "자산별 분석" },
  { label: "On-Chain", href: "/onchain/", desc: "온체인 메트릭" },
  { label: "Regulation", href: "/regulation/", desc: "지역 규제" },
  { label: "Treasuries", href: "/treasuries/", desc: "기업 보유" },
  { label: "Institutional", href: "/institutional/", desc: "기관 진출" },
  { label: "Crises", href: "/crises/", desc: "사이클 위기" },
  { label: "Research", href: "/research/", desc: "학술 토픽" },
  { label: "Tags", href: "/tags/", desc: "태그 색인" },
];

export default function HomePage() {
  const posts = getAllPosts();
  const recent = posts.slice(0, 6);
  const featured = posts.find((p) => /bitcoin-21m|bitcoin-macro/i.test(p.slug)) ?? posts[0];
  const others = posts.filter((p) => p.slug !== featured?.slug).slice(0, 8);
  const stats = getBlogStats();

  return (
    <>
      {/* Hero — Apple-style oversized type */}
      <section className="relative">
        <div className="mx-auto max-w-[1180px] px-6 pt-16 pb-14 md:pt-28 md:pb-24">
          <div className="mb-5 flex items-center gap-2 font-sans text-[12px] font-medium tracking-tight text-[var(--ink-3)] md:text-[13px]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--signal)]" aria-hidden />
            <span>{stats.publishedPosts} essays · academic deep-dive · 한국어</span>
          </div>
          <h1 className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.028em] text-[var(--ink-1)] sm:text-[56px] md:text-[80px] lg:text-[104px]">
            <span className="block">암호자산을</span>
            <span className="block">
              학술{" "}
              <span className="font-serif italic font-medium text-[var(--signal)]">framework</span>
              으로
            </span>
            <span className="block text-[var(--ink-3)]">깊이 읽다.</span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-[16px] leading-[1.55] text-[var(--ink-2)] md:mt-8 md:text-[20px] md:leading-[1.5]">
            매크로 사이클 · 온체인 메트릭 · 산업 모멘텀의 framework 으로 매주 한 편씩.
            NY Fed · BIS · NBER · RFS 1차 자료를 정직하게 인용. 강성현 강연 톤.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <Link
              href="/posts/"
              className="tap-target inline-flex items-center gap-2 rounded-full bg-[var(--ink-1)] px-6 py-3 font-sans text-[15px] font-semibold tracking-tight text-[var(--bg-base)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              본문 읽기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <Link
              href="/search/"
              className="tap-target inline-flex items-center gap-2 rounded-full border border-[var(--rule)] bg-transparent px-6 py-3 font-sans text-[15px] font-semibold tracking-tight text-[var(--ink-1)] transition-colors hover:bg-[var(--bg-elev)]"
            >
              검색
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="border-t border-[var(--rule)]">
          <div className="mx-auto max-w-[1180px] px-6 py-12 md:py-20">
            <div className="mb-6 flex items-baseline justify-between md:mb-8">
              <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-3)]">
                Featured
              </h2>
              <Link
                href="/posts/"
                className="font-sans text-[13px] font-medium text-[var(--signal)] hover:underline"
              >
                전체 →
              </Link>
            </div>
            <Link
              href={`/posts/${featured.slug}/`}
              className="group block"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
                <div>
                  <div className="mb-3 flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--ink-3)]">
                    <span>{featured.category}</span>
                    {featured.coin && featured.coin !== "NONE" && (
                      <>
                        <span aria-hidden>·</span>
                        <span className="text-[var(--signal)]">{featured.coin}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-display text-[28px] font-bold leading-[1.08] tracking-[-0.022em] text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] sm:text-[36px] md:text-[52px]">
                    {featured.title}
                  </h3>
                  {featured.subtitle && (
                    <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.55] text-[var(--ink-2)] md:mt-4 md:text-[18px]">
                      {featured.subtitle}
                    </p>
                  )}
                </div>
                <time className="font-sans text-[12px] tabular-nums text-[var(--ink-4)] md:text-[13px]">
                  {featured.publishedAt}
                </time>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Recent grid */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 py-12 md:py-20">
          <div className="mb-6 flex items-baseline justify-between md:mb-10">
            <h2 className="font-display text-[24px] font-bold tracking-[-0.018em] text-[var(--ink-1)] md:text-[32px]">
              최근 글
            </h2>
            <Link
              href="/posts/"
              className="font-sans text-[13px] font-medium text-[var(--signal)] hover:underline"
            >
              모두 보기 →
            </Link>
          </div>
          <ol className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((p, i) => (
              <li key={p.slug} className="border-t border-[var(--rule)]">
                <Link
                  href={`/posts/${p.slug}/`}
                  className="group block py-5 transition-colors active:bg-[var(--bg-soft)]"
                >
                  <div className="mb-2 flex items-center gap-2 font-sans text-[10.5px] font-medium uppercase tracking-[0.12em] text-[var(--ink-4)]">
                    <span className="font-mono tabular-nums text-[var(--signal)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{p.category}</span>
                    {p.coin && p.coin !== "NONE" && <span>· {p.coin}</span>}
                  </div>
                  <h3 className="font-display text-[18px] font-semibold leading-[1.25] tracking-[-0.012em] text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] md:text-[19px]">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="mt-1.5 line-clamp-2 font-serif text-[13.5px] leading-[1.55] text-[var(--ink-3)]">
                      {p.subtitle}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Browse — section grid */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 py-12 md:py-20">
          <h2 className="mb-6 font-display text-[24px] font-bold tracking-[-0.018em] text-[var(--ink-1)] md:mb-10 md:text-[32px]">
            둘러보기
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--rule)] bg-[var(--bg-elev)] px-4 py-5 transition-colors hover:border-[var(--signal)] hover:bg-[var(--bg-card)] md:px-5 md:py-6"
                >
                  <span className="mb-6 font-display text-[18px] font-semibold tracking-[-0.012em] text-[var(--ink-1)] md:text-[20px]">
                    {s.label}
                  </span>
                  <span className="font-sans text-[12px] text-[var(--ink-3)]">{s.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* List of remaining recent */}
      {others.length > 0 && (
        <section className="border-t border-[var(--rule)]">
          <div className="mx-auto max-w-[1180px] px-6 py-12 md:py-20">
            <h2 className="mb-6 font-display text-[24px] font-bold tracking-[-0.018em] text-[var(--ink-1)] md:mb-8 md:text-[32px]">
              계속 읽기
            </h2>
            <ol className="divide-y divide-[var(--rule)]">
              {others.map((p, i) => (
                <li key={p.slug}>
                  <Link
                    href={`/posts/${p.slug}/`}
                    className="group grid grid-cols-[28px_1fr_auto] items-baseline gap-3 py-4 active:bg-[var(--bg-soft)] md:grid-cols-[40px_1fr_auto] md:gap-5 md:py-5"
                  >
                    <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)] md:text-[12px]">
                      {String(i + 7).padStart(2, "0")}
                    </span>
                    <h3 className="truncate font-display text-[15px] font-medium tracking-tight text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] md:text-[17px]">
                      {p.title}
                    </h3>
                    <time className="font-mono text-[10.5px] tabular-nums text-[var(--ink-4)] md:text-[12px]">
                      {p.publishedAt}
                    </time>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Editorial colophon */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto max-w-[1180px] px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <h3 className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--signal)]">
                Editorial Stance
              </h3>
              <p className="font-serif text-[15px] leading-[1.65] text-[var(--ink-2)]">
                투자 자문 아님. 모든 본문은 공개 데이터 기반 학술 framework 분석. 1차 자료(NY Fed · BIS · Cong et al. RFS) 정직 인용. 양쪽 시각 균형, 미스터리는 미스터리로 인정.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--signal)]">
                Tone
              </h3>
              <p className="font-serif text-[15px] leading-[1.65] text-[var(--ink-2)]">
                강성현 강연 톤. 학술 강의 + 비판적·객관적 + 깊은 역사적 맥락 + 친근한 비유. 5,000–8,000자/편.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--signal)]">
                Author
              </h3>
              <p className="font-serif text-[15px] leading-[1.65] text-[var(--ink-2)]">
                이찬희 (pollmap). 충북대 경영 · CUFA · KDA 키움 4기.{" "}
                <a
                  href="https://github.com/pollmap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--signal)] underline decoration-[var(--rule-strong)] underline-offset-4 hover:decoration-[var(--signal)]"
                >
                  github
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
