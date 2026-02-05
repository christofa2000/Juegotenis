// generated with Cursor — reviewed by Christian Oscar Papa
import type { Metadata } from 'next'
import { lexend } from '@/app/fonts'
import { defaultMetadata } from '@/lib/seo/metadata'
import './globals.css'

export const metadata: Metadata = {
	...defaultMetadata,
	metadataBase: new URL('https://juegotenis.com'),
	alternates: {
		canonical: '/',
	},
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
