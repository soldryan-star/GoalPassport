import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GoalPassport collects and uses your information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl text-zinc-900 dark:text-white">Privacy</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          We collect email addresses when you subscribe to our newsletter and basic analytics when you browse our site.
          Data may be processed by Supabase and hosting providers in line with their policies.
        </p>
        <p>You may unsubscribe from marketing emails at any time via the link in each message.</p>
        <p>For requests regarding your data, contact hello@goalpassport.com.</p>

        <h2 className="pt-6 font-display text-2xl text-zinc-900 dark:text-white">Affiliate and partner links</h2>
        <p>
          When you click outbound links to hotel or sportsbook partners, those sites have their own privacy policies. We may
          append UTM or partner parameters so commissions can be attributed. See the{" "}
          <a className="font-medium text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="/legal/affiliate-disclosure">
            affiliate disclosure
          </a>
          .
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">Cookies and tracking scripts</h2>
        <p>
          If you add analytics pixels, ad networks, or affiliate network JavaScript, those tools may set cookies or read device
          identifiers. In the EU, UK, EEA, and several other regions you may need a consent banner and a dedicated cookie policy
          listing each vendor, retention, and lawful basis. Work with counsel and your CMP (consent management platform) vendor
          before enabling third-party scripts in production.
        </p>
        <p>
          Simple outbound links to partners (without embedded trackers) still require clear disclosure but may not trigger the
          same cookie rules — confirm for your traffic mix.
        </p>
      </div>
    </div>
  );
}
