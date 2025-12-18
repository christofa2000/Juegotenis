// generated with Cursor — reviewed by Christian Oscar Papa
import type { Metadata } from 'next'
import { lexend } from '@/app/fonts'
import './globals.css'

export const metadata: Metadata = {
	title: 'JuegoTenis - Academia de Tenis en Buenos Aires',
	description:
		'Academia de tenis en Buenos Aires. Clases para adultos, niños y adolescentes. Torneos amateurs.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es" className={lexend.variable}>
			<body className="antialiased">{children}</body>
		</html>
	)
}
