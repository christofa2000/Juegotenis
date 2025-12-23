// generated with Cursor — reviewed by Christian Oscar Papa

const playStayCourts = [
  {
    label: "Cancha Roja",
    token: "court-red",
    textColor: "text-text-950",
    description:
      "Cancha pequeña con pelota roja, ideal para niños de 4 a 6 años que están comenzando.",
  },
  {
    label: "Cancha Naranja",
    token: "court-orange",
    textColor: "text-text-950",
    description:
      "Cancha mediana con pelota naranja, perfecta para niños de 7 a 9 años que ya tienen experiencia básica.",
  },
  {
    label: "Cancha Verde",
    token: "court-green",
    textColor: "text-text-950",
    description:
      "Cancha más grande con pelota verde, diseñada para niños de 10 a 12 años que están desarrollando su técnica.",
  },
  {
    label: "Cancha Amarilla",
    token: "court-yellow",
    textColor: "text-text-950",
    description:
      "Cancha de tamaño completo con pelota amarilla estándar, para adolescentes de 13 años en adelante.",
  },
];

export function KidsExpanded() {
  return (
    <div className="space-y-3">
      {playStayCourts.map((court) => {
        const bgColorMap: Record<string, string> = {
          "court-red": "var(--court-red)",
          "court-orange": "var(--court-orange)",
          "court-green": "var(--court-green)",
          "court-yellow": "var(--court-yellow)",
        };

        return (
          <div key={court.label} className="flex flex-col gap-2">
            <span
              className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-semibold w-fit ${court.textColor}`}
              style={{
                backgroundColor: bgColorMap[court.token],
              }}
            >
              {court.label}
            </span>
            <p className="text-sm text-text-700">{court.description}</p>
          </div>
        );
      })}
    </div>
  );
}
