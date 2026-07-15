import { cn } from "@/lib/utils";

type BadgeTone = "red" | "black" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  red: "bg-red-500 text-white",
  black: "bg-neutral-900 text-white",
  outline: "bg-white/90 text-neutral-900 border border-neutral-200",
};

export function Badge({
  children,
  tone = "red",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
