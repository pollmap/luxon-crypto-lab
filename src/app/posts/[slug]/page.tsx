import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/post/PostHeader";
import { TOC } from "@/components/post/TOC";
import { SourceFootnote } from "@/components/post/SourceFootnote";
import { RelatedPosts } from "@/components/post/RelatedPosts";
import { BlogSidebar } from "@/components/sidebar/BlogSidebar";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getPostBySlug(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.subtitle ?? undefined,
    openGraph: { title: meta.title, description: meta.subtitle ?? undefined },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getPostBySlug(slug);
  if (!meta) notFound();

  const { default: Post } = await import(`@/content/posts/${slug}.mdx`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.subtitle ?? "",
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: { "@type": "Person", name: meta.author ?? "이찬희" },
    publisher: { "@type": "Organization", name: "luxon-crypto-lab" },
    keywords: meta.tags?.join(", ") ?? "",
    articleSection: meta.category,
  };

  return (
    <div className="mx-auto grid max-w-[1400px] gap-6 px-4 py-8 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr_220px] xl:gap-8 xl:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hidden lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <BlogSidebar activeSlug={slug} excludeRecentSlug={slug} />
        </div>
      </div>

      <article className="mx-auto w-full max-w-3xl px-2">
        <PostHeader meta={meta} />
        <div className="prose-content">
          <Post />
        </div>
        {meta.sources && meta.sources.length > 0 && <SourceFootnote sources={meta.sources} />}
        <RelatedPosts currentSlug={slug} category={meta.category} tags={meta.tags} />
      </article>

      <aside className="hidden xl:block">
        <div className="sticky top-20">
          <TOC />
        </div>
      </aside>
    </div>
  );
}
