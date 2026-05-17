"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CityGuide } from "@/data/cities";
import { ExpediaCta } from "@/components/affiliate/expedia-cta";
import { CityLandmarkBackdrop } from "@/components/city/city-landmark-backdrop";
import { GlassPanel } from "@/components/ui/glass-panel";

export function CityCard({ city, index = 0 }: { city: CityGuide; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="h-full"
    >
      <GlassPanel className="flex h-full flex-col overflow-hidden p-0">
        <Link href={`/cities/${city.slug}`} className="group relative block flex-1">
          <CityLandmarkBackdrop
            slug={city.slug}
            accent={city.accent}
            className="min-h-[200px]"
            priority={index < 3}
          >
            <div className="flex min-h-[200px] flex-col justify-end p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{city.country}</p>
              <h3 className="mt-1 font-display text-3xl tracking-wide text-white">{city.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-zinc-200">{city.tagline}</p>
              <span className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-300 group-hover:text-white">
                City intel →
              </span>
            </div>
          </CityLandmarkBackdrop>
        </Link>
        <div className="p-4 pt-0">
          <ExpediaCta
            label="Book hotel deals"
            variant="compact"
            className="w-full"
            citySlug={city.slug}
          />
        </div>
      </GlassPanel>
    </motion.div>
  );
}
