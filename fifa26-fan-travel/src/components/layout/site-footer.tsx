import Link from "next/link";
import { SITE } from "@/data/cities";
import { NavBrand } from "@/components/layout/nav-brand";
import { NewsletterForm } from "@/components/newsletter-form";
import { RG } from "@/constants/responsible-gambling";

const social = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@fifa2026guide",
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.14-1.48.69-2.91 1.59-4.07 1.28-1.7 3.34-2.81 5.45-2.9h.06c1.56-.01 3.12.39 4.51 1.11v-3.2c-.81-.34-1.67-.58-2.55-.74-1.05-.19-2.12-.2-3.17-.09-1.85.18-3.63.84-5.12 1.95-1.36 1.02-2.43 2.42-3.07 3.98-.56 1.35-.84 2.81-.85 4.29-.02 1.63.27 3.26.91 4.77 1.17 2.74 3.39 5.05 6.15 5.99 1.75.61 3.65.78 5.49.59 2.21-.22 4.32-1.12 5.96-2.53 1.67-1.44 2.8-3.43 3.16-5.58.1-.68.14-1.37.13-2.06V6.38c1.4.66 2.9 1.08 4.45 1.23V1.63c-.6-.04-1.2-.09-1.8-.11-1.31-.05-2.63-.01-3.94.02z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fifa2026guide",
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <NavBrand compact className="mb-4" />
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
              <Link href="/legal/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal/affiliate-disclosure" className="hover:text-white">
                Affiliate disclosure
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Responsible gambling</p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            {RG.ageDisclaimerUS} {RG.general}
          </p>
          <p className="mt-2 text-xs">
            <a className="text-emerald-500 hover:underline" href={RG.ncpg.url} target="_blank" rel="noopener noreferrer">
              {RG.ncpg.label}
            </a>
            {" · "}
            <a className="text-emerald-500 hover:underline" href={`tel:${RG.ncpg.phone.replace(/\D/g, "")}`}>
              {RG.ncpg.phone}
            </a>
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Social</p>
          <ul className="mt-3 flex flex-col gap-2.5 text-sm sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 no-underline text-zinc-400 transition duration-200 hover:text-emerald-300 hover:[text-shadow:0_0_18px_rgba(110,231,183,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500/60"
                >
                  <span className="text-zinc-500 transition duration-200 group-hover:text-emerald-400/90 [&>svg]:block">
                    {s.icon}
                  </span>
                  <span className="font-medium">{s.label}</span>
                </a>
              </li>
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
        © {new Date().getFullYear()} {SITE.name}. Independent fan publication. Hotel and sportsbook CTAs are partner-funded where disclosed.
      </div>
    </footer>
  );
}
