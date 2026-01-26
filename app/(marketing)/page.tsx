// generated with Cursor — reviewed by Christian Oscar Papa
import dynamic from 'next/dynamic'
import { Header } from '@/components/marketing/header/Header'
import { Hero } from '@/components/marketing/sections/Hero'
import { Tournaments } from '@/components/marketing/sections/Tournaments'
import { About } from '@/components/marketing/sections/About'
import { Footer } from '@/components/marketing/footer/Footer'

// Dynamic imports para componentes below-the-fold (optimización LCP y reducción de JS)
const Classes = dynamic(() => import('@/components/marketing/sections/Classes').then(mod => ({ default: mod.Classes })), {
	loading: () => <div className="bg-surface-0 min-h-[400px]" aria-label="Cargando sección de clases" />,
	ssr: true, // Mantener SSR para SEO
})

// Locations con dynamic import para reducir bundle inicial y postergar carga de Google Maps
const Locations = dynamic(() => import('@/components/marketing/sections/Locations').then(mod => ({ default: mod.Locations })), {
	loading: () => <div className="bg-surface-900 min-h-[400px]" aria-label="Cargando sección de sedes" />,
	ssr: true, // Mantener SSR para SEO
})

// FinalCTA con dynamic import para reducir bundle inicial (react-icons)
const FinalCTA = dynamic(() => import('@/components/marketing/sections/FinalCTA').then(mod => ({ default: mod.FinalCTA })), {
	loading: () => <div className="bg-surface-0 min-h-[300px]" aria-label="Cargando sección de contacto" />,
	ssr: true, // Mantener SSR para SEO
})

export default function MarketingPage() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Classes />
				<Tournaments />
				<About />
				<Locations />
				<FinalCTA />
			</main>
			<Footer />
		</>
	)
}

