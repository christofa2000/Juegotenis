// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from "@/components/marketing/ui/Button";
import Image from "next/image";

export function Tournaments() {
  return (
    <section
      id="torneos"
      className="relative h-[100dvh] overflow-hidden scroll-mt-20 grid grid-rows-[30dvh_1fr] min-h-0"
    >
      {/* Fila 1: Banner superior con imagen */}
      <div className="relative min-h-0">
        <Image
          src="/images/torneos.jpg"
          alt="Cancha de tenis con zapatillas, raqueta y pelota"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/25 via-surface-950/20 to-surface-950/30" />
      </div>

      {/* Logo NUESTROS TORNEOS en el medio entre banner y bloque blanco */}
      <div className="absolute top-[30dvh] left-1/2 -translate-x-1/2 -translate-y-[60%] z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto aspect-[3/1] lg:aspect-[4/1] h-[180px] lg:h-[240px] xl:h-[260px]">
            <Image
              src="/images/NUESTROS-TORNEOS.png"
              alt="Nuestros Torneos"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 90vw, 1400px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Fila 2: Bloque blanco inferior con contenido */}
      <div className="bg-surface-0 min-h-0 overflow-y-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex flex-col justify-center pt-12 lg:pt-16 xl:pt-20 pb-4 lg:pb-6">
          {/* Título */}
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6 text-center">
            <span className="text-text-950">VIVÍ LA EMOCIÓN DE </span>
            <span className="text-brand-500">COMPETIR</span>
          </h2>

          {/* Texto en dos columnas */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6 max-w-5xl mx-auto">
            <div className="space-y-3 lg:space-y-4 text-text-700 text-sm lg:text-base leading-relaxed">
              <p>
                En JuegoTenis organizamos encuentros y torneos amateurs donde
                cada partido es una oportunidad para superarte.
              </p>
              <p>
                Tanto si querés dar tus primeros pasos en la competencia como si
                buscás medirte con otros jugadores y seguir creciendo, tenemos
                propuestas para todos los niveles.
              </p>
            </div>
            <div className="space-y-3 lg:space-y-4 text-text-700 text-sm lg:text-base leading-relaxed">
              <p>
                Ofrecemos categorías por nivel, partidos dinámicos y un ambiente
                donde prima el disfrute, el aprendizaje y el espíritu deportivo.
              </p>
              <p>
                Sumate a una experiencia donde el tenis se convierte en pasión,
                los rivales en compañeros y cada encuentro deja un recuerdo
                inolvidable.
              </p>
            </div>
          </div>

          {/* Botón CTA */}
          <div className="flex justify-center">
            <Button
              href="https://wa.me/5491123110735"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-sm px-4 py-2"
            >
              RESERVA TU CLASE DE PRUEBA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
