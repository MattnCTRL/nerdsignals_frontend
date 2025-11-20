'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import LogoImage from '@/assets/images/logo.png'
import LanguageSelect from './language-select'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className='fixed top-[30px] right-0 left-0 z-50 lg:top-9'>
      <div className='container flex items-center justify-between'>
        <Image src={LogoImage} alt='Nerd Signals Logo' className='h-8 w-fit' />

        <div className='flex items-center gap-2 lg:gap-7'>
          <LanguageSelect />
          <button className='contained uppercase'>{t('button.goToDashboard')}</button>
        </div>
      </div>
    </header>
  )
}

export default Header
