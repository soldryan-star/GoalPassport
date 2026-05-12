"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CountdownFifa } from "@/components/home/countdown-fifa";
import { GlassPanel } from "@/components/ui/glass-panel";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(16,185,129,0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M60%200H0v60%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%2F%3E%3C%2Fsvg%3E')]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-400/90">FIFA World Cup 2026™ fan field guide</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-7xl">
            Travel louder.
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-white bg-clip-text text-transparent">
              Stand closer.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Ground-level intel for all 16 host cities, matchday chaos, hotels, bars, and the vertical clips your FYP wishes it had.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/cities"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:opacity-90"
            >
              Explore cities
            </Link>
            <Link
              href="/match-guides"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Matchday guides
            </Link>
            <a
              href="#tiktok-feed"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 px-6 text-sm font-semibold text-zinc-300 hover:text-white"
            >
              Viral feed ↓
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <GlassPanel className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Kickoff countdown</p>
            <p className="mt-2 text-sm text-zinc-400">Target: opening weekend — adjust when your fixture drops.</p>
            <div className="mt-6">
              <CountdownFifa />
            </div>
          </GlassPanel>
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-6 text-sm text-zinc-300">
            <p className="font-display text-lg text-white">Sportsbook zone</p>
            <p className="mt-2 leading-relaxed">
              Odds integrations ship post-regulatory clearance. Subscribers get first access to partner boosts + same-game parlay
              tutorials.
            </p>
            <button
              type="button"
              className="mt-4 rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-400"
              disabled
            >
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
