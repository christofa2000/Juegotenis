// generated with Cursor — reviewed by Christian Oscar Papa
import type { ReactNode } from 'react'

interface SectionProps {
	id?: string
	title?: string
	subtitle?: string
	variant?: 'light' | 'muted' | 'dark'
	children: ReactNode
	className?: string
}

export function Section({
	id,
	title,
	subtitle,
	variant = 'light',
	children,
	className = '',
}: SectionProps) {
	const variantStyles = {
		light: 'bg-surface-0',
		muted: 'bg-surface-100',
		dark: 'bg-surface-950 text-text-50',
	}

	return (
		<section
			id={id}
			className={`py-16 lg:py-24 ${variantStyles[variant]} ${className}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				{(title || subtitle) && (
					<div className="mb-12 text-center">
						{title && (
							<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
								{title}
							</h2>
						)}
						{subtitle && (
							<p className="text-lg text-text-700 max-w-2xl mx-auto">
								{subtitle}
							</p>
						)}
					</div>
				)}
				{children}
			</div>
		</section>
	)
}



