import Link from "next/link";

export const metadata = { title: "404 — page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[680px] flex-col items-start justify-center px-6 py-20">
      <div className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--primary)]">
        404 · Not Found
      </div>
      <h1 className="font-sans text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--ink-1)] md:text-[48px]">
        길을 잃으셨네요.
      </h1>
      <p className="mt-3 max-w-md font-sans text-[15px] leading-[1.6] text-[var(--ink-2)] md:text-[16.5px]">
        요청한 페이지를 찾을 수 없습니다. 주소가 정확한지 확인하거나 홈으로 돌아가세요.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/"
          className="tap-target inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-5 py-2.5 font-sans text-[14.5px] font-semibold text-white hover:bg-[var(--primary-soft)]"
        >
          홈으로 →
        </Link>
        <Link
          href="/posts/"
          className="tap-target inline-flex items-center gap-2 rounded-md border border-[var(--rule-strong)] bg-[var(--bg-base)] px-5 py-2.5 font-sans text-[14.5px] font-semibold text-[var(--ink-1)] hover:bg-[var(--bg-elev)]"
        >
          본문 색인
        </Link>
      </div>
    </div>
  );
}
