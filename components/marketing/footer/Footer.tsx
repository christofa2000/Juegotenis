// generated with Cursor — reviewed by Christian Oscar Papa
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-500 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y nombre */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 text-text-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 rounded-lg p-1 mb-4"
            >
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/images/LOGO.jpg"
                  alt="JuegoTenis Logo"
                  fill
                  className="object-contain rounded-full"
                  sizes="48px"
                />
              </div>
              <span className="text-2xl font-bold">JuegoTenis</span>
            </Link>
            <p className="text-text-100 text-sm">
              Academia de tenis en Buenos Aires. Clases para todos los niveles.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-text-50 font-semibold mb-4">Navegación</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="#clases"
                className="text-text-100 hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded px-2"
              >
                CLASES
              </Link>
              <Link
                href="#torneos"
                className="text-text-100 hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded px-2"
              >
                TORNEOS
              </Link>
              <Link
                href="#quienes-somos"
                className="text-text-100 hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded px-2"
              >
                QUIÉNES SOMOS
              </Link>
              <Link
                href="#sedes"
                className="text-text-100 hover:text-brand-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded px-2"
              >
                SEDES
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-text-50 font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-text-100 text-sm">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p>Núñez: Delboca 10-20, CABA</p>
                  <p>Caballito: Santiago Collardín 1232, CABA</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Lun-Vie: 8:00hs - 21:00hs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-400/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-100 text-sm">
            © 2023 JuegoTenis. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://tiktok.com/@juegotenis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center hover:bg-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              aria-label="Síguenos en TikTok"
            >
              <span className="text-lg">🎵</span>
            </a>
            <a
              href="https://instagram.com/juegotenis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center hover:bg-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              aria-label="Síguenos en Instagram"
            >
              <span className="text-lg">📷</span>
            </a>
            <a
              href="https://facebook.com/juegotenis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center hover:bg-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              aria-label="Síguenos en Facebook"
            >
              <span className="text-lg">👤</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
