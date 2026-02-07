import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CTAPremium from '@/components/CTAPremium'
import {
  Users,
  Utensils,
  Pill,
  Shield,
  Activity,
  Heart,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  Home,
  Sparkles,
  HandHeart,
  Star,
  Stethoscope
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Brightway Home Care LLC',
  description: 'Explore our residential care services including ADL support, meal preparation, medication reminders, safety supervision, and respite care in Madison, WI.',
}

// Services with brand-compliant colors (Blue 800, Teal, Rose)
const services = [
  {
    icon: Users,
    title: 'Assistance with ADLs',
    description: 'Support with activities of daily living including bathing, dressing, grooming, and personal hygiene to help residents maintain dignity and comfort.',
    features: ['Bathing & Showering', 'Dressing Assistance', 'Personal Grooming', 'Hygiene Support'],
    color: 'from-teal-400 to-teal-500',
    bgLight: 'bg-teal-50',
  },
  {
    icon: Utensils,
    title: 'Meal Preparation & Nutrition',
    description: 'Nutritious home-cooked meals tailored to dietary needs and preferences, ensuring proper nutrition and enjoyable dining experiences.',
    features: ['Custom Meal Plans', 'Dietary Accommodations', 'Nutritious Home Cooking', 'Hydration Support'],
    color: 'from-teal-400 to-teal-500',
    bgLight: 'bg-teal-50',
  },
  {
    icon: Pill,
    title: 'Medication Reminders',
    description: 'Timely medication reminders and support (as permitted) to help residents stay on track with their health regimens.',
    features: ['Scheduled Reminders', 'Medication Tracking', 'Health Monitoring', 'Care Coordination'],
    color: 'from-blue-600 to-blue-800',
    bgLight: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'Safety Supervision',
    description: '24/7 monitoring and supervision to ensure a safe living environment, with staff available around the clock for any needs.',
    features: ['24/7 Staff Presence', 'Emergency Response', 'Fall Prevention', 'Secure Environment'],
    color: 'from-blue-600 to-blue-800',
    bgLight: 'bg-blue-50',
  },
  {
    icon: Activity,
    title: 'Mobility & Personal Care',
    description: 'Assistance with mobility, transfers, and personal care needs to support residents in their daily routines.',
    features: ['Transfer Assistance', 'Mobility Support', 'Exercise Encouragement', 'Physical Comfort'],
    color: 'from-rose-400 to-rose-500',
    bgLight: 'bg-rose-50',
  },
  {
    icon: HandHeart,
    title: 'Respite Care Options',
    description: 'Short-term care services to provide relief for family caregivers while ensuring their loved ones receive quality support.',
    features: ['Short-Term Stays', 'Caregiver Relief', 'Flexible Scheduling', 'Full Care Services'],
    color: 'from-rose-400 to-rose-500',
    bgLight: 'bg-rose-50',
  },
]

const additionalServices = [
  { name: 'Housekeeping & Laundry', icon: Home },
  { name: 'Transportation Coordination', icon: Activity },
  { name: 'Social Activities & Engagement', icon: Users },
  { name: 'Family Communication', icon: Heart },
  { name: 'Health Monitoring', icon: Stethoscope },
  { name: 'Comfort & Companionship', icon: HandHeart },
]

