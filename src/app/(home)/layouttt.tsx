'use client'

import { Sidebar } from './_components/sidebar'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className="h-screen w-screen flex bg-gray-800">
      <div className="pl-5 py-5">
        <Sidebar />
      </div>
      <div className="flex-1 min-h-screen ">{children}</div>
    </main>
  )
}
