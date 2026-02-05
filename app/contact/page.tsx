'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import CTAPremium from '@/components/CTAPremium'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Heart,
  ArrowRight,
  Home,
  AlertCircle,
  Sparkles
} from 'lucide-react'

// Zod validation schema
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  inquiryType: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long (max 1000 characters)'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+1 (847) 745-9930',
    href: 'tel:+18477459930',
    description: 'Call or message us anytime',
    color: 'from-teal-400 to-teal-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Brightwayhomecarellc@gmail.com',
    href: 'mailto:Brightwayhomecarellc@gmail.com',
    description: 'We respond within 24 hours',
    color: 'from-blue-400 to-blue-500',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '3610 Spenser Ln, Madison, WI 53704',
    href: 'https://maps.google.com/?q=3610+Spenser+Ln,+Madison,+WI+53704',
    description: 'Visit us for a tour',
    color: 'from-rose-400 to-rose-500',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '24/7 Care Available',
    href: null,
    description: 'Always here for our residents',
    color: 'from-amber-400 to-amber-500',
  },
]

const whyChooseUs = [
  { icon: Home, title: 'Home-Like Setting', description: 'Small, comfortable environment with 3-4 beds', color: 'from-blue-400 to-blue-500' },
  { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock care and supervision', color: 'from-teal-400 to-teal-500' },
  { icon: Heart, title: 'Person-Centered', description: 'Individualized care plans for each resident', color: 'from-rose-400 to-rose-500' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      inquiryType: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call - replace with actual API integration
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    reset()
  }

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
                <MessageCircle className="w-4 h-4 mr-2 text-teal-300" />
                Get in Touch
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)] leading-tight">
                Contact{' '}
                <span className="text-teal-300 drop-shadow-[0_0_30px_rgba(94,234,212,0.4)]">
                  Us
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                We&apos;re here to answer your questions and help you learn more about our compassionate care services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-accent text-base px-8">
                  <a href="tel:+18477459930" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-base px-8">
                  <a href="https://wa.me/18477459930" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
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
                    <p className="text-white font-semibold text-lg">Let&apos;s Connect</p>
                    <p className="text-teal-300 text-sm">We&apos;re Here to Help</p>
                  </div>
                </div>

                {/* Single Contact Icon - Top Position */}
                <div className="hero-icon absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
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

      {/* Contact Info Cards - Dark Gradient Style */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="group">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.label === 'Address' ? '_blank' : undefined}
                    rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-blue-300 text-sm mb-1">{item.label}</p>
                      <p className="font-bold text-white mb-1 text-sm">{item.value}</p>
                      <p className="text-blue-400 text-xs">{item.description}</p>
                    </div>
                  </a>
                ) : (
                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 h-full">
                    <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-blue-300 text-sm mb-1">{item.label}</p>
                    <p className="font-bold text-white mb-1 text-sm">{item.value}</p>
                    <p className="text-blue-400 text-xs">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
                <Send className="w-4 h-4 mr-2" />
                Send a Message
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have questions about our services or want to schedule a tour? Fill out the form below and we&apos;ll get back to you promptly.
              </p>

              {submitted ? (
                <Card className="border-2 border-teal-400 bg-gradient-to-br from-teal-50 to-blue-50 shadow-xl">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-3 font-[family-name:var(--font-heading)]">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="btn-secondary"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500" />
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-gray-700 font-medium">
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            type="text"
                            id="fullName"
                            {...register('fullName')}
                            placeholder="Your full name"
                            aria-invalid={errors.fullName ? 'true' : 'false'}
                            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                            className={`h-12 rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400 ${
                              errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                          />
                          {errors.fullName && (
                            <p id="fullName-error" className="text-red-500 text-sm flex items-center gap-1" role="alert">
                              <AlertCircle className="w-4 h-4" />
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            type="tel"
                            id="phone"
                            {...register('phone')}
                            placeholder="(123) 456-7890"
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            className={`h-12 rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400 ${
                              errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                          />
                          {errors.phone && (
                            <p id="phone-error" className="text-red-500 text-sm flex items-center gap-1" role="alert">
                              <AlertCircle className="w-4 h-4" />
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          {...register('email')}
                          placeholder="your@email.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`h-12 rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400 ${
                            errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-500 text-sm flex items-center gap-1" role="alert">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType" className="text-gray-700 font-medium">
                          Inquiry Type
                        </Label>
                        <select
                          id="inquiryType"
                          {...register('inquiryType')}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white text-gray-700"
                        >
                          <option value="">Select an option (optional)</option>
                          <option value="tour">Schedule a Tour</option>
                          <option value="services">Services Inquiry</option>
                          <option value="availability">Availability</option>
                          <option value="general">General Question</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          {...register('message')}
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400 resize-none ${
                            errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                        />
                        {errors.message && (
                          <p id="message-error" className="text-red-500 text-sm flex items-center gap-1" role="alert">
                            <AlertCircle className="w-4 h-4" />
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-blue-900 font-bold h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-teal-100 text-teal-700 border-0 px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Visit Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-[family-name:var(--font-heading)]">
                  Our Location
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  We&apos;re conveniently located in Madison, Wisconsin. Schedule a visit to see our welcoming home in person.
                </p>
              </div>

              {/* Map */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-50 rounded-3xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.5!2d-89.3419!3d43.1283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806533b1e8f2b47%3A0x1234567890abcdef!2s3610%20Spenser%20Ln%2C%20Madison%2C%20WI%2053704!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brightway Home Care location at 3610 Spenser Lane, Madison, Wisconsin"
                    aria-label="Google Maps showing Brightway Home Care location"
                  ></iframe>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-blue-800">Madison, WI</div>
                      <div className="text-gray-500 text-sm">53704</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-blue-800 to-blue-900 border-0 shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
                    Quick Ways to Reach Us
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/18477459930"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group border border-white/10"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-white">WhatsApp</p>
                        <p className="text-sm text-blue-200">Quick and convenient messaging</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-teal-300" />
                    </a>

                    <a
                      href="tel:+18477459930"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group border border-white/10"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-white">Call Us</p>
                        <p className="text-sm text-blue-200">Speak with us directly</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-teal-300" />
                    </a>

                    <a
                      href="mailto:Brightwayhomecarellc@gmail.com"
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group border border-white/10"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-white">Email Us</p>
                        <p className="text-sm text-blue-200">We respond within 24 hours</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-teal-300" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-0 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Families Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 font-[family-name:var(--font-heading)]">
              Compassionate Care You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the Brightway difference with our personalized approach to care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${item.color} p-6`}>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-blue-800 mb-2 font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium World-Class Design */}
      <CTAPremium
        title="Ready to"
        highlightWord="Take the Next Step"
        description="Take the first step towards quality care for your loved one. We're here to help you every step of the way."
        showEmailCard={true}
      />
    </>
  )
}
