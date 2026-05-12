import type { Metadata } from "next";
import { MATCH_GUIDES } from "@/data/match-guides";
import { MatchGuideCard } from "@/components/cards/match-guide-card";

export const metadata: Metadata = {
  title: "Matchday Guides",
  description: "Opening match, Messi in Toronto, Argentina fan routes, and Mexico City Azteca experiences.",
};

export default function MatchGuidesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Matchday</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Guides that survive the crowd crush</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Atmosphere, viewing angles, transport exits, hotels, weather, and fan etiquette — built for first-timers and capos alike.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {MATCH_GUIDES.map((g, i) => (
          <MatchGuideCard key={g.slug} guide={g} index={i} />
        ))}
      </div>
    </div>
  );
}
