// generated with Cursor — reviewed by Christian Oscar Papa
import { Header } from '@/components/marketing/header/Header'
import { Hero } from '@/components/marketing/sections/Hero'
import { Classes } from '@/components/marketing/sections/Classes'
import { Tournaments } from '@/components/marketing/sections/Tournaments'
import { About } from '@/components/marketing/sections/About'
import { Locations } from '@/components/marketing/sections/Locations'
import { FinalCTA } from '@/components/marketing/sections/FinalCTA'
import { Footer } from '@/components/marketing/footer/Footer'

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

