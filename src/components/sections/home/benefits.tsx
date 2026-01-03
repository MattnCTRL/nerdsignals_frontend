'use client'

import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'

const BenefitsSection: React.FC = () => {
  const { t } = useTranslation()

  const benefits = useMemo(
    () => [
      {
        title: t('benefits.benefit1.title'),
        description: t('benefits.benefit1.description'),
        icon: 'material-symbols:automation-outline',
      },
      {
        title: t('benefits.benefit2.title'),
        description: t('benefits.benefit2.description'),
        icon: 'material-symbols:automation-outline',
      },
      {
        title: t('benefits.benefit3.title'),
        description: t('benefits.benefit3.description'),
        icon: 'material-symbols:automation-outline',
      },
    ],
    [t],
  )

  return (
    <section id='benefits'>
      <div className='container'>
        <h3 className='text-center'>{t('benefits.title')}</h3>

        <p className='mx-auto mt-6 max-w-[616px] text-center text-[#6F7294]'>
          {t('benefits.subtitle')}
        </p>

        <div className='mt-9'>
          {benefits.map((benefit, index) => (
            <div
              className='border-t border-white/10 py-4 lg:min-h-[300px] lg:py-12'
              key={`benefit-${index}`}
            >
              <div className='mx-auto flex size-8 items-center justify-center rounded-full border border-[#363E6F] bg-[#1D2137] lg:size-16 lg:border-2'>
                <Icon icon={benefit.icon} className='text-base lg:text-4xl' />
              </div>

              <div className='mt-6 flex flex-col items-center text-center gap-4'>
                <h4 className='text-2xl font-medium break-normal hyphens-none max-w-[560px] lg:text-4xl'>
                  {benefit.title}
                </h4>
                <p className='text-sm text-[#A8AEED]/50 max-w-[510px] lg:text-base'>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
