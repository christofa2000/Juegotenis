// generated with Cursor — reviewed by Christian Oscar Papa
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      {/* Sección inferior naranja con degradado */}
      <div className="bg-gradient-to-r from-brand-400 to-brand-500 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500 rounded transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              <div className="relative h-16 w-32 transition-opacity duration-300 ease-out hover:opacity-90">
                <Image
                  src="/images/logo-blanco.webp"
                  alt="JuegoTenis"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </Link>

            {/* Navegación */}
            <nav className="flex flex-wrap items-center gap-6 flex-1">
              <Link
                href="#clases"
                className="relative text-white uppercase text-sm font-medium hover:text-brand-200 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500 px-1 py-1 group"
              >
                <span className="relative z-10">CLASES</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link
                href="#torneos"
                className="relative text-white uppercase text-sm font-medium hover:text-brand-200 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500 px-1 py-1 group"
              >
                <span className="relative z-10">TORNEOS</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link
                href="#quienes-somos"
                className="relative text-white uppercase text-sm font-medium hover:text-brand-200 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500 px-1 py-1 group"
              >
                <span className="relative z-10">QUIÉNES SOMOS</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link
                href="#sedes"
                className="relative text-white uppercase text-sm font-medium hover:text-brand-200 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500 px-1 py-1 group"
              >
                <span className="relative z-10">SEDES</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
            </nav>

            {/* Copyright */}
            <p className="text-white text-sm text-center md:text-left md:ml-auto">
              © 2026 JuegoTenis. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
