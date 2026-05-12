import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Groundline 26 collects and uses your information.",
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
        <p>For requests regarding your data, contact hello@groundline26.com.</p>
      </div>
    </div>
  );
}
