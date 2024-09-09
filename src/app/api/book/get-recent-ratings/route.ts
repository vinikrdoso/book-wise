import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'
import { subDays } from 'date-fns'

export async function GET() {
  const threeDaysAgo = subDays(new Date(), 3)

  const popularBooks = await prisma.rating.findMany({
    where: {
      created_at: {
        gte: threeDaysAgo,
      },
    },
    take: 3,
    select: {
      id: true,
      description: true,
      rate: true,
      created_at: true,
      user: {
        select: {
          name: true,
          avatar_url: true,
        },
      },
      book: {
        select: {
          author: true,
          name: true,
          cover_url: true,
        },
      },
    },
  })

  return NextResponse.json(popularBooks)
}
