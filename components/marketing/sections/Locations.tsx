// generated with Cursor — reviewed by Christian Oscar Papa
"use client";

import { useState } from "react";
import { Button } from "@/components/marketing/ui/Button";
import Image from "next/image";

// Helper para generar URL de embed de Google Maps desde dirección
// Nota: Para obtener la URL de embed correcta, ir a Google Maps, buscar la dirección,
// hacer clic en "Compartir" > "Insertar un mapa" y copiar la URL del iframe
const getMapsEmbedUrl = (address: string): string => {
  const encodedAddress = encodeURIComponent(address);
  // Usar formato de embed estándar con búsqueda por dirección
  // Esto funciona pero puede requerir interacción del usuario para cargar completamente
  return `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
};

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
  // Estado para rastrear qué mapas se han cargado (solo se cargan en hover)
  const [loadedMaps, setLoadedMaps] = useState<Set<string>>(new Set());

  const handleMapHover = (locationName: string) => {
    // Solo cargar el mapa si no se ha cargado antes
    if (!loadedMaps.has(locationName)) {
      setLoadedMaps((prev) => new Set(prev).add(locationName));
    }
  };

  return (
    <section id="sedes" className="relative bg-surface-900 scroll-mt-20">
      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="heading-uppercase mb-6 flex items-center justify-center gap-4">
                <span className="text-3xl">📍</span>
                <span className="text-text-50">NUESTRAS</span>
                <span className="text-brand-500">SEDES</span>
              </h2>
              <p className="text-base text-text-50 max-w-2xl mx-auto leading-relaxed">
                Dos sedes especialmente diseñadas para mejorar tu rendimiento en
                cada ejercicio, actividad u objetivo que te propongas.
              </p>
            </div>

            {/* Grid de imágenes */}
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {locations.map((location) => (
                <div key={location.name} className="flex flex-col">
                  {/* Contenedor imagen/mapa con hover - solo desktop */}
                  <div
                    className="location-hover-container relative h-[320px] w-full rounded-[4rem] overflow-hidden mb-6"
                    onMouseEnter={() => handleMapHover(location.name)}
                  >
                    {/* Imagen - siempre visible, fade out en hover (solo desktop) */}
                    <div className="location-image absolute inset-0 transition-all duration-300 ease-out">
                      <Image
                        src={location.image}
                        alt={location.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {/* Mapa - solo visible en desktop hover, oculto en mobile */}
                    {/* Solo renderizar iframe si el mapa ha sido cargado (hover) */}
                    {loadedMaps.has(location.name) && (
                      <div className="location-map hidden md:block absolute inset-0 opacity-0 scale-95 transition-all duration-300 ease-out pointer-events-none">
                        <iframe
                          src={getMapsEmbedUrl(location.addressFull)}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full"
                          title={`Mapa de ${location.name}`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Botón con icono */}
                  <div className="flex flex-col items-center gap-3">
                    <Button
                      href={location.mapsUrl}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base px-6 py-3 !text-text-950 font-black"
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
                    <p className="text-text-50 text-center text-sm">
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
