import Image from 'next/image'
import { StarRating } from '@/components/starRating'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getRecentReading } from '@/server/actions/get-recent-reading-by-user-action'
import { useQuery } from '@tanstack/react-query'

interface RecentReadingCardProps {
  userId: string | undefined
}

export function RecentReadingCard({ userId }: RecentReadingCardProps) {
  const { data: recentReading } = useQuery({
    queryKey: ['recent-reading'],
    queryFn: async () => getRecentReading(userId!),
  })

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-100">Sua última leitura</h3>
        <Link
          href="/"
          className="flex gap-2 items-center text-button-sm text-purple-100 font-bold"
        >
          Ver todas
          <ChevronRight size={16} />
        </Link>
      </div>

      <div className="bg-gray-600 w-full p-5 rounded-md flex gap-6">
        <Image
          src={`/${recentReading?.book?.cover_url}`}
          width="0"
          height="0"
          alt={recentReading?.book?.name ?? 'Livro'}
          sizes="100vw"
          className="rounded-[4px] w-[108px] h-[152px]"
        />

        <div className="flex flex-col flex-1 gap-3">
          <div className="flex flex-1 justify-between items-start">
            <span className="text-sm text-gray-300">Há 2 dias</span>
            <StarRating rating={recentReading?.rate} />
          </div>

          <div className="flex flex-col justify-between mb-3">
            <div>
              <h4 className="text-title-xs text-gray-100 font-bold">
                {recentReading?.book?.name}
              </h4>
              <p className="text-sm text-gray-400">
                {recentReading?.book?.author}
              </p>
            </div>
          </div>

          <span className="line-clamp-2 text-sm text-gray-300">
            {recentReading?.book?.summary}
          </span>
        </div>
      </div>
    </div>
  )
}
