// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from "@/components/marketing/ui/Button";
import Image from "next/image";

export function Tournaments() {
  return (
    <section id="torneos" className="bg-surface-0 relative">
      {/* Sección superior con imagen de fondo */}
      <div className="relative min-h-[70vh] overflow-visible bg-surface-950">
        {/* Imagen de fondo */}
        <Image
          src="/images/torneos.jpg"
          alt="Cancha de tenis con zapatillas, raqueta y pelota"
          fill
          priority
          className="object-contain object-center"
          sizes="100vw"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/50 via-surface-950/40 to-surface-950/60" />

        {/* Logo NUESTROS TORNEOS posicionado en el borde (más grande y más arriba) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] w-full z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative w-full max-w-7xl mx-auto aspect-[3/1] lg:aspect-[4/1]">
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
      </div>

      {/* Contenido inferior sobre fondo blanco */}
      <div className="bg-surface-0 pt-32 pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Título */}
          <h2 className="heading-section mb-12 text-center">
            <span className="text-text-950">VIVÍ LA EMOCIÓN DE </span>
            <span className="text-brand-500">COMPETIR</span>
          </h2>

          {/* Texto en dos columnas */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-6 text-text-700 text-lg leading-relaxed">
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
            <div className="space-y-6 text-text-700 text-lg leading-relaxed">
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
            <Button href="#contacto" variant="primary">
              RESERVA TU CLASE DE PRUEBA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
