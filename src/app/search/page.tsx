import { buildSearchIndex } from "@/lib/search-index";
import { SearchClient } from "./SearchClient";

export const metadata = {
  title: "Search · luxon-crypto-lab",
  description: "전체 본문 검색 — 제목 / 부제 / 태그 / 코인 / 카테고리",
};

export default function SearchPage() {
  const index = buildSearchIndex();
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-8 border-b border-[var(--border-soft)] pb-8">
        <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">▎search</div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">검색</h1>
        <p className="text-[var(--text-2)]">총 {index.length}편 본문 — 제목 / 부제 / 태그 / 코인 / 카테고리에서 검색</p>
      </header>
      <SearchClient index={index} />
    </div>
  );
}
