'use client'

import { useEffect } from 'react'

/**
 * Tawk.to Live Chat Integration Component
 *
 * This component integrates Tawk.to live chat widget into the application.
 * It loads asynchronously to prevent blocking the main page rendering.
 *
 * Default Configuration:
 * - Property ID: 69a6170c24cf1b1c3d9668f9
 * - Widget ID: 1jioj9mjg
 *
 * Environment Variables (optional):
 * - NEXT_PUBLIC_TAWK_PROPERTY_ID
 * - NEXT_PUBLIC_TAWK_WIDGET_ID
 *
 * Features:
 * - Async loading for optimal performance
 * - TypeScript support
 * - Customizable widget appearance
 * - Pre-chat form with visitor info
 */

// Tawk.to TypeScript declarations
declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: Date
  }
}

export default function TawkToChat() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || '69a6170c24cf1b1c3d9668f9'
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || '1jioj9mjg'

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return

    // Check if Tawk.to is already loaded
    if (window.Tawk_API) {
      console.log('Tawk.to already loaded')
      return
    }

    // Initialize Tawk_API and LoadStart
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // Optional: Customize widget appearance and behavior
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: 'br', // bottom-right
          xOffset: 20,
          yOffset: 20,
        },
        mobile: {
          position: 'br',
          xOffset: 10,
          yOffset: 10,
        },
      },
    }

    // Optional: Set visitor attributes for better context
    window.Tawk_API.onLoad = function () {
      console.log('Tawk.to Live Chat loaded successfully')

      // Set visitor name and email if available (can be enhanced with user auth)
      // window.Tawk_API.setAttributes({
      //   name: 'Visitor Name',
      //   email: 'visitor@example.com',
      // }, function(error) {
      //   if (error) console.error('Error setting Tawk.to attributes:', error)
      // })
    }

    // Create and inject the script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    // Insert script into the document
    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    }

    // Cleanup function
    return () => {
      // Optional: Remove script on component unmount if needed
      // Note: Tawk.to doesn't require cleanup in most cases
    }
  }, [propertyId, widgetId])

  return null // This component doesn't render anything
}
