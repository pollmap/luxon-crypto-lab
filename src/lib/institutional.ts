import type { SubIssue } from "./coins";

export type InstitutionType =
  | "Asset-Manager"
  | "Bank"
  | "Custodian"
  | "Insurance"
  | "Pension"
  | "Sovereign-Wealth"
  | "Securities"
  | "Government";

export type InstitutionRegion = "US" | "EU" | "Korea" | "Japan" | "MENA" | "Asia" | "Global";

export interface Institution {
  id: string;
  name: string;
  type: InstitutionType;
  region: InstitutionRegion;
  signature: string;
  description: string;
  aumOrAssetsB?: number;
  cryptoExposureB?: number;
  subIssues: readonly SubIssue[];
}

export const INSTITUTIONS: readonly Institution[] = [
  {
    id: "blackrock",
    name: "BlackRock",
    type: "Asset-Manager",
    region: "US",
    signature: "IBIT $96B + ETHA · 디지털 자산 부서 · BUIDL 토큰화 펀드",
    description:
      "세계 최대 자산운용사(AUM ~$11.5T). 2024년 1월 IBIT 비트코인 현물 ETF 출시 후 단일 ETF 사상 최대 속도로 AUM $96B 도달. ETHA 이더리움 ETF 도 ~$10B. BUIDL 토큰화 머니마켓 펀드는 RWA 분야 첫 대규모 케이스",
    aumOrAssetsB: 11500,
    cryptoExposureB: 110,
    subIssues: [
      {
        slug: "institutional-blackrock-ibit-buidl",
        label: "#I1",
        title: "BlackRock — IBIT $96B 도달과 BUIDL 토큰화 RWA",
        publishedAt: "2027-03-22",
        scope: "IBIT/ETHA AUM 추이 · BUIDL 구조 · Larry Fink 디지털 자산 입장 변화",
      },
    ],
  },
  {
    id: "korea-banks",
    name: "한국 은행권 (KB·하나·신한·우리)",
    type: "Bank",
    region: "Korea",
    signature: "VAUPA 후 신탁/수탁 진출 · 토큰증권(STO) 컨소시엄",
    description:
      "한국 4대 시중은행의 디지털 자산 진출 현황. KB국민의 KODA(한국디지털자산), 하나의 BC카드 디지털 자산, 신한의 KDAC(한국디지털자산수탁), 우리의 D-Custody. 2027년 STO 시행 + 가상자산 신탁 허용을 앞두고 인프라 정비 중",
    aumOrAssetsB: 3200,
    cryptoExposureB: 0.5,
    subIssues: [
      {
        slug: "institutional-korea-banks-custody",
        label: "#I2",
        title: "한국 은행권 — KB·하나·신한·우리 디지털 자산 진출",
        publishedAt: "2027-03-29",
        scope: "KODA·KDAC·D-Custody·BC카드 · STO 컨소시엄 · 신탁 허용 로드맵",
      },
    ],
  },
  {
    id: "fidelity-ark",
    name: "Fidelity · ARK Invest",
    type: "Asset-Manager",
    region: "US",
    signature: "FBTC $26B + ARKB · 자산운용사 디지털 자산 인프라 부서",
    description:
      "Fidelity Digital Assets 는 2018년 설립, 기관용 BTC/ETH 수탁. 2024년 FBTC 출시 후 IBIT 다음 2위. ARK Invest 의 ARKB 는 21Shares 와 협력. Cathie Wood 의 BTC $1.5M 가설은 Bitcoin 가격 모델 중 가장 강한 long thesis",
    aumOrAssetsB: 5400,
    cryptoExposureB: 32,
    subIssues: [
      {
        slug: "institutional-fidelity-ark",
        label: "#I3",
        title: "Fidelity 디지털 자산 + ARK BTC $1.5M 가설",
        publishedAt: "2027-04-05",
        scope: "FBTC AUM · ARK Big Ideas 보고서 · 기관 수탁 인프라",
      },
    ],
  },
  {
    id: "japan-banks",
    name: "일본 — MUFG·Nomura·SMBC",
    type: "Bank",
    region: "Japan",
    signature: "Progmat 컨소시엄 · 토큰화 RWA · JVCEA 회원",
    description:
      "MUFG 는 Progmat 토큰화 플랫폼을 2023년 분사, 일본 메가뱅크 토큰증권 표준이 됨. Nomura 는 Komainu 수탁사 자회사로 기관용 BTC/ETH 보관. SMBC 는 일본 메가뱅크 중 가장 늦게 진입했지만 JVCEA 와 협력 가속화",
    aumOrAssetsB: 4800,
    cryptoExposureB: 8,
    subIssues: [
      {
        slug: "institutional-japan-megabanks",
        label: "#I4",
        title: "일본 메가뱅크 — Progmat · Komainu · JVCEA",
        publishedAt: "2027-04-12",
        scope: "MUFG Progmat · Nomura Komainu · SMBC · 일본 ETF 검토",
      },
    ],
  },
  {
    id: "mena-swf",
    name: "MENA Sovereign Wealth Funds",
    type: "Sovereign-Wealth",
    region: "MENA",
    signature: "ADIA · Mubadala · PIF · QIA — 비트코인/디지털 자산 노출",
    description:
      "Abu Dhabi Investment Authority(ADIA, AUM ~$1.05T), Mubadala(~$330B, BlackRock 통한 IBIT 보유), 사우디 PIF(~$925B), 카타르 QIA(~$526B). 2024-2025 일부 직접 BTC 매수 + Strategy 주식 매수 보고. 중동의 비트코인 채택은 매크로 신호",
    aumOrAssetsB: 2840,
    cryptoExposureB: 6.2,
    subIssues: [
      {
        slug: "institutional-mena-swf",
        label: "#I5",
        title: "중동 SWF — ADIA·Mubadala·PIF·QIA 디지털 자산 노출",
        publishedAt: "2027-04-19",
        scope: "ADIA Mubadala IBIT · 사우디 PIF · QIA · 두바이 VARA 라이센스 보유사",
      },
    ],
  },
  {
    id: "us-custodians",
    name: "BNY Mellon · State Street · JP Morgan",
    type: "Custodian",
    region: "US",
    signature: "기관 디지털 자산 수탁 인프라 — Anchorage·Coinbase Custody",
    description:
      "BNY Mellon 은 2024년 ETF 수탁사 자격 첫 미국 메가뱅크. State Street 는 Anchorage Digital 과 협력. JP Morgan Onyx 는 Repo 토큰화 + JPMD 토큰 (예금 토큰). Wall Street 의 디지털 자산 인프라가 ETF 출시 후 가속화",
    aumOrAssetsB: 9700,
    cryptoExposureB: 18,
    subIssues: [
      {
        slug: "institutional-us-custodians",
        label: "#I6",
        title: "미국 수탁사 인프라 — BNY · State Street · JP Morgan Onyx",
        publishedAt: "2027-04-26",
        scope: "ETF 수탁 자격 · JPMD 예금 토큰 · Onyx Repo · Anchorage 협력",
      },
    ],
  },
  {
    id: "global-pensions",
    name: "글로벌 연기금 · 보험사",
    type: "Pension",
    region: "Global",
    signature: "노르웨이 GPFG · CalPERS · 일본 GPIF · 캐나다 CPPIB",
    description:
      "노르웨이 정부연기금(GPFG, $1.7T)은 Strategy 주식 보유로 BTC 간접 노출 ~$355M. CalPERS($500B)는 Strategy/Coinbase 주식. 일본 GPIF($1.5T)는 직접 노출 X 지만 BlackRock 펀드 경유 간접 노출. 캐나다 CPPIB 는 디지털 자산 부서 신설 검토 중",
    aumOrAssetsB: 11200,
    cryptoExposureB: 4.8,
    subIssues: [
      {
        slug: "institutional-global-pensions",
        label: "#I7",
        title: "글로벌 연기금 — GPFG · CalPERS · GPIF 의 간접 노출",
        publishedAt: "2027-05-03",
        scope: "GPFG Strategy 보유 · CalPERS Coinbase 주식 · GPIF 검토 · CPPIB",
      },
    ],
  },
  {
    id: "korea-asset-managers",
    name: "한국 자산운용사 · 증권사",
    type: "Securities",
    region: "Korea",
    signature: "미래에셋 · 삼성자산운용 · 한국투자증권 · NH투자증권",
    description:
      "한국 ETF 시장이 2027년 가상자산 ETF 허용을 앞두고 정비 중. 미래에셋은 Global X (캐나다 자회사)를 통해 캐나다 BTC ETF 운영. 삼성자산운용은 홍콩 BTC ETF 협력. 한투증권은 STO 인프라 우선 구축. NH 는 신한과 STO 컨소시엄 합류",
    aumOrAssetsB: 850,
    cryptoExposureB: 2.1,
    subIssues: [
      {
        slug: "institutional-korea-asset-managers",
        label: "#I8",
        title: "한국 자산운용 · 증권사 — 미래에셋·삼성·한투·NH",
        publishedAt: "2027-05-10",
        scope: "Global X BTC ETF · 홍콩 BTC ETF · STO 인프라 · 한국 ETF 출시 로드맵",
      },
    ],
  },
] as const;

export const INSTITUTION_TYPE_COLOR: Record<InstitutionType, string> = {
  "Asset-Manager": "var(--neon-cyan)",
  Bank: "var(--neon-magenta)",
  Custodian: "var(--neon-amber)",
  Insurance: "var(--neon-green)",
  Pension: "var(--neon-cyan)",
  "Sovereign-Wealth": "var(--neon-amber)",
  Securities: "var(--neon-magenta)",
  Government: "var(--neon-green)",
};

export const INSTITUTION_REGION_LABEL: Record<InstitutionRegion, string> = {
  US: "미국",
  EU: "유럽",
  Korea: "한국",
  Japan: "일본",
  MENA: "중동·북아프리카",
  Asia: "아시아",
  Global: "글로벌",
};

export function getInstitutionById(id: string): Institution | undefined {
  return INSTITUTIONS.find((i) => i.id.toLowerCase() === id.toLowerCase());
}
