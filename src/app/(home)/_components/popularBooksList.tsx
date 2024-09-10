'use client'

import { useQuery } from '@tanstack/react-query'
import { getPopularBooks } from '@/server/actions/get-popular-books'
import { BookCard } from './bookCard'

export function PopularBooksList() {
  const { data: popularBooks } = useQuery({
    queryKey: ['popular-books'],
    queryFn: async () => getPopularBooks(),
  })

  return (
    <div className="mt-4 w-[324px] flex flex-col gap-3">
      {popularBooks?.map((popularBook) => (
        <BookCard key={popularBook.book.id} popularBook={popularBook} />
      ))}
    </div>
  )
}
