import Image from 'next/image'
import { StarRating } from '@/components/starRating'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from '@/components/avatar'

interface RecentRatingCardProps {
  recentRating: {
    id: string
    rate: number
    description: string
    created_at: string
    book: {
      name: string
      author: string
      cover_url: string
    }
    user: {
      name: string
      avatar_url: string
    }
  }
}

export function RecentRatingCard({ recentRating }: RecentRatingCardProps) {
  const { book } = recentRating

  return (
    <div className="bg-gray-700 w-full p-5 rounded-md flex flex-col gap-6">
      <div className="flex flex-1 justify-between items-start">
        <div className="flex gap-4">
          <Avatar user={recentRating.user} />
          <div>
            <p className="text-md text-gray-100">{recentRating.user.name}</p>
            <span className="text-sm text-gray-400">
              {formatDistanceToNow(recentRating.created_at, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
        <StarRating rating={recentRating.rate} />
      </div>

      <div className="flex gap-5">
        <Image
          src={`/${book.cover_url}`}
          width="0"
          height="0"
          alt={book.name}
          sizes="100vw"
          className="rounded-[4px] w-[108px] h-[152px]"
        />

        <div className="flex flex-col flex-1 gap-3">
          <div className="flex flex-col justify-between mb-3">
            <div>
              <h4 className="text-title-xs text-gray-100 font-bold">
                {book.name}
              </h4>
              <p className="text-sm text-gray-400">{book.author}</p>
            </div>
          </div>

          <span className="line-clamp-4 text-sm text-gray-300">
            {recentRating.description}
          </span>
        </div>
      </div>
    </div>
  )
}
