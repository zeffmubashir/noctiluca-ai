import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
  return str.trim().slice(0, 2000)
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await request.json()

    const name = sanitize(body.name ?? '')
    const email = sanitize(body.email ?? '')
    const company = sanitize(body.company ?? '')
    const message = sanitize(body.message ?? '')

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message is too short. Please provide more detail.' },
        { status: 400 }
      )
    }

    // Submission is valid — log for now, wire to Resend in a later step
    console.log('[noctiluca.ai] New contact submission:', {
      name,
      email,
      company: company || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') ?? 'unknown',
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Message received. We will be in touch within 24 hours.',
      },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong on our end. Please try again.' },
      { status: 500 }
    )
  }
}
