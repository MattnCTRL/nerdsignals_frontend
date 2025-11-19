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

        <div className='mt-12 grid grid-cols-3 gap-4'>
          {steps.map((step, index) => (
            <div
              className='group rounded-3xl border-2 border-[#1D2137] bg-[#161A2E] p-10 hover:border-[#3C4063] hover:bg-[#1D2137]'
              key={`step-${index}`}
            >
              <div className='mx-auto flex size-16 items-center justify-center rounded-full border-2 border-[#363E6F] bg-[#1D2137] group-hover:bg-[#242949]'>
                <Icon icon={step.icon} className='text-4xl' />
              </div>

              <h4 className='mt-9 text-center text-xl/[25px] font-bold tracking-widest uppercase'>
                {step.title}
              </h4>

              <p className='mt-5 text-center text-sm/6 text-[#6F7294]'>{step.description}</p>

              <button className='mx-auto mt-8 block text-sm/[25px] font-bold'>
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
