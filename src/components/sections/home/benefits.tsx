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
            <div className='min-h-[300px] border-t border-white/10 py-12' key={`benefit-${index}`}>
              <div className='flex size-16 items-center justify-center rounded-full border-2 border-[#363E6F] bg-[#1D2137]'>
                <Icon icon={benefit.icon} className='text-4xl' />
              </div>

              <div className='mt-4 flex items-center'>
                <div className='w-1/2 pr-2'>
                  <h4 className='max-w-[510px] text-4xl font-medium'>{benefit.title}</h4>
                </div>

                <div className='w-1/2 pl-2'>
                  <p className='ml-auto max-w-[510px] text-[#A8AEED]'>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
