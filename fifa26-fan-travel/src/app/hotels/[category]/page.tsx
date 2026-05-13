import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HOTEL_CATEGORIES, HOTELS_BY_CATEGORY, type HotelCategory } from "@/data/hotels";
import { HotelCard } from "@/components/cards/hotel-card";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AffiliateNotice } from "@/components/affiliate/affiliate-notice";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return HOTEL_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = HOTEL_CATEGORIES.find((c) => c.slug === category);
  if (!meta) return { title: "Hotels" };
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function HotelCategoryPage({ params }: Props) {
  const { category } = await params;
  if (!HOTELS_BY_CATEGORY[category as HotelCategory]) notFound();
  const cat = category as HotelCategory;
  const meta = HOTEL_CATEGORIES.find((c) => c.slug === cat)!;
  const hotels = HOTELS_BY_CATEGORY[cat];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <Link href="/hotels" className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        ← Hotels hub
      </Link>
      <h1 className="mt-4 font-display text-5xl text-zinc-900 dark:text-white">{meta.title}</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">{meta.description}</p>
      <AffiliateNotice className="mt-4 max-w-2xl" />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {hotels.map((h, i) => (
          <HotelCard key={h.id} hotel={h} index={i} />
        ))}
      </div>

      <GlassPanel className="mt-14 overflow-hidden p-0">
        <div className="relative h-64 w-full bg-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.25),transparent_55%),linear-gradient(120deg,rgba(6,182,212,0.15),transparent)]" />
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M40%200H0v40%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.06)%22%2F%3E%3C%2Fsvg%3E')]" />
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Map module</p>
            <p className="mt-2 max-w-md text-sm text-zinc-400">
              Drop-in Mapbox / Google Maps with stadium pins, walking isochrones, and affiliate hotel markers.
            </p>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
