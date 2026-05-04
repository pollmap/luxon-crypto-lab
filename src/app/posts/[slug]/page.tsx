import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/post/PostHeader";
import { TOC } from "@/components/post/TOC";
import { SourceFootnote } from "@/components/post/SourceFootnote";
import { RelatedPosts } from "@/components/post/RelatedPosts";
import { WikiNav } from "@/components/sidebar/WikiNav";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getPostBySlug(slug);
  if (!meta) return {};
  const desc = meta.subtitle ?? `${meta.category} · luxon-crypto-lab 학술 분석`;
  const url = `/posts/${slug}/`;
  return {
    title: meta.title,
    description: desc,
    keywords: meta.tags?.join(", "),
    authors: [{ name: meta.author ?? "이찬희" }],
    openGraph: {
      type: "article",
      title: meta.title,
      description: desc,
      url,
      siteName: "luxon-crypto-lab",
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt ?? meta.publishedAt,
      authors: [meta.author ?? "이찬희"],
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: desc,
    },
    alternates: { canonical: url },
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
    <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-6 md:px-6 md:py-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[230px_minmax(0,1fr)_200px] xl:gap-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hidden lg:block">
        <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto pr-3">
          <WikiNav activeSlug={slug} />
        </div>
      </div>

      <article className="mx-auto w-full max-w-[680px]">
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
