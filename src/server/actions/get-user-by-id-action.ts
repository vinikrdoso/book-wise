'use server'

import prisma from '@/lib/prisma'

export async function getUserById(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId!,
    },
    select: {
      id: true,
      name: true,
      avatar_url: true,
      created_at: true,
    },
  })

  return user
}
