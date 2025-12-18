// generated with Cursor — reviewed by Christian Oscar Papa
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ButtonProps {
	children: ReactNode
	href?: string
	variant?: 'primary' | 'secondary' | 'whatsapp'
	size?: 'sm' | 'md' | 'lg'
	className?: string
	onClick?: () => void
}

export function Button({
	children,
	href,
	variant = 'primary',
	size = 'md',
	className = '',
	onClick,
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 shadow-sm hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm'

	const sizeStyles = {
		sm: 'h-9 px-4 text-sm',
		md: 'h-11 px-6 text-base',
		lg: 'h-14 px-8 text-lg',
	}

	const variants = {
		primary:
			'bg-brand-500 text-text-50 hover:bg-brand-600 active:bg-brand-700 shadow-brand-500/30',
		secondary:
			'bg-surface-200 text-text-950 hover:bg-surface-300 active:bg-surface-400',
		whatsapp:
			'bg-accent-green text-text-50 hover:bg-accent-green-dark active:bg-accent-green-dark shadow-accent-green/30',
	}

	const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`

	if (href) {
		return (
			<Link 
				href={href} 
				className={combinedClassName}
				aria-label={typeof children === 'string' ? children : undefined}
			>
				{children}
			</Link>
		)
	}

	return (
		<button 
			type="button" 
			onClick={onClick} 
			className={combinedClassName}
			aria-label={typeof children === 'string' ? children : undefined}
		>
			{children}
		</button>
	)
}

