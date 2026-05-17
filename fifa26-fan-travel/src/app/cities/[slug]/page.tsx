import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity, getCitySlugs, type CityGuide, type HostCitySlug } from "@/data/cities";
import {
  cityHasExpediaPicks,
  getExpediaHotelsForCity,
  getHotelOutboundUrl,
} from "@/data/expedia-collection";
import { AffiliateNotice } from "@/components/affiliate/affiliate-notice";
import { ExpediaCta } from "@/components/affiliate/expedia-cta";
import { CityLandmarkBackdrop } from "@/components/city/city-landmark-backdrop";
import { GlassPanel } from "@/components/ui/glass-panel";
import { TORONTO_GUIDE_LINKS } from "@/data/toronto-guides";
import {
  linkBmoFieldInText,
  TorontoGuideLink,
  torontoAreasToStayContent,
} from "@/lib/toronto-guide-links";

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

function BulletList({ title, items }: { title: string; items: ReactNode[] }) {
  return (
    <GlassPanel>
      <h2 className="font-display text-2xl text-zinc-900 dark:text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

function BarList({ city, linkBmoField = false }: { city: CityGuide; linkBmoField?: boolean }) {
  return (
    <GlassPanel>
      <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Sports bars</h2>
      <ul className="mt-4 space-y-4">
        {city.sportsBars.map((b) => (
          <li key={b.name} className="border-b border-zinc-200 pb-4 last:border-0 dark:border-white/10">
            <p className="font-semibold text-zinc-900 dark:text-white">{b.name}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {linkBmoField ? linkBmoFieldInText(b.vibe) : b.vibe}
            </p>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

function ExpediaFeaturedHotels({ slug, cityName }: { slug: HostCitySlug; cityName: string }) {
  const hotels = getExpediaHotelsForCity(slug);
  if (hotels.length === 0) return null;

  return (
    <GlassPanel>
      <h2 className="font-display text-2xl text-zinc-900 dark:text-white">
        Featured FIFA 2026 hotel picks in {cityName}
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Curated from our Expedia Travel Shop collection — each link opens that property on Expedia.
      </p>
      <ul className="mt-4 space-y-3">
        {hotels.map((hotel) => (
          <li key={hotel.hotelName}>
            <a
              href={getHotelOutboundUrl(slug, hotel)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-sm font-medium text-emerald-600 underline-offset-2 hover:underline dark:text-emerald-400"
            >
              {hotel.hotelName} →
            </a>
          </li>
        ))}
      </ul>
      <AffiliateNotice className="mt-4" />
    </GlassPanel>
  );
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const hostSlug = city.slug as HostCitySlug;
  const hasExpediaPicks = cityHasExpediaPicks(hostSlug);
  const isToronto = hostSlug === "toronto";
  const areasToStayItems = isToronto ? torontoAreasToStayContent() : city.areasToStay;
  const transportationItems = isToronto
    ? city.transportation.map((tip) => linkBmoFieldInText(tip))
    : city.transportation;

  return (
    <article>
      <header className="border-b border-zinc-200 dark:border-white/10">
        <CityLandmarkBackdrop
          slug={hostSlug}
          accent={city.accent}
          className="min-h-[280px] sm:min-h-[320px]"
          sizes="100vw"
          priority
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <Link href="/cities" className="text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white">
              ← Cities
            </Link>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70">{city.country}</p>
            <h1 className="mt-2 font-display text-5xl text-white sm:text-6xl">{city.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">{city.tagline}</p>
            <p className="mt-4 text-sm font-medium text-white/80">
              Stadium focus:{" "}
              {isToronto ? (
                <TorontoGuideLink
                  href="/guides/toronto/bmo-field"
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  {city.stadium}
                </TorontoGuideLink>
              ) : (
                city.stadium
              )}
            </p>
            {!city.fullGuide && city.teaser && (
              <p className="mt-6 max-w-xl rounded-xl border border-white/20 bg-black/30 p-4 text-sm text-white/90 backdrop-blur">
                {city.teaser}
              </p>
            )}
          </div>
        </CityLandmarkBackdrop>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <BulletList title="Best areas to stay" items={areasToStayItems} />
          <BulletList title="Safety tips" items={city.safetyTips} />
        </div>
        {isToronto ? (
          <GlassPanel>
            <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Toronto neighbourhood guides</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Deep dives for FIFA 2026™ fans — hotels, transit, and matchday tips by area.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {TORONTO_GUIDE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-cyan-600 transition hover:border-emerald-500/50 hover:bg-emerald-500/15 dark:text-cyan-400"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </GlassPanel>
        ) : null}
        <BulletList title="Transportation" items={transportationItems} />
        <div className="grid gap-8 lg:grid-cols-2">
          <BarList city={city} linkBmoField={isToronto} />
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

        <GlassPanel>
          <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Book hotels in {city.name}</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Shop FIFA World Cup 2026™ stays in our Expedia Travel Shop — commission-supported links help keep
            GoalPassport free for fans.
          </p>
          <ExpediaCta label="Book hotel deals on Expedia" className="mt-6" citySlug={hostSlug} />
          <Link
            href="/hotels"
            className="mt-4 inline-block text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
          >
            Browse editorial hotel guides →
          </Link>
          <AffiliateNotice className="mt-4" />
        </GlassPanel>

        {hasExpediaPicks ? <ExpediaFeaturedHotels slug={hostSlug} cityName={city.name} /> : null}

        <div className="grid gap-8 lg:grid-cols-2">
          <BulletList title="Fan zones & activations" items={city.fanZones} />
          <BulletList title="Restaurant picks" items={city.restaurants} />
        </div>
      </div>
    </article>
  );
}
