import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET() {
  const popularBooks = await prisma.rating.findMany({
    where: {
      rate: {
        gte: 5,
      },
    },
    take: 4,
    select: {
      rate: true,
      book: {
        select: {
          id: true,
          author: true,
          name: true,
          cover_url: true,
        },
      },
    },
  })

  return NextResponse.json(popularBooks)
}
