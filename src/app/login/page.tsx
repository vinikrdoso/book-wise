'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import loginBg from '@/assets/login-bg.png'
import logo from '@/assets/logo.svg'
import googleIcon from '@/assets/logos/google-icon.svg'
import githubIcon from '@/assets/logos/github-icon.svg'
import rocketseatIcon from '@/assets/logos/rocketseat-icon.svg'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { data, status } = useSession()
  const router = useRouter()
  // console.log('🚀 ~ Login ~ session:', data, status)

  return (
    <div className="bg-gray-800 h-screen min-w-screen flex">
      <div className="p-5 relative hidden lg:flex lg:w-[40%] flex-col items-center justify-center overflow-hidden">
        <div className="absolute z-50">
          <Image className="w-[232px]" src={logo} alt="logo" />
        </div>
        <div className="h-full blur-sm">
          <Image
            className="relative w-full h-full object-cover rounded-md"
            src={loginBg}
            quality={100}
            alt="login-bg"
          />
        </div>
      </div>

      <div className="m-auto">
        <h1 className="text-title-lg text-gray-100">Boas vindas!</h1>
        <span className="text-md text-gray-200">
          Faça seu login ou acesse como visitante
        </span>

        <div className="mt-10 flex flex-col gap-4">
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="flex items-center gap-5 bg-gray-600 w-[372px] p-6 rounded-md text-button-lg text-gray-200"
          >
            <Image
              className=""
              src={googleIcon}
              width={32}
              height={32}
              alt="Google Icon"
            />
            Entrar com Google
          </button>
          <button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="flex items-center gap-5 bg-gray-600 w-[372px] p-6 rounded-md text-button-lg text-gray-200"
          >
            <Image
              className=""
              src={githubIcon}
              width={32}
              height={32}
              alt="Google Icon"
            />
            Entrar com Github
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-5 bg-gray-600 w-[372px] p-6 rounded-md text-button-lg text-gray-200"
          >
            <Image
              className=""
              src={rocketseatIcon}
              width={32}
              height={32}
              alt="Google Icon"
            />
            Entrar como visitante
          </button>
        </div>
      </div>
    </div>
  )
}
