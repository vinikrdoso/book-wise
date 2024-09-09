'use client'

// import { useSession } from 'next-auth/react'
import { ChartLine, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { BookCard } from './_components/bookCard'

import { RecentReadingCard } from './_components/recentReadingCard'
import { RecentRatingCard } from './_components/recentRatingCard'
import { useQuery } from '@tanstack/react-query'
import { getPopularBooks } from '@/services/get-popular-books'
import { getRecentRatings } from '@/services/get-recent-ratings'

export default function Home() {
  // const { data, status } = useSession()

  const { data: popularBooks } = useQuery({
    queryKey: ['popular-books'],
    queryFn: getPopularBooks,
  })

  const { data: recentRatings } = useQuery({
    queryKey: ['recent-ratings'],
    queryFn: getRecentRatings,
  })

  const book = {
    title: 'O Hobbit',
    author: 'J. R. R. Tolkien',
    rate: 2.5,
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet  vestibulum imperdiet vestibulum imperdiet a at imperdiet lectu...',
  }

  return (
    <div className="w-full h-full pt-[72px] px-[96px] flex gap-[64px] overflow-hidden">
      <div className="overflow-y-auto h-[100vh - 72px] mb-5">
        <div className="flex gap-3 items-center">
          <ChartLine className="text-green-100" />
          <h1 className="text-gray-100 text-title-lg">Início</h1>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <RecentReadingCard book={book} />

          <div className="flex flex-col gap-4 mt-10">
            <h3 className="text-sm text-gray-100">Avaliações mais recentes</h3>

            {recentRatings?.map((recentRating) => (
              <RecentRatingCard
                key={recentRating.book.id}
                recentRating={recentRating}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-gray-100">Livros populares</h3>
          <Link
            href="/"
            className="flex gap-2 items-center text-button-sm text-purple-100 font-bold"
          >
            Ver todos
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="mt-4 w-[324px] flex flex-col gap-3">
          {popularBooks?.map((popularBook) => (
            <BookCard key={popularBook.book.id} popularBook={popularBook} />
          ))}
        </div>
      </div>
    </div>
  )
}
