// generated with Cursor — reviewed by Christian Oscar Papa
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  target,
  rel,
}: ButtonProps) {
  // Estilo base exacto del botón del Header
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-all rounded-full border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

  // Estilo unificado: fondo naranja + texto blanco para primary y secondary
  // WhatsApp: fondo verde + texto blanco
  const variants = {
    primary:
      "bg-brand-500 text-white border-brand-500 hover:bg-brand-600 hover:border-brand-600 drop-shadow-lg",
    secondary:
      "bg-brand-500 text-white border-brand-500 hover:bg-brand-600 hover:border-brand-600 drop-shadow-lg",
    whatsapp:
      "bg-accent-green text-white border-accent-green hover:bg-accent-green-dark hover:border-accent-green-dark drop-shadow-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        target={target}
        rel={rel}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClassName}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </button>
  );
}
