import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://noctiluca.ai'),
  title: {
    default: 'noctiluca.ai — AI Systems for Business',
    template: '%s | noctiluca.ai',
  },
  description:
    'We build AI-powered business systems that automate sales, operations, and customer management. Built for marketing agencies, recruitment firms, real estate, logistics, and travel companies.',
  keywords: [
    'AI automation',
    'AI sales agents',
    'AI calling agents',
    'CRM automation',
    'business AI systems',
    'workflow automation',
    'lead generation automation',
    'appointment booking AI',
    'customer support AI',
  ],
  authors: [{ name: 'noctiluca.ai' }],
  creator: 'noctiluca.ai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noctiluca.ai',
    siteName: 'noctiluca.ai',
    title: 'noctiluca.ai — AI Systems for Business',
    description:
      'AI-powered business systems that automate your sales, operations, and customer management.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'noctiluca.ai — AI Systems for Business',
    description:
      'AI-powered business systems that automate your sales, operations, and customer management.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
