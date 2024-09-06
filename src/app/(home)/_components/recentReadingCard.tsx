import Image from 'next/image'
import { StarRating } from './starRating'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface RecentReadingCardProps {
  book: {
    title: string
    author: string
    rate: number
    description: string
  }
}

export function RecentReadingCard({ book }: RecentReadingCardProps) {
  return (
    <>
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
          src="/images/books/o-hobbit.png"
          width={108}
          height={152}
          alt="O Hobbit"
          className="rounded-[4px]"
        />

        <div className="flex flex-col flex-1 gap-3">
          <div className="flex flex-1 justify-between items-start">
            <span className="text-sm text-gray-300">Há 2 dias</span>
            <StarRating rating={book.rate} />
          </div>

          <div className="flex flex-col justify-between mb-3">
            <div>
              <h4 className="text-title-xs text-gray-100 font-bold">
                {book.title}
              </h4>
              <p className="text-sm text-gray-400">{book.author}</p>
            </div>
          </div>

          <span className="line-clamp-2 text-sm text-gray-300">
            {book.description}
          </span>
        </div>
      </div>
    </>
  )
}
