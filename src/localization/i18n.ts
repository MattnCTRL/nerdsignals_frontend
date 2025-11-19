import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import translations from '@/localization/translations'

i18n.use(initReactI18next).init({
  resources: translations,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
