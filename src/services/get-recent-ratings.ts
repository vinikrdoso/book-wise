import { api } from '@/lib/axios'

type GetRecentRatingsResponse = {
  id: string
  rate: number
  created_at: string
  description: string
  book: {
    name: string
    author: string
    cover_url: string
  }
  user: {
    name: string
    avatar_url: string
  }
}[]

export async function getRecentRatings() {
  const res = await api.get<GetRecentRatingsResponse>(
    '/book/get-recent-ratings',
  )
  return res.data
}
