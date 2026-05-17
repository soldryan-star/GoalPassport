import type { Metadata } from "next";
import { CITIES } from "@/data/cities";
import { CityCard } from "@/components/cards/city-card";

export const metadata: Metadata = {
  title: "Host Cities",
  description:
    "All sixteen FIFA World Cup 2026™ host cities — Canada, Mexico, and the United States — with fan travel guides, stadium intel, and matchday tips.",
};

export default function CitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Host cities</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Every official 2026 venue</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Sixteen cities across three countries — from Vancouver and Toronto to Mexico’s trio and eleven U.S. hosts. Each
        page includes where to stay, how to move, bars, fan zones, food, and stadium-area hotels.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CITIES.map((c) => (
          <CityCard key={c.slug} city={c} />
        ))}
      </div>
    </div>
  );
}
