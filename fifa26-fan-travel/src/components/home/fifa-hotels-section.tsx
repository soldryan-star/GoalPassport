import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getExpediaTravelShopOutbound } from "@/lib/affiliate";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AffiliateNotice } from "@/components/affiliate/affiliate-notice";

const HOTEL_HERO_IMAGE =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80&auto=format&fit=crop";

const FEATURED_HOTEL_CITIES = [
  {
    name: "Vancouver",
    description:
      "Harbourfront towers, Canada Line access, and walkable fan zones around BC Place match nights.",
  },
  {
    name: "Dallas",
    description:
      "Downtown luxury and Arlington corridors built for AT&T Stadium brackets and late-night energy.",
  },
  {
    name: "Atlanta",
    description:
      "GWCC-adjacent stays, MARTA convenience, and premium recovery between Mercedes-Benz Stadium sessions.",
  },
] as const;

function OutboundButton({
  href,
  monetized,
  className,
  children,
}: {
  href: string;
  monetized: boolean;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={monetized ? "noopener noreferrer sponsored" : "noopener noreferrer"}
      className={className}
    >
      {children}
    </a>
  );
}

export function FifaHotelsSection() {
  const { url: expediaUrl, monetized } = getExpediaTravelShopOutbound();

  return (
    <section
      aria-labelledby="fifa-hotels-heading"
      className="relative overflow-hidden border-y border-white/10"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src={HOTEL_HERO_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/88 to-zinc-950/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(16,185,129,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M60%200H0v60%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%2F%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-400/90">FIFA Hotels</p>
        <h2
          id="fifa-hotels-heading"
          className="mt-3 max-w-3xl font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Best FIFA World Cup 2026 Hotels
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Explore top-rated hotels near FIFA World Cup 2026 stadiums, nightlife districts, downtown areas, and fan
          zones across Canada, USA, and Mexico.
        </p>

        <OutboundButton
          href={expediaUrl}
          monetized={monetized}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-emerald-500/35 hover:brightness-110 active:scale-[0.98]"
        >
          View FIFA Hotel Collection
        </OutboundButton>

        <AffiliateNotice className="mt-4 max-w-xl text-zinc-500" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_HOTEL_CITIES.map((city) => (
            <GlassPanel key={city.name} hover className="flex h-full flex-col border-white/15 bg-white/[0.06]">
              <h3 className="font-display text-2xl text-white sm:text-3xl">{city.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{city.description}</p>
              <OutboundButton
                href={expediaUrl}
                monetized={monetized}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:text-emerald-200"
              >
                View Hotels
              </OutboundButton>
            </GlassPanel>
          ))}
        </div>

        <p className="mt-10 text-sm text-zinc-500">
          Prefer editorial picks?{" "}
          <Link href="/hotels" className="font-semibold text-emerald-400 underline-offset-4 hover:underline">
            Browse our hotel guides
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
