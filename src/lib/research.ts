import type { SubIssue } from "./coins";

export type ResearchField =
  | "Cryptography"
  | "Game-Theory"
  | "Token-Economics"
  | "Macroeconomics"
  | "On-chain-Analytics"
  | "Philosophy"
  | "Quantum"
  | "Mechanism-Design";

export interface PaperReference {
  authors: string;
  year: number;
  title: string;
  venue: string;
  url: string;
  doi?: string;
}

export interface ResearchTopic {
  id: string;
  name: string;
  field: ResearchField;
  signature: string;
  description: string;
  keyPapers: readonly PaperReference[];
  subIssues: readonly SubIssue[];
}

export const RESEARCH_TOPICS: readonly ResearchTopic[] = [
  {
    id: "satoshi-foundation",
    name: "Satoshi 백서와 그 후 — 비트코인의 학술적 기초",
    field: "Cryptography",
    signature: "Nakamoto (2008) 9페이지 + Bitcoin 학술 후속",
    description: "Bitcoin 백서를 cypherpunk · cryptography · distributed systems 세 학술 줄기 위에 위치시켜 읽기. Wei Dai b-money (1998), Adam Back Hashcash (2002), Nick Szabo Bit Gold (2005) 와의 계보",
    keyPapers: [
      {
        authors: "Nakamoto, S.",
        year: 2008,
        title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        venue: "cypherpunks mailing list",
        url: "https://bitcoin.org/bitcoin.pdf",
      },
      {
        authors: "Eyal, I., & Sirer, E.G.",
        year: 2014,
        title: "Majority Is Not Enough: Bitcoin Mining Is Vulnerable (Selfish Mining)",
        venue: "Financial Cryptography 2014",
        url: "https://www.cs.cornell.edu/~ie53/publications/btcProcFC.pdf",
        doi: "10.1007/978-3-662-45472-5_28",
      },
    ],
    subIssues: [
      {
        slug: "research-satoshi-paper-deep-read",
        label: "#P1",
        title: "Satoshi 백서 9페이지 deep read — 5개 학술 줄기 추적",
        publishedAt: "2027-01-07",
        scope: "Wei Dai · Adam Back · Nick Szabo · Hashcash · b-money 계보",
      },
    ],
  },
  {
    id: "vitalik-papers",
    name: "Vitalik 의 학술 논문들 — Endgame · Scaling Trilemma",
    field: "Mechanism-Design",
    signature: "Buterin Endgame (2021) + Scaling Trilemma (2018) + 진화",
    description: "Vitalik Buterin 의 비공식 학술 글 (vitalik.eth.limo) 20+편 중 가장 영향력 있는 4편 deep read. 학계 인용 수가 적지만 industry 영향력은 정통 논문 이상",
    keyPapers: [
      {
        authors: "Buterin, V.",
        year: 2021,
        title: "Endgame",
        venue: "vitalik.eth.limo",
        url: "https://vitalik.eth.limo/general/2021/12/06/endgame.html",
      },
      {
        authors: "Buterin, V.",
        year: 2021,
        title: "The Limits to Blockchain Scalability",
        venue: "vitalik.eth.limo",
        url: "https://vitalik.eth.limo/general/2021/05/23/scaling.html",
      },
      {
        authors: "Buterin, V.",
        year: 2017,
        title: "The Meaning of Decentralization",
        venue: "Medium",
        url: "https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274",
      },
    ],
    subIssues: [
      {
        slug: "research-vitalik-endgame-scaling",
        label: "#P2",
        title: "Vitalik Endgame + Scaling Trilemma 정밀 분석",
        publishedAt: "2027-01-14",
        scope: "Endgame 의 핵심 명제 · 51% attack survival · L2 의 trade-off",
      },
    ],
  },
  {
    id: "amm-mathematics",
    name: "AMM 수학 — Uniswap v2 · v3 · v4 paper",
    field: "Mechanism-Design",
    signature: "x*y=k 부터 Concentrated Liquidity, Hooks 까지",
    description: "Hayden Adams 의 v2 paper (2020) + Adams et al. v3 paper (2021) + v4 whitepaper (2025). LP 의 impermanent loss · concentrated liquidity 의 수학 · MEV 와의 상호작용",
    keyPapers: [
      {
        authors: "Adams, H., Zinsmeister, N., & Robinson, D.",
        year: 2020,
        title: "Uniswap v2 Core",
        venue: "Uniswap Labs",
        url: "https://uniswap.org/whitepaper.pdf",
      },
      {
        authors: "Adams, H., Zinsmeister, N., Salem, M., Keefer, R., & Robinson, D.",
        year: 2021,
        title: "Uniswap v3 Core",
        venue: "Uniswap Labs",
        url: "https://uniswap.org/whitepaper-v3.pdf",
      },
    ],
    subIssues: [
      {
        slug: "research-amm-uniswap-mathematics",
        label: "#P3",
        title: "AMM 의 수학 — x*y=k 부터 Concentrated Liquidity 까지",
        publishedAt: "2027-01-21",
        scope: "Constant product · impermanent loss · concentrated liquidity 적분",
      },
    ],
  },
  {
    id: "onchain-valuation",
    name: "온체인 가치평가 — NVT · MVRV · S2F 비판",
    field: "On-chain-Analytics",
    signature: "Woobull · Glassnode · Plan B S2F 의 학술 평가",
    description: "Willy Woo NVT (2017), Murad Mahmudov & David Puell MVRV (2018), Plan B S2F (2019) 의 정량 모델 + 학계 비판. NY Fed Staff Report 1052 의 macro 시각",
    keyPapers: [
      {
        authors: "Woo, W.",
        year: 2017,
        title: "Bitcoin's NVT Ratio",
        venue: "Woobull Charts",
        url: "https://woobull.com/introducing-nvt-ratio-bitcoins-pe-ratio-use-it-to-detect-bubbles/",
      },
      {
        authors: "Plan B (anonymous)",
        year: 2019,
        title: "Modeling Bitcoin Value with Scarcity",
        venue: "Medium",
        url: "https://medium.com/@100trillionUSD/modeling-bitcoins-value-with-scarcity-91fa0fc03e25",
      },
      {
        authors: "Liu, Y., Sheng, J., & Wang, W.",
        year: 2023,
        title: "Technology and Cryptocurrency Valuation: Evidence from Machine Learning",
        venue: "NY Fed Staff Report 1052",
        url: "https://www.newyorkfed.org/research/staff_reports/sr1052",
      },
    ],
    subIssues: [
      {
        slug: "research-onchain-valuation-models",
        label: "#P4",
        title: "온체인 가치평가 모델 비교 — NVT · MVRV · S2F · NY Fed",
        publishedAt: "2027-01-28",
        scope: "정량 모델 4종 · 정확도 검증 · Plan B S2F 실패 사례",
      },
    ],
  },
  {
    id: "macro-money",
    name: "매크로·화폐론 — Lyn Alden · Saifedean · Selgin",
    field: "Macroeconomics",
    signature: "Broken Money + Bitcoin Standard + Free Banking 비판",
    description: "Lyn Alden Broken Money (2023) 의 4단계 화폐 진화 framework + Saifedean Ammous Bitcoin Standard (2018) 의 stock-to-flow 논리 + George Selgin 의 free banking 비판. 오스트리아·MMT·BIS 다중 시각",
    keyPapers: [
      {
        authors: "Alden, L.",
        year: 2023,
        title: "Broken Money: Why Our Financial System is Failing Us and How We Can Make It Better",
        venue: "Self-published",
        url: "https://www.lynalden.com/broken-money/",
      },
      {
        authors: "Ammous, S.",
        year: 2018,
        title: "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        venue: "Wiley",
        url: "https://saifedean.com/thebitcoinstandard",
      },
      {
        authors: "Selgin, G.",
        year: 2015,
        title: "Synthetic Commodity Money",
        venue: "Journal of Financial Stability",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S1572308914000928",
        doi: "10.1016/j.jfs.2014.07.002",
      },
    ],
    subIssues: [
      {
        slug: "research-macro-money-philosophy",
        label: "#P5",
        title: "매크로·화폐론 — Alden · Ammous · Selgin 3축 비교",
        publishedAt: "2027-02-04",
        scope: "오스트리아 · MMT · synthetic commodity money 3 framework",
      },
    ],
  },
  {
    id: "quantum-threat",
    name: "Quantum Threat — NIST PQC + Bitcoin 양자 취약성",
    field: "Quantum",
    signature: "NIST 4 라운드 + Shor's algorithm + Bitcoin Q-day",
    description: "NIST Post-Quantum Cryptography (PQC) standardization 4년 결과 (Kyber, Dilithium 등) + Shor's algorithm 가 Bitcoin ECDSA 에 미치는 영향 정량. Q-day 추정과 P2PK 잔액 위협",
    keyPapers: [
      {
        authors: "NIST Post-Quantum Cryptography",
        year: 2024,
        title: "FIPS 203/204/205 Final Standards",
        venue: "NIST",
        url: "https://csrc.nist.gov/Projects/post-quantum-cryptography",
      },
      {
        authors: "Aggarwal, D., Brennen, G.K., Lee, T., Santha, M., & Tomamichel, M.",
        year: 2018,
        title: "Quantum Attacks on Bitcoin and How to Protect Against Them",
        venue: "arXiv",
        url: "https://arxiv.org/abs/1710.10377",
      },
    ],
    subIssues: [
      {
        slug: "research-quantum-bitcoin-threat",
        label: "#P6",
        title: "Quantum Threat — NIST PQC 표준과 Bitcoin Q-day 시나리오",
        publishedAt: "2027-02-11",
        scope: "Shor's algorithm · NIST 4 라운드 · P2PK 잔액 · BIP-360 PQ proposal",
      },
    ],
  },
] as const;

export const RESEARCH_FIELD_COLOR: Record<ResearchField, string> = {
  Cryptography: "var(--neon-cyan)",
  "Game-Theory": "var(--neon-magenta)",
  "Token-Economics": "var(--neon-amber)",
  Macroeconomics: "var(--neon-green)",
  "On-chain-Analytics": "var(--neon-cyan)",
  Philosophy: "var(--neon-magenta)",
  Quantum: "var(--neon-amber)",
  "Mechanism-Design": "var(--neon-green)",
};

export function getResearchTopicById(id: string): ResearchTopic | undefined {
  return RESEARCH_TOPICS.find((t) => t.id.toLowerCase() === id.toLowerCase());
}
