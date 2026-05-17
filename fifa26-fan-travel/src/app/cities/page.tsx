import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/data/cities";
import { GlassPanel } from "@/components/ui/glass-panel";

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
          <Link key={c.slug} href={`/cities/${c.slug}`}>
            <GlassPanel className="h-full">
              <div className={`mb-4 h-2 rounded-full bg-gradient-to-r ${c.accent}`} />
              <h2 className="font-display text-3xl text-zinc-900 dark:text-white">{c.name}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.tagline}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                City guide →
              </p>
            </GlassPanel>
          </Link>
        ))}
      </div>
    </div>
  );
}
