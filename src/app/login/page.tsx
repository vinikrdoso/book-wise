'use client'

import { useSession } from 'next-auth/react'

export default function Login() {
  const { data, status } = useSession()
  console.log('🚀 ~ Login ~ session:', data, status)

  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}
