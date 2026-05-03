import { ProfileCard } from "./ProfileCard";
import { CategoryTree } from "./CategoryTree";
import { RecentPosts } from "./RecentPosts";
import { NavSection } from "./NavSection";
import { EXCHANGES, EXCHANGE_TYPE_COLOR } from "@/lib/exchanges";
import { TOPICS } from "@/lib/topics";
import { REGULATIONS } from "@/lib/regulations";
import { TREASURIES, TREASURY_TYPE_COLOR } from "@/lib/treasuries";
import { RESEARCH_TOPICS, RESEARCH_FIELD_COLOR } from "@/lib/research";

interface BlogSidebarProps {
  activeSlug?: string;
  showRecent?: boolean;
  excludeRecentSlug?: string;
}

export function BlogSidebar({
  activeSlug,
  showRecent = true,
  excludeRecentSlug,
}: BlogSidebarProps) {
  const exchangeItems = EXCHANGES.map((e) => ({
    href: `/exchanges/${e.id}/`,
    label: e.name,
    badge: e.subIssues[0].label,
    color: EXCHANGE_TYPE_COLOR[e.type],
    count: e.subIssues.length,
  }));

  const topicItems = TOPICS.map((t) => ({
    href: `/topics/${t.id}/`,
    label: t.name,
    badge: t.subIssues[0]?.label ?? "",
    count: t.subIssues.length,
  }));

  const regulationItems = REGULATIONS.map((r) => ({
    href: `/regulation/${r.region}/`,
    label: `${r.flag} ${r.name}`,
    badge: r.subIssues[0]?.label ?? "",
    count: r.subIssues.length,
  }));

  const treasuryItems = TREASURIES.map((t) => ({
    href: `/treasuries/${t.id}/`,
    label: `${t.name} (${t.ticker})`,
    badge: t.subIssues[0]?.label ?? "",
    color: TREASURY_TYPE_COLOR[t.type],
    count: t.subIssues.length,
  }));

  const researchItems = RESEARCH_TOPICS.map((t) => ({
    href: `/research/${t.id}/`,
    label: t.name,
    badge: t.subIssues[0]?.label ?? "",
    color: RESEARCH_FIELD_COLOR[t.field],
    count: t.subIssues.length,
  }));

  return (
    <aside className="space-y-6">
      <ProfileCard />
      <CategoryTree activeSlug={activeSlug} />
      <div className="glass rounded p-5">
        <NavSection
          title="EXCHANGES"
          titleColor="var(--neon-magenta)"
          href="/exchanges/"
          items={exchangeItems}
        />
      </div>
      <div className="glass rounded p-5">
        <NavSection title="TOPICS" titleColor="var(--neon-amber)" href="/topics/" items={topicItems} />
      </div>
      <div className="glass rounded p-5">
        <NavSection
          title="REGULATION"
          titleColor="var(--neon-green)"
          href="/regulation/"
          items={regulationItems}
        />
      </div>
      <div className="glass rounded p-5">
        <NavSection
          title="TREASURIES"
          titleColor="var(--neon-cyan)"
          href="/treasuries/"
          items={treasuryItems}
        />
      </div>
      <div className="glass rounded p-5">
        <NavSection
          title="RESEARCH"
          titleColor="var(--neon-magenta)"
          href="/research/"
          items={researchItems}
        />
      </div>
      {showRecent && <RecentPosts excludeSlug={excludeRecentSlug} />}
    </aside>
  );
}
