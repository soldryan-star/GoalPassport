import type { Metadata } from "next";
import Link from "next/link";
import { HOTEL_CATEGORIES } from "@/data/hotels";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AffiliateNotice } from "@/components/affiliate/affiliate-notice";

export const metadata: Metadata = {
  title: "Hotels & Stays",
  description: "Near-stadium hotels, budget picks, luxury towers, and Airbnb neighbourhoods for FIFA 2026™ travel.",
};

export default function HotelsHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Stays</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Hotel intelligence hub</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        SEO-first layouts with ratings, perks, and partner-ready CTAs. Wire real partner feeds or APIs when contracts clear.
      </p>
      <AffiliateNotice className="mt-6 max-w-2xl" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {HOTEL_CATEGORIES.map((c) => (
          <Link key={c.slug} href={`/hotels/${c.slug}`}>
            <GlassPanel className="h-full transition hover:border-emerald-500/40">
              <h2 className="font-display text-3xl text-zinc-900 dark:text-white">{c.title}</h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{c.description}</p>
              <span className="mt-6 inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400">View listings →</span>
            </GlassPanel>
          </Link>
        ))}
      </div>
    </div>
  );
}
