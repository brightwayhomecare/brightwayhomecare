'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import CTAPremium from '@/components/CTAPremium'
import {
  Shield,
  Database,
  Eye,
  Share2,
  Lock,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUp,
  RefreshCw,
  CheckCircle2,
  Fingerprint
} from 'lucide-react'

const sections = [
  { id: 'collect', title: 'Information We Collect', icon: Database },
  { id: 'use', title: 'How We Use Your Information', icon: Eye },
  { id: 'sharing', title: 'Information Sharing', icon: Share2 },
  { id: 'security', title: 'Data Security', icon: Lock },
  { id: 'rights', title: 'Your Rights', icon: UserCheck },
  { id: 'contact', title: 'Contact Us', icon: Phone },
]

const trustBadges = [
  { icon: Lock, text: 'Encrypted Data' },
  { icon: Shield, text: 'Privacy Protected' },
  { icon: Fingerprint, text: 'Secure Storage' },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('collect')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)

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
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-teal-300/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container-max py-20 text-center">
          <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2.5 text-sm">
            <Shield className="w-4 h-4 mr-2 text-teal-300" />
            Your Privacy Matters
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            <span className="text-white">Privacy</span>{' '}
            <span className="text-teal-300 drop-shadow-[0_0_30px_rgba(94,234,212,0.5)]">Policy</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We are committed to protecting your personal information and your right to privacy
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <badge.icon className="w-4 h-4 text-teal-300" />
                <span className="text-white text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

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
                  Quick Navigation
                </h3>
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeSection === section.id
                          ? 'bg-white/20'
                          : 'bg-gray-100 group-hover:bg-teal-100'
                      }`}>
                        <section.icon className={`w-4 h-4 ${
                          activeSection === section.id
                            ? 'text-white'
                            : 'text-gray-500 group-hover:text-teal-600'
                        }`} />
                      </div>
                      <span className="text-sm font-medium truncate">{section.title}</span>
                    </button>
                  ))}
                </nav>

                {/* Trust Card */}
                <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-800">Your Trust Matters</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We never sell your personal information to third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Section 1 */}
              <Card id="collect" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-teal-400 to-teal-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-teal-500 text-sm font-semibold">Section 1</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Information We Collect
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At Brightway Home Care LLC, we collect information that you provide directly to us, including:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: 'Name, email address, and phone number', icon: UserCheck },
                      { text: 'Information about care needs', icon: Database },
                      { text: 'Any other information you provide', icon: Eye },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl">
                        <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-teal-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card id="use" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-blue-400 to-blue-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-blue-500 text-sm font-semibold">Section 2</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        How We Use Your Information
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Respond to your inquiries and provide customer service',
                      'Provide information about our care services',
                      'Schedule tours and consultations',
                      'Comply with legal obligations'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card id="sharing" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-violet-400 to-violet-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Share2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-violet-500 text-sm font-semibold">Section 3</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Information Sharing
                      </h2>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">We Never Sell Your Data</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our website or servicing you, as long as those parties agree to keep this information confidential.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card id="security" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-emerald-500 text-sm font-semibold">Section 4</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Data Security
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { icon: Lock, title: 'Encryption', desc: 'Data encrypted in transit' },
                      { icon: Shield, title: 'Protection', desc: 'Secure data storage' },
                      { icon: Fingerprint, title: 'Access Control', desc: 'Limited data access' },
                    ].map((item, i) => (
                      <div key={i} className="text-center p-4 bg-emerald-50 rounded-xl">
                        <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card id="rights" className="border-0 shadow-lg overflow-hidden scroll-mt-24">
                <div className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-amber-500 text-sm font-semibold">Section 5</span>
                      <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                        Your Rights
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    You have the right to:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Access', desc: 'View the personal information we hold about you' },
                      { title: 'Correction', desc: 'Request correction of inaccurate information' },
                      { title: 'Deletion', desc: 'Request deletion of your information' },
                      { title: 'Opt-out', desc: 'Unsubscribe from marketing communications' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                        <ChevronRight className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section 6 - Contact */}
              <Card id="contact" className="border-0 shadow-xl overflow-hidden scroll-mt-24 bg-gradient-to-br from-teal-600 to-teal-700">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-teal-200 text-sm font-semibold">Section 6</span>
                      <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                        Contact Us
                      </h2>
                    </div>
                  </div>
                  <p className="text-teal-100 leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <a href="tel:+18477459930" className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Phone</p>
                        <p className="text-teal-200 text-xs">+1 (847) 745-9930</p>
                      </div>
                    </a>
                    <a href="mailto:Brightwayhomecarellc@gmail.com" className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Email</p>
                        <p className="text-teal-200 text-xs truncate">Brightwayhomecarellc</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Address</p>
                        <p className="text-teal-200 text-xs">Madison, WI 53704</p>
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
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* CTA Section */}
      <CTAPremium
        title="Have Privacy"
        highlightWord="Concerns"
        description="We take your privacy seriously. Contact us if you have any questions about how we handle your information."
      />
    </>
  )
}
