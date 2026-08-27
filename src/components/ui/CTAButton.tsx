import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-600",
  secondary:
    "bg-primary-900 text-white hover:bg-primary-800 focus-visible:ring-primary-900",
  outline:
    "border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-700",
  ghost:
    "text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-700",
};

/** Variantes para uso em fundos escuros (ex: seção Hero) */
const variantClassesInverted: Record<Variant, string> = {
  primary:
    "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-600",
  secondary:
    "bg-white text-primary-900 hover:bg-primary-50 focus-visible:ring-white",
  outline:
    "border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
  ghost: "text-white hover:bg-white/10 focus-visible:ring-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[36px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold " +
  "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

interface CTAButtonProps {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** true para uso em fundo escuro (Hero, NextEditionSection etc.) */
  inverted?: boolean;
  "aria-label"?: string;
}

export default function CTAButton({
  href,
  external = false,
  onClick,
  type = "button",
  disabled,
  variant = "primary",
  size = "md",
  className = "",
  children,
  inverted = false,
  "aria-label": ariaLabel,
}: CTAButtonProps) {
  const vMap = inverted ? variantClassesInverted : variantClasses;
  const classes = `${baseClasses} ${vMap[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
