import Link from "next/link";
import { GlowText } from "@/components/neon/GlowText";
import { GridBackground } from "@/components/neon/GridBackground";
import { TerminalBox } from "@/components/neon/TerminalBox";

export const metadata = { title: "404 — page not found" };

export default function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 py-16">
      <GridBackground />
      <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-3)]">
        ▎error_404.log
      </div>
      <h1 className="mb-6 font-mono text-7xl font-bold tracking-tight md:text-9xl">
        <GlowText color="magenta">404</GlowText>
      </h1>
      <p className="mb-6 text-lg text-[var(--text-2)]">
        요청한 경로를 찾을 수 없습니다. 라우트가 제거됐거나 URL 이 잘못 입력됐을 가능성이 높습니다.
      </p>
      <TerminalBox title="suggested_actions" prompt="$">
        cd / · ls /posts · ls /coins · cat /roadmap
      </TerminalBox>
      <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm">
        <Link
          href="/"
          className="rounded border border-[var(--neon-cyan)] px-5 py-2 uppercase tracking-wider text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)] hover:text-[var(--bg-base)]"
        >
          ← Home
        </Link>
        <Link
          href="/posts/"
          className="rounded border border-[var(--border-glow)] px-5 py-2 uppercase tracking-wider text-[var(--text-1)] hover:border-[var(--neon-magenta)] hover:text-[var(--neon-magenta)]"
        >
          Posts
        </Link>
        <Link
          href="/roadmap/"
          className="rounded border border-[var(--border-glow)] px-5 py-2 uppercase tracking-wider text-[var(--text-1)] hover:border-[var(--neon-magenta)] hover:text-[var(--neon-magenta)]"
        >
          Roadmap
        </Link>
      </div>
    </div>
  );
}
