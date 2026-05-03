export type CoinCategory =
  | "L1-PoW"
  | "L1-PoS"
  | "CEX-L1"
  | "Payment"
  | "Stable"
  | "Meme"
  | "RWA"
  | "Series";

export interface CoinMeta {
  symbol: string;
  name: string;
  issue: number;
  scheduledMonth: string;
  category: CoinCategory;
  signature: string;
  marketCapBillion?: number;
  description: string;
  macroEvent?: string;
}

export const COINS: readonly CoinMeta[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    issue: 1,
    scheduledMonth: "2026-06",
    category: "L1-PoW",
    signature: "디지털 금 / 화폐론",
    marketCapBillion: 1574,
    description: "21,000,000 cap PoW, ETF AUM $102B 회복, 5차 반감기 카운트다운",
    macroEvent: "6월 FOMC, BTC ETF AUM 회복",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    issue: 2,
    scheduledMonth: "2026-07",
    category: "L1-PoS",
    signature: "글로벌 결제·정산 인프라",
    marketCapBillion: 279,
    description: "Pectra 후속 Fusaka 진척, EIP-1559 burn, 디플레이션 PoS",
    macroEvent: "Pectra 1주년, Fusaka 진척",
  },
  {
    symbol: "SOL",
    name: "Solana",
    issue: 3,
    scheduledMonth: "2026-08",
    category: "L1-PoS",
    signature: "고성능 L1과 가치 포착 논쟁",
    marketCapBillion: 48,
    description: "주당 22억 트랜잭션, SIMD-0411 인플레이션 30% 추가 감축",
    macroEvent: "Alpenglow / SIMD-0411",
  },
  {
    symbol: "BNB",
    name: "BNB",
    issue: 4,
    scheduledMonth: "2026-09",
    category: "CEX-L1",
    signature: "Burn yield = Buyback yield",
    marketCapBillion: 83,
    description: "분기 Auto-Burn + BEP-95 실시간 burn, 100M 목표",
    macroEvent: "Q3 분기 burn (10월 중순)",
  },
  {
    symbol: "XRP",
    name: "XRP",
    issue: 5,
    scheduledMonth: "2026-10",
    category: "Payment",
    signature: "ETF 제도화 1년",
    marketCapBillion: 86,
    description: "현물 ETF 7개 출시, RLUSD 결제 정착, ODL 실수요 검증",
    macroEvent: "11월 XRP 현물 ETF 1주년",
  },
  {
    symbol: "TRX",
    name: "TRON",
    issue: 6,
    scheduledMonth: "2026-11",
    category: "Payment",
    signature: "USDT 결제 백본의 지정학",
    marketCapBillion: 31,
    description: "USDT $79B 발행, 신흥국 송금 메카, GENIUS Act 영향",
    macroEvent: "GENIUS·CLARITY Act 시행",
  },
  {
    symbol: "STABLES",
    name: "Stablecoins 특집",
    issue: 7,
    scheduledMonth: "2026-12",
    category: "Stable",
    signature: "디지털 머니마켓 vs 그림자은행",
    description: "USDT·USDC·USDS·PYUSD 통합. 미국 단기국채 수요 채널",
    macroEvent: "12월 FOMC, 연말 단기국채 점검",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    issue: 8,
    scheduledMonth: "2027-01",
    category: "Meme",
    signature: "셸링 포인트 화폐론",
    marketCapBillion: 17,
    description: "PoW Scrypt, 무한공급 연 4% 인플레, Litecoin 머지마이닝",
    macroEvent: "신년 risk-on 회복 시즌성",
  },
  {
    symbol: "FIGR",
    name: "Figure Heloc",
    issue: 9,
    scheduledMonth: "2027-02",
    category: "RWA",
    signature: "토큰화의 명과 암",
    marketCapBillion: 18,
    description: "Provenance 위 토큰화 HELOC. $18B 토큰 vs $45M 검증 TVL 논쟁",
    macroEvent: "RWA 시장 $20T 전망 점검",
  },
  {
    symbol: "ADA",
    name: "Top 10 신규/Cardano",
    issue: 10,
    scheduledMonth: "2027-03",
    category: "L1-PoS",
    signature: "1년 후 Top 10 재점검",
    description: "Top 10 변동 데이터 1년치 누적 분석",
    macroEvent: "3월 FOMC",
  },
  {
    symbol: "REVIEW1",
    name: "종합 1편",
    issue: 11,
    scheduledMonth: "2027-04",
    category: "Series",
    signature: "1년 회고 — 매크로 사이클과 가치 포착",
    description: "12개월 데이터셋 종합 + BTC 5차 반감기 카운트다운",
    macroEvent: "BTC 5차 반감기 12개월 카운트다운",
  },
  {
    symbol: "REVIEW2",
    name: "종합 2편",
    issue: 12,
    scheduledMonth: "2027-05",
    category: "Series",
    signature: "12개 자산 가치투자 모형 풀 백테스트",
    description: "P/F·NVT·MVRV·Burn yield 통합 백테스트 결과",
    macroEvent: "KDA 키움 4기 수료 결산",
  },
] as const;

export const CATEGORY_COLOR: Record<CoinCategory, string> = {
  "L1-PoW": "var(--neon-amber)",
  "L1-PoS": "var(--neon-cyan)",
  "CEX-L1": "var(--neon-magenta)",
  Payment: "var(--neon-green)",
  Stable: "var(--text-1)",
  Meme: "var(--neon-magenta)",
  RWA: "var(--neon-red)",
  Series: "var(--text-2)",
};

export function getCoinBySymbol(symbol: string): CoinMeta | undefined {
  return COINS.find((c) => c.symbol.toLowerCase() === symbol.toLowerCase());
}

export function getCoinSymbols(): string[] {
  return COINS.map((c) => c.symbol);
}
