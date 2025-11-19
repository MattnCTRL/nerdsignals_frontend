'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import HoleImage from '@/assets/images/hole.png'
import ShowcaseImage from '@/assets/images/showcase.png'

const ShowcaseSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='showcase' className='py-0'>
      <div className='relative container'>
        <Image src={HoleImage} alt='' className='mx-auto' />

        <div className='absolute top-1/2 left-0 max-w-[300px] -translate-y-1/2 space-y-12'>
          <p className='text-lg'>{t('showcase.aboutUs')}</p>
          <button className='contained uppercase'>{t('button.goToDashboard')}</button>
        </div>

        <p className='absolute top-3/5 right-0 max-w-[300px] text-right text-[#6F7294]'>
          {t('showcase.whatWeDo')}
        </p>

        <Image
          src={ShowcaseImage}
          alt=''
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </section>
  )
}

export default ShowcaseSection
