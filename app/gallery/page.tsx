'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import CTAPremium from '@/components/CTAPremium'
import {
  Camera,
  Home,
  Phone,
  ArrowRight,
  Shield,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  ZoomIn,
  Images
} from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/images/image_one.jpg',
    alt: 'Brightway Home Care comfortable living space',
    title: 'Comfortable Living',
  },
  {
    id: 2,
    src: '/images/image_two.jpg',
    alt: 'Brightway Home Care caring environment',
    title: 'Caring Environment',
  },
  {
    id: 3,
    src: '/images/image_three.jpg',
    alt: 'Brightway Home Care peaceful atmosphere',
    title: 'Peaceful Atmosphere',
  },
  {
    id: 4,
    src: '/images/image_four.jpg',
    alt: 'Brightway Home Care professional care',
    title: 'Professional Care',
  },
  {
    id: 5,
    src: '/images/image_five.jpg',
    alt: 'Brightway Home Care home-like setting',
    title: 'Home-Like Setting',
  },
]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <>
      {/* Hero Section - Similar to Homepage */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden hero-gradient">
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
                <Camera className="w-4 h-4 mr-2 text-teal-300" />
                Our Home in Pictures
              </Badge>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-[family-name:var(--font-heading)]">
                <span className="text-blue-100">Photo</span>{' '}
                <span className="text-teal-300 drop-shadow-[0_0_20px_rgba(94,234,212,0.4)]">Gallery</span>
              </h1>

              {/* Tagline */}
              <p className="text-teal-200 text-lg md:text-xl font-semibold mb-4 tracking-wide">
                Comfort • Safety • Home
              </p>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Take a virtual tour of our comfortable, welcoming Adult Family Home in Madison, Wisconsin
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+18477459930"
                  aria-label="Schedule a tour"
                  className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-blue-900 font-semibold rounded-full px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Schedule a Tour
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-blue-800 rounded-full px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  { icon: Home, text: 'Clean & Maintained' },
                  { icon: Shield, text: 'Safe Environment' },
                  { icon: Heart, text: 'Comfortable Living' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-blue-100">
                    <item.icon className="w-5 h-5 text-teal-300" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual Card with Icons */}
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-3xl scale-125" />

                {/* Central Card with Icons */}
                <div className="relative z-10 w-72 h-72 mx-auto">
                  {/* Card */}
                  <div className="w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center">
                    <Images className="w-16 h-16 text-teal-300 mb-3" />
                    <span className="text-white font-semibold text-xl">Virtual Tour</span>
                    <span className="text-teal-200 text-sm">Explore Our Spaces</span>
                  </div>

                  {/* Single Icon - Right Position */}
                  <div
                    className="absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-500 rounded-2xl shadow-xl flex items-center justify-center hero-icon"
                    title="Gallery"
                  >
                    <Camera className="w-8 h-8 text-white" />
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

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-700 border-0">Virtual Tour</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-heading)]">
              Explore Our Spaces
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Each area of our home is designed with comfort, safety, and dignity in mind
            </p>
          </div>

          {/* Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`relative ${index === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 shadow-xl">
                    <ZoomIn className="w-6 h-6 text-gray-800" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs font-medium tracking-wide drop-shadow-md">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute top-6 left-6 z-50 text-white/60 text-sm font-medium">
            {currentImage + 1} / {galleryImages.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[80vh] mx-8 my-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="text-white font-semibold text-xl mb-1">
              {galleryImages[currentImage].title}
            </h3>
          </div>
        </div>
      )}

      {/* Privacy Note */}
      <section className="py-6 bg-gray-50 border-y border-gray-100">
        <div className="container-max">
          <div className="flex items-center justify-center gap-3 text-center">
            <Shield className="w-5 h-5 text-teal-500 flex-shrink-0" />
            <p className="text-gray-500 text-sm">
              <span className="font-medium text-gray-600">Privacy Notice:</span> Photos shown are representative of our care environment.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-heading)]">
                A Place Designed for Comfort
              </h2>
              <p className="text-gray-500">
                Every aspect of our home is thoughtfully designed
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Private bedrooms',
                'Accessible bathrooms',
                'Cozy common areas',
                'Modern kitchen',
                'Family-style dining',
                'Garden space',
                'Safety features',
                'Home atmosphere',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium World-Class Design */}
      <CTAPremium
        title="Want to"
        highlightWord="Schedule a Tour"
        description="Visit us in person and experience our warm, caring environment. See firsthand how we provide exceptional care."
      />
    </>
  )
}
