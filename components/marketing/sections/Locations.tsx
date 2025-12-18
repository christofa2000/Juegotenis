// generated with Cursor — reviewed by Christian Oscar Papa
import Image from 'next/image'
import { Button } from '@/components/marketing/ui/Button'

const locations = [
	{
		name: 'Núñez',
		address: 'Delboca 10-20, CABA',
		image: '/images/young-couple-playing-tennis-court.jpg',
		alt: 'Cancha de tenis en Núñez con jugadores',
	},
	{
		name: 'Caballito',
		address: 'Santiago Collardín 1232, CABA',
		image: '/images/erwan-hesry-uJ-OO3aZsSQ-unsplash.jpg',
		alt: 'Cancha de tenis en Caballito bajo estructura elevada',
	},
]

export function Locations() {
	return (
		<section id="sedes" className="py-20 lg:py-28 bg-surface-0">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-5xl mx-auto">
					<h2 className="heading-uppercase text-brand-500 mb-6 text-center flex items-center justify-center gap-4">
						<span className="text-3xl">📍</span>
						<span>NUESTRAS SEDES</span>
					</h2>
					<p className="text-center text-xl text-text-700 mb-16 max-w-2xl mx-auto leading-relaxed">
						Dos sedes especialmente diseñadas para que puedas mejorar tu
						rendimiento en cada ejercicio, actividad u objetivo que te propongas.
					</p>

					<div className="grid md:grid-cols-2 gap-8">
						{locations.map((location) => (
							<div
								key={location.name}
								className="bg-surface-0 rounded-2xl overflow-hidden shadow-xl border border-surface-200 hover:shadow-2xl transition-shadow"
							>
								<div className="relative h-72">
									<Image
										src={location.image}
										alt={location.alt}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
								<div className="p-8 text-center">
									<Button
										variant="primary"
										size="md"
										className="mb-6 rounded-full"
										href="#contacto"
									>
										{location.name}
									</Button>
									<div className="flex items-center justify-center gap-2 text-text-700">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										<p className="text-lg font-medium">{location.address}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

