'use client'

import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'

const FaqsSection: React.FC = () => {
  const { t } = useTranslation()

  const faqs = useMemo(
    () => [
      {
        question: t('faq.question1'),
        answer: t('faq.answer1'),
      },
      {
        question: t('faq.question1'),
        answer: t('faq.answer1'),
      },
      {
        question: t('faq.question1'),
        answer: t('faq.answer1'),
      },
    ],
    [t],
  )

  return (
    <section id='faqs'>
      <div className='container'>
        <h3 className='text-center'>{t('faqs.title')}</h3>

        <p className='mx-auto mt-6 max-w-[616px] text-center text-[#6F7294]'>
          {t('faqs.subtitle')}
        </p>

        <div className='mt-12 space-y-2 lg:mt-16'>
          {faqs.map((faq, index) => (
            <Faq key={`faq-${index}`} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

type FaqProps = {
  question: string
  answer: string
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={cn(
        'rounded-lg border-[#1D2137] px-4 py-8 lg:px-[50px]',
        isOpen ? 'border-2 bg-[#1D2137]' : 'border bg-[#161A2E]',
      )}
    >
      <div className='flex items-center'>
        <p
          className={cn(
            'grow text-lg font-medium lg:text-[21px]',
            isOpen ? 'drop-shadow-[5px_5px_25px_#C6C6C640]' : '',
          )}
        >
          {question}
        </p>
        <button
          className={cn(
            'flex size-7 shrink-0 items-center justify-center rounded border border-[#363E6F] bg-[#1D2137] lg:size-10',
            isOpen ? 'shadow-[5px_5px_25px_#C6C6C640]' : '',
          )}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon
            icon={isOpen ? 'material-symbols:remove' : 'material-symbols:add'}
            className='text-base lg:text-2xl'
          />
        </button>
      </div>
      {isOpen && <p className='mt-5 text-sm text-[#A6AAD3] lg:text-lg'>{answer}</p>}
    </div>
  )
}

export default FaqsSection
