// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from "@/components/marketing/ui/Button";

export function AdultsDetail() {
  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="heading-section text-text-950 mb-12 text-center">
        Clases para Adultos
      </h3>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Niveles */}
        <div className="bg-surface-0 p-8 rounded-xl shadow-lg border border-surface-200">
          <h4 className="eyebrow text-brand-600 mb-6">NIVELES</h4>
          <ul className="space-y-4 text-text-700">
            <li className="flex items-start gap-3">
              <span className="text-brand-500 text-xl mt-0.5">•</span>
              <span className="text-lg">Inicial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-500 text-xl mt-0.5">•</span>
              <span className="text-lg">Intermedio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-500 text-xl mt-0.5">•</span>
              <span className="text-lg">Avanzado</span>
            </li>
          </ul>
        </div>

        {/* Modalidad */}
        <div className="bg-surface-0 p-8 rounded-xl shadow-lg border border-surface-200">
          <h4 className="eyebrow text-brand-600 mb-6">MODALIDAD</h4>
          <ul className="space-y-4 text-text-700">
            <li className="flex items-start gap-3">
              <span className="text-brand-500 text-xl mt-0.5">•</span>
              <span className="text-lg">Clases individuales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-500 text-xl mt-0.5">•</span>
              <span className="text-lg">Grupos reducidos (4 personas)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Button href="#contacto" variant="primary">
          RESERVÁ TU CLASE DE PRUEBA
        </Button>
      </div>
    </div>
  );
}
