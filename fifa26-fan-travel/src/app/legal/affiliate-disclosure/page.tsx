import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Groundline 26 earns from affiliate partnerships.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl text-zinc-900 dark:text-white">Affiliate disclosure</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          Groundline 26 may earn commissions from hotel booking partners, experience marketplaces, and (where permitted)
          sportsbook operators. Clicks on marked affiliate buttons may generate referral revenue at no extra cost to you.
        </p>
        <p>Editorial coverage is independent — partners do not review or approve our guides before publication.</p>
        <p>FIFA World Cup 2026™ is a trademark of FIFA. This site is not affiliated with FIFA.</p>
      </div>
    </div>
  );
}
