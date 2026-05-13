import Link from "next/link";
import { cn } from "@/lib/utils";

/** Minimal flight path + wordmark + subtitle for header/footer. */
export function NavBrand({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex shrink-0 flex-col gap-0.5 rounded-sm outline-offset-4 focus-visible:outline focus-visible:ring-2 focus-visible:ring-emerald-500/45",
        className,
      )}
      aria-label="GoalPassport home"
    >
      <svg
        className={cn(
          "shrink-0 text-emerald-400/45",
          compact ? "h-2 w-[5.75rem]" : "h-2.5 w-[6.25rem] sm:h-2.5 sm:w-[7rem]",
        )}
        viewBox="0 0 112 10"
        fill="none"
        aria-hidden
      >
        <path
          d="M0.5 7.5C18 2.5 38 1.5 56 4.75S92 7.25 110 3.75"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          fill="currentColor"
          fillOpacity={0.55}
          d="M103.5 1.2 111 3.75 103.5 6.3 102 3.75z"
        />
      </svg>

      <div className={cn("flex items-baseline gap-px sm:gap-0.5", compact ? "-mt-px" : "-mt-0.5")}>
        <span
          className={cn(
            "font-sans font-semibold tracking-tight text-zinc-100",
            compact ? "text-sm" : "text-[0.95rem] sm:text-base md:text-lg",
          )}
        >
          Goal
        </span>
        <span
          className={cn(
            "font-sans font-bold tracking-tight text-emerald-300",
            compact ? "text-sm" : "text-[0.95rem] sm:text-base md:text-lg",
          )}
        >
          Passport
        </span>
      </div>

      <p
        className={cn(
          "whitespace-nowrap font-semibold uppercase tracking-[0.22em] text-teal-500/50",
          compact ? "text-[8px]" : "text-[9px] sm:text-[10px]",
        )}
      >
        FIFA 2026 FAN TRAVEL
      </p>
    </Link>
  );
}
