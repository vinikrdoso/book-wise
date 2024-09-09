import { User } from 'lucide-react'
import Image from 'next/image'

interface AvatarProps {
  user:
    | {
        avatar_url?: string | null
        name?: string | null
        email?: string | null
      }
    | undefined
}

export function Avatar({ user }: AvatarProps) {
  return (
    <div className="h-10 w-10 rounded-full border-2 border-gradient-green flex items-center justify-center">
      {user?.avatar_url ? (
        <Image
          src={user?.avatar_url}
          width={40}
          height={40}
          alt={user?.name ?? 'Avatar'}
          className="rounded-full  "
        />
      ) : (
        <User size={30} />
      )}
    </div>
  )
}
