import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/data/cities";
import { GlassPanel } from "@/components/ui/glass-panel";

export const metadata: Metadata = {
  title: "Host Cities",
  description: "FIFA 2026™ fan travel guides for Toronto, Mexico City, New York, Miami, Los Angeles, and Vancouver.",
};

export default function CitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Cities</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Choose your base camp</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Deep guides for Toronto & Mexico City live now — expanded intel for US hosts rolling out on the same routes.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((c) => (
          <Link key={c.slug} href={`/cities/${c.slug}`}>
            <GlassPanel className="h-full">
              <div className={`mb-4 h-2 rounded-full bg-gradient-to-r ${c.accent}`} />
              <h2 className="font-display text-3xl text-zinc-900 dark:text-white">{c.name}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.tagline}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {c.fullGuide ? "Full guide" : "Teaser live"} →
              </p>
            </GlassPanel>
          </Link>
        ))}
      </div>
    </div>
  );
}
