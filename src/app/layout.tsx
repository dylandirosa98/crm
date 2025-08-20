import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RoofCRM - Roofing Business Management Platform',
  description: 'Comprehensive SaaS platform for roofing contractors to manage leads, customers, estimates, and projects',
  keywords: ['roofing', 'CRM', 'contractor', 'estimates', 'leads', 'project management'],
  authors: [{ name: 'RoofCRM Team' }],
  openGraph: {
    title: 'RoofCRM - Roofing Business Management Platform',
    description: 'Streamline your roofing business operations with our comprehensive CRM platform',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 