import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brightwayhomecare.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Brightway Home Care LLC | Adult Family Home in Madison, WI',
    template: '%s | Brightway Home Care LLC',
  },
  description: 'Licensed Adult Family Home providing compassionate, person-centered 24/7 care in a small home setting in Madison, Wisconsin.',
  keywords: 'Adult Family Home Madison WI, Residential care Madison Wisconsin, Assisted living Madison WI, Small adult family home Madison, Respite care Madison WI, Senior care Madison, Elderly care Wisconsin',
  authors: [{ name: 'Brightway Home Care LLC' }],
  creator: 'Brightway Home Care LLC',
  publisher: 'Brightway Home Care LLC',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.png',
    apple: '/icons/icon-192x192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Brightway Home Care',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Brightway Home Care LLC',
    title: 'Brightway Home Care LLC | Adult Family Home in Madison, WI',
    description: 'Licensed Adult Family Home providing compassionate, person-centered 24/7 care in a small home setting in Madison, Wisconsin.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brightway Home Care LLC - Adult Family Home in Madison, WI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brightway Home Care LLC | Adult Family Home in Madison, WI',
    description: 'Licensed Adult Family Home providing compassionate, person-centered 24/7 care in Madison, Wisconsin.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code
    // 1. Go to https://search.google.com/search-console
    // 2. Add your property (brightwayhomecare.vercel.app)
    // 3. Choose "HTML tag" verification method
    // 4. Copy the content value and paste below
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#organization`,
  name: 'Brightway Home Care LLC',
  alternateName: 'Brightway Home Care',
  description: 'Licensed Adult Family Home providing compassionate, person-centered 24/7 care in a small home setting in Madison, Wisconsin.',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: '+1-847-745-9930',
  email: 'Brightwayhomecarellc@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3610 Spenser Ln',
    addressLocality: 'Madison',
    addressRegion: 'WI',
    postalCode: '53704',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.1283,
    longitude: -89.3419,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Insurance',
  areaServed: {
    '@type': 'City',
    name: 'Madison',
    containedInPlace: {
      '@type': 'State',
      name: 'Wisconsin',
    },
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Adult Family Home Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Residential Care',
          description: 'Round-the-clock supervision and assistance with daily living activities.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Care Assistance',
          description: 'Help with bathing, dressing, grooming, and mobility.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medication Management',
          description: 'Professional medication administration and monitoring.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Respite Care',
          description: 'Short-term care to give family caregivers a break.',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
