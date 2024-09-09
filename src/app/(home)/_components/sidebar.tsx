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

  return (
    <aside
      className="bg-gray-700 h-full w-[232px] px-[52px] pt-10 pb-6 rounded-[12px]
                  bg-gradient-to-br  from-purple-200 from-1%  via-gray-800 via-20% to-green-200 to-1%
                  flex flex-col items-center"
    >
      <Image src={logo} alt="logo" />

      <nav className="mt-[64px] flex flex-col flex-1 gap-4">
        <Link
          href="/"
          className={cn(
            'flex gap-3 before:border-l-4 before:rounded-full before:border-green-100 text-button-md text-gray-400',
            pathname === '/' && 'text-gray-100',
          )}
        >
          <ChartLine size={24} />
          Início
        </Link>
        <Link
          href="/explorar"
          className={cn(
            'flex gap-3 before:border-l-4 before:rounded-full before:border-green-100 text-button-md text-gray-400',
            pathname === 'explorar' && 'text-gray-100',
          )}
        >
          <Binoculars size={24} />
          Explorar
        </Link>
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
