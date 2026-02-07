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
  Sparkles,
  Camera,
  ZoomIn
} from 'lucide-react'

// Gallery preview images for "A Welcoming Environment" section
const homeGallery = [
  {
    src: '/images/Welcoming_Environment/sitting_room.jpg',
    alt: 'Comfortable living room at Brightway Home Care',
    label: 'Living Room',
    description: 'Cozy gathering space',
  },
  {
    src: '/images/Welcoming_Environment/bed_room.jpg',
    alt: 'Private bedroom at Brightway Home Care',
    label: 'Bedroom',
    description: 'Restful private rooms',
  },
  {
    src: '/images/Welcoming_Environment/kitchen_room.jpg',
    alt: 'Modern kitchen at Brightway Home Care',
    label: 'Kitchen',
    description: 'Home-cooked meals',
  },
  {
    src: '/images/Welcoming_Environment/garden.png',
    alt: 'Beautiful garden at Brightway Home Care',
    label: 'Garden',
    description: 'Peaceful outdoor space',
  },
]

// Services - Brand-compliant teal accent with subtle differentiation
const services = [
  {
    icon: Users,
    title: 'ADL Support',
    description: 'Compassionate assistance with daily living activities including bathing, dressing, and personal care',
    number: '01',
  },
  {
    icon: Utensils,
    title: 'Meals & Nutrition',
    description: 'Nutritious meal preparation tailored to dietary needs and personal preferences',
    number: '02',
  },
  {
    icon: Shield,
    title: 'Safety Supervision',
    description: '24/7 monitoring and support in a secure, comfortable home environment',
    number: '03',
  },
  {
    icon: Activity,
    title: 'Medication Support',
    description: 'Medication reminders and support to ensure proper health management',
    number: '04',
  },
]

// Who We Serve - Rose warm accent for care-focused section
const whoWeServe = [
  {
    icon: Star,
    title: 'Advanced Age',
    description: 'Adults requiring support with daily living activities in their later years',
  },
  {
    icon: Heart,
    title: 'Physical Disabilities',
    description: 'Adults with mobility challenges or physical limitations needing assistance',
  },
  {
    icon: Sparkles,
    title: 'Developmental Disabilities',
    description: 'Adults with intellectual or developmental disabilities requiring supportive care',
  },
]

// Why Families Trust Us - Brand-compliant with teal accent
const whyChoose = [
  {
    icon: Home,
    title: 'Clean & Peaceful',
    description: 'A well-maintained, quiet environment designed for comfort and relaxation',
  },
  {
    icon: Heart,
    title: 'Compassionate Team',
    description: 'Reliable, caring staff dedicated to personalized attention and warmth',
  },
  {
    icon: Star,
    title: 'Person-Centered',
    description: 'Individualized support that respects dignity, choice, and independence',
  },
]

