'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'
import EuroNewsImage from '@/assets/images/euro_news.png'
import MetroNewsImage from '@/assets/images/metro_news.png'
import NewsweekImage from '@/assets/images/newsweek.png'

const ChooseUsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='chooseUs' className='relative z-10'>
      <div className='container'>
        <h4 className='text-4xl/[50px] font-semibold'>
          {t('chooseUs.title')}
          <br />
          Be one of <span className='font-extrabold text-[#93B4FF]'>them</span>.
        </h4>
      </div>

      <Marquee autoFill>
        <div className='mr-[50px] flex items-center gap-[50px]'>
          <Image src={MetroNewsImage} alt='' className='w-[108px]' />
          <Image src={EuroNewsImage} alt='' className='w-[108px]' />
          <Image src={NewsweekImage} alt='' className='w-[108px]' />
        </div>
      </Marquee>
    </section>
  )
}

export default ChooseUsSection
