export type CoinCategory =
  | "L1-PoW"
  | "L1-PoS"
  | "CEX-L1"
  | "Payment"
  | "Stable"
  | "Meme"
  | "RWA"
  | "Series";

export interface SubIssue {
  slug: string;
  label: string;
  title: string;
  publishedAt: string;
  scope: string;
}

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
  subIssues?: readonly SubIssue[];
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
    subIssues: [
      {
        slug: "bitcoin-21m-monetary-evolution",
        label: "#1-A",
        title: "비트코인은 왜 21,000,000개인가",
        publishedAt: "2026-06-01",
        scope: "도입 + 토크노믹스 + 화폐 진화 4단계",
      },
      {
        slug: "bitcoin-mining-etf",
        label: "#1-B",
        title: "4번의 반감기 후 마이너 경제학과 ETF",
        publishedAt: "2026-06-08",
        scope: "합의 (PoW·해시·마이너) + ETF $102B 흐름",
      },
      {
        slug: "bitcoin-macro-cycle",
        label: "#1-C",
        title: "DXY·금리·M2와 BTC — 매크로 회귀 vs NY Fed 반박",
        publishedAt: "2026-06-15",
        scope: "매크로 상관관계 + 학계 카운터 시각",
      },
      {
        slug: "bitcoin-nvt-mvrv-risk",
        label: "#1-D",
        title: "NVT·MVRV로 본 BTC 적정가 그리고 리스크",
        publishedAt: "2026-06-22",
        scope: "온체인 가치평가 + 양자/정치/집중도 리스크 + 결론",
      },
    ],
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
    subIssues: [
      { slug: "ethereum-pectra-anniversary", label: "#2-A", title: "Pectra 1주년 — ETH는 무엇인가", publishedAt: "2026-07-06", scope: "두 백서 비교 + Pectra 5 EIP + Fusaka 로드맵" },
      { slug: "ethereum-eip1559-deflation", label: "#2-B", title: "EIP-1559와 디플레이션 토크노믹스", publishedAt: "2026-07-13", scope: "Burn 메커니즘 + ETH 발행률 + Ultra Sound Money 가설" },
      { slug: "ethereum-pos-validators", label: "#2-C", title: "PoS 합의 — 100만 검증자 경제학", publishedAt: "2026-07-20", scope: "32 ETH 입장료 + 슬래싱 + 통합(EIP-7251) 효과" },
      { slug: "ethereum-lido-lst", label: "#2-D", title: "Lido stETH와 리퀴드 스테이킹 시스템 리스크", publishedAt: "2026-07-27", scope: "30% 도미넌스 · 분산화 우려 · DeFi 통합" },
      { slug: "ethereum-eigenlayer-restaking", label: "#2-E", title: "EigenLayer · Restaking과 AVS의 신탁 위임", publishedAt: "2026-08-03", scope: "Restaking 모델 · AVS 생태계 · 시스템 리스크 누적" },
      { slug: "ethereum-l2-value-leak", label: "#2-F", title: "L2 가치 누수 — Arbitrum / Base / Optimism", publishedAt: "2026-08-10", scope: "L2 fee 점유 · ETH 디플레이션 균형 · Fragmentation" },
      { slug: "ethereum-defi-tvl", label: "#2-G", title: "DeFi 생태계 — TVL $50B 인프라", publishedAt: "2026-08-17", scope: "Aave/Maker/Uniswap · Stablecoin · RWA on Ethereum" },
      { slug: "ethereum-macro-eth-btc-ratio", label: "#2-H", title: "매크로 — ETH/BTC ratio와 Fed 사이클", publishedAt: "2026-08-24", scope: "ETH/BTC 1년 추세 · 위험자산 베타 · 기관 ETF" },
      { slug: "ethereum-pf-ps-valuation", label: "#2-I", title: "P/F · P/S로 본 ETH 가치평가", publishedAt: "2026-08-31", scope: "Token Terminal · Burn-adjusted PE · Mike Ipolito 모델" },
      { slug: "ethereum-conclusion-ultra-sound-money", label: "#2-J", title: "Ultra Sound Money 가설 검증 · 시리즈 결론", publishedAt: "2026-09-07", scope: "10편 종합 · 가설 검증 · 다음 시리즈 예고" },
    ],
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
    subIssues: [
      { slug: "solana-throughput-firedancer", label: "#3-A", title: "주당 22억 트랜잭션 — 처리량의 의미", publishedAt: "2026-08-03", scope: "도입 + Firedancer + PoH 합의" },
      { slug: "solana-value-capture", label: "#3-B", title: "가치 포착 논쟁 — Scale is proven, value capture is not", publishedAt: "2026-08-10", scope: "21Shares 2026 보고서 + 애플리케이션 fee vs 프로토콜" },
      { slug: "solana-simd-0411", label: "#3-C", title: "SIMD-0411 — 인플레이션 30% 감축 거버넌스", publishedAt: "2026-08-17", scope: "토크노믹스 변경 + SOL 실질 수익률 재산출" },
    ],
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
    subIssues: [
      { slug: "bnb-burn-yield-model", label: "#4-A", title: "Burn yield = Buyback yield — 디플레이션 토큰 모델", publishedAt: "2026-09-07", scope: "분기 Auto-Burn + BEP-95 + 자사주매입 유사 P/E" },
      { slug: "bnb-bsc-ecosystem", label: "#4-B", title: "BSC 생태계 — 거래소 토큰을 넘어선 L1", publishedAt: "2026-09-14", scope: "TVL · 스테이블 · opBNB · Greenfield" },
      { slug: "bnb-regulatory-risk", label: "#4-C", title: "Binance 규제 리스크와 PoSA 중앙화 비판", publishedAt: "2026-09-21", scope: "CFTC 합의 잔존 리스크 + 41 검증자 구조" },
    ],
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
    subIssues: [
      { slug: "xrp-etf-1-year", label: "#5-A", title: "XRP 현물 ETF 1년 — 제도화의 명과 암", publishedAt: "2026-10-05", scope: "7개 ETF · $1.4B AUM · 가격 -43% 디커플 분석" },
      { slug: "xrp-xrpl-rwa-rlusd", label: "#5-B", title: "XRPL의 RWA · RLUSD 결제 사용 현황", publishedAt: "2026-10-12", scope: "RWA $474M · 일 트랜잭션 3M · ODL 실수요" },
      { slug: "xrp-ripple-concentration", label: "#5-C", title: "Ripple Labs 보유 집중도와 거버넌스 리스크", publishedAt: "2026-10-19", scope: "에스크로 1B 분기 락업 · UNL 노드 신뢰 모델" },
    ],
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
    subIssues: [
      { slug: "tron-usdt-rails", label: "#6-A", title: "TRON은 어떻게 USDT 결제 백본이 됐나", publishedAt: "2026-11-02", scope: "$79B USDT · 신흥국 송금 메카 · BIS WP 1335" },
      { slug: "tron-genius-act-impact", label: "#6-B", title: "GENIUS Act 시행과 TRON-USDT 채널 영향", publishedAt: "2026-11-09", scope: "미국 스테이블 규제 · OFAC 리스크 · USDD 디페그" },
    ],
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
    subIssues: [
      { slug: "stables-issuer-anatomy", label: "#7-A", title: "USDT vs USDC — 발행사 준비금 구조 해부", publishedAt: "2026-12-07", scope: "Tether $190B · Circle $77B · 준비금·감사" },
      { slug: "stables-treasury-channel", label: "#7-B", title: "스테이블코인은 디지털 머니마켓펀드인가", publishedAt: "2026-12-14", scope: "미국 단기국채 수요 채널 · IMF·BIS 시각" },
      { slug: "stables-yield-bearing", label: "#7-C", title: "Yield-bearing 스테이블의 등장 — USDS·USDe·YLDS", publishedAt: "2026-12-21", scope: "MakerDAO/Sky · Ethena · Figure SEC 등록" },
    ],
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
    subIssues: [
      { slug: "doge-schelling-money", label: "#8-A", title: "가치 없는 자산이 가격을 갖는 이유 — 셸링 포인트 화폐론", publishedAt: "2027-01-04", scope: "EMH vs 케인즈 미인대회 · 사회적 합의" },
      { slug: "doge-x-payment-integration", label: "#8-B", title: "X 결제 통합 가설과 DOGE 모멘텀", publishedAt: "2027-01-11", scope: "트위터 결제 · 머지마이닝 · 변동성 베타" },
    ],
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
    subIssues: [
      { slug: "figr-rwa-tokenization-case", label: "#9-A", title: "FIGR_HELOC — 토큰화 RWA의 첫 케이스 스터디", publishedAt: "2027-02-01", scope: "Provenance 체인 · HELOC 구조 · Figure Markets" },
      { slug: "figr-data-controversy", label: "#9-B", title: "$18B 토큰 vs $45M 검증 TVL — Morpheus 공매도 논쟁", publishedAt: "2027-02-08", scope: "RWA.xyz Distributed vs Represented · SEC S-1 분석" },
    ],
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