// Benefits - Teal accent for professional trust, Rose for care elements
const trustBenefits = [
  { icon: Home, text: 'Clean and peaceful environment' },
  { icon: Heart, text: 'Reliable, compassionate caregivers' },
  { icon: Users, text: 'Person-centered care approach' },
  { icon: Shield, text: 'Small home setting (3-4 beds)' },
  { icon: Clock, text: '24/7 supervision and support' },
  { icon: Utensils, text: 'Nutritious home-cooked meals' },
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


      {/* Services Section - Brand-Compliant Premium Design */}
      <section className="section-padding bg-gradient-to-b from-white via-teal-50/30 to-white relative overflow-hidden">
        {/* Background Decorations - Teal theme */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          {/* Section Header */}
          <div className="section-header">
            <Badge className="mb-4 bg-teal-100 text-blue-800 border-0 px-4 py-1.5">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
              Our Services
            </Badge>
            <h2 className="section-title">Comprehensive Care Services</h2>
            <p className="section-subtitle">
              Tailored support designed to meet individual needs in a warm, home-like environment
            </p>
          </div>

          {/* Services Grid - Brand-Compliant Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-teal-300 p-6 lg:p-7 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Number - Design Element */}
                <span className="absolute -right-4 -top-6 text-[120px] font-black text-gray-100/60 leading-none select-none pointer-events-none group-hover:text-teal-100/80 transition-colors duration-500">
                  {service.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  {/* Teal Gradient Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title - Blue 800 */}
                  <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>

                  {/* Bottom Accent Line - Teal */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
                </div>

                {/* Hover Glow Effect - Teal */}
                <div className="absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-14">
            <Button asChild className="btn-primary group px-8 py-6 text-base">
              <Link href="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve - Rose Warm Accent for Care-Focused Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-rose-50/20 to-gray-50 relative overflow-hidden">
        {/* Background Decorations - Rose/Teal theme */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          {/* Section Header */}
          <div className="section-header">
            <Badge className="mb-4 bg-rose-100 text-blue-800 border-0 px-4 py-1.5">
              <Heart className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
              Who We Serve
            </Badge>
            <h2 className="section-title">Compassionate Care for Diverse Needs</h2>
            <p className="section-subtitle">
              We provide personalized support for adults who need assistance with daily living
            </p>
          </div>

          {/* Cards Grid - Rose accent */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {whoWeServe.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl border-2 border-gray-100 hover:border-rose-300 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Accent Bar - Rose */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 to-rose-500" />

                {/* Floating Icon Circle - Rose gradient */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-rose-100 to-rose-200 -z-10 opacity-60" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Learn More Link - Rose accent */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-rose-600 font-semibold text-sm group/link hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Hover Background Glow - Rose */}
                <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl -z-10" />
              </div>
            ))}
          </div>

          {/* Bottom Trust Statement - Brand colors */}
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-gray-700 font-medium">Every person deserves dignified care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Brightway - Teal Accent Trust Section */}
      <section className="section-padding bg-gradient-to-b from-white via-teal-50/20 to-white relative overflow-hidden">
        {/* Background Decorations - Teal/Blue theme */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative">
          {/* Section Header */}
          <div className="section-header">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-1.5">
              <Shield className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
              Why Choose Us
            </Badge>
            <h2 className="section-title">Why Families Trust Brightway</h2>
            <p className="section-subtitle">
              Our commitment to quality care and comfortable living sets us apart
            </p>
          </div>

          {/* Trust Pillars - Teal Accent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-gray-100 hover:border-teal-300 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Accent Bar - Teal */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 to-teal-500" />

                {/* Floating Icon - Teal gradient */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-teal-100 to-teal-200 -z-10 opacity-60" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Background Glow - Teal */}
                <div className="absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl -z-10" />
              </div>
            ))}
          </div>

          {/* Benefits Feature Grid - Alternating Teal/Rose */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-blue-800 font-[family-name:var(--font-heading)]">
                What Sets Us Apart
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {trustBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-4 ${index % 2 === 0 ? 'bg-teal-50' : 'bg-rose-50'} rounded-2xl p-4 border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-teal-500' : 'text-rose-500'}`} />
                  </div>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Seal - Brand Blue */}
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-blue-800 font-bold text-lg">Family Trusted Care</p>
                <p className="text-gray-500 text-sm">Licensed Adult Family Home in Madison, WI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview - A Welcoming Environment */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {/* Section Header */}
          <div className="section-header">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-0">
              <Camera className="w-3.5 h-3.5 mr-1.5" />
              Our Home
            </Badge>
            <h2 className="section-title">A Welcoming Environment</h2>
            <p className="section-subtitle">
              Take a peek at our comfortable and well-maintained home
            </p>
          </div>

          {/* Bento Grid Gallery - Optimized for screen fit */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px]">
            {homeGallery.map((item, index) => (
              <Link
                key={index}
                href="/gallery"
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                {/* Image Container - Full coverage */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={index === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 50vw, 25vw'}
                    priority={index === 0}
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-800/0 group-hover:bg-blue-800/20 transition-all duration-500" />

                  {/* Zoom Icon - Appears on Hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 shadow-xl">
                    <ZoomIn className="w-5 h-5 lg:w-6 lg:h-6 text-blue-800" />
                  </div>

                  {/* Content Overlay with Blur Background */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-5">
                    <div className={`backdrop-blur-md bg-black/40 rounded-xl transform translate-y-1 group-hover:translate-y-0 transition-all duration-500 ${
                      index === 0 ? 'p-4 lg:p-5' : 'p-2.5 md:p-3'
                    }`}>
                      <h3 className={`font-bold text-white ${
                        index === 0 ? 'text-xl md:text-2xl lg:text-3xl mb-1' : 'text-sm md:text-base lg:text-lg'
                      }`}>
                        {item.label}
                      </h3>
                      <p className={`text-white/90 font-medium ${
                        index === 0 ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner Badge for Featured Image */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-teal-400/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <Home className="w-3.5 h-3.5" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button asChild className="btn-primary group">
              <Link href="/gallery" className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                View Full Gallery
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
