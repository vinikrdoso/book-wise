import GitHubProvider from 'next-auth/providers/github'
import NextAuth, { type User, type Session } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const nextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      // profile(profile: GithubProfile) {
      //   return {
      //     id: profile.id.toString(),
      //     name: profile.name,
      //     email: profile.email,
      //     avatar_url: profile.avatar_url,
      //   }
      // },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      // authorization: { params: { scope: 'openid email profile' } },
      // profile(profile: GoogleProfile) {
      //   // console.log('🚀 ~ profile ~ profile:', profile)
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     avatar_url: profile.picture,
      //   }
      // },
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      return {
        ...session,
        user,
      }
    },
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
