# Design System — Cyberpunk Neon

## Tone

- 다크 사이버펑크. Solana / Phantom 지갑 / 터미널 UI 결.
- 정직한 데이터 리서치 톤. 과한 그라디언트 / 무지개 X.
- 모노스페이스 본문 = "코드처럼 정확한 분석"의 시그널.

## Color Tokens (`src/app/globals.css`)

| 토큰 | 값 | 용도 |
|------|----|----|
| `--bg-base` | `#0a0a0f` | 페이지 배경 |
| `--bg-elev` | `#12121a` | 카드 / 섹션 elevated |
| `--bg-card` | `#14141d` | 터미널 박스 내부 |
| `--neon-cyan` | `#00ffff` | 1차 액센트, 헤딩, 강조 |
| `--neon-magenta` | `#ff00ff` | 2차 액센트, 부제, hover 보조 |
| `--neon-green` | `#00ff88` | 양수 / 상승 / 긍정 |
| `--neon-red` | `#ff3366` | 음수 / 하락 / 리스크 |
| `--neon-amber` | `#ffaa00` | 경고 / PoW / 데이터 |
| `--text-1` | `#e8e8f0` | 본문 1차 |
| `--text-2` | `#9090a8` | 본문 2차 / 메타 |
| `--text-3` | `#5a5a72` | 보조 / placeholder |
| `--border-glow` | `rgba(0,255,255,0.3)` | 네온 보더 |
| `--border-soft` | `rgba(255,255,255,0.08)` | 일반 분할선 |

## Fonts

- **JetBrains Mono** (`--font-jetbrains`) — 본문 / UI 기본. 모노스페이스 톤.
- **Inter** (`--font-inter`) — 긴 산문 본문 보조 (필요 시 `font-sans` 클래스).

`next/font/google` 로 빌드 시 자가 호스팅. 런타임 외부 CDN 호출 없음.

## Typography Scale

| 용도 | 클래스 |
|------|------|
| Hero | `text-5xl md:text-7xl font-bold` |
| H1 (글) | `text-4xl md:text-5xl font-bold tracking-tight` |
| H2 (섹션) | `text-2xl font-bold tracking-tight glow-cyan` |
| H3 | `text-xl font-semibold` |
| 본문 | `leading-7 text-[var(--text-2)]` |
| 메타 | `font-mono text-xs uppercase tracking-wider text-[var(--text-3)]` |

## Utility Classes (CSS-defined)

```
.glow-cyan        text-shadow 시안 글로우
.glow-magenta     text-shadow 마젠타 글로우
.glow-green       text-shadow 그린 글로우
.glow-red         text-shadow 레드 글로우
.ring-neon        시안 box-shadow 보더
.ring-magenta     마젠타 box-shadow 보더
.glass            backdrop-filter blur 글래스
.caret            깜빡이는 터미널 caret (after pseudo)
```

## Visual Motifs

| 모티프 | 구현 위치 |
|--------|---------|
| 그리드 배경 | `<GridBackground />` SVG pattern + radial mask |
| 글래스 카드 | `.glass` + `border-soft` |
| 터미널 박스 | `<TerminalBox prompt=">" blink>` |
| 해시 뱃지 | `<HashBadge symbol="BTC" category="L1-PoW" />` |
| 글로우 텍스트 | `<GlowText color="cyan|magenta|green|red">` |
| 데이터 테이블 | dense grid + 양/음 색 코딩 (`--neon-green` / `--neon-red`) |

## 차트 톤

recharts 위에 다음 표준 적용:

- `CartesianGrid stroke="var(--border-soft)" strokeDasharray="2 4"`
- `XAxis/YAxis stroke="var(--text-3)" tick={{ fontSize: 11, fontFamily: "var(--font-mono)" }}`
- `Tooltip contentStyle={{ background: "var(--bg-elev)", border: "1px solid var(--border-glow)" }}`
- 양수 = `--neon-green` · 음수 = `--neon-red` · 라인 = `--neon-cyan`
- 영역(Area) = `linearGradient` 0.4 → 0 alpha

## 접근성

- 본문 대비 ≥ 4.5:1 (text-1/text-2 vs bg-base 검증 통과)
- 액센트 색은 강조용, 본문에는 글로우 텍스트 사용 자제
- 인터랙션 요소는 `:hover` `:focus-visible` 상태 명시
- 차트는 색뿐 아니라 라벨 + 부호로 의미 전달

## Don'ts

- 무지개 그라디언트 / 7색 동시 사용 X
- light mode 추가 X (다크 전용 사이트)
- 흰색 카드 / 백그라운드 X
- 모션 과잉 X (Framer Motion 은 fade + translateY 정도까지)
