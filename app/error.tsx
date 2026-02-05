'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Home, RefreshCw, Phone } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 px-4">
      <Card className="max-w-lg w-full border-0 shadow-2xl overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />
        <CardContent className="p-8 md:p-12 text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center shadow-lg">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>

          {/* Error Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 font-[family-name:var(--font-heading)]">
            Something Went Wrong
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We apologize for the inconvenience. An unexpected error has occurred.
            Please try again or contact us directly if the problem persists.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={reset}
              className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-blue-900 font-bold"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button asChild variant="outline" className="border-blue-800 text-blue-800">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
            <a
              href="tel:+18477459930"
              className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-teal-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (847) 745-9930
            </a>
          </div>

          {/* Error ID for debugging */}
          {error.digest && (
            <p className="mt-6 text-xs text-gray-400">
              Error ID: {error.digest}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
