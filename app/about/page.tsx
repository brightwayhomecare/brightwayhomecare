import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CTAPremium from '@/components/CTAPremium'
import {
  Heart,
  Shield,
  Users,
  Star,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Home,
  Clock,
  Sparkles,
  HandHeart,
  UserCheck
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Brightway Home Care LLC',
  description: 'Learn about Brightway Home Care LLC, a licensed Adult Family Home in Madison, Wisconsin providing compassionate, person-centered care.',
}

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every resident with kindness, empathy, and genuine care that feels like family.',
    color: 'from-rose-400 to-rose-500',
  },
  {
    icon: Award,
    title: 'Respect',
    description: 'We honor the dignity and individuality of each person entrusted to our care.',
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'We maintain a secure environment with round-the-clock supervision and support.',
    color: 'from-emerald-400 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Trust',
    description: 'We build lasting relationships with families through transparency and reliability.',
    color: 'from-blue-400 to-blue-500',
  },
]

const milestones = [
  { number: '24/7', label: 'Care Available', icon: Clock },
  { number: '3-4', label: 'Resident Capacity', icon: Home },
  { number: '100%', label: 'Person-Centered', icon: Heart },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Matching Homepage Design */}
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
                <Home className="w-4 h-4 mr-2" />
                Licensed Adult Family Home
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)] leading-tight">
                About{' '}
                <span className="text-teal-300 drop-shadow-[0_0_30px_rgba(94,234,212,0.4)]">
                  Brightway
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Dedicated to providing safe, supportive, and compassionate care in a warm,
                home-like setting in Madison, Wisconsin.
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
                    <p className="text-white font-semibold text-lg">Brightway</p>
                    <p className="text-teal-300 text-sm">Home Care LLC</p>
                  </div>
                </div>

                {/* Single Icon - Bottom Position */}
                <div className="hero-icon absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
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

      {/* Who We Are */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image_one.jpg"
                  alt="Caring environment at Brightway Home Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">Since</div>
                    <div className="text-gray-500 text-sm">2024</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
                <HandHeart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                Who We Are
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  Brightway Home Care LLC is a licensed Adult Family Home (AFH) located in the heart of Madison, Wisconsin. We provide residential care in a small, home-like setting with a capacity of 3–4 beds.
                </p>
                <p>
                  Our focus is on creating a comfortable, dignified living environment where residents can thrive. We believe that quality care happens best in intimate settings where each person receives individual attention and personalized support.
                </p>
                <p>
                  With 24/7 supervision and a commitment to person-centered care, we ensure that our residents feel safe, respected, and valued every day.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Licensed & Certified', 'Family-Owned', 'Community-Focused'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 px-4 py-2.5 rounded-full border border-teal-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-0 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Our Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-[family-name:var(--font-heading)]">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the care we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment - Image Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
                <UserCheck className="w-4 h-4 mr-2" />
                Our Promise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                Our Commitment to You
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Brightway Home Care, we are committed to providing exceptional care that promotes independence, dignity, and quality of life for every resident. Our small home setting allows us to focus on what matters most—the well-being and happiness of those we serve.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Heart, text: 'Personalized Care Plans', desc: 'Tailored to individual needs' },
                  { icon: Shield, text: 'Safe Environment', desc: '24/7 supervision and support' },
                  { icon: Star, text: 'Quality of Life Focus', desc: 'Promoting independence and joy' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">{item.text}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image_three.jpg"
                  alt="Quality care at Brightway Home Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">24/7</div>
                    <div className="text-gray-500 text-sm">Care & Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium World-Class Design */}
      <CTAPremium />
    </>
  )
}
