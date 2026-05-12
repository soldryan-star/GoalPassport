import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, BLOG_POSTS } from "@/data/blog";
import { ShareRow } from "@/components/blog/share-row";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link href="/blog" className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        ← Blog
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{post.category}</p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-zinc-900 dark:text-white sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-zinc-500">
        {post.author} · {post.date} · {post.readTime}
      </p>
      <div className="mt-8">
        <ShareRow title={post.title} slug={post.slug} />
      </div>
      <div className="mt-10 max-w-none space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        {post.body.map((para) => (
          <p key={para.slice(0, 24)} className="text-base leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
