import type { SubIssue } from "./coins";

export interface Topic {
  id: string;
  name: string;
  signature: string;
  description: string;
  episodes: number;
  subIssues: readonly SubIssue[];
}

export const TOPICS: readonly Topic[] = [
  {
    id: "decentralization",
    name: "탈중앙화 (Decentralization)",
    signature: "정의·측정·trade-off — 무엇이 진짜 분산화인가",
    description: "Vitalik 의 3 axes 정의부터 Nakamoto coefficient 측정, 거버넌스 모델, 검열저항 case study까지",
    episodes: 5,
    subIssues: [
      {
        slug: "decentralization-definition-vitalik",
        label: "#D1",
        title: "무엇이 진짜 탈중앙화인가 — Vitalik 3 axes",
        publishedAt: "2026-07-16",
        scope: "Architectural · Political · Logical decentralization 정의",
      },
      {
        slug: "decentralization-l1-comparison",
        label: "#D2",
        title: "BTC vs ETH vs SOL — Nakamoto coefficient 비교",
        publishedAt: "2026-07-23",
        scope: "Nakamoto coefficient · 검증자 분포 · 노드 분산도",
      },
      {
        slug: "decentralization-governance-dao-foundation",
        label: "#D3",
        title: "거버넌스 모델 — DAO vs Foundation vs Anonymous",
        publishedAt: "2026-07-30",
        scope: "Lido DAO · Ethereum Foundation · Satoshi 무명 모델 비교",
      },
      {
        slug: "decentralization-censorship-resistance",
        label: "#D4",
        title: "검열저항 — Tornado Cash · Roman Storm · OFAC case",
        publishedAt: "2026-08-06",
        scope: "OFAC 제재 시나리오 · 코드는 표현인가 · 개발자 책임",
      },
      {
        slug: "decentralization-vs-efficiency-tradeoff",
        label: "#D5",
        title: "분산화 vs 효율성 trade-off 종합 (시리즈 결론)",
        publishedAt: "2026-08-13",
        scope: "5편 종합 · Pareto frontier · 자산별 위치",
      },
    ],
  },
  {
    id: "ai-crypto",
    name: "AI × Crypto",
    signature: "AI 코인 시장 · ACP · 데이터 토큰 · GPU 인프라",
    description:
      "AI × 크립토 교차 영역의 4 축 분석. Bittensor·Render·Fetch·Worldcoin · ACP(Agent Commerce Protocol) · 데이터 토큰화(Ocean·Numeraire) · GPU 인프라(io.net·Akash)",
    episodes: 4,
    subIssues: [
      {
        slug: "ai-crypto-market-overview",
        label: "#A1",
        title: "AI × Crypto 시장 — Bittensor · Render · Fetch · Worldcoin",
        publishedAt: "2027-07-19",
        scope: "AI 코인 시총 · 4대 프로젝트 토크노믹스 · 학계 비판",
      },
      {
        slug: "ai-crypto-acp-agent-commerce",
        label: "#A2",
        title: "Agent Commerce Protocol — AI 에이전트의 결제 인프라",
        publishedAt: "2027-07-26",
        scope: "ACP 명세 · Skyfire · Coinbase x402 · 자율 에이전트 결제",
      },
      {
        slug: "ai-crypto-data-tokens",
        label: "#A3",
        title: "데이터 토큰 — Ocean Protocol · Numeraire · Bittensor 서브넷",
        publishedAt: "2027-08-02",
        scope: "Compute-to-Data · 데이터 마켓플레이스 · 학습 데이터 RWA",
      },
      {
        slug: "ai-crypto-gpu-infra",
        label: "#A4",
        title: "탈중앙화 GPU — io.net · Akash · Render Network",
        publishedAt: "2027-08-09",
        scope: "분산 GPU 가격 비교 · AWS H100 vs DePIN · 신뢰 가능성 검증",
      },
    ],
  },
] as const;

export function getTopicById(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id.toLowerCase() === id.toLowerCase());
}
