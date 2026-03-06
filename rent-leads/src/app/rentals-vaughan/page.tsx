import type { Metadata } from "next";
import Link from "next/link";
import { requireRentalAreaByPath } from "@/lib/rental-areas";
import LeadForm from "@/components/LeadForm";
import CallToActionButtons from "@/components/CallToActionButtons";
import LandingTrustSection from "@/components/LandingTrustSection";
import FAQSection from "@/components/FAQSection";
import HowItWorks from "@/components/HowItWorks";
import AreaGuideSection from "@/components/AreaGuideSection";
import SocialProof from "@/components/SocialProof";

const AREA_PATH = "/rentals-vaughan";

const content = requireRentalAreaByPath(AREA_PATH);

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://torontorentalfinder.com"),
  title: content.meta.title,
  description: content.meta.description,
  keywords: content.meta.keywords,
  alternates: { canonical: content.meta.canonicalPath },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: content.meta.canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
  },
  robots: "index, follow",
};

export default function RentalsVaughanPage() {
  return (
    <article>
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
                {content.headline}
              </h1>
              <p className="mt-4 text-lg text-zinc-600 sm:text-xl">
                {content.description}
              </p>
              <div className="mt-8">
                <CallToActionButtons />
              </div>
            </div>
            <div id="lead-form" className="scroll-mt-24">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-12 sm:px-6">
        <div className="mx-auto max-w-6xl px-4">
          <SocialProof />
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-16 sm:py-20" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="benefits-heading" className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
            Why rent in {content.name}?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.benefits.map(({ title, description }) => (
              <div key={title} className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
                <h3 className="font-semibold text-zinc-900">{title}</h3>
                <p className="mt-2 text-zinc-600">{description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="#lead-form" className="font-medium text-zinc-900 underline hover:no-underline">
              Get free {content.name} rental alerts →
            </Link>
          </p>
        </div>
      </section>

      <HowItWorks />
      <AreaGuideSection areaName={content.name} paragraphs={content.guideParagraphs} />
      <LandingTrustSection areaName={content.name} />
      <FAQSection items={content.faq} areaName={content.name} />
    </article>
  );
}
