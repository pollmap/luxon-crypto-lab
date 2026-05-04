#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE = path.join(__dirname, "..", "src", "data", "cache", "defi-tvl.json");

const PROTOCOLS = [
  ["lido", "Lido", "LST"],
  ["eigenlayer", "EigenLayer", "Restaking"],
  ["aave", "Aave", "Lending"],
  ["makerdao", "MakerDAO", "Lending"],
  ["pendle", "Pendle", "Yield"],
  ["morpho-blue", "Morpho", "Lending"],
  ["uniswap", "Uniswap", "DEX"],
  ["curve-dex", "Curve", "DEX"],
  ["compound", "Compound", "Lending"],
];

async function main() {
  const out = [];
  for (const [slug, display, category] of PROTOCOLS) {
    try {
      const r = await fetch(`https://api.llama.fi/protocol/${slug}`);
      if (!r.ok) {
        console.error(`[skip] ${slug}: HTTP ${r.status}`);
        continue;
      }
      const j = await r.json();
      let tvl = 0;
      if (j.currentChainTvls) {
        tvl = Object.values(j.currentChainTvls).reduce((a, b) => a + (b ?? 0), 0);
      } else if (typeof j.tvl === "number") {
        tvl = j.tvl;
      }
      out.push({
        protocol: display,
        tvl: Math.round((tvl / 1e9) * 100) / 100,
        category,
        fetchedAt: new Date().toISOString(),
      });
      console.log(`[ok] ${display}: $${(tvl / 1e9).toFixed(2)}B`);
    } catch (e) {
      console.error(`[err] ${slug}: ${e.message}`);
    }
  }
  if (out.length === 0) {
    console.error("no data — keeping existing cache");
    return;
  }
  fs.writeFileSync(CACHE, JSON.stringify(out, null, 2), "utf8");
  console.log(`\nwrote ${out.length} entries → ${CACHE}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
