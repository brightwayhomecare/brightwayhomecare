import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery | Brightway Home Care LLC',
  description: 'View photos of our beautiful adult family home in Madison, Wisconsin. See our comfortable living spaces, dining areas, and outdoor garden.',
  keywords: 'photo gallery, adult family home photos, senior living photos, Brightway Home Care, Madison WI',
  openGraph: {
    title: 'Photo Gallery | Brightway Home Care LLC',
    description: 'View photos of our beautiful adult family home in Madison, Wisconsin.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brightway Home Care LLC',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
