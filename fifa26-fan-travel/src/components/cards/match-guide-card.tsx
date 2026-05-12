"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { MatchGuide } from "@/data/match-guides";
import { GlassPanel } from "@/components/ui/glass-panel";

export function MatchGuideCard({ guide, index = 0 }: { guide: MatchGuide; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/match-guides/${guide.slug}`}>
        <GlassPanel className="group relative overflow-hidden p-0">
          <div className={`absolute inset-0 bg-gradient-to-br opacity-90 ${guide.heroAccent}`} />
          <div className="relative space-y-3 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">{guide.readTime} read</p>
            <h3 className="font-display text-2xl leading-tight text-white">{guide.title}</h3>
            <p className="text-sm text-white/85">{guide.subtitle}</p>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-200 group-hover:text-white">
              Open guide →
            </span>
          </div>
        </GlassPanel>
      </Link>
    </motion.div>
  );
}
