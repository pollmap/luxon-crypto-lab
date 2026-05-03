# Content Guide — MDX 글 작성

## 파일 위치

```
src/content/posts/<slug>.mdx
```

파일명 = slug. 예: `bitcoin-digital-gold.mdx` → URL `/posts/bitcoin-digital-gold/`.

## frontmatter 스키마

```yaml
---
slug: bitcoin-digital-gold       # 필수, 파일명과 일치
title: 비트코인은 디지털 금인가?    # 필수
subtitle: 매크로 사이클 × ...      # 선택
coin: BTC                         # 필수 (lib/coins.ts 의 symbol)
issue: 1                          # 필수 (회차 번호)
publishedAt: 2026-06-01           # 필수 (YYYY-MM-DD)
updatedAt: 2026-06-15             # 선택
category: L1-PoW                  # 필수 (lib/coins.ts 의 CoinCategory)
tags: [bitcoin, halving, ETF]     # 선택
estimatedReadTime: 25             # 선택 (분)
draft: true                       # true 면 빌드에서 제외 (목록/static params 제외)
sources:
  - name: "Grayscale Research — 2024 Halving"
    url: https://www.grayscale.com/research
  - name: "NY Fed SR 1052"
    url: https://www.newyorkfed.org/research/staff_reports/sr1052
---
```

`draft: true` 일 동안 자유롭게 작성 → 발행 시 `draft` 줄만 제거하면 끝.

## 본문에서 쓸 수 있는 컴포넌트

`mdx-components.tsx` 에 글로벌 등록 → MDX 어디서든 import 없이 사용.

### 콜아웃 박스

```mdx
<Callout type="beginner" title="입문자 가이드 · 1분 요약">
2009년 사토시의 P2P 전자현금 백서에서 시작...
</Callout>

<Callout type="opposing-view">
NY Fed Staff Report 1052 의 카운터 시각...
</Callout>

<Callout type="data" title="데이터 한계">
NVT 는 거래량 기반이라 ETF OTC flow 가 빠지면 왜곡됩니다.
</Callout>
```

타입: `info` · `beginner` · `opposing-view` · `warning` · `data`

### 차트

```mdx
<HalvingTimeline />

<ETFFlowChart />

<PriceChart symbol="BTC" />

<CorrelationHeatmap variables={['DXY','US10Y','M2','GOLD','SP500']} />
```

차트는 모두 mock 데이터로 시작. 추후 API 연동 시 props 로 주입.

### 인라인 시각 요소

```mdx
<HashBadge symbol="BTC" category="L1-PoW" />

<TerminalBox title="key_metrics" blink>
hashrate: 516 EH/s · cap: 21M · halving #5: 2028-04-17
</TerminalBox>

<GlowText color="cyan">디지털 금</GlowText>
```

## 시리즈 9개 섹션 표준 템플릿

```
## 도입부 — 왜 지금 X인가
## 1. 토크노믹스
## 2. 합의
## 3. 생태계
## 4. 매크로
## 5. 리스크
## 6. 시그니처 (코인별 고유 앵글)
## 7. 결론 및 가치평가
## 부록 — 출처
```

각 섹션 마지막에 가능하면 `<Callout type="opposing-view">` 또는 `<Callout type="data">` 박스로 정직성 확보.

## 문체 가이드

- 한국어 본문, 전문용어 · 고유명사 · 영문 1차 소스명만 영어 유지
- 전망/예상은 단정형 X. "범위 / 시나리오" 형 표현 사용
- 매수 추천 표현 금지. "분석"으로 한정
- 모든 수치는 출처 명시 (`<SourceFootnote>` 자동 생성되므로 frontmatter `sources` 에 등록)

## 발행 워크플로우

1. `draft: true` 로 작성
2. 로컬 `npm run dev` 미리보기
3. `draft` 제거 + 최종 검토
4. `git commit -m "docs: publish #N <coin>"`
5. `git push` → GitHub Actions 자동 배포 (~3분)

## 발행 후 수정

본문 정정 시 `updatedAt` 갱신. 큰 정정은 글 하단에 "수정 로그" 섹션 추가.

---

## ⚠ MDX 함정 — 빌드 실패 패턴

MDX 는 마크다운 + JSX 이라 **중괄호 `{...}` 와 백슬래시 `\(...\)` 는 JSX expression 으로 파싱**됩니다. 본문에 그대로 쓰면 acorn parser 가 문법 에러를 내며 빌드 실패.

### 금지 패턴

| 깨지는 표현 | 대체 표현 |
|------------|---------|
| `\(10{,}500{,}000 \times 2\)` (LaTeX) | 백틱 코드: `` `10,500,000 × 2` `` |
| `{한글 텍스트}` (단순 중괄호) | `&#123;한글 텍스트&#125;` 또는 백틱 |
| `function(a) { return a }` (JS 코드) | 코드 펜스 ```` ``` ```` 로 감싸기 |
| `if (x > 0) {...}` 본문 안에 | 코드 블록 안에 넣기 |

### 안전 패턴

수식·공식은 백틱 코드 또는 일반 텍스트로:

```mdx
등비수열의 합 공식 `a / (1 - r)` 에 첫항 `a = 10,500,000`,
공비 `r = 0.5` 를 대입하면 `10,500,000 × 2 = 21,000,000`.
```

객체·JSON 예시는 코드 펜스로:

```mdx
~~~ts
const config = { foo: 'bar' }
~~~
```

### JSX 컴포넌트는 OK

`<Callout>`, `<HalvingTimeline />`, `<SeriesNav coinSymbol="BTC" currentSlug="..." />` 등 등록된 컴포넌트는 정상 작동. 단 props 값에 일반 중괄호 안에 한글 넣을 땐 따옴표 문자열로:

```mdx
<Callout type="info" title="제목">  ✅
<Callout title={제목 변수}>          ❌ (JSX expression)
```

## 시리즈 navigation

자산이 여러 sub-issue 로 분할되면 자동 nav 컴포넌트 사용:

```mdx
<SeriesNav coinSymbol="BTC" currentSlug="bitcoin-21m-monetary-evolution" />
```

`coins.ts` 의 `subIssues` 배열을 읽어 prev/next + 진행 표시 + dot indicator 자동 생성. 발행 일정 변경 시 `coins.ts` 한 곳만 수정하면 모든 글의 nav 가 자동 업데이트.
