// generated with Cursor — reviewed by Christian Oscar Papa
import { Button } from '@/components/marketing/ui/Button'

const playStayCourts = [
	{
		color: 'Roja',
		colorToken: 'court-red',
		description:
			'Cancha pequeña adaptada para los más pequeños, con pelotas rojas más lentas.',
	},
	{
		color: 'Naranja',
		colorToken: 'court-orange',
		description:
			'Cancha mediana con pelotas naranjas, ideal para el desarrollo progresivo.',
	},
	{
		color: 'Verde',
		colorToken: 'court-green',
		description:
			'Cancha más grande con pelotas verdes, preparación para el juego completo.',
	},
	{
		color: 'Amarilla',
		colorToken: 'court-yellow',
		description:
			'Cancha completa con pelotas amarillas estándar, nivel avanzado.',
	},
]

export function KidsDetail() {
	return (
		<div className="max-w-5xl mx-auto">
			<h3 className="heading-section text-text-950 mb-6 text-center">
				Método Play & Stay
			</h3>
			<p className="text-center text-lg text-text-700 mb-12 max-w-2xl mx-auto">
				Nuestro sistema progresivo adapta la cancha y la pelota al nivel
				de desarrollo de cada niño.
			</p>

			<div className="mb-12">
				<h4 className="eyebrow text-brand-600 mb-10 text-center">
					CANCHAS PLAY & STAY
				</h4>
				<div className="grid sm:grid-cols-2 gap-6">
					{playStayCourts.map((court) => (
						<div
							key={court.color}
							className="bg-surface-0 p-8 rounded-xl shadow-lg border-l-4 border-surface-200"
							style={{
								borderLeftColor: `var(--color-${court.colorToken})`,
							}}
						>
							<div className="flex items-center gap-4 mb-4">
								<div
									className="w-8 h-8 rounded-full shadow-sm"
									style={{
										backgroundColor: `var(--color-${court.colorToken})`,
									}}
								/>
								<h5 className="text-xl font-bold text-text-950">
									Cancha {court.color}
								</h5>
							</div>
							<p className="text-text-700 leading-relaxed">
								{court.description}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="text-center">
				<Button href="#contacto" variant="primary" size="lg">
					RESERVÁ TU CLASE DE PRUEBA
				</Button>
			</div>
		</div>
	)
}

