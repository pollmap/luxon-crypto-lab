import type { SubIssue } from "./coins";

export type ExchangeType = "CEX" | "DEX" | "Hybrid" | "Case-study";
export type ExchangeRegion = "US" | "Asia" | "Korea" | "EU" | "Global" | "Multi";

export interface Exchange {
  id: string;
  name: string;
  type: ExchangeType;
  region: ExchangeRegion;
  signature: string;
  description: string;
  spotVolumeBillion?: number;
  founded?: string;
  subIssues: readonly SubIssue[];
}

export const EXCHANGES: readonly Exchange[] = [
  {
    id: "binance",
    name: "Binance",
    type: "CEX",
    region: "Global",
    signature: "글로벌 1위 CEX 점유율과 CFTC 합의 잔존 리스크",
    description: "전 세계 최대 거래량 CEX, BNB 발행, 미국 규제 합의 후 운영 모델 변화",
    spotVolumeBillion: 18.5,
    founded: "2017-07",
    subIssues: [
      {
        slug: "exchange-binance-dominance",
        label: "#E1",
        title: "Binance · 글로벌 1위 점유율과 규제 잔존 리스크",
        publishedAt: "2026-06-04",
        scope: "스팟 점유율 + CFTC $4.3B 합의 + Changpeng Zhao 사임 후 거버넌스",
      },
    ],
  },
  {
    id: "coinbase",
    name: "Coinbase",
    type: "CEX",
    region: "US",
    signature: "미국 IPO + Base L2 통합 모델",
    description: "Nasdaq 상장 (COIN), Base L2 운영, 미국 기관 BTC ETF custody 1순위",
    spotVolumeBillion: 4.2,
    founded: "2012-06",
    subIssues: [
      {
        slug: "exchange-coinbase-base",
        label: "#E2",
        title: "Coinbase · 미국 IPO + Base L2 통합 모델",
        publishedAt: "2026-06-11",
        scope: "COIN 주식 + Base L2 일 트랜잭션 5M + 기관 custody",
      },
    ],
  },
  {
    id: "korea",
    name: "한국 거래소 (Upbit · Bithumb)",
    type: "CEX",
    region: "Korea",
    signature: "김치 프리미엄 + 가상자산이용자보호법",
    description: "Upbit (점유 65%) + Bithumb (25%) + Korbit + Coinone. 원화 페어 독점 시장",
    spotVolumeBillion: 2.8,
    founded: "2014",
    subIssues: [
      {
        slug: "exchange-korea-upbit-bithumb",
        label: "#E3",
        title: "한국 거래소 · 김치 프리미엄과 가상자산이용자보호법",
        publishedAt: "2026-06-18",
        scope: "Upbit·Bithumb 점유 · 김프 메커니즘 · VAUPA 시행 영향",
      },
    ],
  },
  {
    id: "uniswap",
    name: "Uniswap",
    type: "DEX",
    region: "Global",
    signature: "v4 Hooks 아키텍처와 DEX 1위",
    description: "Ethereum + L2 모든 체인의 가장 깊은 AMM 유동성. v4 Hooks 도입 후 동적 fee 가능",
    spotVolumeBillion: 3.1,
    founded: "2018-11",
    subIssues: [
      {
        slug: "exchange-uniswap-v4-hooks",
        label: "#E4",
        title: "Uniswap v4 · Hooks 아키텍처 + DEX 1위 분석",
        publishedAt: "2026-06-25",
        scope: "Hooks 메커니즘 · UNI fee switch 거버넌스 · L2 분산",
      },
    ],
  },
  {
    id: "hyperliquid",
    name: "Hyperliquid",
    type: "DEX",
    region: "Global",
    signature: "Perp DEX 신모델과 기관 진입",
    description: "Perpetual DEX 1위. 자체 L1 + on-chain orderbook. HYPE 토큰 시총 급부상",
    spotVolumeBillion: 5.2,
    founded: "2023-06",
    subIssues: [
      {
        slug: "exchange-hyperliquid-perp-dex",
        label: "#E5",
        title: "Hyperliquid · Perp DEX 신모델 + 기관 진입",
        publishedAt: "2026-07-02",
        scope: "On-chain orderbook · HYPE 토크노믹스 · CEX 도전",
      },
    ],
  },
  {
    id: "failure-cases",
    name: "거래소 실패 사례",
    type: "Case-study",
    region: "Multi",
    signature: "FTX · Mt.Gox · Celsius — 거래소 실패 case study",
    description: "Mt.Gox 2014 → Celsius 2022 → FTX 2022. 같은 패턴이 반복되는 이유",
    founded: "—",
    subIssues: [
      {
        slug: "exchange-failure-case-study",
        label: "#E6",
        title: "FTX · Mt.Gox · Celsius — 거래소 실패 case study",
        publishedAt: "2026-07-09",
        scope: "3 사례 비교 · 공통 패턴 · self-custody 함의",
      },
    ],
  },
] as const;

export const EXCHANGE_TYPE_COLOR: Record<ExchangeType, string> = {
  CEX: "var(--neon-cyan)",
  DEX: "var(--neon-magenta)",
  Hybrid: "var(--neon-amber)",
  "Case-study": "var(--neon-red)",
};

export function getExchangeById(id: string): Exchange | undefined {
  return EXCHANGES.find((e) => e.id.toLowerCase() === id.toLowerCase());
}
