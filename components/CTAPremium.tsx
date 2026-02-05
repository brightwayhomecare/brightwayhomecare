'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Phone,
  Home,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Mail,
  MapPin
} from 'lucide-react'

interface CTAPremiumProps {
  title?: string
  highlightWord?: string
  description?: string
  showEmailCard?: boolean
}

/**
 * Premium CTA Section Component
 * World-class design with gradient backgrounds, animated elements, and glassmorphism cards
 * Reusable across multiple pages (Home, About, Services, etc.)
 */
export default function CTAPremium({
  title = 'Ready to',
  highlightWord = 'Learn More',
  description = 'Contact us today to schedule a tour and see how Brightway Home Care can provide the compassionate support your loved one deserves.',
  showEmailCard = false
}: CTAPremiumProps) {
  return (
    <section className="relative py-24 md:py-32 cta-premium-gradient overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 cta-premium-overlay" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-teal-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-400/15 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse-slow" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-teal-300 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-teal-400/60 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />

      {/* Gradient Ring - Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-20 pointer-events-none">
        <div className="gradient-ring w-full h-full rounded-full border border-teal-400/30" style={{ borderWidth: '1px' }} />
      </div>

      <div className="relative container-max">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Contact Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 transform hover:-translate-y-2 transition-all duration-300 hover:bg-white/15 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg teal-glow group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-teal-300 text-sm font-medium">Call Us</p>
                  <p className="text-white font-bold">+1 (847) 745-9930</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm">Available 24/7 for inquiries</p>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center lg:col-span-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400/20 to-teal-400/10 backdrop-blur-sm text-teal-300 border border-teal-400/30 px-5 py-2.5 rounded-full mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight">
              <span style={{ color: '#ffffff' }}>{title}</span>{' '}
              <span className="relative">
                <span className="text-teal-300">{highlightWord}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="rgba(45, 212, 191, 0.6)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <span style={{ color: '#ffffff' }}>?</span>
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-blue-900 font-bold text-base px-10 py-6 rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-400/25 transform hover:-translate-y-1 transition-all duration-300 shimmer-effect min-w-[220px]">
                <a href="tel:+18477459930" className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call / WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/15 hover:border-white/50 text-base px-10 py-6 rounded-full transform hover:-translate-y-1 transition-all duration-300 min-w-[220px]">
                <Link href="/contact" className="flex items-center justify-center gap-3">
                  Schedule a Tour
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Madison, WI</span>
              </div>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="hidden lg:block">
            {showEmailCard ? (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 transform hover:-translate-y-2 transition-all duration-300 hover:bg-white/15 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm font-medium">Email Us</p>
                    <p className="text-white font-bold text-sm">Brightwayhomecarellc</p>
                  </div>
                </div>
                <p className="text-blue-200 text-sm">@gmail.com</p>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 transform hover:-translate-y-2 transition-all duration-300 hover:bg-white/15 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Home className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm font-medium">Visit Us</p>
                    <p className="text-white font-bold">Madison, WI</p>
                  </div>
                </div>
                <p className="text-blue-200 text-sm">3610 Spenser Ln, 53704</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Contact Cards */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-4">
          <a href="tel:+18477459930" className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg mb-3">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="text-teal-300 text-xs font-medium">Call Us</p>
            <p className="text-white font-bold text-sm">+1 (847) 745-9930</p>
          </a>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg mb-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <p className="text-blue-300 text-xs font-medium">Visit Us</p>
            <p className="text-white font-bold text-sm">Madison, WI</p>
          </div>
        </div>
      </div>
    </section>
  )
}
