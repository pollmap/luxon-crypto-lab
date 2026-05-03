# Architecture

## High-level

```
src/content/posts/*.mdx                ← 글 (frontmatter + JSX)
            │
            ▼
src/lib/posts.ts (gray-matter)         ← 빌드 시 디스크 스캔 + frontmatter 파싱
            │
            ▼
app/posts/[slug]/page.tsx              ← generateStaticParams + dynamic MDX import
            │
            ▼
mdx-components.tsx (글로벌)             ← h2/p/code 등 + Callout/Charts 등록
            │
            ▼
next build  →  out/  (정적 HTML/CSS/JS)
            │
            ▼
GitHub Actions deploy.yml  →  GitHub Pages
```

## Stack 결정 사유

| 결정 | 이유 |
|------|------|
| Next.js 16 + App Router | 정적 export 지원 + MDX 통합 + 표준 React 19 |
| `output: 'export'` | GitHub Pages 무료 호스팅, SSR 불필요 (월간 글) |
| Tailwind v4 | config-less, `@theme` 인라인 토큰, 빌드 빠름 |
| MDX (@next/mdx) | 글 본문 안에 React 컴포넌트(차트) 직접 임베드 |
| Turbopack | dev/build 모두 기본. plugin 은 string 이름으로만 |
| recharts | SVG 기반, 다크 테마 자유, gzip 작음 |
| Framer Motion | scroll-triggered 인터랙션 표준 |
| gray-matter | frontmatter 파싱 표준, dependency 가벼움 |

## 단일 진실원 (Single Source of Truth)

| 데이터 | 위치 |
|--------|------|
| 12회차 코인 메타 (티커·발행월·카테고리·시그니처) | `src/lib/coins.ts` `COINS` 배열 |
| 글 frontmatter | `src/content/posts/<slug>.mdx` 상단 YAML |
| 디자인 토큰 (색·폰트) | `src/app/globals.css` `@theme` 블록 |
| MDX 글로벌 매핑 | `src/mdx-components.tsx` |
| GitHub Pages basePath | `next.config.ts` `repoBase` 상수 |

## 라우트 맵

| 경로 | 유형 | 데이터 출처 |
|------|------|------------|
| `/` | 홈 (정적) | `coins.ts` + `posts.ts` 최신 6개 |
| `/posts/` | 글 목록 (정적) | `getAllPosts()` |
| `/posts/[slug]/` | 동적 (정적 prebuild) | `generateStaticParams` = 모든 mdx slug |
| `/coins/[symbol]/` | 동적 (정적 prebuild) | `generateStaticParams` = COINS |
| `/roadmap/` | 정적 | `coins.ts` 전체 |
| `/about/` | 정적 | 하드코딩 |

`dynamicParams = false` → 등록 안 된 slug 는 빌드 시 404.

## 빌드 흐름

1. `npm run build`
2. Next 가 `getAllPosts()` 호출 → `src/content/posts/` 스캔
3. `generateStaticParams` 결과로 모든 `/posts/<slug>/index.html` prebuild
4. Server Components 는 빌드 시 실행, Client Components 는 hydration 번들 분리
5. `out/` 디렉토리에 정적 HTML + `_next/` 자산 생성
6. GitHub Actions 가 `out/` 을 `actions/deploy-pages@v4` 로 업로드

## 정적 export 제약

다음 기능 사용 금지 (빌드 실패):

- Server Actions
- Cookies / Headers / Rewrites / Redirects / Middleware
- Image Optimization (default loader) — `images.unoptimized: true` 강제
- Dynamic Route 의 `dynamicParams: true`
- Route Handlers 의 동적 응답 (`Request` 의존)

## 폰트 로딩

`next/font/google` 사용 → 빌드 시 자동 호스팅 + CSS 변수 (`--font-jetbrains`, `--font-inter`).
런타임에 외부 Google Fonts CDN 호출 없음 (FOIT/FOUT 안정).

## 상태 관리

서버 사이드 데이터 (글 메타) 는 모두 빌드 시 처리. 클라이언트 상태는 TOC 의 active heading 만 (IntersectionObserver).
