interface AreaGuideSectionProps {
  areaName: string;
  paragraphs: string[];
}

export default function AreaGuideSection({ areaName, paragraphs }: AreaGuideSectionProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50/50 py-16 sm:py-20" aria-labelledby="guide-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="guide-heading" className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Renting in {areaName}
        </h2>
        <div className="mt-6 space-y-4 text-zinc-600">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
