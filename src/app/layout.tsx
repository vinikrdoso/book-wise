import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import SessionWrapper from '@/providers/SessionProvider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'Rate books from your favorite authors',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={nunito.className}>{children}</body>
      </html>
    </SessionWrapper>
  )
}
