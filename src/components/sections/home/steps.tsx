'use client'

import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'

const StepsSection: React.FC = () => {
  const { t } = useTranslation()

  const steps = useMemo(
    () => [
      {
        title: t('steps.step1.title'),
        description: t('steps.step1.description'),
        icon: 'material-symbols:automation',
      },
      {
        title: t('steps.step2.title'),
        description: t('steps.step2.description'),
        icon: 'material-symbols:blur-circular-outline',
      },
      {
        title: t('steps.step3.title'),
        description: t('steps.step3.description'),
        icon: 'material-symbols:bar-chart-4-bars',
      },
    ],
    [t],
  )

  return (
    <section id='steps'>
      <div className='container'>
        <h3 className='text-center'>{t('steps.title')}</h3>

        <p className='mx-auto mt-6 max-w-[616px] text-center text-[#6F7294]'>
          {t('steps.subtitle')}
        </p>

        <div className='mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {steps.map((step, index) => (
            <div
              className='group rounded-3xl border-2 border-[#1D2137] bg-[#161A2E] p-4 hover:border-[#3C4063] hover:bg-[#1D2137] sm:p-10'
              key={`step-${index}`}
            >
              <div className='flex size-8 items-center justify-center rounded-full border border-[#363E6F] bg-[#1D2137] group-hover:bg-[#242949] sm:mx-auto sm:size-16 sm:border-2'>
                <Icon icon={step.icon} className='text-base sm:text-4xl' />
              </div>

              <h4 className='mt-4 text-lg/[25px] font-bold tracking-widest uppercase sm:mt-9 sm:text-center sm:text-xl/[25px]'>
                {step.title}
              </h4>

              <p className='mt-2 text-sm/6 text-[#6F7294] sm:mt-5 sm:text-center'>
                {step.description}
              </p>

              <button className='mx-auto mt-4 block rounded-full bg-white px-5 py-2.5 text-sm/[25px] text-black sm:mt-8 sm:bg-transparent sm:px-0 sm:py-0 sm:font-bold sm:text-white'>
                {t('steps.learnMore')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection
