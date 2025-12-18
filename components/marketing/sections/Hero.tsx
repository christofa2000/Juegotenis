// generated with Cursor — reviewed by Christian Oscar Papa
import Image from 'next/image'
import { Button } from '@/components/marketing/ui/Button'

export function Hero() {
	return (
		<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
			<Image
				src="/images/view-tennis-racket-hitting-ball.jpg"
				alt="Jugador de tenis golpeando la pelota en acción"
				fill
				priority
				className="object-cover"
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-surface-950/50 via-surface-950/40 to-surface-950/60" />
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
				<h1 className="heading-hero mb-12">
					<span className="text-text-50 drop-shadow-2xl">SOMOS </span>
					<span className="text-brand-500 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
						JuegoTenis
					</span>
				</h1>
				<div className="mt-12">
					<Button href="#contacto" variant="primary" size="lg">
						RESERVÁ TU CLASE DE PRUEBA
					</Button>
				</div>
			</div>
		</section>
	)
}

