#!/usr/bin/env node
// integrity-check.mjs — 145편 본문의 학술 인용 + 정량 수치 + 모순 점검
// Usage: node scripts/integrity-check.mjs > docs/INTEGRITY-CHECK.md

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POSTS_DIR = join(process.cwd(), "src", "content", "posts");
const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

console.log("# luxon-crypto-lab 무결성 점검 보고서");
console.log(`\n생성: ${new Date().toISOString().slice(0, 10)} · 본문 ${files.length}편\n`);

// 1. 학술 인용 — 본문 등장 횟수 + 형식 검증
const academicCitations = [
  { pattern: /NY Fed.{0,30}Staff Report.{0,10}1052/g, label: "NY Fed Staff Report 1052 (Bitcoin-Macro Disconnect)" },
  { pattern: /NY Fed.{0,30}Staff Report.{0,10}1085/g, label: "NY Fed Staff Report 1085 (Stablecoin Run Risk)" },
  { pattern: /BIS.{0,5}Working Paper.{0,5}1133/g, label: "BIS WP 1133 (DeFi Lending)" },
  { pattern: /Liu.{0,5}Tsyvinski.{0,30}2021/g, label: "Liu & Tsyvinski (2021) RFS" },
  { pattern: /Cong et al\..{0,30}2021/g, label: "Cong et al. (2021) RFS Tokenomics" },
  { pattern: /Eyal.{0,5}Sirer.{0,30}2014/g, label: "Eyal & Sirer (2014) Selfish Mining FC" },
  { pattern: /Schilling.{0,5}Uhlig.{0,30}2019/g, label: "Schilling & Uhlig (2019) JME" },
  { pattern: /Yermack.{0,30}2017/g, label: "Yermack (2017) RoF Blockchain Governance" },
  { pattern: /Aggarwal.{0,50}arXiv.{0,15}1710\.10377/g, label: "Aggarwal et al. arXiv:1710.10377 (Quantum BTC)" },
  { pattern: /Cambridge CCAF/gi, label: "Cambridge CCAF" },
  { pattern: /CBECI/g, label: "CBECI (Cambridge Bitcoin Electricity Index)" },
  { pattern: /Project mBridge/gi, label: "BIS Project mBridge" },
  { pattern: /Project Hamilton/gi, label: "MIT Project Hamilton CBDC" },
];

console.log("## 1. 학술 인용 등장 빈도\n");
console.log("| 인용 | 등장 빈도 | 등장 파일 수 |");
console.log("|------|--------|-----------|");

for (const { pattern, label } of academicCitations) {
  let totalMatches = 0;
  let fileCount = 0;
  for (const fname of files) {
    const content = readFileSync(join(POSTS_DIR, fname), "utf8");
    const matches = content.match(pattern);
    if (matches) {
      totalMatches += matches.length;
      fileCount += 1;
    }
  }
  console.log(`| ${label} | ${totalMatches} | ${fileCount} |`);
}

// 2. 정량 수치 일관성
console.log("\n## 2. 정량 수치 일관성 점검\n");

const quantPatterns = [
  { pattern: /Lido.{0,30}([0-9]+)%/g, label: "Lido 점유율 % 언급" },
  { pattern: /업비트.{0,30}([0-9]+)\s*[-~]?\s*([0-9]+)?\s*%/g, label: "업비트 점유율 % 언급" },
  { pattern: /카카오뱅크.{0,30}([0-9,]+)만/g, label: "카카오뱅크 사용자 수 (만)" },
  { pattern: /라인.{0,40}([0-9,\.]+)\s*억/g, label: "라인 사용자 수 (억)" },
  { pattern: /Strategy.{0,20}([0-9.]+)x.{0,5}mNAV/gi, label: "Strategy mNAV" },
  { pattern: /Metaplanet.{0,20}([0-9.]+)x/gi, label: "Metaplanet mNAV" },
];

for (const { pattern, label } of quantPatterns) {
  console.log(`\n### ${label}`);
  const seen = new Map();
  for (const fname of files) {
    const content = readFileSync(join(POSTS_DIR, fname), "utf8");
    const matches = [...content.matchAll(pattern)];
    for (const m of matches) {
      const key = m[0].replace(/\s+/g, " ").slice(0, 80);
      if (!seen.has(key)) seen.set(key, []);
      seen.get(key).push(fname);
    }
  }
  if (seen.size === 0) {
    console.log("발견 없음.");
  } else {
    console.log("\n| 인용 텍스트 | 등장 파일 수 |");
    console.log("|----------|--------|");
    for (const [text, fileList] of seen.entries()) {
      console.log(`| \`${text}\` | ${fileList.length} |`);
    }
  }
}

// 3. JSX MDX 호환성 (title attribute markdown emphasis)
console.log("\n## 3. JSX MDX 호환성\n");
let jsxIssues = 0;
for (const fname of files) {
  const content = readFileSync(join(POSTS_DIR, fname), "utf8");
  const matches = content.match(/title="[^"]*\*[^"]*"/g);
  if (matches) {
    console.log(`- \`${fname}\`: ${matches.length}건 (\`title=\` 속성에 markdown asterisk)`);
    jsxIssues += matches.length;
  }
}
console.log(`\n총 JSX 호환성 위험: ${jsxIssues}건`);

// 4. Disclaimer 누락 체크
console.log("\n## 4. Disclaimer 박스 누락 체크\n");
let missingDisclaimer = 0;
for (const fname of files) {
  const content = readFileSync(join(POSTS_DIR, fname), "utf8");
  if (!content.includes(`type="warning"`)) {
    console.log(`- \`${fname}\`: disclaimer 누락`);
    missingDisclaimer += 1;
  }
}
console.log(`\n총 disclaimer 누락: ${missingDisclaimer}편`);

// 5. author 필드 누락 체크
console.log("\n## 5. author 필드 누락 체크\n");
let missingAuthor = 0;
for (const fname of files) {
  const content = readFileSync(join(POSTS_DIR, fname), "utf8");
  if (!content.match(/^author:\s*\S+/m)) {
    console.log(`- \`${fname}\`: author 필드 누락`);
    missingAuthor += 1;
  }
}
console.log(`\n총 author 누락: ${missingAuthor}편`);

// 6. coin 필드 검증
console.log("\n## 6. coin/issue 필드 검증\n");
let missingCoin = 0;
for (const fname of files) {
  const content = readFileSync(join(POSTS_DIR, fname), "utf8");
  if (!content.match(/^coin:\s*\S+/m)) {
    console.log(`- \`${fname}\`: coin 필드 누락`);
    missingCoin += 1;
  }
}
console.log(`\n총 coin 필드 누락: ${missingCoin}편`);

console.log("\n---\n\n_자동 생성 보고서. Phase 1-B 에서 학술 인용 web 검증 + 모순 사례 정리 진행._");
