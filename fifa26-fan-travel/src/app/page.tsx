import Link from "next/link";
import { HomeHero } from "@/components/home/home-hero";
import { CityCard } from "@/components/cards/city-card";
import { MatchGuideCard } from "@/components/cards/match-guide-card";
import { HotelCard } from "@/components/cards/hotel-card";
import { BlogCard } from "@/components/cards/blog-card";
import { VerticalVideoCard } from "@/components/cards/vertical-video-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { GlassPanel } from "@/components/ui/glass-panel";
import { CITIES } from "@/data/cities";
import { MATCH_GUIDES } from "@/data/match-guides";
import { HOTELS_BY_CATEGORY } from "@/data/hotels";
import { BLOG_POSTS } from "@/data/blog";
import { VERTICAL_VIDEOS } from "@/data/videos";

export default function HomePage() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const trending = BLOG_POSTS.filter((p) => p.trending).slice(0, 4);
  const hotels = HOTELS_BY_CATEGORY["near-stadium"].slice(0, 3);

  return (
    <>
      <HomeHero />

      <section className="border-b border-white/5 bg-zinc-950 py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Host cities</p>
              <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
                {CITIES.length} host cities. One tournament.
              </h2>
            </div>
            <Link href="/cities" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">
              All cities →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CITIES.map((city, i) => (
              <CityCard key={city.slug} city={city} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Matchday</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">Latest guides</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {MATCH_GUIDES.slice(0, 4).map((g, i) => (
              <MatchGuideCard key={g.slug} guide={g} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-zinc-900/40 py-16 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Stays</p>
              <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">Featured hotels</h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">Placeholder rates — swap in affiliate APIs when partners go live.</p>
            </div>
            <Link href="/hotels" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">
              Hotel hub →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {hotels.map((h, i) => (
              <HotelCard key={h.id} hotel={h} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Trending</p>
          <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">TikTok-style reads</h2>
          <p className="mt-2 text-sm text-zinc-400">Short, loud, shareable — the blog edition of your FYP.</p>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {trending.map((p, i) => (
              <div key={p.slug} className="w-[min(100%,280px)] shrink-0">
                <BlogCard post={p} index={i} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tiktok-feed" className="scroll-mt-24 border-b border-white/5 bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">Vertical</p>
              <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">Matchday clips</h2>
              <p className="mt-2 text-sm text-zinc-500">Embedded-style cards — wire your CMS or TikTok oEmbed later.</p>
            </div>
          </div>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-6 pt-2">
            {VERTICAL_VIDEOS.map((v, i) => (
              <VerticalVideoCard key={v.id} video={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Newsletter</p>
              <h2 className="mt-2 font-display text-4xl text-white">Get the drop before your group chat does.</h2>
              <p className="mt-4 text-zinc-400">Fixture alerts, city drops, and partner perks — one email, no fluff.</p>
              <NewsletterForm className="mt-6 max-w-md" />
            </div>
            {featured && (
              <GlassPanel>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Editor&apos;s pick</p>
                <h3 className="mt-3 font-display text-3xl text-white">{featured.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="mt-6 inline-flex text-sm font-bold text-emerald-400 hover:text-emerald-300">
                  Read feature →
                </Link>
              </GlassPanel>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-r from-emerald-600/20 via-zinc-950 to-cyan-600/20 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
          <p className="font-display text-2xl text-white sm:text-3xl">Ready for kickoff?</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sports-bars"
              className="inline-flex min-h-11 items-center rounded-xl bg-white px-5 text-sm font-bold text-zinc-950 hover:bg-zinc-100"
            >
              Sports bars
            </Link>
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Open blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
