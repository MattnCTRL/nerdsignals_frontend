'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import AvailabilityImage from '@/assets/images/availability.png'

const AvailabilitySection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='availability'>
      <div className='container flex flex-col-reverse items-center gap-16 xl:flex-row xl:gap-0'>
        <Image src={AvailabilityImage} alt='' className='w-[600px] 2xl:w-[620px]' />

        <div className='mx-auto w-full max-w-[800px] shrink-0 xl:mr-[unset] xl:ml-auto xl:max-w-[600px]'>
          <h3>{t('availability.title')}</h3>

          <p className='mt-6 text-lg/[25px] text-[#6F7294]'>{t('availability.subtitle')}</p>

          <div className='mt-6 flex gap-3 sm:gap-4'>
            <button className='flex h-14 items-center gap-4 rounded-full border border-[#242949] bg-[#1D2137] px-6 backdrop-blur-xs sm:gap-6 sm:px-9'>
              <Icon icon='logos:google-play-icon' className='text-[26px] sm:text-[32px]' />
              <span className='flex flex-col text-left'>
                <span className='text-[9px] uppercase sm:text-xs'>{t('button.getItOn')}</span>
                <span className='text-[13px]/4 font-medium sm:text-base/5'>Google Play</span>
              </span>
            </button>

            <button className='flex h-14 items-center gap-4 rounded-full border border-[#242949] bg-[#1D2137] px-6 backdrop-blur-xs sm:gap-6 sm:px-9'>
              <Icon icon='logos:apple-app-store' className='text-[26px] sm:text-[32px]' />
              <span className='flex flex-col text-left'>
                <span className='text-[9px] uppercase sm:text-xs'>{t('button.downloadOnThe')}</span>
                <span className='text-[13px]/4 font-medium sm:text-base/5'>App Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvailabilitySection
