'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Home,
  ArrowLeft,
  Phone,
  Search,
  MapPin,
  Heart,
  HelpCircle,
  FileText,
  Camera,
  Mail
} from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/', icon: Home, description: 'Back to homepage' },
  { name: 'About Us', href: '/about', icon: Heart, description: 'Learn about our care' },
  { name: 'Services', href: '/services', icon: FileText, description: 'View our services' },
  { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 hero-gradient-overlay" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-300/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative container-max py-20 text-center">
          {/* 404 Number with Glow Effect */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold leading-none font-[family-name:var(--font-heading)] select-none">
              <span className="text-white/10">4</span>
              <span className="relative">
                <span className="text-teal-300 drop-shadow-[0_0_60px_rgba(94,234,212,0.6)]">0</span>
                {/* Animated Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-teal-400/30 animate-ping" style={{ animationDuration: '2s' }} />
                </div>
              </span>
              <span className="text-white/10">4</span>
            </h1>
          </div>

          {/* Message */}
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Oops! Page Not Found
            </h2>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
              The page you&apos;re looking for seems to have wandered off. Don&apos;t worry, we&apos;ll help you find your way back home.
            </p>
          </div>

          {/* Search-like Visual */}
          <div className="max-w-md mx-auto mb-10">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <Search className="w-5 h-5 text-teal-300" />
              <span className="text-white/60 text-sm">The page you requested doesn&apos;t exist...</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-blue-900 font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-8 py-6 rounded-full transition-all">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-200 text-sm mb-6 uppercase tracking-wider font-medium">
              Quick Links
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-400/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <link.icon className="w-6 h-6 text-teal-300" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{link.name}</h3>
                  <p className="text-blue-200 text-xs">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-12 bg-white">
        <div className="container-max">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900">
            <CardContent className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">
                    Need Assistance?
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    If you&apos;re having trouble finding what you need, our team is here to help. Reach out to us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+18477459930"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-blue-900 font-bold px-6 py-3 rounded-full transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call Us
                    </a>
                    <Link
                      href="/faq"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/20 transition-all"
                    >
                      <HelpCircle className="w-5 h-5" />
                      View FAQ
                    </Link>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border border-white/10 animate-pulse-slow" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full border border-white/20 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                    </div>

                    {/* Center Logo */}
                    <div className="relative w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Image
                        src="/favicon.png"
                        alt="Brightway Home Care"
                        width={50}
                        height={50}
                        className="drop-shadow-lg"
                      />
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center shadow-lg animate-float">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <p className="text-center text-gray-500 text-sm mt-8">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              Brightway Home Care LLC
            </Link>
            {' '}• Licensed Adult Family Home in Madison, Wisconsin
          </p>
        </div>
      </section>
    </div>
  )
}
