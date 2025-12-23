// generated with Cursor — reviewed by Christian Oscar Papa
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      {/* Sección inferior naranja */}
      <div className="bg-brand-500 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500"
            >
              <div className="relative h-16 w-32">
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
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="#clases"
                className="text-white uppercase text-sm font-medium hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500"
              >
                CLASES
              </Link>
              <Link
                href="#torneos"
                className="text-white uppercase text-sm font-medium hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500"
              >
                TORNEOS
              </Link>
              <Link
                href="#quienes-somos"
                className="text-white uppercase text-sm font-medium hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500"
              >
                QUIÉNES SOMOS
              </Link>
              <Link
                href="#sedes"
                className="text-white uppercase text-sm font-medium hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500"
              >
                SEDES
              </Link>
            </nav>

            {/* Copyright */}
            <p className="text-white text-sm">
              © 2025 JuegoTenis. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
