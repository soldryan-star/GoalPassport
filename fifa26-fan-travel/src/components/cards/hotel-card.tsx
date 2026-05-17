"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HotelListing } from "@/data/hotels";
import { GlassPanel } from "@/components/ui/glass-panel";
import { buildHotelSearchOutbound } from "@/lib/affiliate";

const HOTEL_CARD_CTA = ["View Hotel Deals", "Check Availability", "See Hotel Offers"] as const;

function hotelCardCtaLabel(i: number): string {
  return HOTEL_CARD_CTA[i % HOTEL_CARD_CTA.length];
}

function nightlyRateCaption(i: number, priceFrom: string): string {
  switch (i % 3) {
    case 0:
      return "Avg nightly rate";
    case 1:
      return "Estimated nightly rate";
    default:
      return `From ${priceFrom}/night`;
  }
}

export function HotelCard({
  hotel,
  index = 0,
  ctaHref,
}: {
  hotel: HotelListing;
  index?: number;
  /** When set, overrides the default hotel search affiliate URL (e.g. near-stadium AWIN link). */
  ctaHref?: string;
}) {
  const built = buildHotelSearchOutbound({
    city: hotel.city,
    listingId: hotel.id,
    utmCampaign: `hotel-${hotel.id}`,
  });
  const outboundUrl = ctaHref ?? built.url;
  const monetized = Boolean(ctaHref) || built.monetized;
  const outboundRel = monetized ? "noopener noreferrer sponsored" : "noopener noreferrer";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <GlassPanel className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">{hotel.neighborhood}</p>
            <h3 className="mt-1 font-display text-xl text-white">{hotel.name}</h3>
            <p className="text-xs text-zinc-500">{hotel.city}</p>
          </div>
          <div className="rounded-lg bg-black/40 px-2 py-1 text-right">
            <p className="text-lg font-bold text-white">{hotel.rating}</p>
            <p className="text-[10px] text-zinc-500">{hotel.reviews} reviews</p>
          </div>
        </div>
        <p className="mt-3 text-2xl font-black text-emerald-400">{hotel.priceFrom}</p>
        <p className="text-xs text-zinc-500">{nightlyRateCaption(index, hotel.priceFrom)}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {hotel.perks.map((p) => (
            <li key={p} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300">
              {p}
            </li>
          ))}
        </ul>
        {outboundUrl ? (
          <a
            href={outboundUrl}
            target="_blank"
            rel={outboundRel}
            className="mt-auto inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-sm font-bold text-zinc-950 transition hover:opacity-90"
          >
            {hotelCardCtaLabel(index)}
          </a>
        ) : (
          <Link
            href="/hotels"
            className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Browse stay guides
          </Link>
        )}
      </GlassPanel>
    </motion.div>
  );
}
