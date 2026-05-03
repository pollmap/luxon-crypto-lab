import type { SubIssue } from "./coins";

export type OnchainCategory =
  | "Cycle-Indicator"
  | "Derivatives"
  | "Liquidation"
  | "Whale-Flow"
  | "Premium"
  | "Sentiment"
  | "Mempool"
  | "Korea-Specific";

export interface OnchainTopic {
  id: string;
  name: string;
  category: OnchainCategory;
  signature: string;
  description: string;
  dataSource: string;
  subIssues: readonly SubIssue[];
}

export const ONCHAIN_TOPICS: readonly OnchainTopic[] = [
  {
    id: "altseason-dominance",
    name: "알트시즌 인덱스 + Bitcoin Dominance",
    category: "Cycle-Indicator",
    signature: "BTC.D + Coinglass 알트시즌 75/25 framework",
    description:
      "Bitcoin Dominance(BTC.D) 와 알트시즌 인덱스의 정량 정의. Coinglass 의 *알트시즌 = top 50 코인 중 75%가 BTC outperform* 기준. 사이클 단계 식별 framework",
    dataSource: "TradingView (BTC.D), Coinglass (alt-coin-season)",
    subIssues: [
      {
        slug: "onchain-altseason-dominance",
        label: "#O1",
        title: "알트시즌 인덱스 + BTC Dominance — 사이클 단계 식별",
        publishedAt: "2027-08-16",
        scope: "BTC.D · 알트시즌 75/25 · 4 phase 사이클 (BTC pump → BTC top → ETH pump → 알트 pump)",
      },
    ],
  },
  {
    id: "funding-rate-oi",
    name: "펀딩비 + Open Interest 분석",
    category: "Derivatives",
    signature: "Perpetual 펀딩비 + OI + 레버리지 비율",
    description:
      "Perp DEX/CEX 의 funding rate 와 Open Interest 의 결합 분석. 펀딩비 양수 = 롱 우세, 음수 = 숏 우세. OI 가속 = 시장 leverage 증가. 청산 위험 식별",
    dataSource: "Binance, Bybit, OKX 펀딩비 API + Coinglass Aggregated OI",
    subIssues: [
      {
        slug: "onchain-funding-rate-oi",
        label: "#O2",
        title: "펀딩비 + Open Interest — 시장 leverage 식별",
        publishedAt: "2027-08-23",
        scope: "Funding rate 분포 · OI 가속 · long/short ratio · 시장 단계 신호",
      },
    ],
  },
  {
    id: "liquidation-heatmap",
    name: "청산 (Liquidation) Heatmap",
    category: "Liquidation",
    signature: "강제 청산 데이터 + magnet zone 분석",
    description:
      "Coinglass Liquidation Heatmap 의 작동. 가격이 *liquidity magnet* (대량 leverage 포지션) 에 끌리는 패턴. *liquidation cascade* 의 학술적 분석",
    dataSource: "Coinglass Liquidation Heatmap, CryptoQuant",
    subIssues: [
      {
        slug: "onchain-liquidation-cascade",
        label: "#O3",
        title: "청산 Heatmap — Liquidity Magnet + Cascade",
        publishedAt: "2027-08-30",
        scope: "Liquidation level · magnet zone · cascade event · 5월 19일 2021 case study",
      },
    ],
  },
  {
    id: "exchange-reserves",
    name: "거래소 Reserve + 자금 흐름",
    category: "Whale-Flow",
    signature: "거래소 입출금 + Whale wallet 추적",
    description:
      "거래소의 BTC/ETH reserve 변화. 입금 가속 = 매도 압력. 출금 가속 = self-custody (보수). Whale wallet (1,000+ BTC 보유) 추적의 분석 method",
    dataSource: "CryptoQuant Exchange Reserve, Glassnode",
    subIssues: [
      {
        slug: "onchain-exchange-reserves-whales",
        label: "#O4",
        title: "거래소 Reserve + Whale 추적",
        publishedAt: "2027-09-06",
        scope: "Reserve 변화 · Whale 1K+ BTC 추적 · MTGox/사토시 이동 monitoring",
      },
    ],
  },
  {
    id: "korea-premium",
    name: "한국 김치 프리미엄 + Coinbase Premium",
    category: "Premium",
    signature: "한국 KRW 페어 + 미국 USD 페어의 가격 차",
    description:
      "한국 거래소 (업비트, 빗썸) 와 글로벌 거래소의 BTC 가격 차이. 미국 Coinbase 와 글로벌 거래소의 가격 차이. 두 premium 의 의미 + 차익 거래 + VAUPA 영향",
    dataSource: "CryptoQuant Korea Premium, Coinbase Premium",
    subIssues: [
      {
        slug: "onchain-korea-premium",
        label: "#O5",
        title: "김치 프리미엄 + Coinbase Premium — 지역 시장 신호",
        publishedAt: "2027-09-13",
        scope: "Korea Premium · Coinbase Premium · CME Premium · 차익 거래 · VAUPA 영향",
      },
    ],
  },
  {
    id: "nupl-sopr",
    name: "NUPL · SOPR · Long/Short-Term Holder",
    category: "Sentiment",
    signature: "Net Unrealized Profit/Loss + Spent Output Profit Ratio",
    description:
      "보유자의 미실현 손익 (NUPL) + 실현 매도 시 손익 비율 (SOPR). 단기 (155일 미만) vs 장기 (155일 이상) 보유자 분리 분석",
    dataSource: "Glassnode NUPL/SOPR, CryptoQuant",
    subIssues: [
      {
        slug: "onchain-nupl-sopr",
        label: "#O6",
        title: "NUPL + SOPR — 시장 sentiment 정량",
        publishedAt: "2027-09-20",
        scope: "NUPL 5 phase (capitulation → euphoria) · SOPR · 단기/장기 보유자 분리",
      },
    ],
  },
  {
    id: "options-iv",
    name: "옵션 시장 — Deribit Max Pain + IV",
    category: "Derivatives",
    signature: "BTC/ETH 옵션 + Implied Volatility",
    description:
      "Deribit (옵션 시장 점유율 90%+) 의 max pain (만기일 대량 청산 가격) + IV (내재 변동성). 기관 trading 신호 + 변동성 forecast",
    dataSource: "Deribit Metrics, Coinglass Options",
    subIssues: [
      {
        slug: "onchain-options-iv-maxpain",
        label: "#O7",
        title: "옵션 — Max Pain + IV + Volatility 사이클",
        publishedAt: "2027-09-27",
        scope: "Deribit · Max Pain · IV term structure · 변동성 forecast",
      },
    ],
  },
  {
    id: "fear-greed",
    name: "Fear & Greed Index + 사용자 sentiment",
    category: "Sentiment",
    signature: "Alternative.me 종합 지표 + Google Trends",
    description:
      "Alternative.me 의 Fear & Greed Index (변동성 + 거래량 + 소셜 + 도미넌스 + Google Trends 합산). 사용자 sentiment 의 정량",
    dataSource: "Alternative.me, Google Trends",
    subIssues: [
      {
        slug: "onchain-fear-greed-sentiment",
        label: "#O8",
        title: "Fear & Greed + Google Trends + Twitter sentiment",
        publishedAt: "2027-10-04",
        scope: "Fear & Greed 5 component · Google Trends · 사용자 sentiment 의 가격 lag",
      },
    ],
  },
  {
    id: "mvrv-trading",
    name: "MVRV Ratio — Coinglass MVRV trading",
    category: "Cycle-Indicator",
    signature: "MVRV 1/2/3 영역 + Z-Score + bottom/top 식별",
    description:
      "Coinglass + Glassnode 의 MVRV 차트. MVRV Z-Score 로 표준화한 매매 신호. Z-Score < -0.5 = bottom 영역, > 7 = top 영역. 학술적 backtest",
    dataSource: "Coinglass MVRV, Glassnode MVRV Z-Score",
    subIssues: [
      {
        slug: "onchain-mvrv-z-score",
        label: "#O9",
        title: "MVRV Z-Score — bottom/top 식별 정량 framework",
        publishedAt: "2027-10-11",
        scope: "MVRV vs MVRV Z-Score · 역사 backtest · 사이클 phase 식별 · 한국 적용",
      },
    ],
  },
  {
    id: "puell-multiple",
    name: "Puell Multiple — 채굴자 수익성 정량",
    category: "Cycle-Indicator",
    signature: "일 신규 발행 USD 가치 / 365일 평균",
    description:
      "David Puell 이 2019년 발표한 채굴자 수익성 지표. *Daily Issuance 가치 / 365일 평균* 비율. <0.5 = 채굴자 항복, >4 = 채굴자 euphoria",
    dataSource: "Glassnode Puell Multiple, Coinglass",
    subIssues: [
      {
        slug: "onchain-puell-multiple",
        label: "#O10",
        title: "Puell Multiple — 채굴자 수익성 사이클",
        publishedAt: "2027-10-18",
        scope: "Puell Multiple 정의 · <0.5 / >4 임계 · 4 반감기 사이클 · 한국 채굴 부재 영향",
      },
    ],
  },
  {
    id: "mayer-multiple",
    name: "Mayer Multiple + Pi Cycle Top",
    category: "Cycle-Indicator",
    signature: "200 DMA 기반 + 쌍선 cross 시점",
    description:
      "Trace Mayer 의 Mayer Multiple (가격 / 200 DMA). 1.0 미만 = 저평가, 2.4 초과 = 고평가. Pi Cycle Top (350 DMA × 2 vs 111 DMA cross) 의 정점 식별",
    dataSource: "Glassnode Mayer Multiple, Coinglass Pi Cycle",
    subIssues: [
      {
        slug: "onchain-mayer-pi-cycle",
        label: "#O11",
        title: "Mayer Multiple + Pi Cycle — 정점 식별 framework",
        publishedAt: "2027-10-25",
        scope: "Mayer Multiple · Pi Cycle Top · 4 사이클 정점 모두 식별 검증",
      },
    ],
  },
  {
    id: "realized-cap-hodl",
    name: "Realized Cap + HODL Waves",
    category: "Whale-Flow",
    signature: "보유 기간별 cohort + Realized Capitalization",
    description:
      "Realized Cap = 모든 BTC 의 *마지막 이전 시점 가격* 합. HODL Waves = 보유 기간별 (1일, 1주, 1달, ..., 10년+) 코인 비율. 보유자 cohort 분석",
    dataSource: "Glassnode HODL Waves, CryptoQuant",
    subIssues: [
      {
        slug: "onchain-realized-cap-hodl",
        label: "#O12",
        title: "Realized Cap + HODL Waves — cohort 분석",
        publishedAt: "2027-11-01",
        scope: "Realized Cap 진화 · HODL Waves 6 cohort · long-term holder vs short-term · supply shock",
      },
    ],
  },
  {
    id: "active-addresses-network",
    name: "Active Addresses + Network Activity",
    category: "Cycle-Indicator",
    signature: "일 활성 주소 + Metcalfe's Law 적용",
    description:
      "BTC 일 활성 주소 (sending) 수의 변화. Metcalfe's Law 의 *N²* 가치 식 적용. 네트워크 사용량 과 시가총액의 상관 관계",
    dataSource: "Glassnode Active Addresses, CryptoQuant",
    subIssues: [
      {
        slug: "onchain-active-addresses",
        label: "#O13",
        title: "Active Addresses + Metcalfe's Law — 네트워크 가치",
        publishedAt: "2027-11-08",
        scope: "Active Addresses 진화 · Metcalfe Law backtest · 한국 사용자 비중",
      },
    ],
  },
  {
    id: "stablecoin-supply-ratio",
    name: "Stablecoin Supply Ratio (SSR) + 자금 대기",
    category: "Sentiment",
    signature: "BTC 시총 / 스테이블 시총 + 매수 power 정량",
    description:
      "BTC 시총 vs 글로벌 스테이블 시총 비율. SSR 낮음 = 스테이블 자금 많음 = 매수 power 가속. SSR 높음 = 자금 부족 = 매수 power 약함",
    dataSource: "Glassnode SSR, CoinMetrics",
    subIssues: [
      {
        slug: "onchain-ssr-stablecoin-power",
        label: "#O14",
        title: "SSR — 스테이블 자금의 매수 대기 정량",
        publishedAt: "2027-11-15",
        scope: "SSR 정의 · 임계 영역 · 스테이블 발행 가속과 BTC 가격의 lag · 한국 사용자 KRW",
      },
    ],
  },
  {
    id: "difficulty-ribbon-mining",
    name: "Difficulty Ribbon + 채굴 사이클",
    category: "Cycle-Indicator",
    signature: "BTC 난이도 9 EMA 의 압축 + 확장 패턴",
    description:
      "Willy Woo 의 Difficulty Ribbon. 채굴 난이도 9개 EMA 의 *compression* (수렴) = 채굴자 capitulation 시작. *expansion* (확장) = 채굴자 회복",
    dataSource: "Woobull Difficulty Ribbon, Glassnode",
    subIssues: [
      {
        slug: "onchain-difficulty-ribbon",
        label: "#O15",
        title: "Difficulty Ribbon — 채굴자 항복 + 회복 패턴",
        publishedAt: "2027-11-22",
        scope: "Difficulty Ribbon 정의 · compression vs expansion · 4 반감기 검증 · 가격 bottom 식별",
      },
    ],
  },
] as const;

export const ONCHAIN_CATEGORY_COLOR: Record<OnchainCategory, string> = {
  "Cycle-Indicator": "var(--neon-cyan)",
  Derivatives: "var(--neon-magenta)",
  Liquidation: "var(--neon-amber)",
  "Whale-Flow": "var(--neon-cyan)",
  Premium: "var(--neon-green)",
  Sentiment: "var(--neon-magenta)",
  Mempool: "var(--neon-amber)",
  "Korea-Specific": "var(--neon-green)",
};

export function getOnchainTopicById(id: string): OnchainTopic | undefined {
  return ONCHAIN_TOPICS.find((t) => t.id.toLowerCase() === id.toLowerCase());
}
