import Link from "next/link";
import { SITE } from "@/data/cities";
import { NewsletterForm } from "@/components/newsletter-form";

const social = [
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <p className="font-display text-xl text-white">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{SITE.tagline}</p>
          <p className="mt-4 text-xs leading-relaxed text-zinc-500">{SITE.disclaimer}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/cities" className="hover:text-emerald-400">
                Host cities
              </Link>
            </li>
            <li>
              <Link href="/match-guides" className="hover:text-emerald-400">
                Match guides
              </Link>
            </li>
            <li>
              <Link href="/hotels" className="hover:text-emerald-400">
                Hotels
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-emerald-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/legal/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/legal/affiliate-disclosure" className="hover:text-white">
                Affiliate disclosure
              </Link>
            </li>
            <li>
              <Link href="/about#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Social</p>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm">
            {social.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-emerald-400" target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Newsletter</p>
          <p className="mt-2 text-sm">Drop dates, ticket drops, and city intel — no spam, unsubscribe anytime.</p>
          <NewsletterForm className="mt-4" />
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} {SITE.name}. Independent fan publication. Sportsbook integrations flagged when live.
      </div>
    </footer>
  );
}
