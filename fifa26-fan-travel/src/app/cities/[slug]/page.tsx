import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity, getCitySlugs, type CityGuide } from "@/data/cities";
import { GlassPanel } from "@/components/ui/glass-panel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "City" };
  return {
    title: `${city.name} Fan Guide | FIFA 2026™`,
    description: `${city.name} travel, bars, hotels near ${city.stadium}, and matchday tips.`,
  };
}

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <GlassPanel>
      <h2 className="font-display text-2xl text-zinc-900 dark:text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((item) => (
          <li key={item.slice(0, 40)} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

function BarList({ city }: { city: CityGuide }) {
  return (
    <GlassPanel>
      <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Sports bars</h2>
      <ul className="mt-4 space-y-4">
        {city.sportsBars.map((b) => (
          <li key={b.name} className="border-b border-zinc-200 pb-4 last:border-0 dark:border-white/10">
            <p className="font-semibold text-zinc-900 dark:text-white">{b.name}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{b.vibe}</p>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <article>
      <header className={`relative overflow-hidden border-b border-zinc-200 dark:border-white/10`}>
        <div className={`absolute inset-0 bg-gradient-to-br opacity-90 ${city.accent}`} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <Link href="/cities" className="text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white">
            ← Cities
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70">{city.country}</p>
          <h1 className="mt-2 font-display text-5xl text-white sm:text-6xl">{city.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{city.tagline}</p>
          <p className="mt-4 text-sm font-medium text-white/80">Stadium focus: {city.stadium}</p>
          {!city.fullGuide && city.teaser && (
            <p className="mt-6 max-w-xl rounded-xl border border-white/20 bg-black/30 p-4 text-sm text-white/90 backdrop-blur">
              {city.teaser}
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <BulletList title="Best areas to stay" items={city.areasToStay} />
          <BulletList title="Safety tips" items={city.safetyTips} />
        </div>
        <BulletList title="Transportation" items={city.transportation} />
        <div className="grid gap-8 lg:grid-cols-2">
          <BarList city={city} />
          <BulletList title="Nightlife" items={city.nightlife} />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <BulletList title="Hotels near stadium" items={city.hotelsNearStadium} />
          <GlassPanel>
            <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Budget vs luxury</h2>
            <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">Budget</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{city.budgetVsLuxury.budget}</p>
            <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">Luxury</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{city.budgetVsLuxury.luxury}</p>
          </GlassPanel>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <BulletList title="Fan zones & activations" items={city.fanZones} />
          <BulletList title="Restaurant picks" items={city.restaurants} />
        </div>

        <GlassPanel className="text-center">
          <p className="font-display text-2xl text-zinc-900 dark:text-white">Lock your stay</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Compare hotels, budget picks, and Airbnb neighbourhoods.</p>
          <Link
            href="/hotels"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 text-sm font-bold text-zinc-950"
          >
            Open hotel hub
          </Link>
        </GlassPanel>
      </div>
    </article>
  );
}
