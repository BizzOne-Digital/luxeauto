import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow mb-4", className)}>{children}</p>;
}

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl md:leading-snug lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl md:leading-snug",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "font-heading text-2xl font-semibold leading-snug md:text-3xl",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "font-heading text-xl font-semibold leading-snug md:text-2xl",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function Body({
  children,
  className,
  muted = false,
}: {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <p
      className={cn(
        "font-body leading-relaxed md:leading-8",
        muted && "text-neutral-500",
        className
      )}
    >
      {children}
    </p>
  );
}
