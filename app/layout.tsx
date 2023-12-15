import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ subsets: ['latin'], weight: [ '400', '500', '600','700'], variable:'--font-poppins'  })

export const metadata: Metadata = {
  title: 'Eventer',
  description: 'A platform where event organizers can post about their events and users can discover and buy tickets for these events.',
  icons: '/assets/images/logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
