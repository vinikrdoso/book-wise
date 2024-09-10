'use server'

import prisma from '@/lib/prisma'
import { subDays } from 'date-fns'

export async function getRecentReading(userId: string) {
  const sevenDaysAgo = subDays(new Date(), 7)

  const recentReading = await prisma.rating.findFirst({
    where: {
      user_id: userId,
      created_at: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      id: true,
      description: true,
      rate: true,
      created_at: true,
      book: {
        select: {
          author: true,
          name: true,
          cover_url: true,
          summary: true,
        },
      },
    },
  })

  return recentReading
}
