import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Promptopia',
	description: 'Discover & Share AI-Powered Prompts',
}

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>
					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	)
}
