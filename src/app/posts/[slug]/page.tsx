import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/post/PostHeader";
import { TOC } from "@/components/post/TOC";
import { SourceFootnote } from "@/components/post/SourceFootnote";

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

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 xl:grid-cols-[1fr_220px]">
      <article className="mx-auto w-full max-w-3xl">
        <PostHeader meta={meta} />
        <div className="prose-content">
          <Post />
        </div>
        {meta.sources && meta.sources.length > 0 && <SourceFootnote sources={meta.sources} />}
      </article>
      <aside className="hidden xl:block">
        <TOC />
      </aside>
    </div>
  );
}
