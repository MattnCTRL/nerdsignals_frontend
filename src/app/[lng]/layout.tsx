'use client'

import { useParams } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function LocaleLayout({ children }: PropsWithChildren) {
  const { lng } = useParams()

  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== lng) i18n.changeLanguage(lng as string)
  }, [i18n, lng])

  return children
}
