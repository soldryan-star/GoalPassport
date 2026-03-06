import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Toronto Rental Finder",
  description: "Thanks for signing up for Toronto rental alerts.",
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Thank you
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        You’re on the list. We’ll email you when new rental listings match your criteria.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800"
        >
          Back to home
        </Link>
        <Link
          href="/areas"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
        >
          Browse areas
        </Link>
      </div>
    </div>
  );
}
