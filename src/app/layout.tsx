import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import SessionWrapper from '@/providers/SessionProvider'
import QueryProvider from '@/providers/QueryClientProvider'
import './globals.css'

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
      <QueryProvider>
        <html lang="en">
          <body className={nunito.className} suppressHydrationWarning>
            {children}
          </body>
        </html>
      </QueryProvider>
    </SessionWrapper>
  )
}
