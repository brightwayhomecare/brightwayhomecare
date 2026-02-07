'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import CTAPremium from '@/components/CTAPremium'
import {
  HelpCircle,
  Phone,
  ArrowRight,
  ChevronDown,
  Home,
  Users,
  Heart,
  Shield,
  DollarSign,
  Calendar,
  Clock,
  Stethoscope,
  MessageCircle,
  Search,
  Sparkles
} from 'lucide-react'

const faqCategories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'general', label: 'General', icon: Home },
  { id: 'services', label: 'Services', icon: Heart },
  { id: 'admission', label: 'Admission', icon: Calendar },
  { id: 'costs', label: 'Costs', icon: DollarSign },
]

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'What is an Adult Family Home?',
    answer: 'An Adult Family Home (AFH) is a licensed residential care facility that provides 24-hour supportive care in a home-like setting. Unlike large nursing facilities, AFHs serve a small number of residents (typically 3-4), allowing for more personalized attention and a family-like atmosphere.',
    icon: Home,
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    category: 'general',
    question: 'Who can live at Brightway Home Care?',
    answer: 'We serve adults who need assistance with daily living activities due to advanced age, physical disabilities, or developmental disabilities. Our residents benefit from personalized care while maintaining their independence and dignity in a comfortable home environment.',
    icon: Users,
    color: 'from-teal-400 to-teal-500',
  },
  {
    id: 3,
    category: 'services',
    question: 'What services do you provide?',
    answer: 'We provide comprehensive care including assistance with Activities of Daily Living (ADLs) such as bathing, dressing, and grooming; nutritious meal preparation; medication reminders and support; 24/7 supervision and safety monitoring; housekeeping and laundry; and social activities and companionship.',
    icon: Heart,
    color: 'from-rose-400 to-rose-500',
  },
  {
    id: 4,
    category: 'general',
    question: 'Is Brightway Home Care licensed?',
    answer: 'Yes, Brightway Home Care LLC is a fully licensed Adult Family Home in the State of Wisconsin. We comply with all state regulations and undergo regular inspections to ensure the highest standards of care and safety.',
    icon: Shield,
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 5,
    category: 'general',
    question: 'How many residents do you care for?',
    answer: 'We maintain a small home setting with 3-4 beds maximum. This allows us to provide highly personalized, one-on-one attention that larger facilities cannot offer. Our low resident-to-caregiver ratio ensures each person receives the care and attention they deserve.',
    icon: Users,
    color: 'from-teal-400 to-teal-500',
  },
  {
    id: 6,
    category: 'costs',
    question: 'What are the costs and payment options?',
    answer: 'Our rates are competitive and vary based on individual care needs. We accept private pay and can work with families to explore various funding options. We recommend scheduling a consultation to discuss your specific situation and receive detailed pricing information.',
    icon: DollarSign,
    color: 'from-rose-400 to-rose-500',
  },
  {
    id: 7,
    category: 'admission',
    question: 'Can I visit before making a decision?',
    answer: 'Absolutely! We encourage families to schedule a tour of our home. This gives you the opportunity to see our facilities, meet our caring staff, and ask any questions you may have. Contact us to arrange a visit at your convenience.',
    icon: Calendar,
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 8,
    category: 'admission',
    question: 'What is the admission process?',
    answer: 'The admission process begins with an initial inquiry and tour. We then conduct a comprehensive assessment to understand care needs and ensure we can provide appropriate support. If it\'s a good fit, we work with families to complete necessary paperwork and coordinate a smooth transition.',
    icon: Clock,
    color: 'from-teal-400 to-teal-500',
  },
  {
    id: 9,
    category: 'services',
    question: 'Do you provide respite care?',
    answer: 'Yes, we offer respite care services for families who need temporary relief from caregiving responsibilities. This can be arranged for short-term stays, giving primary caregivers a much-needed break while ensuring their loved one receives quality care.',
    icon: Heart,
    color: 'from-rose-400 to-rose-500',
  },
  {
    id: 10,
    category: 'services',
    question: 'How do you handle medical emergencies?',
    answer: 'Our staff is trained in emergency response procedures. We maintain close communication with residents\' healthcare providers and have protocols in place for medical emergencies, including immediate contact with emergency services when needed.',
    icon: Stethoscope,
    color: 'from-blue-600 to-blue-800',
  },
]

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 hero-gradient-overlay" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-teal-300/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container-max py-20 text-center">
          <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2.5 text-sm">
            <HelpCircle className="w-4 h-4 mr-2 text-teal-300" />
            Got Questions? We Have Answers
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            <span className="text-white">Frequently Asked</span>{' '}
            <span className="text-teal-300 drop-shadow-[0_0_30px_rgba(94,234,212,0.5)]">Questions</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Find answers to common questions about our services, admissions, and care
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
              />
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

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-teal-400 to-teal-500 text-white shadow-lg shadow-teal-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-500">
                Showing <span className="font-semibold text-gray-700">{filteredFaqs.length}</span> questions
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-teal-600 text-sm font-medium hover:text-teal-700"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Card
                  key={faq.id}
                  className={`border-0 shadow-lg overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'shadow-xl' : 'hover:shadow-xl'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left"
                    aria-expanded={openFaq === faq.id}
                  >
                    <div className={`h-1 bg-gradient-to-r ${faq.color}`} />
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                        </div>

                        {/* Question */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-gray-100 text-gray-600 border-0 text-xs capitalize">
                              {faq.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-heading)] pr-8">
                            {faq.question}
                          </h3>
                        </div>

                        {/* Toggle Icon */}
                        <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          openFaq === faq.id ? 'bg-teal-100 rotate-180' : ''
                        }`}>
                          <ChevronDown className={`w-5 h-5 transition-colors ${
                            openFaq === faq.id ? 'text-teal-600' : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                    </CardContent>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-14 pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-50 flex items-center justify-center">
                  <Search className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No questions found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filter</p>
                <Button
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('all')
                  }}
                  className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-white"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-10 md:p-12">
                  <Badge className="mb-6 bg-teal-400/20 text-teal-300 border-0 px-4 py-2">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    We&apos;re Here to Help
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
                    Still Have Questions?
                  </h2>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    We&apos;re here to help. Contact us directly and we&apos;ll be happy to answer any questions you may have about our care services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-blue-900 font-bold px-6">
                      <a href="tel:+18477459930" className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call Us Now
                      </a>
                    </Button>
                    <Button asChild className="bg-transparent border-2 border-teal-400 text-teal-300 hover:bg-teal-400/20 hover:text-white font-semibold px-6">
                      <Link href="/contact" className="flex items-center gap-2">
                        Contact Form
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="hidden md:flex items-center justify-center p-12 bg-white/5">
                  <div className="relative">
                    {/* Decorative circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border border-teal-400/20 animate-pulse-slow" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-teal-400/30 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                    </div>

                    {/* Center icon */}
                    <div className="relative w-24 h-24 rounded-2xl bg-teal-400/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-teal-300" />
                    </div>

                    {/* Floating icons */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-rose-400/20 flex items-center justify-center animate-float">
                      <Phone className="w-6 h-6 text-rose-300" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-teal-400/20 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                      <MessageCircle className="w-6 h-6 text-teal-300" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTAPremium
        title="Ready to"
        highlightWord="Learn More"
        description="Schedule a tour and see firsthand how we provide exceptional care in a warm, home-like environment."
      />
    </>
  )
}
