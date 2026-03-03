/**
 * SEO Configuration and Utilities
 * Centralized SEO settings for consistent metadata across the application
 */

import { siteConfig } from './config'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.brightwayhomecarellc.com'

export const seoConfig = {
  // Core SEO
  siteName: 'Brightway Home Care LLC',
  siteUrl: baseUrl,
  siteDescription: 'Licensed Adult Family Home providing compassionate, person-centered 24/7 care in a small home setting in Madison, Wisconsin. Specialized care for seniors and adults with dignity and respect.',

  // Business Information
  businessName: 'Brightway Home Care LLC',
  businessType: 'Adult Family Home',
  location: 'Madison, Wisconsin',

  // Keywords (for reference, not used in meta tags anymore)
  primaryKeywords: [
    'Adult Family Home Madison WI',
    'Residential care Madison Wisconsin',
    'Assisted living Madison WI',
    'Small adult family home Madison',
    'Respite care Madison WI',
    '24/7 care Madison Wisconsin',
    'Senior care Madison WI',
    'Elderly care home Madison',
    'Memory care Madison',
    'Personal care assistance Madison',
    'Home care services Wisconsin',
    'Licensed adult family home',
  ],

  // Social Media
  social: {
    twitter: '@brightwayhomecare', // Update with actual handle
    facebook: 'brightwayhomecare', // Update with actual page
  },

  // Default OG Image
  defaultOgImage: `${baseUrl}/images/og-image.jpg`,

  // Canonical URL
  getCanonicalUrl: (path: string = '') => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${baseUrl}${cleanPath}`
  },
}

/**
 * Generate structured data for Local Business
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: seoConfig.siteDescription,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: 180,
      height: 68,
    },
    image: {
      '@type': 'ImageObject',
      url: seoConfig.defaultOgImage,
      width: 1200,
      height: 630,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Insurance, Medicaid, Medicare',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
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
      description: '24/7 Care Available',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Madison',
        containedInPlace: {
          '@type': 'State',
          name: 'Wisconsin',
        },
      },
      {
        '@type': 'City',
        name: 'Dane County',
        containedInPlace: {
          '@type': 'State',
          name: 'Wisconsin',
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Adult Family Home Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Residential Care',
            description: 'Round-the-clock supervision and assistance with daily living activities in a home-like setting.',
            provider: {
              '@type': 'LocalBusiness',
              name: siteConfig.name,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Care Assistance',
            description: 'Compassionate help with bathing, dressing, grooming, and mobility.',
            provider: {
              '@type': 'LocalBusiness',
              name: siteConfig.name,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medication Management',
            description: 'Professional medication administration and monitoring by trained staff.',
            provider: {
              '@type': 'LocalBusiness',
              name: siteConfig.name,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Respite Care',
            description: 'Short-term care to give family caregivers a much-needed break.',
            provider: {
              '@type': 'LocalBusiness',
              name: siteConfig.name,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nutritious Meals',
            description: 'Home-cooked, nutritionally balanced meals prepared with dietary needs in mind.',
            provider: {
              '@type': 'LocalBusiness',
              name: siteConfig.name,
            },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Article/BlogPosting structured data
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
  }
}
