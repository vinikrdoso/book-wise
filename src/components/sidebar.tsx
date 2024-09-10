'use client'

import logo from '@/assets/logo.svg'
import { cn } from '@/lib/utils'
import { Binoculars, ChartLine, LogIn, LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar } from './avatar'

export function Sidebar() {
  const pathname = usePathname()
  const { status, data } = useSession()

  const user = data?.user
  const username = user?.name?.split(' ')[0] ?? ''

  if (pathname === '/login') return null

  const isProfile = pathname.includes('profile')

  return (
    <aside
      className="bg-gray-700 h-full w-[232px] px-[52px] pt-10 pb-6 rounded-[12px]
                  bg-gradient-to-br  from-purple-200 from-1%  via-gray-800 via-20% to-green-200 to-1%
                  flex flex-col items-center"
    >
      <Image src={logo} alt="logo" />

      <nav className="mt-[64px] flex flex-col flex-1 gap-4 text-gray-400 text-button-md">
        <Link
          href="/"
          className={cn('flex gap-3', pathname === '/' && 'text-gray-100')}
        >
          <div
            className={cn(
              'h-full w-1 rounded-full bg-transparent',
              pathname === '/' && 'bg-green-100',
            )}
          />
          <ChartLine size={24} />
          Início
        </Link>

        <Link
          href="/explorar"
          className={cn(
            'flex gap-3',
            pathname === '/explorar' && 'text-gray-100',
          )}
        >
          <div
            className={cn(
              'h-full w-1 rounded-full bg-transparent',
              pathname === '/explorar' && 'bg-green-100',
            )}
          />
          <Binoculars size={24} />
          Explorar
        </Link>

        {user && (
          <Link
            href={`/profile/${user?.id}`}
            className={cn('flex gap-3', isProfile && 'text-gray-100')}
          >
            <div
              className={cn(
                'h-full w-1 rounded-full bg-transparent',
                isProfile && 'bg-green-100',
              )}
            />
            <Binoculars size={24} />
            Perfil
          </Link>
        )}
      </nav>

      <div>
        {status === 'authenticated' ? (
          <div className="flex items-center gap-3 text-button-md text-gray-200">
            <Avatar user={data?.user} /> {username}
            <button onClick={() => signOut()}>
              <LogOut className="text-danger" size={20} />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-3 text-button-md text-gray-200"
          >
            Explorar
            <LogIn className="text-green-100" size={20} />
          </Link>
        )}
      </div>
    </aside>
  )
}
