import type { SubIssue } from "./coins";

export type ResearchField =
  | "Cryptography"
  | "Game-Theory"
  | "Token-Economics"
  | "Macroeconomics"
  | "On-chain-Analytics"
  | "Philosophy"
  | "Quantum"
  | "Mechanism-Design"
  | "Korea-Academia"
  | "Global-CentralBank"
  | "Global-Academia";

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
  {
    id: "korea-bok-research",
    name: "한국은행 BOK — 가상자산 정책 학술 자료",
    field: "Korea-Academia",
    signature: "BOK Issue Note · 통화정책 시사점 · CBDC 모의실험",
    description:
      "한국은행이 2018년부터 발간한 BOK Issue Note · 조사연구 시리즈 중 가상자산·CBDC 관련 자료 메타분석. 통화정책 전달경로, 결제시스템 안정성, 한은-디지털화폐(CBDC) 모의실험 결과까지",
    keyPapers: [
      {
        authors: "한국은행 금융결제국",
        year: 2022,
        title: "중앙은행 디지털화폐(CBDC) 모의실험 연구 결과",
        venue: "한국은행",
        url: "https://www.bok.or.kr/portal/bbs/B0000232/list.do?menuNo=200766",
      },
      {
        authors: "한국은행 조사국",
        year: 2024,
        title: "암호자산 시장의 변동성 확대와 정책적 시사점 (BOK Issue Note)",
        venue: "한국은행 BOK Issue Note",
        url: "https://www.bok.or.kr/portal/bbs/B0000338/list.do?menuNo=200431",
      },
    ],
    subIssues: [
      {
        slug: "research-korea-bok-issue-notes",
        label: "#P7",
        title: "한국은행 BOK Issue — 가상자산 정책 자료 메타분석",
        publishedAt: "2027-02-18",
        scope: "BOK Issue Note · CBDC 모의실험 · 통화정책 전달경로",
      },
    ],
  },
  {
    id: "korea-kcmi-research",
    name: "자본시장연구원 KCMI — 가상자산법 + STO 보고서",
    field: "Korea-Academia",
    signature: "VAUPA 입법 검토 · 토큰증권(STO) · 시장 구조",
    description:
      "자본시장연구원(KCMI)이 발간한 가상자산이용자보호법(VAUPA) 입법 검토, 토큰증권(STO) 제도 도입 보고서, 가상자산 시장구조 분석 자료",
    keyPapers: [
      {
        authors: "김갑래 외, 자본시장연구원",
        year: 2023,
        title: "가상자산이용자보호법 주요 내용 및 시사점",
        venue: "KCMI 이슈보고서",
        url: "https://www.kcmi.re.kr/publications/pub_list.do",
      },
      {
        authors: "자본시장연구원",
        year: 2024,
        title: "토큰증권(STO) 제도 도입과 자본시장 영향",
        venue: "KCMI 이슈보고서",
        url: "https://www.kcmi.re.kr/publications/pub_list.do",
      },
    ],
    subIssues: [
      {
        slug: "research-korea-kcmi-vaupa-sto",
        label: "#P8",
        title: "자본시장연구원 — VAUPA + STO 학술 보고서 deep read",
        publishedAt: "2027-02-25",
        scope: "VAUPA 입법 · STO 제도 · 시장구조 학술 분석",
      },
    ],
  },
  {
    id: "korea-kif-research",
    name: "한국금융연구원 KIF — 글로벌 가상자산 규제 비교",
    field: "Korea-Academia",
    signature: "글로벌 규제 비교 · 스테이블코인 · 디지털 금융",
    description:
      "한국금융연구원(KIF)이 발간한 글로벌 가상자산 규제 비교 보고서, 스테이블코인 동향, 디지털 금융혁신 시리즈",
    keyPapers: [
      {
        authors: "한국금융연구원",
        year: 2024,
        title: "주요국 스테이블코인 규제 동향과 시사점",
        venue: "KIF 금융 VIP 시리즈",
        url: "https://www.kif.re.kr/kif4/publication/viewer?mid=20",
      },
      {
        authors: "한국금융연구원",
        year: 2024,
        title: "글로벌 가상자산 규제 비교 — MiCA · GENIUS · VAUPA",
        venue: "KIF 한국금융연구원",
        url: "https://www.kif.re.kr/",
      },
    ],
    subIssues: [
      {
        slug: "research-korea-kif-global-comparison",
        label: "#P9",
        title: "한국금융연구원 — 글로벌 가상자산 규제 비교 자료",
        publishedAt: "2027-03-04",
        scope: "MiCA · GENIUS · VAUPA · 스테이블코인 규제 비교",
      },
    ],
  },
  {
    id: "korea-academic-papers",
    name: "한국 학회 — 금융학회·증권학회·정보학회 가상자산 논문",
    field: "Korea-Academia",
    signature: "한국금융학회 · 한국증권학회 · 한국정보과학회 게재 논문",
    description:
      "한국금융학회, 한국증권학회, 한국재무학회, 한국정보과학회 등 주요 학회 게재 가상자산·블록체인 학술 논문 메타분석. KCI 등재 한국형 연구 동향",
    keyPapers: [
      {
        authors: "다수 (한국금융학회 게재)",
        year: 2024,
        title: "가상자산 시장 변동성과 한국 투자자 행동 패턴 (KCI)",
        venue: "한국금융학회 / KCI",
        url: "https://www.kci.go.kr/",
      },
      {
        authors: "다수 (한국증권학회 게재)",
        year: 2023,
        title: "가상자산 ETF 도입의 자본시장 영향 분석 (KCI)",
        venue: "한국증권학회 / KCI",
        url: "https://www.kci.go.kr/",
      },
    ],
    subIssues: [
      {
        slug: "research-korea-academic-papers",
        label: "#P10",
        title: "한국 주요 학회 — 가상자산 KCI 등재 논문 메타분석",
        publishedAt: "2027-03-11",
        scope: "한국금융학회 · 증권학회 · 정보과학회 · KCI 등재 논문",
      },
    ],
  },
  {
    id: "korea-univ-research",
    name: "KAIST + 서울대 + 고려대 — 블록체인 학계 연구",
    field: "Korea-Academia",
    signature: "KAIST 블록체인 · SNU 분산원장 · 고려대 정보보호대학원",
    description:
      "한국 주요 대학 블록체인·분산원장 연구실 학술 자료. KAIST 김재희 교수 연구실, 서울대 분산컴퓨팅 연구, 고려대 정보보호대학원 비트코인 보안 연구",
    keyPapers: [
      {
        authors: "KAIST 블록체인 연구",
        year: 2024,
        title: "분산합의 알고리즘 비교 연구 (PoW · PoS · BFT)",
        venue: "KAIST",
        url: "https://www.kaist.ac.kr/",
      },
      {
        authors: "고려대 정보보호대학원",
        year: 2023,
        title: "암호화폐 거래소 보안 사고 분석",
        venue: "고려대 CIST",
        url: "https://cist.korea.ac.kr/",
      },
    ],
    subIssues: [
      {
        slug: "research-korea-university-blockchain",
        label: "#P11",
        title: "한국 대학 — KAIST/SNU/고려대 블록체인 연구 메타",
        publishedAt: "2027-03-18",
        scope: "분산합의 비교 · 거래소 보안 · 한국 학계 연구 동향",
      },
    ],
  },
  {
    id: "korea-fsec-fss",
    name: "금융보안원 FSEC + 금융감독원 — 가상자산 사고/규제 사례",
    field: "Korea-Academia",
    signature: "FSEC 사고 분석 · FSS 검사 · 자금세탁방지(AML)",
    description:
      "금융보안원(FSEC) 가상자산 사고 분석 자료, 금융감독원(FSS) 가상자산사업자 검사 결과, 한국 자금세탁방지 트래블룰 시행 자료 메타분석",
    keyPapers: [
      {
        authors: "금융보안원 FSEC",
        year: 2024,
        title: "가상자산 거래소 보안 사고 분석 보고서",
        venue: "금융보안원",
        url: "https://www.fsec.or.kr/",
      },
      {
        authors: "금융감독원",
        year: 2024,
        title: "가상자산사업자(VASP) 검사 결과 종합",
        venue: "금감원",
        url: "https://www.fss.or.kr/",
      },
    ],
    subIssues: [
      {
        slug: "research-korea-fsec-fss-cases",
        label: "#P12",
        title: "금융보안원 + 금감원 — 한국 가상자산 사고/검사 보고서",
        publishedAt: "2027-03-25",
        scope: "FSEC 사고 분석 · FSS VASP 검사 · 트래블룰 · AML",
      },
    ],
  },
  {
    id: "fed-research",
    name: "Federal Reserve — 미국 연준 가상자산 학술 자료",
    field: "Global-CentralBank",
    signature: "NY Fed Working Paper · Fed Notes · FOMC 회의록",
    description:
      "Federal Reserve System (12개 지역연방준비은행 + 이사회) 의 가상자산·블록체인 학술 자료. NY Fed 의 Staff Reports, Liberty Street Economics 블로그, Fed Notes (이사회 발간)",
    keyPapers: [
      {
        authors: "NY Fed Research",
        year: 2023,
        title: "The Bitcoin-Macro Disconnect (Staff Report 1052)",
        venue: "Federal Reserve Bank of New York",
        url: "https://www.newyorkfed.org/research/staff_reports",
      },
      {
        authors: "Federal Reserve Board",
        year: 2022,
        title: "Money and Payments: The U.S. Dollar in the Age of Digital Transformation",
        venue: "Federal Reserve",
        url: "https://www.federalreserve.gov/publications/money-and-payments-discussion-paper.htm",
      },
    ],
    subIssues: [
      {
        slug: "research-fed-papers",
        label: "#P13",
        title: "Federal Reserve — NY Fed + 이사회 가상자산 학술 자료",
        publishedAt: "2027-04-01",
        scope: "NY Fed Staff Report · Fed Notes · 디지털 달러 보고서",
      },
    ],
  },
  {
    id: "ecb-research",
    name: "ECB · BOE — 유럽 중앙은행 가상자산 학술 자료",
    field: "Global-CentralBank",
    signature: "ECB Working Paper · BOE Staff Working Paper · MiCA 분석",
    description:
      "European Central Bank (ECB) 와 Bank of England (BOE) 의 가상자산 학술 자료. ECB Working Paper Series, BOE Staff Working Paper, 디지털 유로(Digital Euro) + 디지털 파운드(Digital Pound) 보고서",
    keyPapers: [
      {
        authors: "European Central Bank",
        year: 2024,
        title: "Digital Euro - Progress Report",
        venue: "ECB",
        url: "https://www.ecb.europa.eu/paym/digital_euro/html/index.en.html",
      },
      {
        authors: "Bank of England",
        year: 2023,
        title: "The Digital Pound - Consultation Paper",
        venue: "BOE + HM Treasury",
        url: "https://www.bankofengland.co.uk/paper/2023/the-digital-pound-consultation-paper",
      },
    ],
    subIssues: [
      {
        slug: "research-ecb-boe-papers",
        label: "#P14",
        title: "ECB + BOE — 유럽 중앙은행의 가상자산·CBDC 학술",
        publishedAt: "2027-04-08",
        scope: "ECB Working Paper · BOE Staff Paper · 디지털 유로 · 디지털 파운드",
      },
    ],
  },
  {
    id: "boj-pboc-research",
    name: "BOJ · PBOC — 아시아 중앙은행 가상자산 학술",
    field: "Global-CentralBank",
    signature: "BOJ Working Paper · PBOC e-CNY · 일본 디지털 엔",
    description:
      "Bank of Japan (BOJ) 와 People's Bank of China (PBOC) 의 가상자산 학술. BOJ Working Paper, 디지털 엔 모의실험, PBOC 의 e-CNY (디지털 위안) 학술 자료",
    keyPapers: [
      {
        authors: "Bank of Japan",
        year: 2023,
        title: "Central Bank Digital Currency - Pilot Program Report",
        venue: "BOJ",
        url: "https://www.boj.or.jp/en/paym/digital/index.htm",
      },
      {
        authors: "People's Bank of China",
        year: 2021,
        title: "Progress of Research and Development of E-CNY",
        venue: "PBOC",
        url: "http://www.pbc.gov.cn/",
      },
    ],
    subIssues: [
      {
        slug: "research-boj-pboc-papers",
        label: "#P15",
        title: "BOJ + PBOC — 일본 + 중국 중앙은행 가상자산·CBDC 학술",
        publishedAt: "2027-04-15",
        scope: "BOJ 디지털 엔 · PBOC e-CNY · 아시아 중앙은행 입장",
      },
    ],
  },
  {
    id: "bis-imf-research",
    name: "BIS · IMF — 국제 기구 가상자산 학술",
    field: "Global-CentralBank",
    signature: "BIS Working Paper · IMF WP · 글로벌 표준",
    description:
      "Bank for International Settlements (BIS) 와 International Monetary Fund (IMF) 의 가상자산 학술 자료. BIS Working Paper, IMF Working Paper, FSB (Financial Stability Board) 보고서. 글로벌 가상자산 표준 형성의 학술 인프라",
    keyPapers: [
      {
        authors: "BIS Innovation Hub",
        year: 2024,
        title: "Project Agora - Wholesale CBDC + Tokenized Deposits",
        venue: "BIS",
        url: "https://www.bis.org/about/bisih/topics/projects.htm",
      },
      {
        authors: "IMF",
        year: 2023,
        title: "Crypto-Assets - Macroeconomic Implications and Policy Considerations",
        venue: "IMF Working Paper",
        url: "https://www.imf.org/en/Publications/WP",
      },
    ],
    subIssues: [
      {
        slug: "research-bis-imf-papers",
        label: "#P16",
        title: "BIS + IMF — 국제 기구의 가상자산 학술과 글로벌 표준",
        publishedAt: "2027-04-22",
        scope: "BIS Working Paper · IMF WP · FSB 보고서 · 글로벌 표준 형성",
      },
    ],
  },
  {
    id: "mit-stanford-research",
    name: "MIT + Stanford — 미국 동·서부 학계 가상자산 연구",
    field: "Global-Academia",
    signature: "MIT DCI · Stanford CBR · IC3 (Cornell)",
    description:
      "MIT Digital Currency Initiative (DCI), Stanford Center for Blockchain Research (CBR), Cornell IC3 (Initiative for CryptoCurrencies and Contracts) 의 가상자산 학술 자료",
    keyPapers: [
      {
        authors: "Narayanan, A., et al.",
        year: 2016,
        title: "Bitcoin and Cryptocurrency Technologies (Princeton textbook)",
        venue: "Princeton University Press",
        url: "https://bitcoinbook.cs.princeton.edu/",
      },
      {
        authors: "MIT Digital Currency Initiative",
        year: 2024,
        title: "Project Hamilton - CBDC Research",
        venue: "MIT DCI + Boston Fed",
        url: "https://dci.mit.edu/",
      },
    ],
    subIssues: [
      {
        slug: "research-mit-stanford-papers",
        label: "#P17",
        title: "MIT DCI + Stanford CBR + Cornell IC3 — 미국 학계 인프라",
        publishedAt: "2027-04-29",
        scope: "MIT Project Hamilton · Stanford CBR · Cornell IC3 · Princeton 교과서",
      },
    ],
  },
  {
    id: "oxford-cambridge-eth-research",
    name: "Oxford + Cambridge + ETH Zurich — 유럽 학계",
    field: "Global-Academia",
    signature: "Oxford CCRC · Cambridge CCAF · ETH Zurich",
    description:
      "Oxford Cryptocurrency Research Centre, Cambridge Centre for Alternative Finance (CCAF), ETH Zurich (Roger Wattenhofer 등) 의 가상자산 학술. CCAF 의 글로벌 가상자산 사용자 통계 보고서가 학계 표준",
    keyPapers: [
      {
        authors: "Cambridge CCAF",
        year: 2023,
        title: "3rd Global Cryptoasset Benchmarking Study",
        venue: "Cambridge CCAF",
        url: "https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/",
      },
      {
        authors: "Wattenhofer, R., et al.",
        year: 2023,
        title: "Bitcoin Mining Pool Analysis",
        venue: "ETH Zurich + Distributed Computing Group",
        url: "https://disco.ethz.ch/",
      },
    ],
    subIssues: [
      {
        slug: "research-oxford-cambridge-eth-papers",
        label: "#P18",
        title: "Oxford + Cambridge + ETH Zurich — 유럽 학계 가상자산 연구",
        publishedAt: "2027-05-06",
        scope: "Oxford CCRC · Cambridge CCAF · ETH Zurich · 유럽 학계 시각",
      },
    ],
  },
  {
    id: "global-paper-trends",
    name: "글로벌 학술지 — Nature · Science · JF · RFS 가상자산 논문",
    field: "Global-Academia",
    signature: "Top journal · Nature · Journal of Finance · RFS · Top crypto venues",
    description:
      "글로벌 최상위 학술지 (Nature, Science, Journal of Finance, Review of Financial Studies, Journal of Financial Economics) 에 게재된 가상자산 논문 메타분석. 학계 정통 인정 수준의 연구",
    keyPapers: [
      {
        authors: "Liu, Y., & Tsyvinski, A.",
        year: 2021,
        title: "Risks and Returns of Cryptocurrency",
        venue: "Review of Financial Studies",
        url: "https://academic.oup.com/rfs/",
      },
      {
        authors: "Yermack, D.",
        year: 2017,
        title: "Corporate Governance and Blockchains",
        venue: "Review of Finance",
        url: "https://academic.oup.com/rof/",
      },
    ],
    subIssues: [
      {
        slug: "research-global-top-journals",
        label: "#P19",
        title: "Top Journal — Nature · JF · RFS 가상자산 논문 메타",
        publishedAt: "2027-05-13",
        scope: "Top venue 게재 가상자산 논문 · 학계 정통 인정 연구",
      },
    ],
  },
  {
    id: "korea-public-100-catalog",
    name: "한국 공공기관 가상자산 보고서 100선 카탈로그",
    field: "Korea-Academia",
    signature: "한은·KCMI·KIF·KDI·KIEP·KISDI·KIRI·KIPF·KISTI 등 25기관",
    description:
      "한국 25개 공공·정책 연구기관이 발간한 가상자산·블록체인 보고서 100+선 종합 카탈로그. 학술 연구자·실무자가 한 곳에서 한국 공공 자료 전체를 탐색할 수 있도록 정리",
    keyPapers: [
      {
        authors: "다수 (한국 공공기관)",
        year: 2024,
        title: "한국 공공기관 가상자산 보고서 100+선",
        venue: "통합 카탈로그",
        url: "https://www.bok.or.kr/",
      },
    ],
    subIssues: [
      {
        slug: "research-korea-public-100-catalog",
        label: "#P20",
        title: "한국 공공기관 가상자산 보고서 100선 — 통합 카탈로그",
        publishedAt: "2027-05-20",
        scope: "한은·KCMI·KIF·KDI·KIEP·KISDI·KIRI·KIPF·NARS·KLRI 등 25기관 100+선",
      },
    ],
  },
  {
    id: "global-100-catalog",
    name: "글로벌 가상자산 학술 자료 100선 카탈로그",
    field: "Global-Academia",
    signature: "Fed · ECB · BIS · IMF · MIT · Stanford · Top journal · 100+선",
    description:
      "글로벌 중앙은행 (Fed, ECB, BOJ, PBOC, BOE) + 국제기구 (BIS, IMF, FSB, FATF, OECD) + 학계 (MIT, Stanford, Cornell, Princeton, Oxford, Cambridge, ETH Zurich) + Top journal (Nature, Science, JF, RFS) 의 100+ 가상자산 학술 자료 통합 카탈로그",
    keyPapers: [
      {
        authors: "다수 (글로벌 중앙은행 + 학계)",
        year: 2024,
        title: "글로벌 가상자산 학술 자료 100+선",
        venue: "통합 카탈로그",
        url: "https://www.bis.org/",
      },
    ],
    subIssues: [
      {
        slug: "research-global-100-catalog",
        label: "#P21",
        title: "글로벌 가상자산 학술 자료 100선 — 통합 카탈로그",
        publishedAt: "2027-05-27",
        scope: "Fed · ECB · BOJ · PBOC · BIS · IMF · 미국 + 유럽 + 아시아 학계 100+선",
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
  "Korea-Academia": "var(--neon-magenta)",
  "Global-CentralBank": "var(--neon-cyan)",
  "Global-Academia": "var(--neon-green)",
};

export function getResearchTopicById(id: string): ResearchTopic | undefined {
  return RESEARCH_TOPICS.find((t) => t.id.toLowerCase() === id.toLowerCase());
}
