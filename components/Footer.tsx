import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Heart, ArrowRight, MessageCircle, Shield, Home, Sparkles } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'FAQ', href: '/faq' },
]

const highlights = [
  { icon: Shield, text: 'Licensed & Certified' },
  { icon: Clock, text: '24/7 Care Available' },
  { icon: Home, text: 'Home-Like Setting' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top Wave Divider */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 37 768 43 864 45C960 47 1056 45 1152 41.7C1248 38 1344 33 1392 30.8L1440 28V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#0f172a"/>
        </svg>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative container-max py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Ready to learn more?</p>
                <p className="text-white font-bold text-xl">Call us today: +1 (847) 745-9930</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+18477459930"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-blue-900 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/18477459930"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-950 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container-max py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Company Info - Takes 4 columns */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src="/logo.png"
                  alt="Brightway Home Care"
                  width={180}
                  height={68}
                  className="h-14 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                Providing compassionate, person-centered 24/7 care in a peaceful home setting in Madison, Wisconsin. Your loved ones deserve the best.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10"
                  >
                    <item.icon className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300 text-xs font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-teal-400">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Caring Since 2024</span>
              </div>
            </div>

            {/* Quick Links - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6 font-[family-name:var(--font-heading)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-all inline-flex items-center gap-2 group hover:translate-x-1"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-400" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6 font-[family-name:var(--font-heading)] flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-all inline-flex items-center gap-2 group hover:translate-x-1"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-400" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Takes 4 columns */}
            <div className="lg:col-span-4">
              <h4 className="text-lg font-semibold text-white mb-6 font-[family-name:var(--font-heading)] flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-teal-400" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+18477459930"
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-400/30 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Phone / WhatsApp</p>
                      <p className="font-semibold text-white">+1 (847) 745-9930</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Brightwayhomecarellc@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-400/30 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                      <p className="font-semibold text-white text-sm">Brightwayhomecarellc@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Address</p>
                      <p className="font-semibold text-white">3610 Spenser Ln, Madison, WI 53704</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-current" />
              </div>
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} <span className="text-white font-medium">Brightway Home Care LLC</span>. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">24/7 Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">Madison, WI</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800/50 text-center">
            <p className="text-gray-600 text-xs">
              Some images on this website are sourced from{' '}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-400 transition-colors"
              >
                Unsplash
              </a>
              {' '}and{' '}
              <a
                href="https://www.freepik.com/free-photos-vectors/elderly-home-care"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-400 transition-colors"
              >
                Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
