'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import LogoImage from '@/assets/images/logo.png'
import LanguageSelect from './language-select'

type Me = { id: number; username: string } | null

const Header: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [me, setMe] = useState<Me>(null)

  async function refreshMe() {
    try {
      const res = await fetch('https://auth.nerdsignals.com/auth/me', {
        method: 'GET',
        credentials: 'include',
      })
      if (!res.ok) {
        setMe(null)
        return
      }
      const data = (await res.json()) as Me
      setMe(data)
    } catch {
      // Network/tunnel hiccup: treat as logged out
      setMe(null)
    }
  }

  useEffect(() => {
    refreshMe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function onLogout() {
    try {
      await fetch('https://auth.nerdsignals.com/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
    } catch {
      // ignore
    } finally {
      await refreshMe()
      router.push('/')
    }
  }

  return (
    <header className='fixed top-[30px] right-0 left-0 z-50 lg:top-9'>
      <div className='container grid grid-cols-3 items-center'>
        <div className='flex items-center justify-start'>
          <Image src={LogoImage} alt='Nerd Signals Logo' className='h-16 w-fit' />
        </div>
        <div className='flex justify-center'>
          <span className='text-2xl font-semibold tracking-tight'>
            Nerd<span className='text-[#5ad0ff]'>Signals</span>
          </span>
        </div>
        <div className='flex items-center justify-end gap-2 lg:gap-7'>
          <LanguageSelect />
          <div className='flex items-center gap-2'>
            {me ? (
              <>
                <button
                  className='contained uppercase'
                  onClick={() => router.push('/dashboard')}
                  type='button'
                >
                  Dashboard
                </button>
                <button
                  className='rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold uppercase hover:bg-white/5 lg:px-5'
                  onClick={onLogout}
                  type='button'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className='contained uppercase'
                  onClick={() => router.push('/login')}
                  type='button'
                >
                  {t('button.login')}
                </button>
                <button
                  className='rounded-full border border-[#5ad0ff] bg-[#5ad0ff] px-4 py-2.5 text-sm font-semibold text-[#0b1020] uppercase hover:brightness-110 lg:px-5'
                  onClick={() => router.push('/create-account')}
                  type='button'
                >
                  {t('button.createAccount')}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
