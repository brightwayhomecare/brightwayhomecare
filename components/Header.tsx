'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Phone, Mail, Menu } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Main Navigation */}
      <nav className="bg-white shadow-md border-b border-gray-100">
        <div className="container-max">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Brightway Home Care - Go to homepage">
              <Image
                src="/logo.png"
                alt="Brightway Home Care LLC"
                width={180}
                height={68}
                className="h-14 md:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={`text-base font-semibold transition-colors hover:text-teal-500 ${
                    pathname === item.href
                      ? 'text-blue-800'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+18477459930"
                aria-label="Call Brightway Home Care at +1 847-745-9930"
                className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href="mailto:Brightwayhomecarellc@gmail.com"
                aria-label="Email Brightway Home Care"
                className="inline-flex items-center gap-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-50 rounded-full px-6 py-3 font-semibold transition-all"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Email
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 text-blue-800 hover:bg-gray-100 rounded-lg">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white border-gray-200 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="p-6 border-b border-gray-100">
                    <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <Image
                        src="/logo.png"
                        alt="Brightway Home Care"
                        width={160}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </Link>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex-1 p-6" aria-label="Mobile navigation">
                    <ul className="space-y-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={pathname === item.href ? 'page' : undefined}
                            className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                              pathname === item.href
                                ? 'bg-blue-800 text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-gray-100 space-y-3">
                    <a
                      href="tel:+18477459930"
                      aria-label="Call Brightway Home Care at +1 847-745-9930"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-blue-800 text-white font-semibold rounded-full"
                    >
                      <Phone className="w-5 h-5" aria-hidden="true" />
                      +1 (847) 745-9930
                    </a>
                    <a
                      href="mailto:Brightwayhomecarellc@gmail.com"
                      aria-label="Email Brightway Home Care"
                      className="flex items-center justify-center gap-2 w-full py-4 border-2 border-blue-800 text-blue-800 font-medium rounded-full"
                    >
                      <Mail className="w-5 h-5" aria-hidden="true" />
                      Email Us
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
