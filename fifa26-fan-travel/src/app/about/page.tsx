import type { Metadata } from "next";
import { NewsletterForm } from "@/components/newsletter-form";
import { GlassPanel } from "@/components/ui/glass-panel";

export const metadata: Metadata = {
  title: "About",
  description: "GoalPassport is an independent FIFA 2026™ fan travel and entertainment publication.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">About</p>
      <h1 className="mt-2 font-display text-5xl text-zinc-900 dark:text-white">Built for traveling fans</h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        GoalPassport blends ESPN-grade logistics with Bleacher Report tone and travel-guide utility — optimised for the
        vertical-video generation who still read when flights are delayed.
      </p>
      <GlassPanel className="mt-10">
        <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Editorial standards</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
          <li>Affiliate relationships are disclosed on every monetised page.</li>
          <li>Hotel pricing shown as placeholders until live partner feeds connect.</li>
          <li>Sportsbook integrations will launch only where legally compliant.</li>
        </ul>
      </GlassPanel>
      <section id="contact" className="mt-12">
        <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Contact</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Partnerships:{" "}
          <a className="text-emerald-600 underline dark:text-emerald-400" href="mailto:hello@goalpassport.com">
            hello@goalpassport.com
          </a>
        </p>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl text-zinc-900 dark:text-white">Newsletter</h2>
        <NewsletterForm className="mt-4 max-w-md" />
      </section>
    </div>
  );
}
