import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-midnight hover:bg-brand/90",
  secondary: "border border-brand bg-brand/10 text-brand hover:bg-brand hover:text-midnight",
  ghost: "text-brand hover:bg-brand/10",
};

type Common = { variant?: Variant; className?: string; children: ReactNode };

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: Common & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Common & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}