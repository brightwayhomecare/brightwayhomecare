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

const services = [
  {
    icon: Users,
    title: 'Assistance with ADLs',
    description: 'Support with activities of daily living including bathing, dressing, grooming, and personal hygiene to help residents maintain dignity and comfort.',
    features: ['Bathing & Showering', 'Dressing Assistance', 'Personal Grooming', 'Hygiene Support'],
    color: 'from-blue-400 to-blue-500',
  },
  {
    icon: Utensils,
    title: 'Meal Preparation & Nutrition',
    description: 'Nutritious home-cooked meals tailored to dietary needs and preferences, ensuring proper nutrition and enjoyable dining experiences.',
    features: ['Custom Meal Plans', 'Dietary Accommodations', 'Nutritious Home Cooking', 'Hydration Support'],
    color: 'from-emerald-400 to-emerald-500',
  },
  {
    icon: Pill,
    title: 'Medication Reminders',
    description: 'Timely medication reminders and support (as permitted) to help residents stay on track with their health regimens.',
    features: ['Scheduled Reminders', 'Medication Tracking', 'Health Monitoring', 'Care Coordination'],
    color: 'from-violet-400 to-violet-500',
  },
  {
    icon: Shield,
    title: 'Safety Supervision',
    description: '24/7 monitoring and supervision to ensure a safe living environment, with staff available around the clock for any needs.',
    features: ['24/7 Staff Presence', 'Emergency Response', 'Fall Prevention', 'Secure Environment'],
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: Activity,
    title: 'Mobility & Personal Care',
    description: 'Assistance with mobility, transfers, and personal care needs to support residents in their daily routines.',
    features: ['Transfer Assistance', 'Mobility Support', 'Exercise Encouragement', 'Physical Comfort'],
    color: 'from-rose-400 to-rose-500',
  },
  {
    icon: HandHeart,
    title: 'Respite Care Options',
    description: 'Short-term care services to provide relief for family caregivers while ensuring their loved ones receive quality support.',
    features: ['Short-Term Stays', 'Caregiver Relief', 'Flexible Scheduling', 'Full Care Services'],
    color: 'from-teal-400 to-teal-500',
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

      {/* Main Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white"
              >
                <CardContent className="p-0">
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
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
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Person-Centered Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image_two.jpg"
                  alt="Person-centered care at Brightway Home Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">3-4</div>
                    <div className="text-gray-500 text-sm">Resident Capacity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                Person-Centered Care
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Brightway Home Care, we believe that every resident is unique. Our person-centered approach means we take the time to understand each individual&apos;s preferences, routines, and goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We work closely with residents and their families to create personalized care plans that evolve with changing needs, always prioritizing dignity, independence, and quality of life.
              </p>

              <div className="space-y-4">
                {[
                  'Individualized care plans',
                  'Regular care plan reviews',
                  'Open communication with families',
                  'Respect for personal preferences',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 border border-teal-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
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
