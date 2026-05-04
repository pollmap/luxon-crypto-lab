import { notFound } from "next/navigation";
import Link from "next/link";
import { COINS, getCoinBySymbol } from "@/lib/coins";
import { getPostsByCoin } from "@/lib/posts";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

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
    <DetailPage
      kicker="Coin"
      badges={
        <>
          <Badge color="var(--signal)">{coin.symbol}</Badge>
          <Badge>{coin.category}</Badge>
        </>
      }
      title={coin.name}
      tagline={coin.signature}
      description={coin.description}
      stats={[
        { label: "Issue", value: `#${String(coin.issue).padStart(2, "0")}` },
        { label: "Scheduled", value: coin.scheduledMonth },
        { label: "Category", value: coin.category },
        ...(coin.marketCapBillion !== undefined
          ? [{ label: "Market Cap", value: `$${coin.marketCapBillion}B`, accent: true }]
          : []),
      ]}
      meta={
        coin.macroEvent ? (
          <p className="mt-5 rounded-2xl border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-3 font-sans text-[13px] text-[var(--ink-2)]">
            <span className="font-semibold uppercase tracking-[0.12em] text-[var(--dust)]">
              Macro event
            </span>{" "}
            <span className="ml-2">{coin.macroEvent}</span>
          </p>
        ) : null
      }
    >
      {coin.subIssues && coin.subIssues.length > 0 && (
        <div className="mb-12">
          <SubIssueList subIssues={coin.subIssues} title="Series" />
        </div>
      )}

      <section>
        <div className="mb-5 flex items-baseline justify-between border-b border-[var(--rule)] pb-2 md:mb-6">
          <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-2)]">
            Published
          </h2>
          <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)]">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        </div>
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--rule)] px-6 py-10 text-center font-sans text-[13.5px] text-[var(--ink-3)]">
            발행된 글 없음 · 발행 예정: {coin.scheduledMonth}
          </div>
        ) : (
          <ol className="divide-y divide-[var(--rule)]">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/posts/${p.slug}/`}
                  className="group block py-4 active:bg-[var(--bg-soft)] md:py-5"
                >
                  <h3 className="font-display text-[16.5px] font-semibold leading-[1.3] tracking-[-0.012em] text-[var(--ink-1)] transition-colors group-hover:text-[var(--signal)] md:text-[18px]">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="mt-1 line-clamp-2 font-serif text-[13.5px] leading-[1.55] text-[var(--ink-3)]">
                      {p.subtitle}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </DetailPage>
  );
}
