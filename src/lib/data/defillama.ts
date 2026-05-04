import fs from "node:fs";
import path from "node:path";

export interface ProtocolTVL {
  protocol: string;
  tvl: number;
  category: string;
  fetchedAt: string;
}

const CACHE_DIR = path.join(process.cwd(), "src", "data", "cache");
const CACHE_FILE = path.join(CACHE_DIR, "defi-tvl.json");
const TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

const PROTOCOLS = [
  { slug: "lido", display: "Lido", category: "LST" },
  { slug: "eigenlayer", display: "EigenLayer", category: "Restaking" },
  { slug: "aave", display: "Aave", category: "Lending" },
  { slug: "makerdao", display: "MakerDAO", category: "Lending" },
  { slug: "pendle", display: "Pendle", category: "Yield" },
  { slug: "morpho-blue", display: "Morpho", category: "Lending" },
  { slug: "uniswap", display: "Uniswap", category: "DEX" },
  { slug: "curve-dex", display: "Curve", category: "DEX" },
  { slug: "compound", display: "Compound", category: "Lending" },
];

const FALLBACK: ProtocolTVL[] = [
  { protocol: "Lido", tvl: 25.0, category: "LST", fetchedAt: "fallback" },
  { protocol: "EigenLayer", tvl: 17.0, category: "Restaking", fetchedAt: "fallback" },
  { protocol: "Aave", tvl: 30.0, category: "Lending", fetchedAt: "fallback" },
  { protocol: "MakerDAO", tvl: 7.0, category: "Lending", fetchedAt: "fallback" },
  { protocol: "Pendle", tvl: 6.0, category: "Yield", fetchedAt: "fallback" },
  { protocol: "Morpho", tvl: 6.0, category: "Lending", fetchedAt: "fallback" },
  { protocol: "Uniswap", tvl: 5.0, category: "DEX", fetchedAt: "fallback" },
  { protocol: "Curve", tvl: 2.5, category: "DEX", fetchedAt: "fallback" },
  { protocol: "Compound", tvl: 2.0, category: "Lending", fetchedAt: "fallback" },
];

function readCache(): ProtocolTVL[] | null {
  try {
    if (!fs.existsSync(CACHE_FILE)) return null;
    const stat = fs.statSync(CACHE_FILE);
    if (Date.now() - stat.mtimeMs > TTL_MS) return null;
    const raw = fs.readFileSync(CACHE_FILE, "utf8");
    return JSON.parse(raw) as ProtocolTVL[];
  } catch {
    return null;
  }
}

function writeCache(data: ProtocolTVL[]): void {
  try {
    if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch {
    // ignore
  }
}

export async function fetchDefiTVL(): Promise<ProtocolTVL[]> {
  const cached = readCache();
  if (cached) return cached;

  try {
    const results: ProtocolTVL[] = [];
    for (const p of PROTOCOLS) {
      const res = await fetch(`https://api.llama.fi/protocol/${p.slug}`, {
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        results.push({ ...FALLBACK.find((f) => f.protocol === p.display)! });
        continue;
      }
      const json = (await res.json()) as { currentChainTvls?: Record<string, number>; tvl?: number };
      let tvl = 0;
      if (json.currentChainTvls) {
        tvl = Object.values(json.currentChainTvls).reduce((a, b) => a + (b ?? 0), 0);
      } else if (typeof json.tvl === "number") {
        tvl = json.tvl;
      }
      results.push({
        protocol: p.display,
        tvl: Math.round((tvl / 1e9) * 100) / 100,
        category: p.category,
        fetchedAt: new Date().toISOString(),
      });
    }
    writeCache(results);
    return results;
  } catch {
    return FALLBACK;
  }
}

export function getDefiTVLSync(): ProtocolTVL[] {
  return readCache() ?? FALLBACK;
}
