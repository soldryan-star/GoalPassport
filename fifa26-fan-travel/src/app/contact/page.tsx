import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/cities";
import { NewsletterForm } from "@/components/newsletter-form";
import { GlassPanel } from "@/components/ui/glass-panel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GoalPassport for partnerships, press, and reader enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">Contact</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Get in touch</h1>
      <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {SITE.name} is an independent FIFA 2026™ fan travel publication. For partnerships, press, corrections, or general
        enquiries, use the email below. We read every message; response times vary by volume.
      </p>

      <GlassPanel className="mt-10">
        <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Email</h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Partnerships, sponsorships, and business:{" "}
          <a className="font-semibold text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="mailto:hello@goalpassport.com">
            hello@goalpassport.com
          </a>
        </p>
      </GlassPanel>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Legal &amp; policies</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
          <li>
            <Link className="text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="/legal/privacy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="/legal/terms">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              className="text-emerald-600 underline hover:no-underline dark:text-emerald-400"
              href="/legal/affiliate-disclosure"
            >
              Affiliate disclosure
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-zinc-900 dark:text-white">About us</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Learn more about our editorial approach on the{" "}
          <Link className="font-medium text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="/about">
            About
          </Link>{" "}
          page.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Newsletter</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Subscribe for tournament dates, city intel, and product updates — no spam, unsubscribe anytime.
        </p>
        <NewsletterForm className="mt-4 max-w-md" />
      </section>
    </div>
  );
}
