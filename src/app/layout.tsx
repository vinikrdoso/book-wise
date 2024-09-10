import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import SessionWrapper from '@/providers/SessionProvider'
import QueryProvider from '@/providers/QueryClientProvider'
import './globals.css'
import { Sidebar } from '@/components/sidebar'

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
    <html lang="en">
      <body className={nunito.className} suppressHydrationWarning>
        <SessionWrapper>
          <QueryProvider>
            <main className="h-screen w-screen flex bg-gray-800">
              <div className="pl-5 py-5">
                <Sidebar />
              </div>
              <div className="flex-1 min-h-screen ">{children}</div>
            </main>
          </QueryProvider>
        </SessionWrapper>
      </body>
    </html>
  )
}
