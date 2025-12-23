// generated with Cursor — reviewed by Christian Oscar Papa
"use client";

import { useCallback, useState } from "react";
import { AdultsExpanded } from "./classes/AdultsExpanded";
import { ClassesCard } from "./classes/ClassesCard";
import { KidsExpanded } from "./classes/KidsExpanded";

type CardType = "adults" | "kids";

export function Classes() {
  const [activeCard, setActiveCard] = useState<CardType | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRowClick = useCallback(
    (type: CardType, _row: string) => {
      // Si se hace click en el mismo tipo que está activo, toggle el estado
      if (activeCard === type && isExpanded) {
        setIsExpanded(false);
        setActiveCard(null);
      } else {
        // Si es un tipo diferente o está cerrado, abrir y cambiar la card activa
        setActiveCard(type);
        setIsExpanded(true);
      }
    },
    [activeCard, isExpanded]
  );

  return (
    <section id="clases" className="bg-surface-0">
      <div className="grid md:grid-cols-2">
        <ClassesCard
          type="adults"
          title="ADULTOS"
          imageSrc="/images/adultos.jpg"
          imageAlt="Pareja adulta jugando tenis en la cancha"
          description="Clases diseñadas para adultos de todos los niveles. Mejorá tu técnica, desarrollá tu juego y disfrutá del tenis en un ambiente amigable y profesional."
          activeCard={activeCard}
          onRowClick={handleRowClick}
          isPreview={false}
          expandedContent={<AdultsExpanded />}
        />

        <ClassesCard
          type="kids"
          title="NIÑOS & ADOLESCENTES"
          imageSrc="/images/sideways-kids-playing-doubles-tennis.jpg"
          imageAlt="Niños jugando tenis en la cancha"
          description="Escuela infantil de tenis con una metodología sólida y adaptada a cada edad. Utilizamos el método 'Play and Stay', que adapta la pelota y cancha según el desarrollo del niño."
          activeCard={activeCard}
          onRowClick={handleRowClick}
          isPreview={false}
          expandedContent={
            activeCard === "kids" && isExpanded ? <KidsExpanded /> : undefined
          }
        />
      </div>
    </section>
  );
}
