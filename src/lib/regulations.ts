import type { SubIssue } from "./coins";

export type RegulationStatus = "in-force" | "proposed" | "draft" | "rejected";

export interface KeyLaw {
  name: string;
  status: RegulationStatus;
  effectiveDate?: string;
}

export interface Regulation {
  region: string;
  name: string;
  flag: string;
  signature: string;
  description: string;
  keyLaws: readonly KeyLaw[];
  subIssues: readonly SubIssue[];
}

export const REGULATIONS: readonly Regulation[] = [
  {
    region: "us",
    name: "미국",
    flag: "🇺🇸",
    signature: "SEC vs CFTC + GENIUS/CLARITY Act + Trump SBR",
    description: "SEC 와 CFTC 의 관할 분쟁 + Trump 행정부의 BTC 친화 정책 + GENIUS/CLARITY Act 진행",
    keyLaws: [
      { name: "SAB 121 폐지", status: "in-force", effectiveDate: "2025-01" },
      { name: "GENIUS Act (Stablecoin)", status: "proposed" },
      { name: "CLARITY Act (Market Structure)", status: "proposed" },
      { name: "Strategic Bitcoin Reserve Order", status: "proposed" },
    ],
    subIssues: [
      {
        slug: "regulation-us-sec-cftc-sbr",
        label: "#R1",
        title: "미국 1: SEC vs CFTC 관할 분쟁 + Trump 전략 비축",
        publishedAt: "2026-08-20",
        scope: "SEC Howey Test 적용 · CFTC commodity 분류 · SBR 정책 검토",
      },
      {
        slug: "regulation-us-genius-clarity-acts",
        label: "#R2",
        title: "미국 2: GENIUS Act + CLARITY Act + 스테이블코인 법",
        publishedAt: "2026-08-27",
        scope: "GENIUS Act 스테이블 발행자 라이센스 · CLARITY Act 시장구조 · Stablecoin 별도법",
      },
    ],
  },
  {
    region: "eu",
    name: "유럽 연합",
    flag: "🇪🇺",
    signature: "MiCA 1년 회고 + AMLR + DAC8",
    description: "MiCA (2024.6 시행) 1년 회고 + AMLR 자금세탁 방지 + DAC8 세제 통합",
    keyLaws: [
      { name: "MiCA (Markets in Crypto-Assets)", status: "in-force", effectiveDate: "2024-06-30" },
      { name: "AMLR (Anti-Money Laundering)", status: "in-force", effectiveDate: "2024-07" },
      { name: "DAC8 (Crypto Tax Reporting)", status: "in-force", effectiveDate: "2026-01" },
    ],
    subIssues: [
      {
        slug: "regulation-eu-mica-anniversary",
        label: "#R3",
        title: "EU 1: MiCA 시행 1년 회고",
        publishedAt: "2026-09-03",
        scope: "MiCA 라이센스 발급 현황 · 스테이블 cap · CASP 등록",
      },
      {
        slug: "regulation-eu-amlr-dac8",
        label: "#R4",
        title: "EU 2: AMLR + DAC8 (자금세탁 + 세제 통합)",
        publishedAt: "2026-09-10",
        scope: "AMLR 익명 지갑 한도 · DAC8 자동 정보교환 · CASP 의무",
      },
    ],
  },
  {
    region: "korea",
    name: "한국",
    flag: "🇰🇷",
    signature: "가상자산이용자보호법 + 디지털자산기본법",
    description: "VAUPA (2024.7 시행) + 디지털자산기본법 추진 + 거래소 라이센스 + ETF 미허가",
    keyLaws: [
      { name: "특정금융정보법 (특금법)", status: "in-force", effectiveDate: "2021-03" },
      { name: "가상자산이용자보호법 (VAUPA)", status: "in-force", effectiveDate: "2024-07-19" },
      { name: "디지털자산기본법 (가칭)", status: "draft" },
      { name: "현물 BTC ETF 허용", status: "rejected" },
    ],
    subIssues: [
      {
        slug: "regulation-korea-virtual-asset-act",
        label: "#R5",
        title: "한국 1: 가상자산이용자보호법 + 특정금융정보법",
        publishedAt: "2026-09-17",
        scope: "VAUPA 시행 1년 + 사업자 신고 · 자산 분리 · 시세조종 처벌",
      },
      {
        slug: "regulation-korea-digital-asset-framework",
        label: "#R6",
        title: "한국 2: 디지털자산기본법 + 거래소 라이센스 + ETF 검토",
        publishedAt: "2026-09-24",
        scope: "디지털자산기본법 초안 · STO 가이드라인 · 현물 ETF 허용 논쟁",
      },
    ],
  },
  {
    region: "japan",
    name: "일본",
    flag: "🇯🇵",
    signature: "FSA 가상자산 + JVCEA + ETF 검토",
    description: "FSA (금융청) 가상자산 등록 의무 + JVCEA 자율규제 + spot ETF 검토",
    keyLaws: [
      { name: "Payment Services Act 개정", status: "in-force", effectiveDate: "2017-04" },
      { name: "JVCEA 자율규제", status: "in-force", effectiveDate: "2018-10" },
      { name: "Spot Crypto ETF", status: "proposed" },
    ],
    subIssues: [
      {
        slug: "regulation-japan-fsa-jvcea",
        label: "#R7",
        title: "일본: FSA + JVCEA + ETF 검토",
        publishedAt: "2026-10-01",
        scope: "FSA 가상자산 등록 26개사 · JVCEA · 2026 spot ETF 추진",
      },
    ],
  },
  {
    region: "hongkong",
    name: "홍콩",
    flag: "🇭🇰",
    signature: "VATP + 디지털자산 허브 야망",
    description: "VATP (Virtual Asset Trading Platform) 라이센스 + 2024 spot BTC/ETH ETF 출시 + 디지털자산 허브 정책",
    keyLaws: [
      { name: "VATP 라이센스 제도", status: "in-force", effectiveDate: "2023-06" },
      { name: "Spot BTC/ETH ETF", status: "in-force", effectiveDate: "2024-04" },
      { name: "Stablecoin Bill", status: "proposed" },
    ],
    subIssues: [
      {
        slug: "regulation-hongkong-vatp",
        label: "#R8",
        title: "홍콩: VATP + 디지털자산 허브 야망",
        publishedAt: "2026-10-08",
        scope: "VATP 라이센스 17개사 · spot ETF 1년 데이터 · CN 본토 자본 우회",
      },
    ],
  },
  {
    region: "singapore",
    name: "싱가포르",
    flag: "🇸🇬",
    signature: "MAS Payment Services Act + DPT",
    description: "MAS (통화청) 의 가장 정교한 규제 + DPT (Digital Payment Token) 라이센스 + 기관 hub 야망",
    keyLaws: [
      { name: "Payment Services Act", status: "in-force", effectiveDate: "2020-01" },
      { name: "DPT 라이센스 제도", status: "in-force", effectiveDate: "2020-01" },
      { name: "Stablecoin Framework", status: "in-force", effectiveDate: "2023-08" },
    ],
    subIssues: [
      {
        slug: "regulation-singapore-mas-dpt",
        label: "#R9",
        title: "싱가포르: MAS Payment Services Act + DPT",
        publishedAt: "2026-10-15",
        scope: "DPT 라이센스 발급 현황 · 기관 hub 모델 · MAS Stablecoin Framework",
      },
    ],
  },
  {
    region: "uae",
    name: "UAE",
    flag: "🇦🇪",
    signature: "VARA + DMCC 디지털자산 허브",
    description: "VARA (Virtual Assets Regulatory Authority) + DMCC + ADGM 다중 라이센스 체계",
    keyLaws: [
      { name: "VARA 설립 (Dubai)", status: "in-force", effectiveDate: "2022-03" },
      { name: "ADGM Crypto Framework", status: "in-force", effectiveDate: "2018-06" },
      { name: "DMCC Crypto Centre", status: "in-force", effectiveDate: "2021-05" },
    ],
    subIssues: [
      {
        slug: "regulation-uae-vara",
        label: "#R10",
        title: "UAE: VARA + DMCC 디지털자산 허브",
        publishedAt: "2026-10-22",
        scope: "VARA 라이센스 · ADGM vs Dubai 비교 · 기관 자본 유치",
      },
    ],
  },
  {
    region: "mena",
    name: "사우디·중동",
    flag: "🌍",
    signature: "AlCBA + MENA 디지털 인프라",
    description: "사우디 SAMA 의 신중한 접근 + 바레인·카타르의 fintech hub 야망",
    keyLaws: [
      { name: "SAMA Crypto Guidance", status: "draft" },
      { name: "Bahrain Crypto Asset Module", status: "in-force", effectiveDate: "2019-02" },
      { name: "Qatar Digital Assets Framework", status: "proposed" },
    ],
    subIssues: [
      {
        slug: "regulation-mena-digital",
        label: "#R11",
        title: "사우디·중동: AlCBA + MENA 디지털 인프라",
        publishedAt: "2026-10-29",
        scope: "사우디 SAMA · 바레인 · 카타르 · MENA fintech 경쟁",
      },
    ],
  },
  {
    region: "latam",
    name: "라틴 아메리카",
    flag: "🌎",
    signature: "엘살바도르 + 아르헨티나 + 브라질",
    description: "엘살바도르 BTC 법정통화 5년 회고 + 아르헨티나 dollarization 후보 + 브라질 스테이블 정착",
    keyLaws: [
      { name: "엘살바도르 BTC 법정통화", status: "in-force", effectiveDate: "2021-09" },
      { name: "아르헨티나 가상자산 규제", status: "in-force", effectiveDate: "2024-03" },
      { name: "브라질 가상자산 시장법", status: "in-force", effectiveDate: "2023-06" },
    ],
    subIssues: [
      {
        slug: "regulation-latam-elsalvador-argentina",
        label: "#R12",
        title: "라틴: 엘살바도르 + 아르헨티나 + 브라질",
        publishedAt: "2026-11-05",
        scope: "엘살바도르 5년 회고 · Milei dollarization · 브라질 PIX + 스테이블",
      },
    ],
  },
  {
    region: "india-asean",
    name: "인도·동남아",
    flag: "🌏",
    signature: "RBI ban → ETF 검토 + 베트남·태국·인니",
    description: "인도 RBI 의 ban → ETF 검토 전환 + 베트남 P2P + 태국 SEC + 인도네시아 BAPPEBTI",
    keyLaws: [
      { name: "인도 1% TDS (가상자산 거래)", status: "in-force", effectiveDate: "2022-07" },
      { name: "인도 spot ETF 검토", status: "draft" },
      { name: "태국 SEC 가상자산 라이센스", status: "in-force", effectiveDate: "2018-05" },
      { name: "베트남 가상자산 framework", status: "draft" },
    ],
    subIssues: [
      {
        slug: "regulation-india-southeast-asia",
        label: "#R13",
        title: "인도·동남아: RBI ban → ETF 검토 + 동남아 비교",
        publishedAt: "2026-11-12",
        scope: "인도 1% TDS 효과 · spot ETF 검토 · 태국 · 베트남 · 인니",
      },
    ],
  },
  {
    region: "china",
    name: "중국",
    flag: "🇨🇳",
    signature: "전면 금지 + e-CNY CBDC",
    description: "2021 가상자산 거래/채굴 전면 금지 + e-CNY (디지털 위안) 글로벌 확장 야망",
    keyLaws: [
      { name: "가상자산 거래 금지", status: "in-force", effectiveDate: "2021-09" },
      { name: "가상자산 채굴 금지", status: "in-force", effectiveDate: "2021-05" },
      { name: "e-CNY 메인넷 활성화", status: "in-force", effectiveDate: "2020-04" },
    ],
    subIssues: [
      {
        slug: "regulation-china-cbdc-ban",
        label: "#R14",
        title: "중국: 전면 금지 + e-CNY CBDC",
        publishedAt: "2026-11-19",
        scope: "2021 금지 후 회색지대 채굴 · e-CNY 거래량 · 홍콩과의 양면 정책",
      },
    ],
  },
] as const;

export const REGULATION_STATUS_COLOR: Record<RegulationStatus, string> = {
  "in-force": "var(--neon-green)",
  proposed: "var(--neon-amber)",
  draft: "var(--neon-cyan)",
  rejected: "var(--neon-red)",
};

export function getRegulationByRegion(region: string): Regulation | undefined {
  return REGULATIONS.find((r) => r.region.toLowerCase() === region.toLowerCase());
}
