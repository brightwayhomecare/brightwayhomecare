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

// Core Values - Brand-compliant colors (Blue 800, Teal, Rose)
const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every resident with kindness, empathy, and genuine care that feels like family.',
    gradient: 'from-rose-400 to-rose-500',
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-200 hover:border-rose-400',
    number: '01',
  },
  {
    icon: Award,
    title: 'Respect',
    description: 'We honor the dignity and individuality of each person entrusted to our care.',
    gradient: 'from-teal-400 to-teal-500',
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-200 hover:border-teal-400',
    number: '02',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'We maintain a secure environment with round-the-clock supervision and support.',
    gradient: 'from-blue-600 to-blue-800',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200 hover:border-blue-400',
    number: '03',
  },
  {
    icon: Users,
    title: 'Trust',
    description: 'We build lasting relationships with families through transparency and reliability.',
    gradient: 'from-teal-400 to-teal-500',
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-200 hover:border-teal-400',
    number: '04',
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

      {/* Who We Are - Premium Brand-Compliant Design */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-teal-50/30 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Area - Enhanced */}
            <div className="relative order-2 lg:order-1 pt-8 pl-8 pb-8 pr-8">
              {/* Decorative Ring Behind Image */}
              <div className="absolute inset-8 bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-[2rem] -z-10 -m-4" />

              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/image_one.jpg"
                  alt="Caring environment at Brightway Home Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-blue-900/10 to-transparent" />
              </div>

              {/* Floating Badge - Heart Icon (Top Left - Outside Image) */}
              <div className="absolute top-0 left-0 z-10">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl border border-gray-100">
                  <Heart className="w-7 h-7 text-rose-500" />
                </div>
              </div>

              {/* Floating Badge - Location (Top Right) */}
              <div className="absolute top-0 right-0 z-10 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <Home className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-800 font-semibold text-sm">Madison, WI</span>
                </div>
              </div>

              {/* Floating Badge - Since 2024 (Bottom Right) */}
              <div className="absolute -bottom-2 right-0 z-10 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">Since</div>
                    <div className="text-gray-500 text-sm font-medium">2024</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area - Enhanced */}
            <div className="order-1 lg:order-2">
              {/* Accent Line */}
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full mb-6" />

              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
                <HandHeart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                Who We Are
              </h2>

              {/* First Paragraph - Highlighted */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-teal-500 rounded-full" />
                <p className="pl-5 text-lg text-gray-700 leading-relaxed font-medium">
                  Brightway Home Care LLC is a licensed Adult Family Home (AFH) located in the heart of Madison, Wisconsin. We provide residential care in a small, home-like setting with a capacity of 3–4 beds.
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our focus is on creating a comfortable, dignified living environment where residents can thrive. We believe that quality care happens best in intimate settings where each person receives individual attention and personalized support.
                </p>
                <p>
                  With 24/7 supervision and a commitment to person-centered care, we ensure that our residents feel safe, respected, and valued every day.
                </p>
              </div>

              {/* Quote Callout - Rose Accent */}
              <div className="mt-8 bg-gradient-to-r from-rose-50 to-rose-100/50 rounded-2xl p-6 border-l-4 border-rose-400">
                <p className="text-rose-800 font-medium italic">
                  "Quality care happens best in intimate settings where each person receives individual attention."
                </p>
              </div>

              {/* Trust Badges - Enhanced */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { text: 'Licensed & Certified', icon: Shield },
                  { text: 'Family-Owned', icon: Heart },
                  { text: 'Community-Focused', icon: Users },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      i === 1
                        ? 'bg-rose-50 border-rose-200 hover:border-rose-300'
                        : 'bg-teal-50 border-teal-200 hover:border-teal-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      i === 1
                        ? 'bg-gradient-to-br from-rose-400 to-rose-500'
                        : 'bg-gradient-to-br from-teal-400 to-teal-500'
                    }`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`font-semibold text-sm ${
                      i === 1 ? 'text-rose-700' : 'text-teal-700'
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

      {/* Our Values - Premium Brand-Compliant Design */}
      <section className="section-padding bg-gradient-to-b from-white via-teal-50/20 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          {/* Section Header - Enhanced */}
          <div className="text-center mb-16">
            {/* Accent Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full mx-auto mb-6" />

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

          {/* Values Grid - Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border-2 ${value.borderColor} p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
              >
                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${value.gradient}`} />

                {/* Background Number */}
                <span className="absolute -right-2 -top-2 text-[80px] font-black text-gray-100/50 leading-none select-none pointer-events-none group-hover:text-gray-100/70 transition-colors duration-500">
                  {value.number}
                </span>

                {/* Content */}
                <div className="relative text-center">
                  {/* Icon with Decorative Ring */}
                  <div className="relative inline-block mb-6">
                    <div className={`w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <value.icon className="w-9 h-9 md:w-10 md:h-10 text-white" />
                    </div>
                    {/* Decorative Ring */}
                    <div className={`absolute -inset-2 rounded-3xl ${value.bgLight} -z-10 opacity-60`} />
                  </div>

                  <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {value.description}
                  </p>
                </div>

                {/* Hover Background Glow */}
                <div className={`absolute inset-0 ${value.bgLight} opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl -z-10`} />
              </div>
            ))}
          </div>

          {/* Bottom Trust Statement */}
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center ring-2 ring-white">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center ring-2 ring-white">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center ring-2 ring-white">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-gray-700 font-medium">Values that define our care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - Premium Brand-Compliant Design */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-rose-50/20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              {/* Accent Line */}
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full mb-6" />

              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
                <UserCheck className="w-4 h-4 mr-2" />
                Our Promise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                Our Commitment to You
              </h2>

              {/* Highlighted First Sentence */}
              <div className="relative mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-rose-500 rounded-full" />
                <p className="pl-5 text-lg text-gray-700 leading-relaxed font-medium">
                  At Brightway Home Care, we are committed to providing exceptional care that promotes independence, dignity, and quality of life for every resident.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our small home setting allows us to focus on what matters most—the well-being and happiness of those we serve.
              </p>

              {/* Commitment Cards - Brand Colors */}
              <div className="space-y-4">
                {[
                  {
                    icon: Heart,
                    text: 'Personalized Care Plans',
                    desc: 'Tailored to individual needs',
                    gradient: 'from-rose-400 to-rose-500',
                    bgLight: 'bg-rose-50',
                    borderColor: 'border-rose-100 hover:border-rose-300',
                    accentColor: 'bg-rose-400'
                  },
                  {
                    icon: Shield,
                    text: 'Safe Environment',
                    desc: '24/7 supervision and support',
                    gradient: 'from-blue-600 to-blue-800',
                    bgLight: 'bg-blue-50',
                    borderColor: 'border-blue-100 hover:border-blue-300',
                    accentColor: 'bg-blue-600'
                  },
                  {
                    icon: Star,
                    text: 'Quality of Life Focus',
                    desc: 'Promoting independence and joy',
                    gradient: 'from-teal-400 to-teal-500',
                    bgLight: 'bg-teal-50',
                    borderColor: 'border-teal-100 hover:border-teal-300',
                    accentColor: 'bg-teal-400'
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group relative flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border ${item.borderColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Left Accent Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800">{item.text}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>

                    {/* Hover Background */}
                    <div className={`absolute inset-0 ${item.bgLight} opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Image Area - Enhanced */}
            <div className="relative pt-8 pr-8 pb-8 pl-8">
              {/* Decorative Ring Behind Image */}
              <div className="absolute inset-8 bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-[2rem] -z-10 -m-4" />

              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/image_three.jpg"
                  alt="Quality care at Brightway Home Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-blue-900/10 to-transparent" />
              </div>

              {/* Floating Badge - Top Right (Shield) */}
              <div className="absolute top-0 right-0 z-10 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-800 font-semibold text-sm">Protected</span>
                </div>
              </div>

              {/* Floating Badge - Top Left (Star) */}
              <div className="absolute top-0 left-0 z-10">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl border border-gray-100">
                  <Star className="w-7 h-7 text-teal-500" />
                </div>
              </div>

              {/* Floating Badge - 24/7 (Bottom Right) */}
              <div className="absolute -bottom-2 right-0 z-10 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">24/7</div>
                    <div className="text-gray-500 text-sm font-medium">Care & Support</div>
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
