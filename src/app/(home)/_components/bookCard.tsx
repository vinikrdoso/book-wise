import Image from 'next/image'
import { StarRating } from './starRating'

interface BookCardProps {
  popularBook: {
    book: {
      name: string
      cover_url: string
      author: string
    }
    rate: number
  }
}

export function BookCard({ popularBook }: BookCardProps) {
  const { book } = popularBook

  return (
    <div className="bg-gray-700 w-full p-5 rounded-md flex">
      <Image
        src={`/${book.cover_url}`}
        width="0"
        height="0"
        alt={book.name}
        sizes="100vw"
        className="rounded-[4px] w-[64px] h-[94px]"
      />

      <div className="ml-5 flex flex-col justify-between">
        <div>
          <h4 className="text-title-xs text-gray-100 font-bold">
            {book?.name}
          </h4>
          <p className="text-sm text-gray-400">{book?.author}</p>
        </div>

        <div>
          <StarRating rating={popularBook.rate} />
        </div>
      </div>
    </div>
  )
}
