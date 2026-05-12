import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMatchGuide, getMatchGuideSlugs } from "@/data/match-guides";
import { GlassPanel } from "@/components/ui/glass-panel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getMatchGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getMatchGuide(slug);
  if (!g) return { title: "Guide" };
  return { title: g.title, description: g.subtitle };
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <GlassPanel>
      <h2 className="font-display text-2xl text-zinc-900 dark:text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((x) => (
          <li key={x.slice(0, 48)} className="border-l-2 border-emerald-500/50 pl-3">
            {x}
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}

export default async function MatchGuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getMatchGuide(slug);
  if (!g) notFound();

  return (
    <article>
      <header className={`relative overflow-hidden border-b border-zinc-200 dark:border-white/10`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${g.heroAccent}`} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Link href="/match-guides" className="text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white">
            ← Match guides
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70">{g.readTime}</p>
          <h1 className="mt-2 max-w-4xl font-display text-5xl text-white sm:text-6xl">{g.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">{g.subtitle}</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Section title="Match atmosphere" items={g.atmosphere} />
          <Section title="Best viewing locations" items={g.viewing} />
        </div>
        <Section title="Transportation" items={g.transport} />
        <div className="grid gap-8 lg:grid-cols-2">
          <Section title="Hotels nearby" items={g.hotelsNearby} />
          <Section title="Weather" items={g.weather} />
        </div>
        <Section title="Fan recommendations" items={g.fanTips} />
        <div className="flex flex-wrap gap-3">
          <Link href="/hotels/near-stadium" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-zinc-950">
            Hotels near stadium
          </Link>
          <Link href="/sports-bars" className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 dark:border-white/20 dark:text-white">
            Sports bars
          </Link>
        </div>
      </div>
    </article>
  );
}
