'use client'

import { usePathname } from 'next/navigation'
import { ChevronLeft, User } from 'lucide-react'
import { getRatingsOnUser } from '@/server/actions/get-ratings-on-user-action'
import { getUserById } from '@/server/actions/get-user-by-id-action'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { ProfileInfos } from './_components/profileInfos'
import { ProfileRecentRatingList } from './_components/profileRecentRatingList'

export default function Profile() {
  const pathname = usePathname()
  const { data } = useSession()

  const userId = pathname.split('/').pop()

  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: () => getUserById(userId!),
  })

  queryClient.prefetchQuery({
    queryKey: ['ratings-on-user'],
    queryFn: () => getRatingsOnUser(userId!),
  })

  const isOwnProfile = data?.user?.id === userId

  return (
    <div className="w-full h-full pt-[72px] px-[96px] flex gap-[64px] overflow-hidden">
      <div className="overflow-y-auto h-[100vh - 72px] mb-5 w-full">
        {isOwnProfile ? (
          <div className="flex gap-3 items-center">
            <User className="text-green-100" />
            <h1 className="text-gray-100 text-title-lg">Perfil</h1>
          </div>
        ) : (
          <Link
            href="/"
            className="flex gap-2 items-center text-button-sm text-purple-100 font-bold"
          >
            <ChevronLeft size={16} />
            Voltar
          </Link>
        )}

        <div className="flex flex-1 flex-col gap-6 mt-10 w-full">
          <HydrationBoundary state={dehydrate}>
            <ProfileRecentRatingList userId={userId} />
          </HydrationBoundary>
        </div>
      </div>

      <div>
        <HydrationBoundary state={dehydrate}>
          <ProfileInfos userId={userId} />
        </HydrationBoundary>
      </div>
    </div>
  )
}
