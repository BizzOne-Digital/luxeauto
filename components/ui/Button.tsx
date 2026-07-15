import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent border-2 border-current text-inherit hover:bg-white/10",
  ghost: "bg-transparent text-red-500 hover:text-red-600",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 ease-out";

export function Button({
  variant = "primary",
  className,
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
