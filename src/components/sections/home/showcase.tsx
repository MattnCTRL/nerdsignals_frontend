'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import HoleImage from '@/assets/images/hole.png'
import ShowcaseImage from '@/assets/images/showcase.png'

const ShowcaseSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='showcase' className='overflow-hidden py-16 lg:py-0!'>
      <div className='relative container'>
        <Image
          src={HoleImage}
          alt=''
          className='absolute top-2/3 left-1/2 -z-10 mx-auto w-full max-w-[1100px] -translate-x-1/2 -translate-y-1/2 lg:relative lg:top-[unset] lg:left-[unset] lg:translate-x-0 lg:translate-y-0'
        />

        <div className='space-y-4 lg:absolute lg:top-1/2 lg:left-5 lg:max-w-[300px] lg:-translate-y-1/2 lg:space-y-12'>
          <p className='text-lg'>{t('showcase.aboutUs')}</p>
          <button className='contained uppercase'>{t('button.goToDashboard')}</button>
        </div>

        <p className='hidden text-right text-[#6F7294] lg:absolute lg:top-3/5 lg:right-5 lg:block lg:max-w-[300px]'>
          {t('showcase.whatWeDo')}
        </p>

        <Image
          src={ShowcaseImage}
          alt=''
          className='mx-auto mt-12 lg:absolute lg:top-1/2 lg:left-1/2 lg:mx-[unset] lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2'
        />

        <p className='mt-12 lg:hidden'>{t('showcase.whatWeDo')}</p>
      </div>
    </section>
  )
}

export default ShowcaseSection
