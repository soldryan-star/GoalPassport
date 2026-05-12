"use client";

import { motion } from "framer-motion";
import type { SportsBar } from "@/data/sports-bars";
import { GlassPanel } from "@/components/ui/glass-panel";

const typeLabel: Record<SportsBar["type"], string> = {
  "sports-bar": "Sports bar",
  rooftop: "Rooftop",
  "fan-venue": "Fan venue",
};

export function BarCard({ bar, index = 0 }: { bar: SportsBar; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <GlassPanel>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
            {typeLabel[bar.type]}
          </span>
          <span className="text-xs text-zinc-500">{bar.city}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl text-white">{bar.name}</h3>
        <p className="mt-2 text-sm text-zinc-400">{bar.atmosphere}</p>
        <p className="mt-3 text-xs font-medium text-zinc-500">Screens: {bar.screens}</p>
        <p className="mt-1 text-xs text-emerald-400/90">{bar.highlight}</p>
      </GlassPanel>
    </motion.div>
  );
}
