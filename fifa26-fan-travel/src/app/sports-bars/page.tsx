import type { Metadata } from "next";
import { SPORTS_BARS } from "@/data/sports-bars";
import { BarCard } from "@/components/cards/bar-card";

export const metadata: Metadata = {
  title: "Sports Bars & Fan Venues",
  description: "Rooftop screens, ultras-friendly pubs, and matchday atmosphere across FIFA 2026™ host cities.",
};

export default function SportsBarsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Venues</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Sports bars & fan energy</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Curated list mixing ESPN-style reliability with Bleacher Report swagger — rooftop sunsets, safe-standing pubs, and
        ultra-dense projector walls.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SPORTS_BARS.map((b, i) => (
          <BarCard key={b.id} bar={b} index={i} />
        ))}
      </div>
    </div>
  );
}
