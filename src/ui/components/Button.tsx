import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
}

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 h-11 text-sm font-medium tracking-tight transition-all duration-300 will-change-transform";

const variantClass: Record<Variant, string> = {
  primary:
    "text-[#0e1014] shadow-[0_8px_30px_rgba(245,199,56,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(245,199,56,0.55)] active:translate-y-0",
  ghost:
    "text-current border hover:-translate-y-0.5 active:translate-y-0",
};

const variantStyle: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, #f5c738 0%, #ef8f45 100%)",
  },
  ghost: {
    borderColor: "var(--color-line)",
    background: "transparent",
  },
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${baseClass} ${variantClass[variant]} ${className ?? ""}`}
      style={{ ...variantStyle[variant], ...(rest.style ?? {}) }}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...rest
}: LinkProps) {
  return (
    <a
      {...rest}
      className={`${baseClass} ${variantClass[variant]} ${className ?? ""}`}
      style={{ ...variantStyle[variant], ...(rest.style ?? {}) }}
    >
      {children}
    </a>
  );
}
