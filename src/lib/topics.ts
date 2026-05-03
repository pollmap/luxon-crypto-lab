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
  {
    id: "defi-protocols",
    name: "DeFi Top 10 프로토콜 — 학술 deep read",
    signature: "Aave · Maker · Lido · Uniswap · Curve · Compound · GMX · Pendle · EigenLayer · Morpho",
    description:
      "DeFi 시장의 핵심 인프라 10 프로토콜을 학술 framework 으로 deep read. TVL · 수수료 · 거버넌스 · 보안 사고 · 학계 인용 종합. BIS WP 1133, IMF DeFi WP, Stanford CBR, Cornell IC3 자료 결합",
    episodes: 10,
    subIssues: [
      {
        slug: "defi-aave-lending-leader",
        label: "#DF1",
        title: "Aave — DeFi 대출 1위 프로토콜의 학술 분석",
        publishedAt: "2027-06-03",
        scope: "Aave V3/V4 · GHO 스테이블 · 안전성 모듈 · 청산 메커니즘",
      },
      {
        slug: "defi-makerdao-sky-cdp",
        label: "#DF2",
        title: "MakerDAO/Sky — CDP의 학술 표준",
        publishedAt: "2027-06-10",
        scope: "DAI · USDS · Endgame · RWA 투자 · MKR 거버넌스",
      },
      {
        slug: "defi-lido-lst-dominance",
        label: "#DF3",
        title: "Lido — LST 시장 30%+ 점유의 학술 분석",
        publishedAt: "2027-06-17",
        scope: "stETH · 검증자 분포 · 분산화 vs 효율성 trade-off",
      },
      {
        slug: "defi-uniswap-v4-amm",
        label: "#DF4",
        title: "Uniswap V4 — AMM 의 진화와 Hooks 아키텍처",
        publishedAt: "2027-06-24",
        scope: "V1→V4 진화 · Hooks · UNI 토큰 가치 포착",
      },
      {
        slug: "defi-curve-stableswap-mathematics",
        label: "#DF5",
        title: "Curve — Stableswap 수학과 CRV 토큰 전쟁",
        publishedAt: "2027-07-01",
        scope: "Stableswap 수학 · veCRV · 컨벡스 전쟁 · veToken 모델",
      },
      {
        slug: "defi-compound-lineage",
        label: "#DF6",
        title: "Compound — DeFi 대출의 시조와 그 진화",
        publishedAt: "2027-07-08",
        scope: "COMP 토큰 분배 · DeFi Summer 도화선 · v3 진화",
      },
      {
        slug: "defi-gmx-dydx-perp",
        label: "#DF7",
        title: "GMX + dYdX — Perp DEX 의 두 모델",
        publishedAt: "2027-07-15",
        scope: "GLP 풀 vs orderbook · 가격 발견 · 청산 캐스케이드",
      },
      {
        slug: "defi-pendle-yield-separation",
        label: "#DF8",
        title: "Pendle — 수익률 분리의 학술 framework",
        publishedAt: "2027-07-22",
        scope: "PT/YT 분리 · 채권 시장 비교 · 수익률 곡선 형성",
      },
      {
        slug: "defi-eigenlayer-restaking",
        label: "#DF9",
        title: "EigenLayer — 재스테이킹의 거시 함의",
        publishedAt: "2027-07-29",
        scope: "AVS · 슬래시 위험 · 시스템 리스크 · BIS WP 분석",
      },
      {
        slug: "defi-morpho-layered-lending",
        label: "#DF10",
        title: "Morpho — 레이어드 대출의 새 모델",
        publishedAt: "2027-08-05",
        scope: "Aave·Compound 위 P2P 매칭 · 격리 풀 · 자본 효율",
      },
    ],
  },
  {
    id: "l2-networks",
    name: "L2 Top 6 — Ethereum 확장의 학술 deep read",
    signature: "Arbitrum · Base · Optimism · zkSync · Linea · Scroll",
    description:
      "Ethereum L2 인프라 6대 네트워크의 학술 분석. Optimistic vs ZK Rollup · TVL 비교 · 토큰 가치 포착 · L1-L2 fee 흐름 · BIS WP DeFi 분석 결합",
    episodes: 6,
    subIssues: [
      {
        slug: "l2-arbitrum-optimistic-leader",
        label: "#L1",
        title: "Arbitrum — Optimistic Rollup 1위의 학술 분석",
        publishedAt: "2027-08-12",
        scope: "Nitro · Stylus · ARB 토큰 · DAO 거버넌스",
      },
      {
        slug: "l2-base-coinbase-strategy",
        label: "#L2",
        title: "Base — Coinbase L2 전략과 토큰 부재 모델",
        publishedAt: "2027-08-19",
        scope: "Coinbase 통합 · 토큰 부재 · OP Stack · 사용자 1억",
      },
      {
        slug: "l2-optimism-superchain",
        label: "#L3",
        title: "Optimism + Superchain — OP Stack 생태계",
        publishedAt: "2027-08-26",
        scope: "OP Stack · Superchain · Retroactive Funding · OP 토큰",
      },
      {
        slug: "l2-zksync-era-zk",
        label: "#L4",
        title: "zkSync Era — ZK Rollup 의 학술 깊이",
        publishedAt: "2027-09-02",
        scope: "zkEVM · ZK proof · Boojum · 데이터 가용성",
      },
      {
        slug: "l2-linea-consensys",
        label: "#L5",
        title: "Linea — ConsenSys 의 ZK Rollup 전략",
        publishedAt: "2027-09-09",
        scope: "MetaMask 통합 · ZK 증명 · 기관 채택 시도",
      },
      {
        slug: "l2-scroll-taiko-community-zk",
        label: "#L6",
        title: "Scroll + Taiko — 커뮤니티 ZK Rollup 두 모델",
        publishedAt: "2027-09-16",
        scope: "Scroll 학술 zkEVM · Taiko BCR 모델 · 커뮤니티 거버넌스",
      },
    ],
  },
  {
    id: "korea-fintech",
    name: "한국 핀테크/빅테크 가상자산 진출",
    signature: "카카오 · 토스 · 네이버 · 두나무 · Klaytn-Kaia · 쿠팡",
    description:
      "한국 핀테크·빅테크의 가상자산·블록체인 진출 분석. 카카오뱅크/카카오페이, 토스, 네이버페이/라인 NEXT, 두나무(업비트), Klaytn-Kaia 합병, 쿠팡페이 등",
    episodes: 6,
    subIssues: [
      {
        slug: "korea-fintech-kakao-bank-pay",
        label: "#KF1",
        title: "카카오뱅크 + 카카오페이 — Klaytn 정리 후 가상자산 전략",
        publishedAt: "2027-09-23",
        scope: "카카오뱅크 디지털 자산 · 카카오페이 가상자산 결제 · Klaytn 정리",
      },
      {
        slug: "korea-fintech-toss-strategy",
        label: "#KF2",
        title: "토스(Toss) — 가상자산 진출 신중 전략",
        publishedAt: "2027-09-30",
        scope: "토스증권 · 토스뱅크 · 가상자산 진출 미정 · 비바리퍼블리카 IPO",
      },
      {
        slug: "korea-fintech-naver-line-next",
        label: "#KF3",
        title: "네이버페이 + 라인 NEXT — FINSCHIA + DOSI 글로벌 전략",
        publishedAt: "2027-10-07",
        scope: "라인 NEXT · FINSCHIA · DOSI NFT · 일본 + 동남아 시장",
      },
      {
        slug: "korea-fintech-coupang-kurly-pay",
        label: "#KF4",
        title: "쿠팡페이 + 컬리페이 — 이커머스 결제와 가상자산 거리",
        publishedAt: "2027-10-14",
        scope: "쿠팡페이 가상자산 진출 미진 · 컬리페이 · 이커머스 결제 한계",
      },
      {
        slug: "korea-fintech-dunamu-upbit",
        label: "#KF5",
        title: "두나무(Dunamu) — 업비트 모회사의 본격 분석",
        publishedAt: "2027-10-21",
        scope: "업비트 점유율 · 두나무 IPO · 람다256 · UPSquare 글로벌",
      },
      {
        slug: "korea-fintech-kaia-merger",
        label: "#KF6",
        title: "Kaia — Klaytn + Finschia 합병의 학술 분석",
        publishedAt: "2027-10-28",
        scope: "Klaytn-Finschia 합병 · Kaia 토큰 · 카카오·라인 시너지",
      },
    ],
  },
  {
    id: "beginner-guide",
    name: "입문자 가이드 + 용어 사전",
    signature: "100 용어 사전 · 5분 입문 · 한국 사용자 첫 단계",
    description:
      "가상자산 학술 글 진입 전 단계. 100 용어 사전, BTC/ETH/지갑/거래소 5분 입문, 한국 사용자가 거래소 가입부터 신고까지 알아야 할 표준 단계",
    episodes: 12,
    subIssues: [
      {
        slug: "beginner-glossary-100-terms",
        label: "#G1",
        title: "가상자산 용어 100선 — 학술 글 읽기 전 필독",
        publishedAt: "2027-11-04",
        scope: "NVT · MVRV · mNAV · restaking · ZK · L2 · CDP 등 100 용어",
      },
      {
        slug: "beginner-bitcoin-5min",
        label: "#G2",
        title: "비트코인 5분 입문 — 화폐가 아닌 자산",
        publishedAt: "2027-11-11",
        scope: "BTC 가 무엇인지 5분에 이해 · 사토시 백서 핵심",
      },
      {
        slug: "beginner-ethereum-5min",
        label: "#G3",
        title: "이더리움 5분 입문 — 분산 컴퓨터의 본질",
        publishedAt: "2027-11-18",
        scope: "ETH = 디지털 정유사 비유 · 스마트 컨트랙트 · DeFi 기반",
      },
      {
        slug: "beginner-wallet-types",
        label: "#G4",
        title: "지갑 종류 가이드 — 핫·콜드·하드웨어",
        publishedAt: "2027-11-25",
        scope: "MetaMask · Ledger · Trezor · 시드 구문 · 자가 보관",
      },
      {
        slug: "beginner-exchange-mechanics",
        label: "#G5",
        title: "거래소 작동 원리 — CEX vs DEX",
        publishedAt: "2027-12-02",
        scope: "Order book · AMM · 매수/매도 시 무엇이 일어나는가",
      },
      {
        slug: "beginner-stablecoin-explained",
        label: "#G6",
        title: "스테이블코인 입문 — USDT · USDC 의 차이",
        publishedAt: "2027-12-09",
        scope: "Fiat backed · Crypto backed · Algorithmic · 위험",
      },
      {
        slug: "beginner-defi-explained",
        label: "#G7",
        title: "DeFi 입문 — 대출·교환·수익률 농사",
        publishedAt: "2027-12-16",
        scope: "Aave · Uniswap · yield farming · APY 의 진실",
      },
      {
        slug: "beginner-nft-explained",
        label: "#G8",
        title: "NFT 입문 — 디지털 소유권의 본질",
        publishedAt: "2027-12-23",
        scope: "ERC-721 · 메타데이터 · 가치 논쟁 · 한국 NFT 시장",
      },
      {
        slug: "beginner-korea-first-steps",
        label: "#G9",
        title: "한국 사용자 첫 단계 — 거래소 가입부터 신고까지",
        publishedAt: "2027-12-30",
        scope: "업비트/빗썸 가입 · 실명 계좌 · 트래블룰 · 양도소득세 신고",
      },
      {
        slug: "beginner-staking-explained",
        label: "#G10",
        title: "스테이킹 입문 — 그게 정말 *무위험* 인가",
        publishedAt: "2028-01-06",
        scope: "PoS 검증자 · 스테이킹 보상 · 슬래시 위험 · 한국 세제",
      },
      {
        slug: "beginner-reading-academic-papers",
        label: "#G11",
        title: "학술 글 읽는 법 — luxon-crypto-lab 활용 가이드",
        publishedAt: "2028-01-13",
        scope: "Research 시리즈 진입 경로 · 한국 자료 + 글로벌 자료 결합 활용",
      },
      {
        slug: "beginner-common-scams",
        label: "#G12",
        title: "흔한 사기 패턴 — 러그풀·폰지·피싱",
        publishedAt: "2028-01-20",
        scope: "러그풀 사례 · 폰지 구조 · 피싱 · 한국 사기 케이스 · 자기 방어",
      },
    ],
  },
] as const;

export function getTopicById(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id.toLowerCase() === id.toLowerCase());
}
