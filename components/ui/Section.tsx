import { cn } from "@/lib/utils";

type SectionBg = "light" | "light-alt" | "black" | "red";

const bgClasses: Record<SectionBg, string> = {
  light: "bg-neutral-50 text-neutral-900",
  "light-alt": "bg-white text-neutral-900",
  black: "bg-neutral-950 text-white",
  red: "bg-red-500 text-white",
};

type SectionProps = {
  bg?: SectionBg;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  firstSection?: boolean;
};

export function Section({
  bg = "light",
  className,
  containerClassName,
  children,
  id,
  firstSection = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        firstSection && "pt-32 md:pt-40",
        bgClasses[bg],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-6 md:px-12 lg:px-20",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
