"use client";

import { motion } from "framer-motion";
import type { VerticalVideo } from "@/data/videos";

export function VerticalVideoCard({ video, index = 0 }: { video: VerticalVideo; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="relative aspect-[9/16] w-[140px] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-[160px]"
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${video.accent} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <button
        type="button"
        className="absolute inset-0 flex flex-col justify-between p-3 text-left"
        aria-label={`Play ${video.title}`}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur">
          ▶
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">{video.creator}</p>
          <p className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-white">{video.title}</p>
          <div className="mt-2 flex items-center justify-between text-[10px] text-white/80">
            <span>{video.views} views</span>
            <span>{video.duration}</span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
