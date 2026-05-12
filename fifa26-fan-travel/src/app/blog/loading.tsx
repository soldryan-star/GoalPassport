import { CardSkeleton } from "@/components/ui/card-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-14 sm:px-6">
      <div className="h-4 w-32 animate-pulse rounded bg-zinc-200 dark:bg-white/10" />
      <div className="h-12 w-2/3 max-w-md animate-pulse rounded bg-zinc-200 dark:bg-white/10" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
