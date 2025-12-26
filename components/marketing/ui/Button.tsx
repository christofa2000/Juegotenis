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
    "inline-flex items-center justify-center px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-all rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

  // Estilo unificado: fondo naranja con degradado + texto blanco para primary y secondary
  // WhatsApp: fondo verde + texto blanco
  const variants = {
    primary:
      "bg-gradient-to-r from-brand-300 to-brand-400 text-white hover:from-brand-400 hover:to-brand-500 drop-shadow-lg",
    secondary:
      "bg-gradient-to-r from-brand-300 to-brand-400 text-white hover:from-brand-400 hover:to-brand-500 drop-shadow-lg",
    whatsapp:
      "bg-accent-green text-white hover:bg-accent-green-dark drop-shadow-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Para enlaces externos (http/https), usar <a> directamente
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {children}
        </a>
      );
    }

    // Para enlaces internos, usar Next Link
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
