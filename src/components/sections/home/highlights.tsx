'use client'

import { useTranslation } from 'react-i18next'

const HighlightsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id='highlights'>
      <div className='container space-y-16'>
        <h4 className='text-center tracking-[28.8px] uppercase'>{t('highlights.title')}</h4>

        <div className='grid grid-cols-3'>
          <div className='space-y-3 px-5'>
            <div className='mx-auto max-w-[200px]'>
              <h5 className='text-[40px]/[48px] font-medium'>$200m</h5>
              <p className='text-base/5 text-[#6F7294]'>{t('highlights.profit')}</p>
            </div>
          </div>

          <div className='space-y-3 border-x-2 border-[#3C4063] px-5'>
            <div className='mx-auto max-w-[200px]'>
              <h5 className='text-[40px]/[48px] font-medium'>1,600+</h5>
              <p className='text-base/5 text-[#6F7294]'>{t('highlights.traders')}</p>
            </div>
          </div>

          <div className='space-y-3 px-5'>
            <div className='mx-auto max-w-[200px]'>
              <h5 className='text-[40px]/[48px] font-medium'>10+</h5>
              <p className='text-base/5 text-[#6F7294]'>{t('highlights.partners')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection
