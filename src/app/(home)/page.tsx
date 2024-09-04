'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { data, status } = useSession()
  console.log('🚀 ~ Home ~ session:', data, status)

  return (
    <div className="w-full h-full bg-green-100">
      <h1>Home eeeeeeeeee</h1>
    </div>
  )
}
