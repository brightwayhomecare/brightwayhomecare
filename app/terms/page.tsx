'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import CTAPremium from '@/components/CTAPremium'
import {
  FileText,
  ScrollText,
  Scale,
  Globe,
  ShieldCheck,
  AlertTriangle,
  Link2,
  RefreshCw,
  Gavel,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUp
} from 'lucide-react'

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms', icon: ScrollText },
  { id: 'services', title: 'Description of Services', icon: FileText },
  { id: 'use', title: 'Use of Website', icon: Globe },
  { id: 'intellectual', title: 'Intellectual Property', icon: ShieldCheck },
  { id: 'disclaimer', title: 'Disclaimer of Warranties', icon: AlertTriangle },
  { id: 'liability', title: 'Limitation of Liability', icon: Scale },
  { id: 'links', title: 'Third-Party Links', icon: Link2 },
  { id: 'changes', title: 'Changes to Terms', icon: RefreshCw },
  { id: 'governing', title: 'Governing Law', icon: Gavel },
  { id: 'contact', title: 'Contact Information', icon: Phone },
]

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sectionElements = sections.map(s => document.getElementById(s.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 hero-gradient-overlay" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-teal-300/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container-max py-20 text-center">
          <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2.5 text-sm">
            <FileText className="w-4 h-4 mr-2 text-blue-300" />
            Legal Documentation
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            <span className="text-white">Terms of</span>{' '}
            <span className="text-blue-300 drop-shadow-[0_0_30px_rgba(147,197,253,0.5)]">Service</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Please read these terms carefully before using our website and services
          </p>

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <RefreshCw className="w-4 h-4 text-teal-300" />
            <span className="text-white text-sm">Last updated: February 2025</span>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <span className={`flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold ${
                        activeSection === section.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium truncate">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Section 1 */}
              <Card id="acceptance" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-blue-400 to-blue-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ScrollText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-blue-500 text-sm font-semibold">Section 1</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Acceptance of Terms
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using the Brightway Home Care LLC website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. Your continued use of the website constitutes your acknowledgment and acceptance of these terms.
                  </p>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card id="services" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-teal-400 to-teal-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-teal-500 text-sm font-semibold">Section 2</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Description of Services
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Brightway Home Care LLC is a licensed Adult Family Home in Madison, Wisconsin, providing residential care services for adults who need assistance with daily living activities. Our website provides information about our services and allows visitors to contact us for inquiries.
                  </p>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card id="use" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-violet-400 to-violet-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-violet-500 text-sm font-semibold">Section 3</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Use of Website
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You agree to use this website only for lawful purposes and in a way that does not:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Infringe the rights of others',
                      'Restrict or inhibit anyone else\'s use of the website',
                      'Violate any applicable laws or regulations',
                      'Transmit harmful or malicious content'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <ChevronRight className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card id="intellectual" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-emerald-500 text-sm font-semibold">Section 4</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Intellectual Property
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    All content on this website, including text, graphics, logos, and images, is the property of Brightway Home Care LLC or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card id="disclaimer" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-amber-500 text-sm font-semibold">Section 5</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Disclaimer of Warranties
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    This website is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee that the website will be error-free, secure, or continuously available. Information on this website is for general informational purposes and should not be considered medical or professional advice.
                  </p>
                </CardContent>
              </Card>

              {/* Section 6 */}
              <Card id="liability" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-rose-400 to-rose-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-rose-500 text-sm font-semibold">Section 6</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Limitation of Liability
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Brightway Home Care LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or any information contained herein.
                  </p>
                </CardContent>
              </Card>

              {/* Section 7 */}
              <Card id="links" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-cyan-400 to-cyan-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Link2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-cyan-500 text-sm font-semibold">Section 7</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Third-Party Links
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any linked websites.
                  </p>
                </CardContent>
              </Card>

              {/* Section 8 */}
              <Card id="changes" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-indigo-400 to-indigo-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-indigo-500 text-sm font-semibold">Section 8</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Changes to Terms
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
                  </p>
                </CardContent>
              </Card>

              {/* Section 9 */}
              <Card id="governing" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-purple-400 to-purple-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Gavel className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-purple-500 text-sm font-semibold">Section 9</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Governing Law
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the State of Wisconsin, without regard to its conflict of law provisions.
                  </p>
                </CardContent>
              </Card>

              {/* Section 10 - Contact */}
              <Card id="contact" className="border-0 shadow-xl overflow-hidden scroll-mt-24 bg-gradient-to-br from-blue-800 to-blue-900">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-teal-300 text-sm font-semibold">Section 10</span>
                      <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                        Contact Information
                      </h2>
                    </div>
                  </div>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <a href="tel:+18477459930" className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Phone</p>
                        <p className="text-blue-200 text-xs">+1 (847) 745-9930</p>
                      </div>
                    </a>
                    <a href="mailto:Brightwayhomecarellc@gmail.com" className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Email</p>
                        <p className="text-blue-200 text-xs truncate">Brightwayhomecarellc</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Address</p>
                        <p className="text-blue-200 text-xs">Madison, WI 53704</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* CTA Section */}
      <CTAPremium
        title="Have"
        highlightWord="Questions"
        description="Our team is here to help you understand our services and answer any questions you may have."
      />
    </>
  )
}
