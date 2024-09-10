'use client'

import { Bookmark, BookOpen, LibraryBig, UserRoundCheck } from 'lucide-react'
import { Avatar } from '@/components/avatar'
import { getYear } from 'date-fns/fp'
import { useQuery } from '@tanstack/react-query'
import { getUserById } from '@/server/actions/get-user-by-id-action'
import { getRatingsOnUser } from '@/server/actions/get-ratings-on-user-action'
import { useMemo } from 'react'

interface ProfileInfosProps {
  userId: string | undefined
}

export function ProfileInfos({ userId }: ProfileInfosProps) {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: async () => getUserById(userId!),
  })

  const { data: ratingsOnUser, isSuccess: isSuccessRatingsOnUser } = useQuery({
    queryKey: ['ratings-on-user'],
    queryFn: async () => getRatingsOnUser(userId!),
  })

  const totalAuthors = useMemo(() => {
    if (isSuccessRatingsOnUser) {
      const authors = new Set<string>()
      ratingsOnUser.forEach((rating) => {
        authors.add(rating.book.author)
      })
      return authors.size
    }
    return 0
  }, [ratingsOnUser, isSuccessRatingsOnUser])

  const totalPages = useMemo(() => {
    return ratingsOnUser?.reduce(
      (acc, rating) => acc + rating.book.total_pages,
      0,
    )
  }, [ratingsOnUser])

  return (
    <div className="mt-4 w-[324px] flex flex-col gap-3 items-center border-l-2 border-l-gray-700 h-auto">
      <div className="flex flex-col items-center gap-5">
        <Avatar user={user} size={72} />
        <div className="flex flex-col items-center">
          <h3 className="text-title-md text-gray-100">
            {user?.name ?? 'Usuário'}
          </h3>
          {user && (
            <span className="text-sm text-gray-400">
              membro desde {getYear(user.created_at)}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-10 py-5 px-[56px]">
        <div className="flex gap-5 items-center">
          <BookOpen className="text-green-100" size={32} />
          <div className="flex flex-col ">
            <span className="text-title-xs text-gray-200">{totalPages}</span>
            <span className="text-sm text-gray-300">Páginas lidas</span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <LibraryBig className="text-green-100" size={32} />
          <div className="flex flex-col ">
            <span className="text-title-xs text-gray-200">
              {ratingsOnUser?.length}
            </span>
            <span className="text-sm text-gray-300">Livros avaliados</span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <UserRoundCheck className="text-green-100" size={32} />
          <div className="flex flex-col ">
            <span className="text-title-xs text-gray-200">{totalAuthors}</span>
            <span className="text-sm text-gray-300">Autores lidos</span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <Bookmark className="text-green-100" size={32} />
          <div className="flex flex-col ">
            <span className="text-title-xs text-gray-200">Horror</span>
            <span className="text-sm text-gray-300">Categoria mais lida</span>
          </div>
        </div>
      </div>
    </div>
  )
}
