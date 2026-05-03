import Link from "next/link";
import { notFound } from "next/navigation";
import { COINS, getCoinBySymbol } from "@/lib/coins";
import { getPostsByCoin } from "@/lib/posts";
import { HashBadge } from "@/components/neon/HashBadge";
import { BlogSidebar } from "@/components/sidebar/BlogSidebar";

export const dynamicParams = false;

export function generateStaticParams() {
  return COINS.map((c) => ({ symbol: c.symbol.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const coin = getCoinBySymbol(symbol);
  if (!coin) return {};
  return { title: `${coin.symbol} · ${coin.name}`, description: coin.signature };
}

export default async function CoinPage({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const coin = getCoinBySymbol(symbol);
  if (!coin) notFound();

  const posts = getPostsByCoin(coin.symbol);

  return (
    <div className="mx-auto grid max-w-[1400px] gap-6 px-4 py-8 lg:grid-cols-[280px_1fr] xl:gap-8 xl:px-6">
      <div className="hidden lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <BlogSidebar />
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-2">
        <header className="mb-12 border-b border-[var(--border-soft)] pb-8">
          <div className="mb-4">
            <HashBadge symbol={coin.symbol} category={coin.category} size="lg" />
          </div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-[var(--text-1)] md:text-5xl">
            {coin.name}
          </h1>
          <p className="mb-6 text-lg text-[var(--neon-cyan)] glow-cyan">{coin.signature}</p>
          <p className="text-[var(--text-2)]">{coin.description}</p>
          <dl className="mt-6 grid grid-cols-2 gap-4 font-mono text-sm md:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Issue</dt>
              <dd className="text-[var(--text-1)]">#{String(coin.issue).padStart(2, "0")}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Scheduled</dt>
              <dd className="text-[var(--text-1)]">{coin.scheduledMonth}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Category</dt>
              <dd className="text-[var(--text-1)]">{coin.category}</dd>
            </div>
            {coin.marketCapBillion !== undefined && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-[var(--text-3)]">Market Cap</dt>
                <dd className="text-[var(--text-1)]">${coin.marketCapBillion}B</dd>
              </div>
            )}
          </dl>
          {coin.macroEvent && (
            <div className="mt-6 rounded border border-[var(--border-soft)] bg-[var(--bg-elev)] p-3 font-mono text-xs">
              <span className="text-[var(--neon-magenta)]">macro_event:</span>{" "}
              <span className="text-[var(--text-2)]">{coin.macroEvent}</span>
            </div>
          )}
        </header>

        {coin.subIssues && coin.subIssues.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">
              ▎series · {coin.subIssues.length}편
            </h2>
            <ol className="space-y-2">
              {coin.subIssues.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={`/posts/${sub.slug}/`}
                    className="group flex items-baseline gap-3 rounded border border-[var(--border-soft)] p-3 font-mono text-sm transition-colors hover:border-[var(--neon-cyan)]"
                  >
                    <span className="text-[var(--neon-cyan)]">{sub.label}</span>
                    <span className="text-[var(--text-1)] group-hover:text-[var(--neon-cyan)]">{sub.title}</span>
                    <span className="ml-auto text-xs text-[var(--text-3)]">{sub.publishedAt}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section>
          <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--text-3)]">
            ▎published posts
          </h2>
          {posts.length === 0 ? (
            <div className="rounded border border-dashed border-[var(--border-soft)] p-8 text-center font-mono text-sm text-[var(--text-3)]">
              발행된 글 없음 · 발행 예정: {coin.scheduledMonth}
            </div>
          ) : (
            <ul className="space-y-4">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/posts/${p.slug}/`}
                    className="block rounded border border-[var(--border-soft)] p-4 transition-colors hover:border-[var(--neon-cyan)]"
                  >
                    <h3 className="font-bold text-[var(--text-1)]">{p.title}</h3>
                    {p.subtitle && <p className="text-sm text-[var(--text-2)]">{p.subtitle}</p>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
