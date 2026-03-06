import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import StickyCTA from "@/components/StickyCTA";

const HOME_FAQ = [
  {
    question: "How do alerts work?",
    answer:
      "You sign up with your email and preferred areas (e.g. North York, Downtown Toronto). When new rentals that match your budget and criteria are listed, we email you so you can view and apply before the crowd.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. Signing up is free and there’s no credit card required. We send you new listing alerts at no cost so you can get a head start on the best Toronto rentals.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover Toronto and the GTA, including North York, Richmond Hill, Downtown Toronto, Scarborough, Vaughan, Woodbridge, Etobicoke, East York, Aurora, and Newmarket. You can pick one or more areas when you sign up.",
  },
];

function HomeFAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <HomeFAQJsonLd />
      <Hero />
      <TrustSection />
      <FAQSection items={HOME_FAQ} />
      <StickyCTA />
    </>
  );
}
