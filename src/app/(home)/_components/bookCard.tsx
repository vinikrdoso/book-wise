import Image from 'next/image'
import { StarRating } from './starRating'

interface BookCardProps {
  book: {
    title: string
    author: string
    rate: number
  }
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-gray-700 w-full p-5 rounded-md flex">
      <Image
        src="/images/books/o-hobbit.png"
        width={64}
        height={94}
        alt="O Hobbit"
        className="rounded-[4px]"
      />

      <div className="ml-5 flex flex-col justify-between">
        <div>
          <h4 className="text-title-xs text-gray-100 font-bold">
            {book.title}
          </h4>
          <p className="text-sm text-gray-400">{book.author}</p>
        </div>

        <div>
          <StarRating rating={book.rate} />
        </div>
      </div>
    </div>
  )
}
