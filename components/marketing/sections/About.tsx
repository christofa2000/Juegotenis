// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from "@/components/marketing/ui/Button";
import Image from "next/image";

export function About() {
  return (
    <section
      id="quienes-somos"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/cancha.jpg"
        alt="Cancha de tenis"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Título centrado arriba */}
        <div className="mb-6 text-center">
          <h2 className="heading-uppercase flex items-center justify-center gap-4">
            <span className="text-3xl">👥</span>
            <span className="text-text-50">QUIÉNES</span>
            <span className="text-brand-500">SOMOS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen circular a la izquierda */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[28rem] h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/quienes-somos.jpg"
                alt="Equipo de JuegoTenis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 448px, 512px"
                priority
              />
            </div>
          </div>

          {/* Contenido a la derecha */}
          <div className="text-center md:text-left">
            <div className="space-y-6 text-lg text-text-100 mb-12 leading-relaxed">
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
            <div className="flex justify-center">
              <Button href="#contacto" variant="primary">
                RESERVÁ TU CLASE DE PRUEBA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
