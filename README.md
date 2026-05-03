# luxon-crypto-lab

> Top 10 시가총액 코인을 매크로 사이클 × 온체인 메트릭 × 모멘텀 관점으로 매월 한 편씩 deep dive 하는 한국어 리서치 블로그.

[![Deploy to GitHub Pages](https://github.com/pollmap/luxon-crypto-lab/actions/workflows/deploy.yml/badge.svg)](https://github.com/pollmap/luxon-crypto-lab/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Live**: https://pollmap.github.io/luxon-crypto-lab/

---

## 무엇

- **자산**: 시가총액 Top 10 (BTC · ETH · SOL · BNB · XRP · TRX · Stables · DOGE · FIGR_HELOC · 신규)
- **주기**: 월간 1편 deep dive (2026년 6월 1일 BTC 1호 시작 → 2027년 5월 종합 12호)
- **프레임**: 공통 70%(토크노믹스 · 합의 · 생태계 · 매크로 · 리스크) + 코인별 시그니처 30%
- **소스**: 영문 1차 (Messari · Glassnode · BIS · NY Fed · 학술 저널)

상세 캘린더 → `/roadmap/`

---

## 분석 프레임 — 3축 결합

| 축 | 사용 지표 |
|------|---------|
| **매크로 사이클** | Fed funds · DXY · M2 · 실질금리 · ETF flow |
| **온체인 메트릭** | NVT · MVRV · 해시레이트 · burn rate · 검증자 경제학 |
| **산업 턴어라운드 · 모멘텀** | 업그레이드 사이클 · 규제 · 내러티브 전환점 |

작성자 포지셔닝 = 가치투자자 X, **재량형 매크로 추세추종 투자자**. 가치분석은 도구로만 사용.

---

## 스택

```
Next.js 16 (App Router · static export) · React 19 · TypeScript · Tailwind v4
MDX (@next/mdx · remark-gfm · rehype-slug)
recharts · Framer Motion
GitHub Actions → GitHub Pages
```

폰트: JetBrains Mono (모노 본문) · Inter (긴 본문 보조)
디자인: 사이버펑크 네온 다크 (`#0a0a0f` 배경 · 시안/마젠타 액센트)

---

## 로컬 빌드

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # → out/ 정적 빌드
npm run lint         # ESLint
```

`next.config.ts` 의 `basePath` 는 `production` 빌드에서만 `/luxon-crypto-lab` 적용 (로컬 dev 영향 없음).

### Pre-commit hook 활성화 (1회)

```bash
git config core.hooksPath .githooks
```

VPS IP · 실명 · 토큰 · private key 등 금지 패턴을 staged 파일에서 자동 grep. 발견 시 commit 차단.

---

## 디렉토리 구조

```
src/
├── app/                          # App Router 라우트
│   ├── page.tsx                  # 홈
│   ├── posts/[slug]/page.tsx     # 동적 MDX 글
│   ├── coins/[symbol]/page.tsx   # 코인별 페이지
│   ├── roadmap/page.tsx          # 12개월 캘린더
│   └── about/page.tsx            # 시리즈 소개
├── components/
│   ├── neon/                     # GlowText·GridBackground·HashBadge·TerminalBox
│   ├── charts/                   # PriceChart·ETFFlowChart·HalvingTimeline·CorrelationHeatmap
│   ├── post/                     # PostHeader·TOC·Callout·SourceFootnote
│   └── nav/                      # Header·Footer
├── content/posts/                # MDX 본문 (1글 = 1파일)
├── lib/
│   ├── coins.ts                  # 12회차 메타 단일 진실원
│   └── posts.ts                  # MDX frontmatter 로딩 (gray-matter)
└── mdx-components.tsx            # 글로벌 MDX 컴포넌트 매핑
```

---

## 새 글 추가 가이드

상세는 [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md) 참고. 요약:

1. `src/content/posts/<slug>.mdx` 생성
2. frontmatter (slug · title · subtitle · coin · issue · publishedAt · category · sources · draft) 작성
3. `draft: true` 면 빌드 결과 비공개. 발행 시 제거
4. 본문에 `<HalvingTimeline />`, `<ETFFlowChart />`, `<CorrelationHeatmap />`, `<Callout type="opposing-view">` 등 컴포넌트 직접 임베드 가능
5. push to `main` → GitHub Actions 자동 배포

---

## 보안 / 기여 / 라이센스

- 보안 정책: [`SECURITY.md`](SECURITY.md)
- 기여 가이드: [`CONTRIBUTING.md`](CONTRIBUTING.md)
- 라이센스: [`LICENSE`](LICENSE) (MIT)
- 작성자: [@pollmap](https://github.com/pollmap)

---

## 디스클레이머

본 사이트의 모든 글은 분석이며 매수/매도 추천이 아닙니다. 개인 리서치 기록입니다.
