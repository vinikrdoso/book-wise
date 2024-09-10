/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string | undefined
    name: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}
