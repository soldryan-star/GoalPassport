import Link from "next/link";
import type { CityGuide } from "@/data/cities";
import { getCityCardImage } from "@/data/images";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ContentImage } from "@/components/ui/content-image";

export function CityCard({ city }: { city: CityGuide }) {
  const image = getCityCardImage(city.slug);

  return (
    <Link href={`/cities/${city.slug}`} className="group block h-full">
      <GlassPanel hover className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/9] overflow-hidden">
          <ContentImage
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${city.accent}`} />
          <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-emerald-300/90">
            {city.country}
          </p>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-3xl text-zinc-900 dark:text-white">{city.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{city.tagline}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            City guide →
          </p>
        </div>
      </GlassPanel>
    </Link>
  );
}
