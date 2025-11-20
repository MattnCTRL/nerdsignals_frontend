'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import GridImage from '@/assets/images/grid-2.png'
import LogoImage from '@/assets/images/logo.png'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const footerLinks = useMemo(
    () => [
      {
        title: t('footer.mainframe'),
        links: [
          { label: t('footer.integrations') },
          { label: t('footer.roadmap') },
          { label: t('footer.ourStory') },
        ],
      },
      {
        title: t('footer.connect'),
        links: [
          { label: t('footer.facebook') },
          { label: t('footer.x') },
          { label: t('footer.medium') },
        ],
      },
      {
        title: t('footer.ourMission'),
        links: [{ label: t('footer.packages') }, { label: t('footer.support') }],
      },
      {
        title: t('footer.resources'),
        links: [{ label: t('footer.dataProtection') }, { label: t('footer.serviceTerms') }],
      },
    ],
    [t],
  )

  return (
    <footer className='relative z-10 rounded-t-4xl bg-[#101220] py-16 lg:py-[120px]'>
      <div className='relative z-10 container flex flex-col space-y-16 lg:flex-row lg:space-y-0'>
        <div className='lg:space-y-20'>
          <div className='flex items-center gap-3'>
            <Image src={LogoImage} alt='Nerd Signals Logo' className='h-[45px] w-fit' />
            <p className='text-[32px]/8 font-bold text-[#E8EAF6]'>
              Nerd<span className='font-thin'>Signals</span>
            </p>
          </div>

          <p className='hidden text-sm text-[#6F7294] lg:block'>{t('footer.copyright')}</p>
        </div>

        <div className='mx-auto flex w-full max-w-[600px] justify-between lg:mx-[unset] lg:ml-auto lg:w-fit lg:gap-[30px]'>
          {footerLinks.map((links) => (
            <div className='space-y-3 last:hidden lg:last:block' key={links.title}>
              <h5 className='font-instrument-sans text-lg font-semibold text-[#363E6F]'>
                {links.title}
              </h5>

              <ul className='space-y-2'>
                {links.links.map((link) => (
                  <li className='text-lg' key={link.label}>
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='space-y-[25px] lg:hidden'>
          <div className='flex justify-center gap-[25px]'>
            <p className='text-sm text-[#6F7294]'>{t('footer.dataProtection')}</p>
            <p className='text-sm text-[#6F7294]'>{t('footer.serviceTerms')}</p>
          </div>

          <p className='text-center text-sm text-[#6F7294]'>{t('footer.copyright')}</p>
        </div>
      </div>

      <Image src={GridImage} alt='' className='absolute bottom-0 left-0' />
    </footer>
  )
}

export default Footer
