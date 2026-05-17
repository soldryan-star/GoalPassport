import Image from "next/image";
import Link from "next/link";
import type { VancouverTopicGuide } from "@/data/vancouver/types";
import { getExpediaTravelShopOutbound } from "@/lib/affiliate";
import { GlassPanel } from "@/components/ui/glass-panel";

export function VancouverTopicGuidePage({
  guide,
  badge,
  relatedTitle,
  relatedLinks,
}: {
  guide: VancouverTopicGuide;
  badge: string;
  relatedTitle: string;
  relatedLinks: { label: string; href: string }[];
}) {
  const { url: expediaUrl, monetized } = getExpediaTravelShopOutbound();

  return (
    <article className="min-h-screen bg-zinc-950">
      <header className="relative min-h-[280px] overflow-hidden border-b border-white/10 sm:min-h-[320px]">
        <Image
          src={guide.heroImage}
          alt={`${guide.name} — Vancouver FIFA 2026 fan travel`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/92" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-5%,rgba(16,185,129,0.18),transparent)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60">
            <Link href="/" className="transition hover:text-cyan-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/cities/vancouver" className="transition hover:text-cyan-400">
              Vancouver
            </Link>
            <span>/</span>
            <span className="text-white/90">{guide.name}</span>
          </nav>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.35em] text-emerald-400">
            FIFA World Cup 2026™ · {badge}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl">
            {guide.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-200">{guide.intro}</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6">
        <GlassPanel>
          <h2 className="font-display text-2xl text-white">Key takeaways</h2>
          <ul className="mt-5 space-y-3">
            {guide.highlights.map((item) => (
              <li key={item.slice(0, 48)} className="flex gap-3 text-sm text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </GlassPanel>

        {guide.sections.map((section) => (
          <GlassPanel key={section.title}>
            <h2 className="font-display text-2xl text-white">{section.title}</h2>
            <ul className="mt-5 space-y-3">
              {section.items.map((item) => (
                <li key={item.slice(0, 48)} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassPanel>
        ))}

        <GlassPanel>
          <h2 className="font-display text-2xl text-white">{relatedTitle}</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {relatedLinks
              .filter((l) => !l.href.endsWith(guide.slug))
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:border-cyan-500/40 hover:bg-white/10 hover:text-cyan-300"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
          </ul>
        </GlassPanel>

        <GlassPanel className="text-center sm:text-left">
          <div className="sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h2 className="font-display text-3xl text-white">Book your Vancouver stay</h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Compare FIFA World Cup 2026™ hotels near BC Place and across Vancouver.
              </p>
            </div>
            <a
              href={expediaUrl}
              target="_blank"
              rel={monetized ? "noopener noreferrer sponsored" : "noopener noreferrer"}
              className="mt-6 inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:scale-[1.02] hover:brightness-110 sm:mt-0"
            >
              View FIFA Hotels on Expedia →
            </a>
          </div>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm">
            <Link href="/cities/vancouver" className="font-semibold text-cyan-400 hover:text-cyan-300">
              Vancouver city guide
            </Link>
            <Link href="/guides/vancouver/bc-place" className="font-semibold text-cyan-400 hover:text-cyan-300">
              BC Place guide
            </Link>
            <Link href="/hotels" className="font-semibold text-cyan-400 hover:text-cyan-300">
              Hotels hub
            </Link>
            <Link href="/match-guides" className="font-semibold text-cyan-400 hover:text-cyan-300">
              Match guides
            </Link>
          </nav>
        </GlassPanel>
      </div>
    </article>
  );
}
