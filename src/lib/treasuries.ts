import type { SubIssue } from "./coins";

export type TreasuryType = "Pure-Treasury" | "Miner" | "Hybrid" | "Holding-Co";
export type TreasuryListing = "Nasdaq" | "NYSE" | "TSE" | "KOSPI" | "OTC" | "ASX";

export interface Treasury {
  id: string;
  name: string;
  ticker: string;
  type: TreasuryType;
  listing: TreasuryListing;
  primaryAsset: "BTC" | "ETH" | "SOL" | "Multi";
  signature: string;
  description: string;
  holdingsBTC?: number;
  holdingsETH?: number;
  holdingsSOL?: number;
  marketCapBillion?: number;
  founded?: string;
  ceo?: string;
  subIssues: readonly SubIssue[];
}

export const TREASURIES: readonly Treasury[] = [
  {
    id: "strategy",
    name: "Strategy (구 MicroStrategy)",
    ticker: "MSTR",
    type: "Pure-Treasury",
    listing: "Nasdaq",
    primaryAsset: "BTC",
    signature: "BTC Treasury 모델의 발명자 — 580,250 BTC 보유 + 무한 ATM 발행",
    description: "Michael Saylor 가 2020.8 부터 시작한 corporate BTC treasury 모델. 2025.2 사명 변경 (MicroStrategy → Strategy). 2026.5 기준 580,250 BTC ($45.6B) 보유, 시총 $98B, mNAV ~2.15x",
    holdingsBTC: 580250,
    marketCapBillion: 98,
    founded: "1989-11",
    ceo: "Phong Le (CEO) · Michael Saylor (Executive Chairman)",
    subIssues: [
      {
        slug: "treasury-strategy-mnav-flywheel",
        label: "#T1",
        title: "Strategy · BTC Treasury 모델의 발명자와 mNAV flywheel",
        publishedAt: "2026-11-26",
        scope: "ATM 발행 메커니즘 · convertible note · mNAV premium 의 수학",
      },
    ],
  },
  {
    id: "bitmine",
    name: "BitMine Immersion Technologies",
    ticker: "BMNR",
    type: "Hybrid",
    listing: "NYSE",
    primaryAsset: "ETH",
    signature: "ETH Treasury 모델 1위 — Tom Lee 의 Fundstrat 와의 정렬",
    description: "ETH 기반 treasury 회사. 2025 년 Tom Lee 가 Chairman 합류 후 ETH 매집 가속. 2026.5 기준 약 925,000 ETH ($1.85B) 보유. ETH treasury 시장 점유 1위. immersion-cooled mining + treasury 결합",
    holdingsETH: 925000,
    marketCapBillion: 4.2,
    founded: "2020-08",
    ceo: "Jonathan Bates (CEO) · Tom Lee (Chairman)",
    subIssues: [
      {
        slug: "treasury-bitmine-eth-model",
        label: "#T2",
        title: "BitMine · ETH Treasury 모델과 Tom Lee 의 ETH staking 명제",
        publishedAt: "2026-12-03",
        scope: "ETH treasury vs BTC treasury 차이 · staking yield · Fundstrat 명제",
      },
    ],
  },
  {
    id: "metaplanet",
    name: "Metaplanet",
    ticker: "3350.T",
    type: "Pure-Treasury",
    listing: "TSE",
    primaryAsset: "BTC",
    signature: "Asia Strategy — 일본 상장 BTC treasury 1위",
    description: "Simon Gerovich CEO 가 2024.4 부터 시작한 일본판 Strategy. 2026.5 기준 18,500 BTC 보유 (아시아 상장사 1위). 도쿄증시 Standard 시장 상장. 일본 NISA (개인 면세) 계좌 BTC 익스포저 우회 경로로 활용",
    holdingsBTC: 18500,
    marketCapBillion: 8.2,
    founded: "1999-03",
    ceo: "Simon Gerovich",
    subIssues: [
      {
        slug: "treasury-metaplanet-japan",
        label: "#T3",
        title: "Metaplanet · 일본판 Strategy 와 NISA 우회 모델",
        publishedAt: "2026-12-10",
        scope: "TSE 상장 BTC 익스포저 · NISA 면세 활용 · 아시아 treasury 확산",
      },
    ],
  },
  {
    id: "marathon-mara",
    name: "MARA Holdings",
    ticker: "MARA",
    type: "Miner",
    listing: "Nasdaq",
    primaryAsset: "BTC",
    signature: "북미 최대 상장 마이너 — 채굴 + Treasury 하이브리드",
    description: "전 Marathon Digital. 2026.5 기준 약 49,500 BTC 보유 (마이너 1위), 해시레이트 약 50 EH/s (글로벌 점유 약 6%). 마이닝 수익 + 자체 매수로 BTC 누적. Strategy 와 다른 path 로 같은 결과를 추구",
    holdingsBTC: 49500,
    marketCapBillion: 6.4,
    founded: "2010-02",
    ceo: "Fred Thiel",
    subIssues: [
      {
        slug: "treasury-mara-riot-mining",
        label: "#T4",
        title: "MARA · 마이너 + Treasury 하이브리드 모델",
        publishedAt: "2026-12-17",
        scope: "마이닝 OPEX vs treasury 매수 · 해시레이트 통화 · 사이클 위치",
      },
    ],
  },
  {
    id: "riot-platforms",
    name: "Riot Platforms",
    ticker: "RIOT",
    type: "Miner",
    listing: "Nasdaq",
    primaryAsset: "BTC",
    signature: "Texas 마이닝 인프라 + AI/HPC 전환 시도",
    description: "텍사스 Rockdale·Corsicana 데이터센터 운영. 2026.5 기준 약 19,200 BTC 보유. 2025년부터 AI/HPC 컴퓨팅 임대 사업 다각화 시도 — 마이너의 미래 모델 변환 case",
    holdingsBTC: 19200,
    marketCapBillion: 3.8,
    founded: "2000-04",
    ceo: "Jason Les",
    subIssues: [
      {
        slug: "treasury-mara-riot-mining",
        label: "#T5",
        title: "Riot · 마이닝 → AI/HPC pivot 의 전략적 의미",
        publishedAt: "2026-12-24",
        scope: "마이닝 인프라 재용도 · AI 컴퓨팅 시장 · 마이너 사업 다각화",
      },
    ],
  },
  {
    id: "treasury-comparison-finale",
    name: "Treasury 시리즈 종합",
    ticker: "—",
    type: "Holding-Co",
    listing: "OTC",
    primaryAsset: "Multi",
    signature: "5편 종합 — Treasury Company 모델의 학술적 평가",
    description: "Strategy / BitMine / Metaplanet / MARA / Riot 5사 비교 + mNAV premium 의 수학 + Treasury Company 가 신생 자산 클래스인가 wrapper 인가 — 학술 framework 종합",
    founded: "—",
    subIssues: [
      {
        slug: "treasury-synthesis-future",
        label: "#T6",
        title: "Treasury Company · mNAV premium 은 정당한가 (시리즈 결론)",
        publishedAt: "2026-12-31",
        scope: "mNAV 정의 · 정당성 논쟁 · 신생 자산 클래스 vs wrapper · 시스템 위험",
      },
    ],
  },
] as const;

export const TREASURY_TYPE_COLOR: Record<TreasuryType, string> = {
  "Pure-Treasury": "var(--neon-cyan)",
  Miner: "var(--neon-amber)",
  Hybrid: "var(--neon-magenta)",
  "Holding-Co": "var(--neon-green)",
};

export function getTreasuryById(id: string): Treasury | undefined {
  return TREASURIES.find((t) => t.id.toLowerCase() === id.toLowerCase());
}
