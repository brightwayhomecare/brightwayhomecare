// Site configuration - centralized business information
// These values can be overridden by environment variables

export const siteConfig = {
  // Business Information
  name: 'Brightway Home Care LLC',
  shortName: 'Brightway',
  tagline: 'Compassionate Care in a Home Setting',
  description: 'Licensed Adult Family Home providing compassionate, person-centered 24/7 care in a small home setting in Madison, Wisconsin.',

  // Contact Information
  phone: process.env.NEXT_PUBLIC_PHONE || '+1 (847) 745-9930',
  phoneRaw: process.env.NEXT_PUBLIC_PHONE_RAW || '+18477459930',
  email: process.env.NEXT_PUBLIC_EMAIL || 'Brightwayhomecarellc@gmail.com',

  // Address
  address: {
    street: process.env.NEXT_PUBLIC_ADDRESS_STREET || '3610 Spenser Ln',
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || 'Madison',
    state: process.env.NEXT_PUBLIC_ADDRESS_STATE || 'WI',
    zip: process.env.NEXT_PUBLIC_ADDRESS_ZIP || '53704',
    full: process.env.NEXT_PUBLIC_ADDRESS || '3610 Spenser Ln, Madison, WI 53704',
  },

  // URLs
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://brightwayhomecare.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/18477459930',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.123456789!2d-89.123456!3d43.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3610+Spenser+Ln%2C+Madison%2C+WI+53704!5e0!3m2!1sen!2sus!4v1234567890',

  // Social Media (add as needed)
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  },

  // Business Details
  foundedYear: 2024,
  license: 'Wisconsin Licensed Adult Family Home',

  // SEO
  keywords: [
    'Adult Family Home Madison WI',
    'Residential care Madison Wisconsin',
    'Assisted living Madison WI',
    'Small adult family home Madison',
    'Respite care Madison WI',
    '24/7 care Madison Wisconsin',
    'Senior care Madison WI',
    'Elderly care home Madison',
  ],
} as const

// Type for the config
export type SiteConfig = typeof siteConfig
