import { notFound } from "next/navigation";
import { REGULATIONS, getRegulationByRegion, REGULATION_STATUS_COLOR } from "@/lib/regulations";
import { DetailPage } from "@/components/detail/DetailPage";
import { SubIssueList } from "@/components/detail/SubIssueList";
import { Badge } from "@/components/detail/Badge";

export const dynamicParams = false;

export function generateStaticParams() {
  return REGULATIONS.map((r) => ({ region: r.region }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegulationByRegion(region);
  if (!r) return {};
  return { title: `${r.name} 규제`, description: r.signature };
}

export default async function RegulationRegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegulationByRegion(region);
  if (!r) notFound();

  return (
    <DetailPage
      kicker="Regulation"
      badges={
        <>
          <span className="text-[28px] leading-none">{r.flag}</span>
          <Badge>{r.region.toUpperCase()}</Badge>
        </>
      }
      title={r.name}
      tagline={r.signature}
      description={r.description}
    >
      <section className="mb-12">
        <div className="mb-5 flex items-baseline justify-between border-b border-[var(--rule)] pb-2 md:mb-6">
          <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-2)]">
            Key Laws
          </h2>
          <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)]">
            {r.keyLaws.length}
          </span>
        </div>
        <ul className="divide-y divide-[var(--rule)]">
          {r.keyLaws.map((law, i) => (
            <li
              key={i}
              className="grid grid-cols-1 items-baseline gap-x-4 gap-y-1 py-3.5 md:grid-cols-[minmax(0,1fr)_120px_max-content] md:py-4"
            >
              <span className="font-display text-[15px] font-medium text-[var(--ink-1)] md:text-[16px]">
                {law.name}
              </span>
              {law.effectiveDate && (
                <span className="font-mono text-[11px] tabular-nums text-[var(--ink-4)] md:text-right">
                  {law.effectiveDate}
                </span>
              )}
              <Badge color={REGULATION_STATUS_COLOR[law.status]}>{law.status}</Badge>
            </li>
          ))}
        </ul>
      </section>

      <SubIssueList subIssues={r.subIssues} title="Posts" />
    </DetailPage>
  );
}
