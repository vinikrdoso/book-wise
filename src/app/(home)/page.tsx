'use client'

// import { useSession } from 'next-auth/react'
import { ChartLine, ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { getRecentRatings } from '@/server/actions/get-recent-ratings-action'
import { getPopularBooks } from '@/server/actions/get-popular-books-action'

import { RecentReadingCard } from './_components/recentReadingCard'
import { PopularBooksList } from './_components/popularBooksList'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { RecentRatingsList } from './_components/recentRatingsList'

export default function Home() {
  // const { data, status } = useSession()

  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['popular-books'],
    queryFn: getPopularBooks,
  })

  queryClient.prefetchQuery({
    queryKey: ['recent-ratings'],
    queryFn: getRecentRatings,
  })

  const book = {
    name: 'O Hobbit',
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

        <div className="flex flex-1 flex-col gap-4 mt-10">
          <RecentReadingCard book={book} />

          <RecentRatingsList />
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

        <HydrationBoundary state={dehydrate}>
          <PopularBooksList />
        </HydrationBoundary>
      </div>
    </div>
  )
}
