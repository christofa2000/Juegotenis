// generated with Cursor — reviewed by Christian Oscar Papa
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const y = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Ocultar al bajar, mostrar al subir
          if (y > 50 && y > lastScrollY) {
            // Scrolling down
            setIsHidden(true);
          } else if (y < lastScrollY || y <= 50) {
            // Scrolling up o cerca del top
            setIsHidden(false);
          }

          lastScrollY = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set inicial por si carga scrolleado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer click en un link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = ["clases", "torneos", "quienes-somos", "sedes"];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full bg-transparent transition-transform duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20 relative">
            {/* Menú hamburguesa - Mobile */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            {/* Navegación izquierda - Desktop */}
            <nav className="hidden md:flex items-center gap-6 justify-start">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="relative text-sm font-medium uppercase tracking-wide text-text-50 hover:text-brand-300 drop-shadow-md transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded px-1 py-1 group"
                >
                  <span className="relative z-10">{item.replace("-", " ")}</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </Link>
              ))}
            </nav>

            {/* Logo perfectamente centrado */}
            <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <Link
                href="/"
                className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95"
              >
                <div className="relative h-16 w-16 md:h-20 md:w-20 transition-opacity duration-300 ease-out hover:opacity-90">
                  <Image
                    src="/images/logo-blanco.webp"
                    alt="JuegoTenis"
                    fill
                    className="object-contain rounded-full"
                    sizes="(max-width: 768px) 64px, 80px"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* CTA WhatsApp - Siempre visible */}
            <a
              href="https://wa.me/5491123110735"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out rounded-full border-2 bg-brand-500 text-white border-brand-500 hover:bg-brand-600 hover:border-brand-600 hover:-translate-y-0.5 active:translate-y-0 drop-shadow-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <span className="hidden sm:inline">Reservá tu turno</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Menú móvil overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay oscuro */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Menú drawer con fondo oscuro */}
          <nav
            className="fixed top-20 left-4 right-4 bg-surface-950/70 backdrop-blur-md z-40 md:hidden shadow-lg rounded-lg"
            aria-label="Navegación móvil"
          >
            <div className="px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    onClick={handleLinkClick}
                    className="relative text-base font-medium uppercase tracking-wide text-text-50 hover:text-brand-300 drop-shadow-md transition-all duration-300 ease-out py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded px-2 group"
                  >
                    <span className="relative z-10">{item.replace("-", " ")}</span>
                    <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-brand-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
