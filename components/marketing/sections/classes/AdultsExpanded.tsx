// generated with Cursor — reviewed by Christian Oscar Papa
"use client";

import { useCallback, useId, useState } from "react";

type SectionType = "modalidad" | "niveles" | null;

export function AdultsExpanded() {
  const [openSection, setOpenSection] = useState<SectionType>(null);

  const modalidadId = useId();
  const nivelesId = useId();

  const handleToggle = useCallback((section: Exclude<SectionType, null>) => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  const isModalidadOpen = openSection === "modalidad";
  const isNivelesOpen = openSection === "niveles";

  return (
    <div className="space-y-4">
      {/* MODALIDAD */}
      <div>
        <button
          type="button"
          onClick={() => handleToggle("modalidad")}
          className="w-full flex items-center justify-between py-3 px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          aria-expanded={isModalidadOpen}
          aria-controls={modalidadId}
        >
          <span className="eyebrow text-text-800 font-semibold">MODALIDAD</span>
          <span
            aria-hidden="true"
            className="text-2xl font-bold text-brand-600 w-8 h-8 flex items-center justify-center"
          >
            {isModalidadOpen ? "−" : "+"}
          </span>
        </button>

        {isModalidadOpen && (
          <div
            id={modalidadId}
            className="mt-4"
          >
            <ul className="space-y-4 text-text-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-600 text-base leading-none">
                  •
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-text-900">
                    Clases Individuales
                  </p>
                  <p className="text-sm leading-relaxed">
                    Entrenamientos personalizados, orientados a tu nivel y tus
                    objetivos. Perfectas para avanzar rápido, perfeccionar
                    técnica específica o retomar el deporte después de un
                    tiempo.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-600 text-base leading-none">
                  •
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-text-900">
                    Grupos reducidos de 4 personas
                  </p>
                  <p className="text-sm leading-relaxed">
                    Ideales tanto para quienes quieren iniciarse en el deporte
                    como para quienes buscan mejorar su juego.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* NIVELES */}
      <div>
        <button
          type="button"
          onClick={() => handleToggle("niveles")}
          className="w-full flex items-center justify-between py-3 px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          aria-expanded={isNivelesOpen}
          aria-controls={nivelesId}
        >
          <span className="eyebrow text-text-800 font-semibold">NIVELES</span>
          <span
            aria-hidden="true"
            className="text-2xl font-bold text-brand-600 w-8 h-8 flex items-center justify-center"
          >
            {isNivelesOpen ? "−" : "+"}
          </span>
        </button>

        {isNivelesOpen && (
          <div
            id={nivelesId}
            className="mt-4"
          >
            <ul className="space-y-2 text-text-700">
              {[
                "Inicial",
                "Inicial con experiencia",
                "Intermedio",
                "Avanzado",
              ].map((lvl) => (
                <li key={lvl} className="flex items-start gap-3">
                  <span className="mt-1 text-brand-600 text-base leading-none">
                    •
                  </span>
                  <span className="text-sm leading-relaxed">{lvl}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