const stats = [
  { number: '24/7', label: 'Care Available', icon: Clock },
  { number: '3-4', label: 'Resident Capacity', icon: Home },
  { number: '100%', label: 'Person-Centered', icon: Heart },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Dark Gradient Matching Other Pages */}
      <section className="relative min-h-[70vh] flex items-center hero-gradient overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/40 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative container-max py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 inline-flex">
                <Sparkles className="w-4 h-4 mr-2 text-teal-300" />
                Comprehensive Care Services
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)] leading-tight">
                Our{' '}
                <span className="text-teal-300 drop-shadow-[0_0_30px_rgba(94,234,212,0.4)]">
                  Services
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Personalized residential support in a caring, home-like environment where every resident receives the attention they deserve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-accent text-base px-8">
                  <a href="tel:+18477459930" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us Today
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-base px-8">
                  <Link href="/contact" className="flex items-center gap-2">
                    Schedule a Visit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual - Card with Orbiting Icons */}
            <div className="relative flex items-center justify-center">
              {/* Central Card */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src="/favicon.png"
                      alt="Brightway Home Care"
                      width={80}
                      height={80}
                      className="mx-auto mb-4 drop-shadow-lg"
                    />
                    <p className="text-white font-semibold text-lg">Quality Care</p>
                    <p className="text-teal-300 text-sm">Every Day</p>
                  </div>
                </div>

                {/* Single Icon - Left Position */}
                <div className="hero-icon absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
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

      {/* Stats Section - Dark Gradient Cards */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="w-14 h-14 mx-auto mb-4 bg-teal-400/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-teal-300" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
                    {item.number}
                  </div>
                  <div className="text-blue-200 font-medium">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section - Premium Brand-Compliant Design */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-teal-50/20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          {/* Section Header - Enhanced */}
          <div className="text-center mb-16">
            {/* Accent Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full mx-auto mb-6" />

            <Badge className="mb-4 bg-teal-100 text-teal-700 border-0 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              What We Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 font-[family-name:var(--font-heading)]">
              Residential Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive care designed to support independence, dignity, and quality of life
            </p>
          </div>

          {/* Services Grid - Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-6 relative overflow-hidden`}>
                  {/* Decorative Circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600 group/item hover:text-gray-900 transition-colors">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Statement */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center ring-2 ring-white">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center ring-2 ring-white">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center ring-2 ring-white">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-gray-700 font-medium">Personalized care for every resident</span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-teal-100 text-teal-700 border-0 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                More Support
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-[family-name:var(--font-heading)]">
                Additional Support Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beyond our core services, we provide comprehensive support for daily living
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-800 transition-colors">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Person-Centered Approach - Premium Brand-Compliant Design */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-rose-50/20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Area - Enhanced */}
            <div className="relative order-2 lg:order-1 pt-8 pr-8 pb-8 pl-8">
              {/* Decorative Ring Behind Image */}
              <div className="absolute inset-8 bg-gradient-to-br from-teal-200/40 to-rose-200/40 rounded-[2rem] -z-10 -m-4" />

              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/image_two.jpg"
                  alt="Person-centered care at Brightway Home Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-blue-900/10 to-transparent" />
              </div>

              {/* Floating Badge - Top Left (Heart) */}
              <div className="absolute top-0 left-0 z-10">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl border border-gray-100">
                  <Heart className="w-7 h-7 text-rose-500" />
                </div>
              </div>

              {/* Floating Badge - Top Right (Person-Centered) */}
              <div className="absolute top-0 right-0 z-10 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-rose-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-800 font-semibold text-sm">Personalized</span>
                </div>
              </div>

              {/* Floating Badge - Bottom Right (Capacity) */}
              <div className="absolute -bottom-2 right-0 z-10 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">3-4</div>
                    <div className="text-gray-500 text-sm font-medium">Resident Capacity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area - Enhanced */}
            <div className="order-1 lg:order-2">
              {/* Accent Line */}
              <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full mb-6" />

              <Badge className="mb-4 bg-rose-100 text-rose-700 border-0 px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                Person-Centered Care
              </h2>

              {/* Highlighted First Paragraph */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-teal-500 rounded-full" />
                <p className="pl-5 text-lg text-gray-700 leading-relaxed font-medium">
                  At Brightway Home Care, we believe that every resident is unique. Our person-centered approach means we take the time to understand each individual&apos;s preferences, routines, and goals.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                We work closely with residents and their families to create personalized care plans that evolve with changing needs, always prioritizing dignity, independence, and quality of life.
              </p>

              {/* Quote Callout */}
              <div className="bg-gradient-to-r from-rose-50 to-rose-100/50 rounded-2xl p-5 border-l-4 border-rose-400 mb-8">
                <p className="text-rose-800 font-medium italic">
                  "Every person deserves care that respects their individuality."
                </p>
              </div>

              {/* Checklist - Alternating Teal/Rose */}
              <div className="space-y-3">
                {[
                  { text: 'Individualized care plans', color: 'teal' },
                  { text: 'Regular care plan reviews', color: 'rose' },
                  { text: 'Open communication with families', color: 'teal' },
                  { text: 'Respect for personal preferences', color: 'rose' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group flex items-center gap-4 rounded-xl p-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      item.color === 'teal'
                        ? 'bg-teal-50 border-teal-100 hover:border-teal-300'
                        : 'bg-rose-50 border-rose-100 hover:border-rose-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                      item.color === 'teal'
                        ? 'bg-gradient-to-br from-teal-400 to-teal-500'
                        : 'bg-gradient-to-br from-rose-400 to-rose-500'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className={`font-medium ${
                      item.color === 'teal' ? 'text-teal-700' : 'text-rose-700'
                    }`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium World-Class Design */}
      <CTAPremium
        title="Ready to"
        highlightWord="Schedule a Tour"
        description="We invite you to visit our home and see firsthand the caring environment we provide. Contact us today to learn more about our services."
      />
    </>
  )
}
