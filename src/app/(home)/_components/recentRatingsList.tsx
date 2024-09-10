'use client'

import { getRecentRatings } from '@/server/actions/get-recent-ratings-action'
import { useQuery } from '@tanstack/react-query'
import { RecentRatingCard } from './recentRatingCard'

export function RecentRatingsList() {
  const { data: recentRatings } = useQuery({
    queryKey: ['recent-ratings'],
    queryFn: async () => getRecentRatings(),
  })

  return (
    <div className="flex flex-col gap-4 mt-10">
      <h3 className="text-sm text-gray-100">Avaliações mais recentes</h3>

      {recentRatings?.map((recentRating) => (
        <RecentRatingCard key={recentRating.id} recentRating={recentRating} />
      ))}
    </div>
  )
}
