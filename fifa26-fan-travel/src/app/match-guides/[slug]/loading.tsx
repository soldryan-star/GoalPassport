import { CardSkeleton } from "@/components/ui/card-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-14 sm:px-6">
      <div className="h-12 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-white/10" />
      <div className="grid gap-5 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
