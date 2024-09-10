import Image from 'next/image'
import { StarRating } from '@/components/starRating'

interface ProfileRecentRatingCardProps {
  rate: number
  description: string
  book: {
    name: string
    author: string
    cover_url: string
    total_pages: number
    categories: { category: { name: string } }[]
  }
}

export function ProfileRecentRatingCard({
  rate,
  description,
  book,
}: ProfileRecentRatingCardProps) {
  return (
    <div className="bg-gray-700 w-full h-auto p-5 rounded-md flex flex-col gap-6">
      <div className="flex flex-1 gap-6">
        <Image
          src={`/${book.cover_url}`}
          width="0"
          height="0"
          alt={book.name}
          sizes="100vw"
          className="rounded-[4px] w-[108px] h-[152px]"
        />
        <div className="flex flex-col justify-between mb-3">
          <div>
            <h4 className="text-title-xs text-gray-100 font-bold">
              {book.name}
            </h4>
            <p className="text-sm text-gray-400">{book.author}</p>
          </div>
          <StarRating rating={rate} />
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col flex-1 gap-3">
          <span className="text-sm text-gray-300">{description}</span>
        </div>
      </div>
    </div>
  )
}
