'use client'

import { useTranslation } from 'react-i18next'
import { cn } from '@/utils/cn'

type Props = {
  className?: string
}

const HighlightsSection: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <section id='highlights' className={cn(className)}>
      <div className='container space-y-16'>
        <h4 className='hidden text-center uppercase lg:block lg:tracking-[20px] xl:tracking-[28.8px]'>
          {t('highlights.title')}
        </h4>

        <div className='grid grid-cols-3'>
          <div className='space-y-3 px-5'>
            <div className='mx-auto max-w-[200px]'>
              <h5 className='text-2xl font-medium lg:text-[40px]/[48px]'>$200m</h5>
              <p className='text-sm/4 text-[#6F7294] lg:text-base/5'>{t('highlights.profit')}</p>
            </div>
          </div>

          <div className='space-y-3 border-[#3C4063] px-5 lg:border-x-2'>
            <div className='mx-auto max-w-[200px]'>
              <h5 className='text-2xl font-medium lg:text-[40px]/[48px]'>1,600+</h5>
              <p className='text-sm/4 text-[#6F7294] lg:text-base/5'>{t('highlights.traders')}</p>
            </div>
          </div>

          <div className='space-y-3 px-5'>
            <div className='mx-auto max-w-[200px]'>
              <h5 className='text-2xl font-medium lg:text-[40px]/[48px]'>10+</h5>
              <p className='text-sm/4 text-[#6F7294] lg:text-base/5'>{t('highlights.partners')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection
