"use client";

import { useMemo, useState } from "react";
import type { BlogCategory, BlogPost } from "@/data/blog";
import { BLOG_CATEGORIES } from "@/data/blog";
import { BlogCard } from "@/components/cards/blog-card";
import { GlassPanel } from "@/components/ui/glass-panel";

export function BlogFeed({ posts, excludeSlugs = [] }: { posts: BlogPost[]; excludeSlugs?: string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<BlogCategory | "all">("all");

  const filtered = useMemo(() => {
    const base = posts.filter((p) => !excludeSlugs.includes(p.slug));
    return base.filter((p) => {
      const okCat = cat === "all" || p.category === cat;
      const s = q.trim().toLowerCase();
      const okQ =
        !s ||
        p.title.toLowerCase().includes(s) ||
        p.excerpt.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s);
      return okCat && okQ;
    });
  }, [posts, excludeSlugs, cat, q]);

  return (
    <div>
      <GlassPanel className="mb-8 p-4 sm:p-5">
        <label className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Search</label>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by topic, city, or vibe…"
          className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-emerald-500/30 focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCat("all")}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
              cat === "all" ? "bg-emerald-500 text-zinc-950" : "bg-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            All
          </button>
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCat(c.slug)}
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                cat === c.slug ? "bg-emerald-500 text-zinc-950" : "bg-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </GlassPanel>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <BlogCard key={p.slug} post={p} index={i} />
        ))}
      </div>
      {filtered.length === 0 && <p className="py-12 text-center text-sm text-zinc-500">No articles match.</p>}
    </div>
  );
}
