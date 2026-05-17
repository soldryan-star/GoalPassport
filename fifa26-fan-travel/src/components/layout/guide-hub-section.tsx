import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";

export function GuideHubSection({
  title,
  subtitle,
  links,
}: {
  title: string;
  subtitle: string;
  links: { label: string; href: string }[];
}) {
  return (
    <GlassPanel>
      <h2 className="font-display text-2xl text-zinc-900 dark:text-white">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      <ul className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
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
  );
}
