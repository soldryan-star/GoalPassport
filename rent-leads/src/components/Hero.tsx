import LeadForm from "./LeadForm";
import SocialProof from "./SocialProof";
import CallToActionButtons from "./CallToActionButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20 lg:py-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
              Get New Rental Listings in Toronto
            </h1>
            <p className="mt-4 text-lg text-zinc-600 sm:text-xl">
              Be the first to know when new rentals hit the market. Sign up for free alerts in your preferred neighbourhoods.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                Get Free Alerts
              </a>
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
          <div id="lead-form" className="scroll-mt-24">
            <LeadForm />
          </div>
        </div>
        <div className="mt-10 lg:hidden">
          <SocialProof />
        </div>
      </div>
    </section>
  );
}
