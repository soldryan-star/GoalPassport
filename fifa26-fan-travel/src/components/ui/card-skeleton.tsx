import { GlassPanel } from "@/components/ui/glass-panel";

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <GlassPanel className={`animate-pulse ${className ?? ""}`}>
      <div className="h-3 w-24 rounded bg-white/10" />
        <div className="mt-4 h-6 w-full max-w-md rounded bg-white/10" />
      <div className="mt-2 h-4 w-full rounded bg-white/5" />
      <div className="mt-2 h-4 w-5/6 rounded bg-white/5" />
    </GlassPanel>
  );
}
