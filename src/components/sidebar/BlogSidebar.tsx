import { ProfileCard } from "./ProfileCard";
import { CategoryTree } from "./CategoryTree";
import { RecentPosts } from "./RecentPosts";

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
  return (
    <aside className="space-y-6">
      <ProfileCard />
      <CategoryTree activeSlug={activeSlug} />
      {showRecent && <RecentPosts excludeSlug={excludeRecentSlug} />}
    </aside>
  );
}
