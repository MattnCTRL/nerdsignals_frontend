'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import GridImage from '@/assets/images/grid.png'
import HeroImage from '@/assets/images/hero.png'
import HeroBackgroundImage from '@/assets/images/hero_gradient_bg.png'

const HeroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='hero' className='relative pt-40! pb-16! lg:pb-0!'>
      <div className='absolute top-[5px] right-[5px] left-[5px] lg:top-4 lg:right-4 lg:left-4'>
        <Image src={HeroBackgroundImage} alt='' className='w-full' />
        <Image
          src={GridImage}
          alt=''
          className='absolute top-[5px] left-[5px] w-full max-w-[696px] lg:top-4 lg:left-4'
        />
      </div>

      <div className='relative z-10 container'>
        <div className='mx-auto max-w-[600px] space-y-6'>
          <h2 className='text-center'>{t('hero.title')}</h2>
          <p className='text-center text-sm text-[#6F7294]'>{t('hero.subtitle')}</p>
        </div>

        <div className='mx-auto mt-8 flex w-fit items-center gap-[15px]'>
          <button className='contained text-black'>{t('button.getStarted')}</button>
          <button className='flex items-center gap-1'>
            {t('button.cta')}
            <Icon icon='material-symbols:chevron-right-rounded' className='' />
          </button>
        </div>

        <Image src={HeroImage} alt='' className='mx-auto mt-16 lg:mt-[100px]' />
      </div>
    </section>
  )
}
export default HeroSection
