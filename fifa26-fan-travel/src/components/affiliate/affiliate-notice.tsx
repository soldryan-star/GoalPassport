import Link from "next/link";

export function AffiliateNotice({ className }: { className?: string }) {
  return (
    <p
      className={`text-xs leading-relaxed text-zinc-500 dark:text-zinc-500 ${className ?? ""}`}
    >
      We may earn a commission when you book through partner links — at no extra cost to you.{" "}
      <Link href="/legal/affiliate-disclosure" className="font-medium text-emerald-600 underline hover:no-underline dark:text-emerald-400">
        Affiliate disclosure
      </Link>
      .
    </p>
  );
}
