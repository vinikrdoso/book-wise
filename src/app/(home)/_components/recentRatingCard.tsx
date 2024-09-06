import Image from 'next/image'
import { StarRating } from './starRating'

interface RecentRatingCardProps {
  book: {
    title: string
    author: string
    rate: number
    description: string
  }
}

export function RecentRatingCard({ book }: RecentRatingCardProps) {
  return (
    <div className="bg-gray-700 w-full p-5 rounded-md flex flex-col gap-6">
      <div className="flex flex-1 justify-between items-start">
        <div className="flex gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/8796724?v=4"
            width={40}
            height={40}
            alt="User"
            className="h-10 rounded-full border-2 border-gradient-green"
          />
          <div>
            <p className="text-md text-gray-100">Michael Jackson</p>
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
        </div>
        <StarRating rating={book.rate} />
      </div>

      <div className="flex gap-5">
        <Image
          src="/images/books/o-hobbit.png"
          width={108}
          height={152}
          alt="O Hobbit"
          className="rounded-[4px]"
        />

        <div className="flex flex-col flex-1 gap-3">
          <div className="flex flex-col justify-between mb-3">
            <div>
              <h4 className="text-title-xs text-gray-100 font-bold">
                {book.title}
              </h4>
              <p className="text-sm text-gray-400">{book.author}</p>
            </div>
          </div>

          <span className="line-clamp-4 text-sm text-gray-300">
            {book.description}
          </span>
        </div>
      </div>
    </div>
  )
}
