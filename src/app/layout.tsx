import type { Metadata } from 'next'
import './globals.css'
import { CustomCursor } from './components/layout/CustomCursor'

export const metadata: Metadata = {
  title: 'Buzz Law — India\'s Fashion, Influencer & Creator Economy Law Firm',
  description: 'India\'s first law firm built exclusively for fashion brands, influencers, media companies, and the creator economy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}