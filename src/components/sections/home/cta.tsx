'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import CtaImage from '@/assets/images/cta.png'

const CTASection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='cta' className='relative z-10'>
      <div className='container space-y-9'>
        <div className='mx-auto max-w-[790px] space-y-6 text-center'>
          <h3>{t('cta.title')}</h3>
          <p className='text-base/[25px]'>{t('cta.subtitle')}</p>
        </div>

        <Image src={CtaImage} alt='' className='mx-auto' />

        <div className='mx-auto flex w-fit items-center gap-[15px]'>
          <button className='contained text-black'>{t('button.getStarted')}</button>
          <button className='flex items-center gap-1'>
            {t('button.cta')}
            <Icon icon='material-symbols:chevron-right-rounded' className='' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
