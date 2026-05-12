"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog";
import { GlassPanel } from "@/components/ui/glass-panel";

export function BlogCard({ post, index = 0, compact }: { post: BlogPost; index?: number; compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <GlassPanel className={compact ? "p-4" : ""}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">{post.category}</p>
          <h3 className={`mt-2 font-display tracking-wide text-white ${compact ? "text-lg" : "text-2xl"}`}>
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </GlassPanel>
      </Link>
    </motion.div>
  );
}
