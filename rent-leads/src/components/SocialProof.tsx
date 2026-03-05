const TESTIMONIALS = [
  {
    quote: "I got an alert for a place in North York and viewed it the same day. Signed the lease within a week.",
    name: "Sarah M.",
  },
  {
    quote: "Finally stopped refreshing listing sites. The alerts saved me so much time.",
    name: "James K.",
  },
];

export default function SocialProof() {
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
      <p className="text-center text-sm font-semibold text-zinc-700">
        Join 500+ renters getting new listings first
      </p>
      <div className="mt-4 space-y-4">
        {TESTIMONIALS.map(({ quote, name }) => (
          <blockquote key={name} className="border-l-2 border-zinc-300 pl-4 text-sm text-zinc-600">
            &ldquo;{quote}&rdquo; — <cite className="not-italic font-medium text-zinc-700">{name}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
