import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Brightway Home Care LLC',
  description: 'Find answers to common questions about Brightway Home Care LLC services, admissions, costs, and care options in Madison, Wisconsin.',
  keywords: 'FAQ, frequently asked questions, adult family home questions, senior care FAQ, Brightway Home Care',
  openGraph: {
    title: 'Frequently Asked Questions | Brightway Home Care LLC',
    description: 'Find answers to common questions about our adult family home services in Madison, WI.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brightway Home Care LLC',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
