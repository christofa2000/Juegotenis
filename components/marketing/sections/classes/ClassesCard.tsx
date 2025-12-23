// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from "@/components/marketing/ui/Button";
import Image from "next/image";
import type { ReactNode } from "react";

interface ClassesCardProps {
  type: "adults" | "kids";
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  activeCard: "adults" | "kids" | null;
  onRowClick: (type: "adults" | "kids", row: string) => void;
  isPreview?: boolean;
  expandedContent?: ReactNode;
}

export function ClassesCard({
  type,
  title,
  imageSrc,
  imageAlt,
  description,
  activeCard,
  onRowClick,
  isPreview = false,
  expandedContent,
}: ClassesCardProps) {
  const isActive = activeCard === type;
  const isExpanded = isActive && !isPreview;

  // Renglones para Niños (adultos maneja sus propios botones internos)
  const kidsRows = [{ key: "canchas", label: "CANCHAS PLAY & STAY" }];

  const rows = type === "kids" ? kidsRows : [];

  return (
    <div className="bg-surface-0">
      {/* Imagen con overlay y título */}
      <div className="relative h-[300px] lg:h-[350px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/60 via-surface-950/50 to-surface-950/70 flex items-center justify-center">
          <h2 className="heading-uppercase text-text-50 drop-shadow-2xl text-center px-4">
            {title}
          </h2>
        </div>
      </div>

      {/* Cuerpo de la card */}
      <div className="p-6 lg:p-8 container mx-auto max-w-2xl">
        {/* Descripción */}
        <p className="text-text-700 mb-6 leading-relaxed">{description}</p>

        {/* Renglones de metadatos */}
        {type === "adults" ? (
          /* Para adultos, mostrar siempre el contenido expandido */
          <div className="mb-6">
            {expandedContent && <div>{expandedContent}</div>}
          </div>
        ) : (
          /* Para niños, mostrar botones individuales */
          <div className="space-y-3 mb-6">
            {rows.map((row) => {
              const icon = isExpanded ? "−" : "+";

              return (
                <div key={row.key}>
                  <button
                    type="button"
                    onClick={() => onRowClick(type, row.key)}
                    className="w-full flex items-center justify-between py-3 px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    aria-expanded={isExpanded}
                    aria-label={
                      isExpanded
                        ? `Ocultar ${row.label}`
                        : `Mostrar ${row.label}`
                    }
                  >
                    <span className="eyebrow text-text-800 font-semibold">
                      {row.label}
                    </span>
                    <span className="text-2xl font-bold text-brand-600 w-8 h-8 flex items-center justify-center">
                      {icon}
                    </span>
                  </button>
                  {/* Contenido expandido debajo del renglón */}
                  {isExpanded && expandedContent && (
                    <div className="mt-4">{expandedContent}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Botón CTA */}
        <div className="flex justify-center">
          <Button href="#contacto" variant="primary">
            RESERVÁ TU CLASE DE PRUEBA
          </Button>
        </div>
      </div>
    </div>
  );
}
