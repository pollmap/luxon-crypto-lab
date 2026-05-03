import type { SubIssue } from "./coins";

export type CrisisType =
  | "Stablecoin-Collapse"
  | "Exchange-Hack"
  | "Bridge-Hack"
  | "Contagion"
  | "Fraud"
  | "Smart-Contract-Hack"
  | "Korea-Specific"
  | "Synthesis";

export interface CrisisCase {
  id: string;
  name: string;
  type: CrisisType;
  year: number;
  lossUSDB: number;
  signature: string;
  description: string;
  subIssues: readonly SubIssue[];
}

export const CRISES: readonly CrisisCase[] = [
  {
    id: "luna-ust",
    name: "Luna-UST 붕괴 (2022.5)",
    type: "Stablecoin-Collapse",
    year: 2022,
    lossUSDB: 60,
    signature: "Algorithmic stablecoin 의 수학적 결함 — Anchor 19.5% APY 와 죽음의 나선",
    description:
      "Terraform Labs 의 UST 알고리즘 스테이블코인이 LUNA 와의 무한 mint-burn 메커니즘 실패. Anchor Protocol 의 19.5% 고정 APY 가 펀딩 출처 없이 작동. 5월 9일 디페그 후 일주일 만에 LUNA -99.9%. 권도형 한국·몬테네그로·미국 송환 절차 진행 중",
    subIssues: [
      {
        slug: "crisis-luna-ust-algorithmic-collapse",
        label: "#C1",
        title: "Luna-UST 붕괴 — Algorithmic Stablecoin 의 수학적 결함",
        publishedAt: "2027-05-17",
        scope: "Mint-burn 메커니즘 · Anchor 19.5% · 죽음의 나선 · 권도형 송환",
      },
    ],
  },
  {
    id: "mt-gox",
    name: "Mt.Gox 해킹 (2014)",
    type: "Exchange-Hack",
    year: 2014,
    lossUSDB: 0.45,
    signature: "850,000 BTC 해킹 + 14년 채권 보상 절차",
    description:
      "당시 글로벌 BTC 거래량의 70% 처리한 일본 거래소 Mt.Gox 가 850,000 BTC(당시 ~$450M, 2024년 가치 ~$50B) 해킹 도난. 2024-2025 채권자 보상 분배 시작. Karpeles CEO 형사 재판은 2019년 일부 유죄. 거래소 핫월렛 보안의 첫 대규모 교훈",
    subIssues: [
      {
        slug: "crisis-mt-gox-hack-recovery",
        label: "#C2",
        title: "Mt.Gox — 850K BTC 해킹과 14년 채권자 보상",
        publishedAt: "2027-05-24",
        scope: "Karpeles 케이스 · 핫/콜드 월렛 분리 · 2024 분배 시작 · 시장 영향",
      },
    ],
  },
  {
    id: "ftx-collapse",
    name: "FTX 붕괴 (2022.11)",
    type: "Fraud",
    year: 2022,
    lossUSDB: 8,
    signature: "Alameda 자산 commingling + FTT 자전 매수 + SBF 25년 형",
    description:
      "FTX 와 Alameda Research 사이 사용자 자산 commingling. FTT 토큰을 Alameda 가 보유한 채 자기 거래소에서 가격 조작. CoinDesk 11월 2일 폭로 후 8일 뱅크런. SBF 25년 형. Caroline Ellison · Gary Wang 협조 증언. 거래소 거버넌스 학술 케이스의 표준",
    subIssues: [
      {
        slug: "crisis-ftx-alameda-commingling",
        label: "#C3",
        title: "FTX — Alameda Commingling 과 SBF 25년 형",
        publishedAt: "2027-05-31",
        scope: "FTT 자전 매수 · 사용자 자금 도용 · 8일 뱅크런 · SBF 형사 재판",
      },
    ],
  },
  {
    id: "2022-contagion",
    name: "2022 Q2 Contagion (3AC · Voyager · BlockFi · Celsius)",
    type: "Contagion",
    year: 2022,
    lossUSDB: 12,
    signature: "Three Arrows Capital 청산 → 채권자 도미노 → CeFi 대출 모델 종말",
    description:
      "Three Arrows Capital(3AC, Su Zhu·Kyle Davies)이 Luna · stETH · GBTC 무차별 노출로 6월 청산. 그들의 채권자 Voyager · BlockFi · Celsius · Genesis 가 차례로 파산. 2022 Q2-Q3 약 $12B 사용자 손실. CeFi 대출(centralized lending) 모델 의 거의 멸종",
    subIssues: [
      {
        slug: "crisis-2022-contagion-3ac-celsius",
        label: "#C4",
        title: "2022 Contagion — 3AC · Voyager · BlockFi · Celsius 도미노",
        publishedAt: "2027-06-07",
        scope: "Su Zhu 도주 · stETH 디스카운트 · CeFi 대출 모델 종말 · 학술 분석",
      },
    ],
  },
  {
    id: "dao-hack-2016",
    name: "The DAO Hack (2016.6)",
    type: "Smart-Contract-Hack",
    year: 2016,
    lossUSDB: 0.06,
    signature: "Ethereum 첫 reentrancy + 하드포크 → ETC 분리",
    description:
      "이더리움 첫 대규모 ICO 인 The DAO 의 reentrancy 공격으로 3.6M ETH 도난(당시 $60M, 2024년 가치 ~$13B). 이더리움 커뮤니티가 하드포크로 자금 회수, 이로 인해 이더리움 클래식(ETC)이 분리. 'Code is law' vs 'Social consensus' 학술 논쟁의 표준 케이스",
    subIssues: [
      {
        slug: "crisis-dao-hack-eth-etc-split",
        label: "#C5",
        title: "The DAO Hack — Reentrancy 와 ETH/ETC 분리",
        publishedAt: "2027-06-14",
        scope: "Reentrancy 공격 코드 분석 · 하드포크 결정 · Code is law 논쟁 · ETC 의 의미",
      },
    ],
  },
  {
    id: "bridge-hacks",
    name: "Bridge Hack 시리즈 (Ronin · Poly · Wormhole)",
    type: "Bridge-Hack",
    year: 2022,
    lossUSDB: 2.3,
    signature: "Ronin $625M · Poly Network $611M · Wormhole $326M · Nomad $190M",
    description:
      "크로스체인 브리지가 분산 시스템의 가장 약한 고리. Ronin(Axie Infinity 사이드체인)은 9 검증자 중 5개 키 도난(Lazarus Group, 북한). Poly Network 는 contract 권한 우회. Wormhole 은 검증 함수 결함. Nomad 는 init 함수 누락. 4건 합 ~$1.7B 도난",
    subIssues: [
      {
        slug: "crisis-bridge-hack-series",
        label: "#C6",
        title: "Bridge Hack 시리즈 — Ronin · Poly · Wormhole · Nomad",
        publishedAt: "2027-06-21",
        scope: "Ronin Lazarus · Wormhole signer 결함 · Nomad replicas · 브리지 분산화 한계",
      },
    ],
  },
  {
    id: "exchange-hacks-asia",
    name: "아시아 거래소 해킹 (Coincheck · KuCoin · Bitfinex · Bybit)",
    type: "Exchange-Hack",
    year: 2018,
    lossUSDB: 2.0,
    signature: "Coincheck $530M XEM · Bitfinex 120K BTC · KuCoin $281M · Bybit $1.5B (2025)",
    description:
      "Coincheck 2018.1 Lazarus 해킹 530M XEM. Bitfinex 2016 120K BTC 도난(2022 $4.5B 회수). KuCoin 2020.9 핫월렛 해킹. Bybit 2025.2 ETH 1.46B 해킹(역대 최대). 일본 FSA 가 Coincheck 사고 후 거래소 등록제 강화한 직접 계기",
    subIssues: [
      {
        slug: "crisis-exchange-hacks-asia",
        label: "#C7",
        title: "아시아 거래소 해킹 — Coincheck · Bitfinex · KuCoin · Bybit",
        publishedAt: "2027-06-28",
        scope: "Coincheck 핫월렛 · Bitfinex 회수 · Bybit 2025 Lazarus · 일본 FSA 강화",
      },
    ],
  },
  {
    id: "korea-cases",
    name: "한국 케이스 (DELIO · 김치 프리미엄 · Klaytn 사태)",
    type: "Korea-Specific",
    year: 2023,
    lossUSDB: 1.0,
    signature: "DELIO 동결 $1B · 김치 프리미엄 차익거래 위반 · Klaytn 발행량 조작 의혹",
    description:
      "DELIO(2023.6 출금 정지)는 한국 가장 큰 가상자산 예치 사고. 김치 프리미엄 차익거래는 외국환거래법 위반 케이스 다수. Klaytn(현 Kaia)은 카카오 분사 후 발행량 투명성 의혹으로 2023-2024 시장 신뢰 추락. 한국 VAUPA 시행의 직접 동기",
    subIssues: [
      {
        slug: "crisis-korea-delio-klaytn",
        label: "#C8",
        title: "한국 케이스 — DELIO · 김치 프리미엄 · Klaytn",
        publishedAt: "2027-07-05",
        scope: "DELIO 사고 · 김치 프리미엄 외환법 위반 · Klaytn 사태 · VAUPA 시행 동기",
      },
    ],
  },
  {
    id: "synthesis",
    name: "사태 패턴 종합 — 학술적 분류",
    type: "Synthesis",
    year: 2027,
    lossUSDB: 0,
    signature: "8 사태 공통 패턴 + 학계 5대 framework + 미해결 변수",
    description:
      "Luna · Mt.Gox · FTX · 2022 Contagion · DAO · Bridges · 거래소 해킹 · 한국 케이스 8 사태의 공통 패턴 분석. 자산 commingling · 단일 운영자 · 자기-collateral · 검증되지 않은 yield · 핫월렛 보안 5 framework. NY Fed Staff Report 1066 의 macro 시각",
    subIssues: [
      {
        slug: "crisis-synthesis-patterns",
        label: "#C9",
        title: "사태 종합 — 8 케이스의 공통 패턴 학술 분류",
        publishedAt: "2027-07-12",
        scope: "5 공통 패턴 · NY Fed Staff Report 1066 · 학계 framework · 미해결 변수",
      },
    ],
  },
] as const;

export const CRISIS_TYPE_COLOR: Record<CrisisType, string> = {
  "Stablecoin-Collapse": "var(--neon-magenta)",
  "Exchange-Hack": "var(--neon-amber)",
  "Bridge-Hack": "var(--neon-cyan)",
  Contagion: "var(--neon-magenta)",
  Fraud: "var(--neon-amber)",
  "Smart-Contract-Hack": "var(--neon-green)",
  "Korea-Specific": "var(--neon-cyan)",
  Synthesis: "var(--neon-green)",
};

export function getCrisisById(id: string): CrisisCase | undefined {
  return CRISES.find((c) => c.id.toLowerCase() === id.toLowerCase());
}
