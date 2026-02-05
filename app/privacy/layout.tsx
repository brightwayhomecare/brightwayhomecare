import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Brightway Home Care LLC',
  description: 'Learn how Brightway Home Care LLC protects your privacy and handles your personal information. Our commitment to data security and your rights.',
  keywords: 'privacy policy, data protection, personal information, HIPAA, Brightway Home Care',
  openGraph: {
    title: 'Privacy Policy | Brightway Home Care LLC',
    description: 'Learn how Brightway Home Care LLC protects your privacy and handles your personal information.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brightway Home Care LLC',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
