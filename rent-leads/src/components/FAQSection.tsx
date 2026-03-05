interface FAQSectionProps {
  items: { question: string; answer: string }[];
  areaName?: string;
}

export default function FAQSection({ items, areaName }: FAQSectionProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50/50 py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="faq-heading" className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Frequently asked questions{areaName ? ` about ${areaName} rentals` : ""}
        </h2>
        <dl className="mt-10 space-y-8">
          {items.map(({ question, answer }, i) => (
            <div key={i}>
              <dt className="text-base font-semibold text-zinc-900">{question}</dt>
              <dd className="mt-2 text-zinc-600">{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
