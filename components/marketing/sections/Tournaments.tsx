// generated with Cursor — reviewed by Christian Oscar Papa
import Image from 'next/image'
import { Button } from '@/components/marketing/ui/Button'

export function Tournaments() {
	return (
		<section
			id="torneos"
			className="relative py-20 lg:py-32 overflow-hidden"
		>
			<Image
				src="/images/valentin-balan-k0aVMMZwqtU-unsplash.jpg"
				alt="Zapatilla de tenis, pelota y raqueta en cancha de polvo de ladrillo"
				fill
				className="object-cover"
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-surface-950/75 via-surface-950/70 to-surface-950/80" />
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="heading-uppercase text-text-50 mb-8 drop-shadow-2xl">
						NUESTROS TORNEOS
					</h2>
					<p className="text-xl text-text-100 mb-6 leading-relaxed">
						En JuegoTenis organizamos encuentros y torneos amateurs donde cada
						partido es una oportunidad para superarte.
					</p>
					<p className="text-xl text-text-100 mb-12 leading-relaxed">
						Tomá el guante, da tus primeros pasos en la competencia como el buen
						jugador que sos. Jugando y seguir creciendo, tenemos propuestas para
						todos los niveles.
					</p>
					<Button href="#contacto" variant="primary" size="lg">
						RESERVÁ TU CLASE DE PRUEBA
					</Button>
				</div>
			</div>
		</section>
	)
}

