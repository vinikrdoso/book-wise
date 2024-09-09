'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, User } from 'lucide-react'
import { ProfileRecentRatingCard } from './_components/profileRecentRatingCard'
import { useQuery } from '@tanstack/react-query'
import { getRecentRatings } from '@/services/get-recent-ratings'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Profile() {
  const router = useRouter()
  const { data } = useSession()

  const { data: ratings } = useQuery({
    queryKey: ['recent-ratings'],
    queryFn: getRecentRatings,
  })

  return (
    <div className="w-full h-full pt-[72px] px-[96px] flex gap-[64px] overflow-hidden">
      <div className="overflow-y-auto h-[100vh - 72px] mb-5">
        {data?.user ? (
          <div className="flex gap-3 items-center">
            <User className="text-green-100" />
            <h1 className="text-gray-100 text-title-lg">Perfil</h1>
          </div>
        ) : (
          <Link
            href="/"
            className="flex gap-2 items-center text-button-sm text-purple-100 font-bold"
          >
            <ChevronLeft size={16} />
            Voltar
          </Link>
        )}

        <div className="flex flex-1 flex-col gap-6 mt-10">
          {ratings &&
            ratings.map((rating) => (
              <div className="flex flex-col gap-2" key={rating.id}>
                <h3 className="text-sm text-gray-100">
                  <span className="text-sm text-gray-400">
                    {formatDistanceToNow(rating.created_at, {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </span>
                </h3>
                <ProfileRecentRatingCard rating={rating} />
              </div>
            ))}

          <div className="flex flex-col gap-4 mt-10">
            {/* {recentRatings?.map((recentRating) => (
              <RecentRatingCard
                key={recentRating.id}
                recentRating={recentRating}
              />
            ))} */}
          </div>
        </div>
      </div>

      <div>
        <div className="mt-4 w-[324px] flex flex-col gap-3">
          <p>direita</p>
          {/* {popularBooks?.map((popularBook) => (
            <BookCard key={popularBook.book.id} popularBook={popularBook} />
          ))} */}
        </div>
      </div>
    </div>
  )
}
