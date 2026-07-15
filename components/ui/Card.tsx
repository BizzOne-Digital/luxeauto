import { cn } from "@/lib/utils";

type CardTone = "light" | "dark";

const toneClasses: Record<CardTone, string> = {
  light: "bg-white border border-neutral-200 shadow-card",
  dark: "bg-neutral-900 border border-neutral-800",
};

export function Card({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: CardTone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-auto rounded-2xl p-6 transition-shadow duration-300 md:p-8",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </div>
  );
}
