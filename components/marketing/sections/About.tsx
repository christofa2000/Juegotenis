// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from "@/components/marketing/ui/Button";
import Image from "next/image";

export function About() {
  return (
    <section
      id="quienes-somos"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/cancha.jpg"
        alt="Cancha de tenis"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-surface-950/70" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Título */}
        <div className="mb-10 text-center">
          <h2 className="heading-uppercase flex items-center justify-center gap-4">
            <span className="text-3xl">👥</span>
            <span className="text-text-50">QUIÉNES</span>
            <span className="text-brand-500">SOMOS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen circular */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] lg:w-[32rem] lg:h-[32rem]">
              {/* Círculo */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/quienes-somos.jpg"
                  alt="Equipo de JuegoTenis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 352px, 512px"
                  priority
                />
              </div>

              {/* Pelota abrazando el círculo + animación */}
              <div
                className="
                  absolute bottom-0 right-0 z-20
                  translate-x-[22%] translate-y-[22%]
                  sm:translate-x-[24%] sm:translate-y-[24%]
                  lg:translate-x-[26%] lg:translate-y-[26%]
                  animate-float
                "
              >
                {/* Sombra real */}
                <div className="absolute inset-0 rounded-full blur-xl bg-black/30 translate-y-6 scale-90 -z-10" />

                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56">
                  <Image
                    src="/images/tennis Ball.png"
                    alt="Pelota de tenis"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 160px, 224px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <div className="space-y-6 text-base sm:text-lg text-text-100 mb-12 leading-relaxed">
              <p>
                En <span className="font-bold">JuegoTenis</span> te ayudamos a
                aprender, disfrutar y compartir el tenis desde el primer día.
              </p>
              <p>
                Nuestro equipo diseña clases personalizadas según tu nivel y tus
                objetivos, combinando técnica, movimiento y diversión.
              </p>
              <p>
                Sumate a <span className="font-bold">JuegoTenis</span> y
                descubrí una forma diferente de aprender y disfrutar el tenis.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <Button
                href="https://wa.me/5491123110735"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESERVÁ TU CLASE DE PRUEBA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
