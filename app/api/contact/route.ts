import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { siteConfig } from '@/lib/config'

// Resend will be initialized lazily when needed
let resend: Resend | null = null

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) {
    return null
  }
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

// Simple in-memory rate limiting (use Redis in production for multi-instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_REQUESTS = parseInt(process.env.RATE_LIMIT_REQUESTS || '5')
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000')

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (record.count >= RATE_LIMIT_REQUESTS) {
    return false
  }

  record.count++
  return true
}

// Validation schema (matches frontend)
const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number').min(10),
  email: z.string().email('Please enter a valid email address'),
  inquiryType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
})

// Sanitize input to prevent XSS
function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.flatten() },
        { status: 400 }
      )
    }

    const { fullName, phone, email, inquiryType, message } = validationResult.data

    // Sanitize all inputs
    const sanitizedData = {
      fullName: sanitize(fullName),
      phone: sanitize(phone),
      email: sanitize(email),
      inquiryType: inquiryType ? sanitize(inquiryType) : 'General Inquiry',
      message: sanitize(message),
    }

    // Check if Resend API key is configured
    const resendClient = getResend()
    if (!resendClient) {
      console.error('RESEND_API_KEY is not configured')
      // In development, log the form data instead
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode - Form data:', sanitizedData)
        return NextResponse.json({ success: true, message: 'Form submitted (dev mode)' })
      }
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email via Resend
    const { data, error } = await resendClient.emails.send({
      from: process.env.CONTACT_FORM_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`,
      to: process.env.CONTACT_FORM_TO_EMAIL || siteConfig.email,
      replyTo: sanitizedData.email,
      subject: `New Contact Form: ${sanitizedData.inquiryType} from ${sanitizedData.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #93c5fd; margin: 10px 0 0 0;">From ${siteConfig.name} Website</p>
          </div>

          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e3a8a; width: 140px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e3a8a;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="tel:${sanitizedData.phone}" style="color: #2563eb; text-decoration: none;">${sanitizedData.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e3a8a;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${sanitizedData.email}" style="color: #2563eb; text-decoration: none;">${sanitizedData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e3a8a;">Inquiry Type:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="background: #dbeafe; color: #1e3a8a; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${sanitizedData.inquiryType}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <h3 style="color: #1e3a8a; margin: 0 0 12px 0; font-size: 16px;">Message:</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; white-space: pre-wrap;">${sanitizedData.message}</p>
              </div>
            </div>
          </div>

          <div style="background: #1e3a8a; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: #93c5fd; margin: 0; font-size: 14px;">
              This email was sent from the contact form at<br>
              <a href="${siteConfig.url}" style="color: #5eead4; text-decoration: none;">${siteConfig.url}</a>
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission from ${siteConfig.name}

Name: ${sanitizedData.fullName}
Phone: ${sanitizedData.phone}
Email: ${sanitizedData.email}
Inquiry Type: ${sanitizedData.inquiryType}

Message:
${sanitizedData.message}

---
This email was sent from the contact form at ${siteConfig.url}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // Success
    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      id: data?.id,
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
