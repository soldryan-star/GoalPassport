"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-4 z-40 sm:left-6",
        "top-[calc(4.5rem+0.5rem)]",
      )}
    >
      <button
        type="button"
        onClick={handleBack}
        className={cn(
          "pointer-events-auto inline-flex items-center gap-2 rounded-xl",
          "border border-white/15 bg-zinc-950/85 px-3 py-2.5 shadow-lg shadow-black/30 backdrop-blur-md",
          "text-sm font-semibold text-zinc-200 transition",
          "hover:border-emerald-500/40 hover:bg-zinc-900 hover:text-white",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500",
        )}
        aria-label="Go back to previous page"
      >
        <svg
          className="h-4 w-4 shrink-0 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Back</span>
      </button>
    </div>
  );
}
