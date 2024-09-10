import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import Image from 'next/image'

interface AvatarProps {
  user:
    | {
        id?: string
        created_at?: Date
        name: string
        avatar_url: string | null
      }
    | null
    | undefined
  size?: number
}

export function Avatar({ user, size = 40 }: AvatarProps) {
  const sizeClass = size === 40 ? 'h-10 w-10' : 'h-[72px] w-[72px]'

  return (
    <>
      {user?.avatar_url ? (
        <Image
          className={cn(
            'w-[72px] h-[72px] p-1 rounded-full ring-2 ring-gradient-green',
            size && sizeClass,
          )}
          src={user?.avatar_url}
          alt="Bordered avatar"
          width="0"
          height="0"
          sizes="100vw"
        />
      ) : (
        <User
          className={cn(
            'w-[72px] h-[72px] p-1 rounded-full ring-2 ring-gradient-green text-gray-200',
            size && sizeClass,
          )}
          size={size - 10}
        />
      )}
    </>
  )
}
