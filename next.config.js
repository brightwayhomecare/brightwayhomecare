const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
})

// Security headers for production
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://embed.tawk.to https://va.tawk.to https://*.tawk.to; style-src 'self' 'unsafe-inline' https://embed.tawk.to https://va.tawk.to https://*.tawk.to https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://embed.tawk.to https://*.tawk.to https://fonts.gstatic.com; connect-src 'self' https://embed.tawk.to https://va.tawk.to https://*.tawk.to wss://*.tawk.to; frame-src https://embed.tawk.to https://*.tawk.to; object-src 'none';",
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rewrites for static HTML pages
  async rewrites() {
    return [
      {
        source: '/banner',
        destination: '/banner/index.html',
      },
    ]
  },

  // Security headers
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compress responses
  compress: true,

  // Strict mode for better development
  reactStrictMode: true,

  // Powered by header removal (security)
  poweredByHeader: false,

  // Enable SWC minification for better performance
  swcMinify: true,

  // Production optimization
  productionBrowserSourceMaps: false,

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

module.exports = withPWA(nextConfig)
