import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import { BlogFeed } from "@/components/blog/blog-feed";
import { GlassPanel } from "@/components/ui/glass-panel";

export const metadata: Metadata = {
  title: "Blog",
  description: "Travel hacks, matchday culture, gear guides, and tournament news for FIFA 2026™ fans.",
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured)!;
  const trending = BLOG_POSTS.filter((p) => p.trending);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Editorial</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">The GoalPassport wire</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        SEO-first longform with shareable pull-quotes — structured data ready when you flip the switch in layout.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <Link href={`/blog/${featured.slug}`}>
            <GlassPanel className="group relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-zinc-900 to-cyan-600/30" />
              <div className="relative p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Featured</p>
                <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">{featured.title}</h2>
                <p className="mt-4 max-w-xl text-zinc-200">{featured.excerpt}</p>
                <span className="mt-8 inline-flex text-sm font-bold text-white group-hover:underline">Read article →</span>
              </div>
            </GlassPanel>
          </Link>
          <BlogFeed posts={BLOG_POSTS} excludeSlugs={[featured.slug]} />
        </div>

        <aside className="space-y-8">
          <GlassPanel>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Trending</p>
            <ul className="mt-4 space-y-4">
              {trending.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <p className="text-sm font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                      {p.title}
                    </p>
                    <p className="text-xs text-zinc-500">{p.readTime}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Categories</p>
            <ul className="mt-4 space-y-2">
              {BLOG_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{c.label}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </aside>
      </div>
    </div>
  );
}
