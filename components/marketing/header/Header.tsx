// generated with Cursor — reviewed by Christian Oscar Papa
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/marketing/ui/Button'

export function Header() {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-300 ${
				hasScrolled
					? 'bg-surface-950/98 backdrop-blur-md border-b border-surface-800/50'
					: 'bg-transparent'
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="grid grid-cols-[1fr_auto_1fr] h-20 items-center gap-4">
					{/* Navegación izquierda */}
					<nav className="hidden md:flex items-center gap-6 justify-start">
						<Link
							href="#clases"
							className={`font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded px-3 py-2 ${
								hasScrolled
									? 'text-text-100 hover:text-brand-300'
									: 'text-text-50 hover:text-brand-300 drop-shadow-md'
							}`}
						>
							CLASES
						</Link>
						<Link
							href="#torneos"
							className={`font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded px-3 py-2 ${
								hasScrolled
									? 'text-text-100 hover:text-brand-300'
									: 'text-text-50 hover:text-brand-300 drop-shadow-md'
							}`}
						>
							TORNEOS
						</Link>
						<Link
							href="#quienes-somos"
							className={`font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded px-3 py-2 ${
								hasScrolled
									? 'text-text-100 hover:text-brand-300'
									: 'text-text-50 hover:text-brand-300 drop-shadow-md'
							}`}
						>
							QUIÉNES SOMOS
						</Link>
						<Link
							href="#sedes"
							className={`font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded px-3 py-2 ${
								hasScrolled
									? 'text-text-100 hover:text-brand-300'
									: 'text-text-50 hover:text-brand-300 drop-shadow-md'
							}`}
						>
							SEDES
						</Link>
					</nav>

					{/* Logo centrado */}
					<Link
						href="/"
						className="flex items-center gap-3 justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-lg p-1"
					>
						<div className="flex items-center gap-2">
							<div className="relative h-12 w-12 flex-shrink-0">
								<Image
									src="/images/LOGO.jpg"
									alt="JuegoTenis Logo"
									fill
									className="object-contain rounded-full"
									sizes="48px"
								/>
							</div>
							<span
								className={`text-xl font-bold transition-colors ${
									hasScrolled ? 'text-text-50' : 'text-text-50 drop-shadow-lg'
								}`}
							>
								JuegoTenis
							</span>
						</div>
					</Link>

					{/* CTA derecha */}
					<div className="hidden md:flex items-center justify-end">
						<Button
							href="#contacto"
							variant="primary"
							size="md"
						>
							RESERVÁ TU TURNO
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

