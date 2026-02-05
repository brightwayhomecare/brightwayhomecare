import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Brightway Home Care LLC',
  description: 'Terms and conditions for using Brightway Home Care LLC services. Understand your rights and responsibilities as a client or visitor.',
  keywords: 'terms of service, terms and conditions, legal, Brightway Home Care, adult family home',
  openGraph: {
    title: 'Terms of Service | Brightway Home Care LLC',
    description: 'Terms and conditions for using Brightway Home Care LLC services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brightway Home Care LLC',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
