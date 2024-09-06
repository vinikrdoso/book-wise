import Image from 'next/image'
import { StarRating } from './starRating'

interface BookCardProps {
  popularBook: {
    book: {
      name: string
      cover_url: string
      author: string
      rate: number
    }
    rate: number
  }
}

export function BookCard({ popularBook }: BookCardProps) {
  const { book } = popularBook
  console.log('🚀 ~ BookCard ~ book:', book)
  return (
    <div className="bg-gray-700 w-full p-5 rounded-md flex">
      <Image
        src={`/${book.cover_url}`}
        width={64}
        height={94}
        alt="O Hobbit"
        className="rounded-[4px]"
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
