import { cn } from "@/lib/utils";

export function GlassPanel({
  className,
  children,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl",
        "dark:bg-white/[0.04]",
        hover && "transition duration-300 hover:border-emerald-500/30 hover:bg-white/[0.07]",
        className,
      )}
    >
      {children}
    </div>
  );
}
