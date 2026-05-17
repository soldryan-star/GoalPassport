import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, getCity, type CityGuide } from "@/data/cities";
import { BLOG_POSTS } from "@/data/blog";
import { CityCard } from "@/components/cards/city-card";
import { FifaHotelsSection } from "@/components/home/fifa-hotels-section";
import { GlassPanel } from "@/components/ui/glass-panel";
import { PlaneRouteAnimation } from "@/components/home/messi-animation";

const FEATURED_SLUGS = [
  "toronto",
  "mexico-city",
  "miami",
  "los-angeles",
  "seattle",
  "new-york",
] as const;

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | FIFA 2026™ Fan Travel & Matchday` },
  description: SITE.tagline,
  openGraph: {
    title: `${SITE.name} | FIFA 2026™ Fan Travel & Matchday`,
    description: SITE.tagline,
    url: SITE.url,
  },
};

export default function Home() {
  const featuredCities = FEATURED_SLUGS.map((slug) => getCity(slug)).filter((c): c is CityGuide => c != null);
  const featuredPost = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Aerial stadium hero image */}
        <Image
          src="https://images.unsplash.com/photo-1556962021-9d0303621643?w=1800&q=80&auto=format&fit=crop"
          alt="Aerial view of a packed soccer stadium with a vivid green pitch"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark scrim so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" aria-hidden />
        {/* Subtle emerald tint */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.30),transparent)]" aria-hidden />
        <PlaneRouteAnimation />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
            FIFA World Cup 2026™
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Plan your fan route across every host city
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200">
            {SITE.name} is your independent guide to stadium logistics, where to stay, how to move, sports bars, fan
            zones, and matchday energy — built for fans flying multi-city brackets, not brochure copy.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-900/25 transition hover:brightness-110"
            >
              Explore host cities
            </Link>
            <Link
              href="/match-guides"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Match guides
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
            >
              Read the latest →
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
            <li>
              <span className="font-semibold text-zinc-200">16 cities</span> · 3 countries
            </li>
            <li>
              <span className="font-semibold text-zinc-200">Hotels & areas</span> · near stadiums
            </li>
            <li>
              <span className="font-semibold text-zinc-200">Bars & fan zones</span> · local picks
            </li>
          </ul>
        </div>
      </section>

      <FifaHotelsSection />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              Start browsing
            </p>
            <h2 className="mt-2 font-display text-4xl text-zinc-900 dark:text-white">Featured host cities</h2>
            <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
              Deep guides for every official venue — here are six hubs fans hit first. Open the full index anytime.
            </p>
          </div>
          <Link
            href="/cities"
            className="shrink-0 text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
          >
            All 16 cities →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCities.map((c, i) => (c ? <CityCard key={c.slug} city={c} index={i} /> : null))}
        </div>
      </section>

      {featuredPost ? (
        <section className="border-t border-zinc-200 bg-zinc-100/50 py-14 dark:border-white/10 dark:bg-white/[0.02] sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              From the blog
            </p>
            <h2 className="mt-2 font-display text-3xl text-zinc-900 dark:text-white">Matchweek long reads</h2>
            <Link href={`/blog/${featuredPost.slug}`} className="mt-8 block max-w-3xl">
              <GlassPanel className="group">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Featured story
                </p>
                <h3 className="mt-3 font-display text-3xl text-zinc-900 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                  {featuredPost.title}
                </h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{featuredPost.excerpt}</p>
                <span className="mt-6 inline-flex text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  Read article →
                </span>
              </GlassPanel>
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
}
