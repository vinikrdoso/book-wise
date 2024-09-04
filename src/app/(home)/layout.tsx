'use client'

import { useSession } from 'next-auth/react'
import { Sidebar } from './_components/sidebar'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const { data, status } = useSession()
  console.log('🚀 ~ Home ~ session:', data, status)

  return (
    <main className="min-h-screen w-screen flex bg-gray-800">
      <div className="pl-5 py-5">
        <Sidebar />
      </div>
      <div className="flex-1 h-screen">{children}</div>
    </main>
  )
}
