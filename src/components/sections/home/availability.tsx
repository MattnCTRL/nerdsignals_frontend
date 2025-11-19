'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import AvailabilityImage from '@/assets/images/availability.png'

const AvailabilitySection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='availability'>
      <div className='container flex items-center gap-4'>
        <Image src={AvailabilityImage} alt='' className='w-[620px]' />

        <div className='ml-auto w-full max-w-[600px] shrink-0'>
          <h3>{t('availability.title')}</h3>

          <p className='mt-6 text-lg/[25px] text-[#A8AEED]'>{t('availability.subtitle')}</p>

          <div className='mt-6 flex gap-4'>
            <button className='flex h-14 items-center gap-6 rounded-full border border-[#242949] bg-[#1D2137] px-9 backdrop-blur-xs'>
              <Icon icon='logos:google-play-icon' className='text-[32px]' />
              <span className='flex flex-col text-left'>
                <span className='text-xs uppercase'>{t('button.getItOn')}</span>
                <span className='text-base/5 font-medium'>Google Play</span>
              </span>
            </button>

            <button className='flex h-14 items-center gap-6 rounded-full border border-[#242949] bg-[#1D2137] px-9 backdrop-blur-xs'>
              <Icon icon='logos:apple-app-store' className='text-[32px]' />
              <span className='flex flex-col text-left'>
                <span className='text-xs uppercase'>{t('button.downloadOnThe')}</span>
                <span className='text-base/5 font-medium'>App Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvailabilitySection
