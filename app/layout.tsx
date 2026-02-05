import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brightway Home Care LLC | Adult Family Home in Madison, WI',
  description: 'Licensed Adult Family Home providing compassionate, person-centered 24/7 care in a small home setting in Madison, Wisconsin.',
  keywords: 'Adult Family Home Madison WI, Residential care Madison Wisconsin, Assisted living Madison WI, Small adult family home Madison, Respite care Madison WI',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Skip link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-800 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
