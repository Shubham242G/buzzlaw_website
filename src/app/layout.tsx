// app/layout.tsx
import './globals.css'
import ClientLayout from './client-layout'

export const metadata = {
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
      <body className="bg-black text-[#f5f0e8] overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}