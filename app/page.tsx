import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CTAPremium from '@/components/CTAPremium'
import {
  Phone,
  Shield,
  Home,
  Clock,
  Heart,
  Users,
  Utensils,
  Activity,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'ADL Support',
    description: 'Compassionate assistance with daily living activities including bathing, dressing, and personal care'
  },
  {
    icon: Utensils,
    title: 'Meals & Nutrition',
    description: 'Nutritious meal preparation tailored to dietary needs and personal preferences'
  },
  {
    icon: Shield,
    title: 'Safety Supervision',
    description: '24/7 monitoring and support in a secure, comfortable home environment'
  },
  {
    icon: Activity,
    title: 'Medication Support',
    description: 'Medication reminders and support to ensure proper health management'
  },
]

const whoWeServe = [
  {
    icon: Star,
    title: 'Advanced Age',
    description: 'Adults requiring support with daily living activities in their later years'
  },
  {
    icon: Heart,
    title: 'Physical Disabilities',
    description: 'Adults with mobility challenges or physical limitations needing assistance'
  },
  {
    icon: Sparkles,
    title: 'Developmental Disabilities',
    description: 'Adults with intellectual or developmental disabilities requiring supportive care'
  },
]

const whyChoose = [
  { icon: Home, title: 'Clean & Peaceful', description: 'A well-maintained, quiet environment designed for comfort' },
  { icon: Heart, title: 'Compassionate Team', description: 'Reliable, caring staff dedicated to personalized attention' },
  { icon: Star, title: 'Person-Centered', description: 'Individualized support that respects dignity and independence' },
]


export default function HomePage() {
  return (
    <>
      {/* Hero Section - Bold Dark Gradient */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden hero-gradient">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient-overlay" />

        {/* Subtle Animated Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative container-max py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 text-sm inline-flex">
                <Sparkles className="w-4 h-4 mr-2 text-teal-300" />
                Licensed Adult Family Home in Madison, WI
              </Badge>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-[family-name:var(--font-heading)]">
                <span className="text-blue-100">A Place to Call</span>{' '}
                <span className="text-teal-300 drop-shadow-[0_0_20px_rgba(94,234,212,0.4)]">Home</span>
              </h1>

              {/* Tagline */}
              <p className="text-teal-200 text-lg md:text-xl font-semibold mb-4 tracking-wide">
                Safe • Supportive • 24/7 Care
              </p>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Personalized care in a small, peaceful home setting where your loved ones are treated like family
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+18477459930"
                  aria-label="Call or WhatsApp Brightway Home Care"
                  className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-blue-900 font-semibold rounded-full px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call / WhatsApp Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-blue-800 rounded-full px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
                >
                  Schedule a Tour
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  { icon: Shield, text: 'Licensed & Certified' },
                  { icon: Clock, text: '24/7 Care' },
                  { icon: Heart, text: 'Family-Owned' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-blue-100">
                    <item.icon className="w-5 h-5 text-teal-300" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Clean Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-3xl scale-125" />

                {/* Central Home Card with Icons */}
                <div className="relative z-10 w-72 h-72 mx-auto">
                  {/* Card */}
                  <div className="w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center">
                    <Image
                      src="/favicon.png"
                      alt="Brightway Home Care"
                      width={100}
                      height={100}
                      className="mb-3"
                    />
                    <span className="text-white font-semibold text-xl">Brightway</span>
                    <span className="text-teal-200 text-sm">Home Care</span>
                  </div>

                  {/* Single Icon - Top Position */}
                  <div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl shadow-xl flex items-center justify-center hero-icon teal-glow"
                    title="Compassionate Care"
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
            <path d="M0 40L60 36C120 32 240 24 360 22C480 20 600 24 720 32C840 40 960 52 1080 54C1200 56 1320 48 1380 44L1440 40V80H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>


      {/* Services Section */}
      <section className="section-padding bg-circular-pattern">
        <div className="container-max">
          <div className="section-header">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-0">Our Services</Badge>
            <h2 className="section-title">Comprehensive Care Services</h2>
            <p className="section-subtitle">
              Tailored support designed to meet individual needs in a warm, home-like environment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-2 group">
                <CardContent className="p-8">
                  <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-primary">
              <Link href="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="section-header">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-0">Who We Serve</Badge>
            <h2 className="section-title">Compassionate Care for Diverse Needs</h2>
            <p className="section-subtitle">
              We provide personalized support for adults who need assistance with daily living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whoWeServe.map((item, index) => (
              <Card key={index} className="feature-card border-l-4 border-l-teal-400 border-t-0 border-r-0 border-b-0">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400/20 to-teal-300/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Brightway */}
      <section className="section-padding bg-white bg-decorative-circles">
        <div className="container-max relative">
          <div className="section-header">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-0">Why Choose Us</Badge>
            <h2 className="section-title">Why Families Trust Brightway</h2>
            <p className="section-subtitle">
              Our commitment to quality care and comfortable living sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-teal-400 to-teal-300 flex items-center justify-center shadow-xl">
                  <item.icon className="w-10 h-10 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Clean and peaceful environment',
                'Reliable, compassionate caregivers',
                'Person-centered care approach',
                'Small home setting (3-4 beds)',
                '24/7 supervision and support',
                'Nutritious home-cooked meals'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="section-header">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-0">Our Home</Badge>
            <h2 className="section-title">A Welcoming Environment</h2>
            <p className="section-subtitle">
              Take a peek at our comfortable and well-maintained home
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Living Room', 'Bedroom', 'Kitchen', 'Garden'].map((label, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center group hover:shadow-xl transition-all cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-blue-800/0 group-hover:bg-blue-800/20 transition-colors" />
                <div className="text-center">
                  <Home className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <span className="text-gray-500 font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="btn-secondary">
              <Link href="/gallery" className="flex items-center gap-2">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium World-Class Design */}
      <CTAPremium
        title="Ready to"
        highlightWord="Get Started"
        description="Schedule a tour or contact us to discover how we can support your loved one with compassionate, personalized care."
        showEmailCard={true}
      />
    </>
  )
}
