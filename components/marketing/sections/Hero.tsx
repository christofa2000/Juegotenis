// generated with Cursor — reviewed by Christian Oscar Papa
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/view-tennis-racket-hitting-ball.jpg"
        alt="Jugador de tenis golpeando la pelota en acción"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div className="relative w-full max-w-4xl mx-auto aspect-[4/1]">
          <Image
            src="/images/SOMOS-JUEGOTENIS.png"
            alt="SOMOS JuegoTenis"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 768px) 90vw, 800px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
