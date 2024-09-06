import { api } from '@/lib/axios'

type GetPopularBooksResponse = {
  book: {
    id: string
    name: string
    cover_url: string
    author: string
    rate: number
  }
  rate: number
}[]

export async function getPopularBooks() {
  const res = await api.get<GetPopularBooksResponse>('/book/get-popular-books')
  return res.data
}
