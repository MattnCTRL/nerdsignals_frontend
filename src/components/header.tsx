'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import LogoImage from '@/assets/images/logo.png'
import LanguageSelect from './language-select'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className='fixed top-9 right-0 left-0 z-50'>
      <div className='container flex h-[38px] items-center justify-between'>
        <Image src={LogoImage} alt='Nerd Signals Logo' className='h-8 w-fit' />

        <div className='flex items-center gap-7'>
          <LanguageSelect />
          <button className='contained uppercase'>{t('button.goToDashboard')}</button>
        </div>
      </div>
    </header>
  )
}

export default Header
