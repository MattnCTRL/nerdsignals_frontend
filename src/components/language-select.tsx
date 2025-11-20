'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import { languages } from '@/config/languages'
import useClickOutside from '@/hooks/use-click-outside'
import { cn } from '@/utils/cn'

type Props = {
  className?: string
}

const LanguageSelect: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useClickOutside(() => setIsOpen(false))

  const { i18n } = useTranslation()

  return (
    <div className={cn('relative', className)} ref={ref}>
      <div
        className='flex cursor-pointer items-center px-2'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className='text-base/4 font-medium'>{languages[i18n.language].name}</p>
        <Icon icon={`circle-flags:${languages[i18n.language].flag}`} className='ml-2.5 text-sm' />
        <Icon icon='material-symbols:chevron-right-rounded' className='ml-2 rotate-90 text-base' />
      </div>

      {isOpen && (
        <div className='absolute right-0 -bottom-2 max-w-none translate-y-full bg-black'>
          {Object.keys(languages).map((lng) => (
            <React.Fragment key={lng}>
              {lng === i18n.language ? (
                <></>
              ) : (
                <Link
                  href={`/${lng}`}
                  className='flex items-center px-2 py-2 hover:bg-white/10'
                  onClick={() => setIsOpen(false)}
                >
                  <p className='w-20 pr-2 text-base/4 font-medium'>{languages[lng].name}</p>
                  <Icon icon={`circle-flags:${languages[lng].flag}`} className='ml-2.5 text-sm' />
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelect
