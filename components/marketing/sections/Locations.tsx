// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from "@/components/marketing/ui/Button";
import Image from "next/image";

const locations = [
  {
    name: "NÚÑEZ",
    address: "Santiago Calzadilla 1350, CABA",
    addressFull:
      "Santiago Calzadilla 1350, C1429AAH Cdad. Autónoma de Buenos Aires, Argentina",
    image: "/images/nuñez.jpg",
    alt: "Cancha de tenis en Núñez con jugadores",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Santiago+Calzadilla+1350,+C1429AAH+Cdad.+Autónoma+de+Buenos+Aires,+Argentina",
  },
  {
    name: "CABALLITO",
    address: "Doblas 1043, CABA",
    addressFull: "Doblas 1043, C1424 Cdad. Autónoma de Buenos Aires, Argentina",
    image: "/images/doblas.jpg",
    alt: "Cancha de tenis en Caballito bajo estructura elevada",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Doblas+1043,+C1424+Cdad.+Autónoma+de+Buenos+Aires,+Argentina",
  },
];

export function Locations() {
  return (
    <section id="sedes" className="relative bg-surface-950">
      {/* Línea naranja superior */}
      <div className="h-1 bg-brand-500" />

      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="heading-uppercase text-brand-500 mb-6 flex items-center justify-center gap-4">
                <span className="text-3xl">📍</span>
                <span>NUESTRAS SEDES</span>
              </h2>
              <p className="text-xl text-text-50 max-w-2xl mx-auto leading-relaxed">
                Dos sedes especialmente diseñadas para mejorar tu rendimiento en
                cada ejercicio, actividad u objetivo que te propongas.
              </p>
            </div>

            {/* Grid de imágenes */}
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location) => (
                <div key={location.name} className="flex flex-col">
                  {/* Imagen */}
                  <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={location.image}
                      alt={location.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Botón con icono */}
                  <div className="flex flex-col items-center gap-3">
                    <Button
                      href={location.mapsUrl}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {location.name}
                    </Button>

                    {/* Dirección */}
                    <p className="text-text-50 text-center">
                      {location.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
