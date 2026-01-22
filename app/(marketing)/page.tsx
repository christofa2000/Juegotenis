// generated with Cursor — reviewed by Christian Oscar Papa
import dynamic from 'next/dynamic'
import { Header } from '@/components/marketing/header/Header'
import { Hero } from '@/components/marketing/sections/Hero'
import { Tournaments } from '@/components/marketing/sections/Tournaments'
import { About } from '@/components/marketing/sections/About'
import { Locations } from '@/components/marketing/sections/Locations'
import { FinalCTA } from '@/components/marketing/sections/FinalCTA'
import { Footer } from '@/components/marketing/footer/Footer'

// Dynamic imports para componentes below-the-fold (optimización LCP)
const Classes = dynamic(() => import('@/components/marketing/sections/Classes').then(mod => ({ default: mod.Classes })), {
	loading: () => <div className="bg-surface-0 min-h-[400px]" aria-label="Cargando sección de clases" />,
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

