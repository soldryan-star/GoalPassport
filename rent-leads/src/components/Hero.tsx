import LeadForm from "./LeadForm";
import SocialProof from "./SocialProof";
import CallToActionButtons from "./CallToActionButtons";
import ScrollToLeadFormLink from "./ScrollToLeadFormLink";

const HOW_IT_WORKS_STEPS = [
  { title: "Sign up free", description: "Enter your details and preferred areas. No credit card required." },
  { title: "Get new listings first", description: "We email you when new rentals match your budget and criteria." },
  { title: "View and apply", description: "Reply quickly to landlords and secure viewings before the crowd." },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20 lg:py-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
              Be first to see new Toronto rentals
            </h1>
            <p className="mt-4 text-lg text-zinc-600 sm:text-xl">
              Be the first to know when new rentals hit the market. Sign up for free alerts in your preferred neighbourhoods.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ScrollToLeadFormLink
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                Get Free Alerts
              </ScrollToLeadFormLink>
              <a
                href="/areas"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                Browse Areas
              </a>
              <CallToActionButtons />
            </div>
            <div className="mt-10 hidden lg:block">
              <SocialProof />
            </div>
          </div>
          {/* How it works replaces the form in the right column */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">How it works</h2>
            <p className="mt-2 text-zinc-600">Three simple steps to get ahead on Toronto rentals.</p>
            <div className="mt-6 space-y-6">
              {HOW_IT_WORKS_STEPS.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-zinc-900">{step.title}</h3>
                    <p className="mt-0.5 text-sm text-zinc-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 lg:hidden">
          <SocialProof />
        </div>
        {/* Form moved down below the grid */}
        <div id="lead-form" className="scroll-mt-24 mt-14 lg:mt-16">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
