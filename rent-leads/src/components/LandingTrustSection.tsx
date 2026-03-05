interface LandingTrustSectionProps {
  areaName?: string;
}

const items = [
  { title: "Free to join", description: "No cost to sign up. Get alerts without commitment." },
  { title: "New listings first", description: "Early access so you can view and apply before the crowd." },
  { title: "Toronto-focused", description: "Listings across North York, Richmond Hill, Downtown and more." },
];

export default function LandingTrustSection({ areaName }: LandingTrustSectionProps) {
  return (
    <section className="border-t border-zinc-200 bg-white py-16 sm:py-20" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="trust-heading" className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
          Why sign up{areaName ? ` for ${areaName} alerts` : ""}?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
          Join renters who get a head start on the best Toronto rentals.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-6 text-center"
            >
              <h3 className="font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
