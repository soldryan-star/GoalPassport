import type { Metadata } from "next";
import Link from "next/link";
import { HOTEL_CATEGORIES } from "@/data/hotels";
import { getExpediaTravelShopOutbound } from "@/lib/affiliate";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AffiliateNotice } from "@/components/affiliate/affiliate-notice";

export const metadata: Metadata = {
  title: "Hotels & Stays",
  description: "Near-stadium hotels, budget picks, luxury towers, and Airbnb neighbourhoods for FIFA 2026™ travel.",
};

export default function HotelsHubPage() {
  const { url: expediaUrl, monetized } = getExpediaTravelShopOutbound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Stays</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Hotel intelligence hub</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Compare ratings, amenities, and nightly rates from major booking partners before you lock dates for FIFA World Cup
        2026™.
      </p>
      <AffiliateNotice className="mt-6 max-w-2xl" />
      <a
        href={expediaUrl}
        target="_blank"
        rel={monetized ? "noopener noreferrer sponsored" : "noopener noreferrer"}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-900/25 transition hover:brightness-110"
      >
        View FIFA Hotel Collection on Expedia
      </a>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {HOTEL_CATEGORIES.map((c) => (
          <GlassPanel key={c.slug} className="flex h-full flex-col transition hover:border-emerald-500/40">
            <Link href={`/hotels/${c.slug}`} className="flex-1">
              <h2 className="font-display text-3xl text-zinc-900 dark:text-white">{c.title}</h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{c.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Read guide →
              </span>
            </Link>
            <a
              href={expediaUrl}
              target="_blank"
              rel={monetized ? "noopener noreferrer sponsored" : "noopener noreferrer"}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-900/25 transition hover:brightness-110"
            >
              View on Expedia
            </a>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}
