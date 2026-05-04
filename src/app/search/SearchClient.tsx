"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SearchEntry } from "@/lib/search-index";

interface Props {
  index: SearchEntry[];
}

function score(entry: SearchEntry, q: string): number {
  const ql = q.toLowerCase();
  let s = 0;
  if (entry.title.toLowerCase().includes(ql)) s += 10;
  if (entry.subtitle?.toLowerCase().includes(ql)) s += 5;
  if (entry.category.toLowerCase().includes(ql)) s += 3;
  if (entry.coin?.toLowerCase().includes(ql)) s += 3;
  if (entry.tags?.some((t) => t.toLowerCase().includes(ql))) s += 2;
  return s;
}

export function SearchClient({ index }: Props) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 1) return [];
    return index
      .map((e) => ({ entry: e, s: score(e, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 50);
  }, [index, query]);

  return (
    <>
      <div className="mb-8">
        <input
          type="search"
          autoFocus
          placeholder="검색어 입력 — 예: BTC, 한국, EigenLayer, MakerDAO, 김치 프리미엄"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded border border-[var(--border-soft)] bg-[var(--bg-elev)] px-4 py-3 font-mono text-sm text-[var(--text-1)] placeholder-[var(--text-3)] focus:border-[var(--neon-cyan)] focus:outline-none"
        />
        {query && (
          <p className="mt-2 font-mono text-xs text-[var(--text-3)]">
            결과: {results.length}편 {results.length === 50 ? "(상위 50편 표시)" : ""}
          </p>
        )}
      </div>

      {query && results.length === 0 && (
        <p className="text-[var(--text-3)]">매칭 본문 없음. 다른 검색어 시도.</p>
      )}

      <ul className="space-y-3">
        {results.map(({ entry }) => (
          <li key={entry.slug}>
            <Link
              href={`/posts/${entry.slug}/`}
              className="block rounded border border-[var(--border-soft)] bg-[var(--bg-elev)] p-4 hover:border-[var(--neon-cyan)]"
            >
              <div className="mb-1 flex items-center gap-2 font-mono text-xs uppercase text-[var(--text-3)]">
                <span className="text-[var(--neon-cyan)]">{entry.category}</span>
                {entry.coin && entry.coin !== "NONE" && (
                  <span className="text-[var(--text-2)]">· {entry.coin}</span>
                )}
                <span className="text-[var(--text-3)]">· {entry.publishedAt}</span>
              </div>
              <div className="mb-1 text-base font-bold text-[var(--text-1)]">{entry.title}</div>
              {entry.subtitle && (
                <div className="text-sm text-[var(--text-2)]">{entry.subtitle}</div>
              )}
              {entry.tags && entry.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1 font-mono text-xs">
                  {entry.tags.slice(0, 5).map((t) => (
                    <span key={t} className="text-[var(--text-3)]">#{t}</span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
