import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[760px] px-5 pt-12 pb-20 md:px-6 md:pt-20 md:pb-28">
      <header className="mb-10 md:mb-14">
        <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-3)]">
          About
        </div>
        <h1 className="font-display text-[40px] font-bold leading-[1.04] tracking-[-0.024em] text-[var(--ink-1)] md:text-[64px]">
          왜 이 lab 인가
        </h1>
      </header>

      <article className="space-y-7 font-serif text-[16.5px] leading-[1.7] text-[var(--ink-1)] md:text-[18px]">
        <p>
          한국어 권역에서 코인 분석은 (1) 차트 기술적 분석 (2) 호재·악재 뉴스 요약 (3) 단발성 코인 소개로
          수렴합니다. <strong className="font-semibold text-[var(--ink-1)]">매크로 사이클과 온체인 메트릭을 동일
          프레임으로 누적하는 학술 시리즈는 사실상 부재</strong>합니다.
        </p>
        <p>
          <span className="text-[var(--signal)]">luxon-crypto-lab</span> 은 시가총액 Top 10 코인을 동일한
          5개 섹션 — 토크노믹스 · 합의 · 생태계 · 매크로 · 리스크 + 코인별 시그니처 앵글 — 으로 분석합니다.
        </p>

        <Section title="Analytical Frame">
          <p>본 사이트의 분석 프레임은 세 축의 결합입니다.</p>
          <ul className="mt-4 space-y-2">
            <BulletItem k="매크로 사이클">Fed funds · DXY · M2 · 실질금리. 코인은 매크로 자산.</BulletItem>
            <BulletItem k="온체인 메트릭">NVT · MVRV · 해시레이트 · burn rate · 검증자 경제학.</BulletItem>
            <BulletItem k="산업 턴어라운드 · 모멘텀">ETF flow · 업그레이드 사이클 · 규제 변화 · 내러티브 전환점.</BulletItem>
          </ul>
        </Section>

        <Section title="Positioning">
          <PositioningCard />
          <p className="mt-4 text-[15px]">
            작성자는 가치투자자가 아닙니다.{" "}
            <strong className="font-semibold text-[var(--ink-1)]">
              Discretionary Trend-Following Macro Trader
            </strong>{" "}
            — 매크로 사이클과 산업 턴어라운드를 직관적으로 포착하고, 작은 탐색 진입(20–30%) 후 맞는 포지션에
            피라미딩하는 집중형 추세추종 투자자입니다 (스타일 결: 드러켄밀러 · 폴 튜더 존스 · 빌 애크먼).
          </p>
          <p className="mt-3 text-[15px]">
            가치분석 · 재무제표 · DCF · 토크노믹스는{" "}
            <em className="font-medium text-[var(--signal)]">판단 도구</em>로 사용하되, 실제 수익은
            사이클·모멘텀·집중 베팅에서 나옵니다.
          </p>
        </Section>

        <Section title="5 Axes of Differentiation">
          <ol className="space-y-3 text-[15px]">
            <NumberedItem n="01" k="자산 선정">Top 10 + RWA(FIGR_HELOC) 정면 케이스</NumberedItem>
            <NumberedItem n="02" k="프레임">매크로 × 온체인 × 모멘텀 동일 템플릿 누적</NumberedItem>
            <NumberedItem n="03" k="소스">Messari · Glassnode · BIS · NY Fed · 학술 저널 1차 인용</NumberedItem>
            <NumberedItem n="04" k="이력">충북대 경영 · CUFA 회장 · KDA 키움 4기 · DOGE 150→600 트랙</NumberedItem>
            <NumberedItem n="05" k="정직">모든 섹션에 &quot;데이터의 한계&quot;, &quot;반대 시각&quot; 박스 의무 배치</NumberedItem>
          </ol>
        </Section>

        <Section title="Stack">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <StackItem k="Framework">Next.js 16 · React 19</StackItem>
            <StackItem k="Styling">Tailwind v4 · CSS variables</StackItem>
            <StackItem k="Content">MDX · gray-matter · Newsreader serif</StackItem>
            <StackItem k="Charts">Recharts · DeFiLlama API</StackItem>
            <StackItem k="Deploy">Vercel · GitHub Actions</StackItem>
            <StackItem k="Search">Static index · client filter</StackItem>
          </dl>
        </Section>

        <Section title="Disclaimer">
          <p className="text-[14.5px] text-[var(--ink-2)]">
            본 사이트의 모든 글은 학술 분석 기록이며 매수/매도 권유가 아닙니다. 개인 리서치 기록입니다.
            투자 결정은 본인 책임.
          </p>
        </Section>

        <div className="pt-6">
          <Link
            href="/posts/"
            className="tap-target inline-flex items-center gap-2 rounded-full bg-[var(--ink-1)] px-6 py-3 font-sans text-[15px] font-semibold tracking-tight text-[var(--bg-base)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            본문 읽으러 가기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[var(--rule)] pt-7 md:pt-10">
      <h2 className="mb-4 font-display text-[22px] font-bold tracking-[-0.018em] text-[var(--ink-1)] md:text-[28px]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletItem({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1 sm:grid-cols-[180px_1fr]">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.06em] text-[var(--signal)]">
        {k}
      </span>
      <span className="font-serif text-[15px] text-[var(--ink-2)]">{children}</span>
    </li>
  );
}

function NumberedItem({ n, k, children }: { n: string; k: string; children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[28px_max-content_1fr] items-baseline gap-x-3 sm:grid-cols-[32px_120px_1fr]">
      <span className="font-mono text-[12px] tabular-nums text-[var(--signal)]">{n}</span>
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.06em] text-[var(--ink-1)]">
        {k}
      </span>
      <span className="font-serif text-[15px] text-[var(--ink-2)]">{children}</span>
    </li>
  );
}

function StackItem({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[var(--rule)] pt-3">
      <dt className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-3)]">
        {k}
      </dt>
      <dd className="mt-1 font-sans text-[14px] text-[var(--ink-1)]">{children}</dd>
    </div>
  );
}

function PositioningCard() {
  return (
    <aside className="rounded-2xl border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-4 md:px-6 md:py-5">
      <div className="mb-1.5 font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--dust)]">
        Positioning
      </div>
      <p className="font-sans text-[14.5px] leading-[1.55] text-[var(--ink-1)]">
        가치투자자 X · 재량형 매크로 추세추종 투자자 (with pyramiding)
      </p>
    </aside>
  );
}
