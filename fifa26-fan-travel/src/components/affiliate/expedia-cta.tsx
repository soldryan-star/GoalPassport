import { getExpediaTravelShopOutbound } from "@/lib/affiliate";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-900/25 transition hover:brightness-110",
  secondary:
    "inline-flex w-full items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:text-emerald-200 dark:text-emerald-300",
  compact:
    "inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 py-2.5 text-sm font-bold text-zinc-950 transition hover:brightness-110",
} as const;

export function ExpediaCta({
  label = "Book hotel deals",
  variant = "primary",
  className,
  href,
}: {
  label?: string;
  variant?: keyof typeof variants;
  className?: string;
  href?: string;
}) {
  const { url, monetized } = getExpediaTravelShopOutbound();
  const outbound = href ?? url;

  return (
    <a
      href={outbound}
      target="_blank"
      rel={monetized ? "noopener noreferrer sponsored" : "noopener noreferrer"}
      className={cn(variants[variant], className)}
    >
      {label}
    </a>
  );
}
