const STEPS = [
  {
    title: "Sign up free",
    description: "Enter your details and preferred areas. No credit card required.",
  },
  {
    title: "Get new listings first",
    description: "We email you when new rentals match your budget and criteria.",
  },
  {
    title: "View and apply",
    description: "Reply quickly to landlords and secure viewings before the crowd.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-zinc-200 bg-white py-16 sm:py-20" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="how-it-works-heading" className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
          How it works
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
          Three simple steps to get ahead on Toronto rentals.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
