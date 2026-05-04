import Link from "next/link";

export const metadata = { title: "404 — page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[680px] flex-col items-start justify-center px-6 py-20">
      <div className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--signal)]">
        404 · Not Found
      </div>
      <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-[-0.024em] text-[var(--ink-1)] md:text-[64px]">
        길을 잃으셨네요.
      </h1>
      <p className="mt-3 max-w-md font-serif text-[15.5px] leading-[1.6] text-[var(--ink-2)] md:text-[17px]">
        요청한 페이지를 찾을 수 없습니다. 주소가 정확한지 확인하거나 홈으로 돌아가세요.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="tap-target inline-flex items-center gap-2 rounded-full bg-[var(--ink-1)] px-6 py-3 font-sans text-[15px] font-semibold tracking-tight text-[var(--bg-base)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          홈으로
        </Link>
        <Link
          href="/posts/"
          className="tap-target inline-flex items-center gap-2 rounded-full border border-[var(--rule)] px-6 py-3 font-sans text-[15px] font-semibold tracking-tight text-[var(--ink-1)] hover:bg-[var(--bg-elev)]"
        >
          본문 색인
        </Link>
      </div>
    </div>
  );
}
