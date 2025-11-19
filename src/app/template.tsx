'use client'

import { PropsWithChildren } from 'react'
import '@/localization/i18n'

export default function RootTemplate({ children }: PropsWithChildren) {
  return <>{children}</>
}
