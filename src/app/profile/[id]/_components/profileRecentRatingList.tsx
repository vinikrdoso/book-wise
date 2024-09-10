'use client'

import { getRatingsOnUser } from '@/server/actions/get-ratings-on-user-action'
import { useQuery } from '@tanstack/react-query'
import { ProfileRecentRatingCard } from './profileRecentRatingCard'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ProfileRecentRatingListProps {
  userId: string | undefined
}

export function ProfileRecentRatingList({
  userId,
}: ProfileRecentRatingListProps) {
  const { data: ratingsOnUser, isSuccess: isSuccessRatingsOnUser } = useQuery({
    queryKey: ['ratings-on-user'],
    queryFn: async () => getRatingsOnUser(userId!),
  })

  return (
    <>
      {isSuccessRatingsOnUser && ratingsOnUser?.length > 0 ? (
        <>
          {ratingsOnUser?.map((rating) => (
            <div className="flex flex-col gap-2" key={rating.id}>
              <h3 className="text-sm text-gray-100">
                <span className="text-sm text-gray-400">
                  {formatDistanceToNow(rating.created_at, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </h3>
              <ProfileRecentRatingCard
                rate={rating.rate}
                description={rating.description}
                book={rating.book}
              />
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-title-md text-gray-100">Nenhuma avaliação</h3>
          <span className="text-sm text-gray-400">
            Este usuário ainda não avaliou nenhum livro
          </span>
        </div>
      )}
    </>
  )
}
