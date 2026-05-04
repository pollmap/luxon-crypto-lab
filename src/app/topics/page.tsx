import { TOPICS } from "@/lib/topics";
import { IndexHeader, IndexList } from "@/components/detail/IndexList";

export const metadata = { title: "Topics" };

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-10 pb-20 md:px-6 md:pt-14 md:pb-28">
      <IndexHeader
        kicker="Topics"
        title="Topics"
        description="자산 단위가 아니라 개념·논쟁·메커니즘 단위 분석. 광범 토픽 시리즈."
      />
      <IndexList
        items={TOPICS.map((t) => ({
          href: `/topics/${t.id}/`,
          title: t.name,
          signature: t.signature,
          description: t.description,
          badges: [{ label: `${t.episodes}편` }],
          meta: t.subIssues[0]?.publishedAt,
        }))}
      />
    </div>
  );
}
