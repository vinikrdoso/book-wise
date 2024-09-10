'use server'

import prisma from '@/lib/prisma'

export async function getRatingsOnUser(userId: string) {
  const ratingsOnUser = await prisma.rating.findMany({
    where: {
      user_id: userId!,
    },
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
          total_pages: true,
          categories: {
            select: {
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  })

  return ratingsOnUser
}
