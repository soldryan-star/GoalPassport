import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Find Rentals in Toronto | Toronto Rental Finder Guide",
  description:
    "A practical guide to finding rental apartments and homes in Toronto and the GTA. Learn how to get new listings first, choose areas, and secure viewings.",
  openGraph: {
    title: "How to Find Rentals in Toronto | Toronto Rental Finder Guide",
    description:
      "A practical guide to finding rental apartments and homes in Toronto and the GTA. Get new listings first and secure viewings.",
    url: "/guide",
  },
  alternates: { canonical: "/guide" },
};

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        How to find rentals in Toronto
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        A short guide to getting a head start on the best rental listings in Toronto and the GTA.
      </p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Why new listings matter</h2>
          <p className="mt-2 text-zinc-600">
            In competitive markets like Toronto, the first applicants often get the viewing and the lease. 
            New listings are posted every day; if you hear about them early, you can reply before the crowd 
            and improve your chances of securing a place you like.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-900">How we help</h2>
          <p className="mt-2 text-zinc-600">
            Toronto Rental Finder sends you free email alerts when new rentals match your budget and preferred 
            areas. You sign up once with your criteria (areas, budget, bedrooms, move-in date). When a new 
            listing fits, we notify you so you can view and apply quickly. No cost, no credit card required.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Areas we cover</h2>
          <p className="mt-2 text-zinc-600">
            We cover Toronto and the Greater Toronto Area, including North York, Richmond Hill, Downtown 
            Toronto, Scarborough, Vaughan, Woodbridge, Etobicoke, East York, Aurora, and Newmarket. You can 
            pick one or more areas when you sign up. Each area has its own page with more detail and local FAQs.
          </p>
          <p className="mt-3">
            <Link
              href="/areas"
              className="font-medium text-zinc-900 underline hover:no-underline"
            >
              Browse all rental areas →
            </Link>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Tips for renters</h2>
          <ul className="mt-2 list-inside list-disc space-y-2 text-zinc-600">
            <li>Set a clear budget and stick to it; include utilities and parking if relevant.</li>
            <li>Reply to listings quickly — have your references and proof of employment ready.</li>
            <li>Visit neighbourhoods in person when you can to check transit, noise, and amenities.</li>
            <li>Sign up for alerts in two or three areas to see more options without checking sites daily.</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50/80 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Get free rental alerts</h2>
        <p className="mt-2 text-zinc-600">
          Stop refreshing listing sites. We’ll email you when new rentals match your criteria.
        </p>
        <Link
          href="/#lead-form"
          className="mt-4 inline-block rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Sign up free
        </Link>
      </div>
    </div>
  );
}
