// generated with Cursor — reviewed by Christian Oscar Papa
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setHasScrolled(y > 50);

      // 👇 si baja más de 80px, desaparece (sin animación)
      setIsHidden(y > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set inicial por si carga scrolleado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isHidden) return null;

  return (
    <header
      className={`fixed top-0 z-50 w-full ${
        hasScrolled
          ? "bg-surface-950/90 backdrop-blur-md border-b border-surface-800/40"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-[1fr_auto_1fr] h-20 items-center">
          {/* Navegación izquierda */}
          <nav className="hidden md:flex items-center gap-6 justify-start">
            {["clases", "torneos", "quienes-somos", "sedes"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  hasScrolled
                    ? "text-text-100 hover:text-brand-300"
                    : "text-text-50 hover:text-brand-300 drop-shadow-md"
                }`}
              >
                {item.replace("-", " ")}
              </Link>
            ))}
          </nav>

          {/* Logo centrado (SOLO LOGO) */}
          <Link
            href="/"
            className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-full"
          >
            <div className="relative h-20 w-20">
              <Image
                src="/images/logo-blanco.webp"
                alt="JuegoTenis"
                fill
                className="object-contain rounded-full"
                sizes="80px"
                priority
              />
            </div>
          </Link>

          {/* CTA WhatsApp derecha (INTACTO) */}
          <div className="hidden md:flex items-center justify-end">
            <a
              href="https://wa.me/549XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-all rounded-full border-2 bg-brand-500 text-white border-brand-500 hover:bg-brand-600 hover:border-brand-600 drop-shadow-lg"
            >
              Reservá tu turno
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
