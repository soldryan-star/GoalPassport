import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How GoalPassport earns from affiliate partnerships.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl text-zinc-900 dark:text-white">Affiliate disclosure</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          GoalPassport may earn commissions from hotel booking partners, experience marketplaces, and (where permitted)
          sportsbook operators. Clicks on marked affiliate buttons may generate referral revenue at no extra cost to you.
        </p>
        <p>Editorial coverage is independent — partners do not review or approve our guides before publication.</p>
        <p>FIFA World Cup 2026™ is a trademark of FIFA. This site is not affiliated with FIFA.</p>

        <h2 className="pt-6 font-display text-2xl text-zinc-900 dark:text-white">Not legal advice</h2>
        <p>
          This page and the site’s affiliate features are for transparency only. They are not a substitute for qualified legal
          counsel. Laws for advertising, gambling, privacy, and consumer protection differ by country, state, and province.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">Before you earn on hotels</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Join an official partner program (e.g. Booking.com, Expedia, Hotels.com) and use the link formats they authorize.</li>
          <li>Store partner IDs and URLs in environment variables — never commit secrets to git.</li>
          <li>
            Label paid links clearly (we use “partner site” and{" "}
            <code className="rounded bg-zinc-200 px-1 text-zinc-800 dark:bg-white/10 dark:text-zinc-200">{"rel=\"sponsored\""}</code>{" "}
            where applicable).
          </li>
          <li>Confirm FTC (US), Competition Bureau (Canada), and COFECE / PROFECO-style rules (Mexico) with counsel if you target those markets.</li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">Before you earn on sports betting</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-zinc-800 dark:text-zinc-200">Engage counsel</strong> for every jurisdiction where the site is visible or where you buy ads. Sports-betting affiliates are heavily regulated (often by state in the US).
          </li>
          <li>Apply to licensed operators’ affiliate programs; use only approved creatives and tracking links.</li>
          <li>
            Replace self-attestation geo gates with counsel-approved methods (e.g. IP-based geo, state allowlists, and age verification) before scaling paid traffic.
          </li>
          <li>Publish responsible-gambling resources and required disclaimers; never target minors.</li>
          <li>Do not imply an official FIFA or World Cup partnership when promoting betting offers.</li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">Pre-launch checklist (site operators)</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Written legal review for hotel affiliates in target markets.</li>
          <li>Separate written sign-off for sportsbook marketing and affiliate disclosures.</li>
          <li>Cookie / consent banner if you load ad networks, analytics, or partner scripts that set non-essential cookies.</li>
          <li>Privacy policy updated to list affiliate partners and data flows.</li>
          <li>Advertising platform policies (Google, Meta, etc.) if you run paid gambling campaigns.</li>
        </ol>
      </div>
    </div>
  );
}
