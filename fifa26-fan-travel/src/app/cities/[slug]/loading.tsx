import { CardSkeleton } from "@/components/ui/card-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-14 sm:px-6">
      <div className="h-32 animate-pulse rounded-2xl bg-zinc-200 dark:bg-white/10" />
      <div className="grid gap-8 lg:grid-cols-2">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
