import { notFound } from "next/navigation";
import { TREASURIES, getTreasuryById, TREASURY_TYPE_COLOR } from "@/lib/treasuries";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return TREASURIES.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTreasuryById(id);
  if (!t) return {};
  return { title: `${t.name} (${t.ticker})`, description: t.signature };
}

export default async function TreasuryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getTreasuryById(id);
  if (!t) notFound();

  const stats: Array<{ label: string; value: string; accent?: boolean }> = [];
  if (t.holdingsBTC !== undefined)
    stats.push({ label: "BTC 보유", value: t.holdingsBTC.toLocaleString(), accent: true });
  if (t.holdingsETH !== undefined)
    stats.push({ label: "ETH 보유", value: t.holdingsETH.toLocaleString(), accent: true });
  if (t.marketCapBillion !== undefined)
    stats.push({ label: "시총", value: `$${t.marketCapBillion}B` });
  if (t.founded) stats.push({ label: "설립", value: String(t.founded) });

  return (
    <DetailPage
      kicker="Treasury"
      badges={
        <>
          <Badge color={TREASURY_TYPE_COLOR[t.type]}>{t.type}</Badge>
          <Badge>{t.listing}</Badge>
          <Badge>{t.ticker}</Badge>
        </>
      }
      title={t.name}
      tagline={t.signature}
      description={t.description}
      stats={stats}
      meta={
        t.ceo ? (
          <p className="mt-5 font-sans text-[13px] text-[var(--ink-3)]">
            <span className="font-semibold uppercase tracking-[0.12em] text-[var(--ink-2)]">CEO</span>
            <span className="mx-2 text-[var(--ink-4)]">·</span>
            <span className="text-[var(--ink-1)]">{t.ceo}</span>
          </p>
        ) : null
      }
    >
      <SubIssueList subIssues={t.subIssues} title="Posts" />
    </DetailPage>
  );
}
