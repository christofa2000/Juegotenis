// generated with Cursor — reviewed by Christian Oscar Papa
import Image from 'next/image'
import { Button } from '@/components/marketing/ui/Button'

export function About() {
	return (
		<section
			id="quienes-somos"
			className="relative py-20 lg:py-32 overflow-hidden bg-surface-950"
		>
			<Image
				src="/images/quienes-somos.jpg"
				alt="Cancha de tenis con jugador al fondo"
				fill
				className="object-cover opacity-40"
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-surface-950/80" />
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-4xl mx-auto">
					<h2 className="heading-uppercase text-brand-500 mb-10 flex items-center gap-4">
						<span className="text-3xl">👥</span>
						<span>QUIÉNES SOMOS</span>
					</h2>
					<div className="space-y-6 text-xl text-text-100 mb-12 leading-relaxed">
						<p>
							En JuegoTenis te vas a enamorar del tenis y competir el primer
							día.
						</p>
						<p>
							Nuestro equipo diseña clases personalizadas según tu nivel y tus
							objetivos, combinando técnica, movimiento y diversión.
						</p>
						<p>
							Somos JuegoTenis y queremos ser parte de tu crecimiento y
							disfrute del tenis.
						</p>
					</div>
					<Button href="#contacto" variant="primary">
						RESERVÁ TU CLASE DE PRUEBA
					</Button>
				</div>
			</div>
		</section>
	)
}

