import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons/icon";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-light shadow-[0_8px_24px_-8px_rgba(212,175,55,0.55)]",
  secondary:
    "bg-transparent border border-gold/50 text-cream hover:border-gold hover:bg-gold/10",
  ghost: "bg-transparent text-ink border border-ink/15 hover:border-gold hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && (
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
