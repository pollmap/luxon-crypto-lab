import Link from "next/link";
import { TerminalBox } from "@/components/neon/TerminalBox";
import { GlowText } from "@/components/neon/GlowText";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
          ▎about
        </div>
        <h1 className="font-mono text-4xl font-bold tracking-tight">
          <GlowText color="magenta">why this lab</GlowText>
        </h1>
      </header>

      <section className="prose prose-invert max-w-none space-y-6 text-[var(--text-2)]">
        <p>
          한국어 권역에서 코인 분석은 (1) 차트 기술적 분석 (2) 호재/악재 뉴스 요약 (3) 단발성 코인 소개로 수렴합니다.
          <strong className="text-[var(--text-1)]"> 매크로 사이클과 온체인 메트릭을 동일 프레임으로 12개월 누적하는 본격 시리즈는 사실상 부재</strong>합니다.
        </p>

        <p>
          <span className="text-[var(--neon-cyan)] glow-cyan">luxon-crypto-lab</span> 은 시가총액 Top 10 코인을
          12개월에 걸쳐 동일한 5개 섹션 — 토크노믹스 · 합의 · 생태계 · 매크로 · 리스크 + 코인별 시그니처 앵글 —
          으로 분석합니다.
        </p>

        <h2 className="mt-8 font-mono text-2xl text-[var(--neon-cyan)] glow-cyan">analytical frame</h2>
        <p>
          본 사이트의 분석 프레임은 다음 세 축의 결합입니다.
        </p>
        <ul className="space-y-2">
          <li><strong className="text-[var(--text-1)]">매크로 사이클</strong> — Fed funds·DXY·M2·실질금리. 코인은 매크로 자산.</li>
          <li><strong className="text-[var(--text-1)]">온체인 메트릭</strong> — NVT·MVRV·해시레이트·burn rate·검증자 경제학. 토큰의 펀더멘털.</li>
          <li><strong className="text-[var(--text-1)]">산업 턴어라운드 · 모멘텀</strong> — ETF flow·업그레이드 사이클·규제 변화·내러티브 전환점.</li>
        </ul>

        <h2 className="mt-8 font-mono text-2xl text-[var(--neon-cyan)] glow-cyan">positioning</h2>
        <Callout />
        <p className="text-sm">
          작성자는 가치투자자가 아닙니다. <strong className="text-[var(--text-1)]">Discretionary Trend-Following Macro Trader</strong> —
          매크로 사이클과 산업 턴어라운드를 직관적으로 포착하고, 작은 탐색 진입(20~30%) 후 맞는 포지션에
          피라미딩하는 집중형 추세추종 투자자입니다 (스타일 결: 드러켄밀러 · 폴 튜더 존스 · 빌 애크먼).
        </p>
        <p className="text-sm">
          가치분석 · 재무제표 · DCF · 토크노믹스는 <em>판단 도구</em>로 사용하되, 실제 수익은 사이클·모멘텀·집중 베팅에서
          나옵니다. 본 블로그도 같은 결로 작성됩니다 — 펀더멘털을 정독하되 결론은 매크로·턴어라운드·모멘텀 관점.
        </p>

        <h2 className="mt-8 font-mono text-2xl text-[var(--neon-cyan)] glow-cyan">5 axes of differentiation</h2>
        <ol className="space-y-2">
          <li><strong className="text-[var(--text-1)]">자산 선정</strong> — Top 10 + RWA(FIGR_HELOC) 정면 케이스</li>
          <li><strong className="text-[var(--text-1)]">프레임</strong> — 매크로 × 온체인 × 모멘텀 동일 템플릿 12개월 누적</li>
          <li><strong className="text-[var(--text-1)]">소스</strong> — Messari · Glassnode · BIS · NY Fed · 학술 저널 1차 인용</li>
          <li><strong className="text-[var(--text-1)]">이력</strong> — 충북대 경영 · CUFA 회장 · KDA 키움 4기 · DOGE 150→600 트랙</li>
          <li><strong className="text-[var(--text-1)]">정직</strong> — 모든 섹션에 &quot;데이터의 한계&quot;, &quot;반대 시각&quot; 박스 의무 배치</li>
        </ol>

        <h2 className="mt-8 font-mono text-2xl text-[var(--neon-cyan)] glow-cyan">stack</h2>
        <TerminalBox title="stack.json">
          Next.js 16 (static export) · React 19 · Tailwind v4
          <br />MDX · recharts · Framer Motion
          <br />GitHub Pages · GitHub Actions
        </TerminalBox>

        <h2 className="mt-8 font-mono text-2xl text-[var(--neon-cyan)] glow-cyan">disclaimer</h2>
        <p className="text-sm">
          본 사이트의 모든 글은 분석이며 매수/매도 추천이 아닙니다. 개인 리서치 기록입니다.
        </p>

        <div className="mt-12">
          <Link
            href="/roadmap/"
            className="inline-block rounded border border-[var(--neon-cyan)] px-5 py-2 font-mono text-sm uppercase tracking-wider text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-[var(--bg-base)]"
          >
            See 12-month roadmap →
          </Link>
        </div>
      </section>
    </div>
  );
}

function Callout() {
  return (
    <aside
      className="my-4 rounded p-4"
      style={{
        borderLeft: "3px solid var(--neon-magenta)",
        backgroundColor: "rgba(20, 20, 29, 0.7)",
        boxShadow: "inset 0 0 16px rgba(255, 0, 255, 0.07)",
      }}
    >
      <div className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--neon-magenta)]">
        positioning
      </div>
      <div className="text-sm text-[var(--text-2)]">
        가치투자자 X · 재량형 매크로 추세추종 투자자 (with Pyramiding)
      </div>
    </aside>
  );
}
