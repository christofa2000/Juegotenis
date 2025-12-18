// generated with Cursor — reviewed by Christian Oscar Papa

export function AdultsExpanded() {
	return (
		<div className="bg-surface-50 p-4 rounded-lg border border-surface-200">
			{/* MODALIDAD expandido */}
			<div className="mb-6">
				<h4 className="eyebrow text-brand-600 mb-3">MODALIDAD</h4>
				<ul className="space-y-2 text-text-700">
					<li className="flex items-start gap-2">
						<span className="text-brand-500 text-base mt-0.5">•</span>
						<span className="text-sm">
							<strong>Clases individuales:</strong> Entrenamiento personalizado
							adaptado a tu nivel y objetivos específicos.
						</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-brand-500 text-base mt-0.5">•</span>
						<span className="text-sm">
							<strong>Grupos reducidos de 4 personas:</strong> Ideal para
							principiantes o quienes buscan mejorar en un ambiente social y
							motivador.
						</span>
					</li>
				</ul>
			</div>

			{/* NIVELES expandido */}
			<div>
				<h4 className="eyebrow text-brand-600 mb-3">NIVELES</h4>
				<ul className="space-y-2 text-text-700">
					<li className="flex items-start gap-2">
						<span className="text-brand-500 text-base mt-0.5">•</span>
						<span className="text-sm">Inicial</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-brand-500 text-base mt-0.5">•</span>
						<span className="text-sm">Inicial con experiencia</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-brand-500 text-base mt-0.5">•</span>
						<span className="text-sm">Intermedio</span>
					</li>
					<li className="flex items-start gap-2">
						<span className="text-brand-500 text-base mt-0.5">•</span>
						<span className="text-sm">Avanzado</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

