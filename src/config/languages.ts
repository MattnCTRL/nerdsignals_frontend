import { it } from 'node:test'

export const languages: Record<string, { code: string; name: string; flag: string }> = {
  en: {
    code: 'en',
    name: 'English',
    flag: 'en',
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    flag: 'sa',
  },
  cz: {
    code: 'cz',
    name: 'Čeština',
    flag: 'cz',
  },
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: 'de',
  },
  el: {
    code: 'el',
    name: 'Ελληνικά',
    flag: 'gr',
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: 'es',
  },
  fr: {
    code: 'fr',
    name: 'Français',
    flag: 'fr',
  },
  hu: {
    code: 'hu',
    name: 'Magyar',
    flag: 'hu',
  },
  id: {
    code: 'id',
    name: 'Bahasa Indonesia',
    flag: 'id',
  },
  it: {
    code: 'it',
    name: 'Italiano',
    flag: 'it',
  },
  jp: {
    code: 'jp',
    name: '日本語',
    flag: 'jp',
  },
  ko: {
    code: 'ko',
    name: '한국어',
    flag: 'kr',
  },
  nl: {
    code: 'nl',
    name: 'Nederlands',
    flag: 'nl',
  },
  pl: {
    code: 'pl',
    name: 'Polski',
    flag: 'pl',
  },
  pt: {
    code: 'pt',
    name: 'Português',
    flag: 'pt',
  },
  ru: {
    code: 'ru',
    name: 'Русский',
    flag: 'ru',
  },
  sk: {
    code: 'sk',
    name: 'Slovenčina',
    flag: 'sk',
  },
  th: {
    code: 'th',
    name: 'ภาษาไทย',
    flag: 'th',
  },
  tr: {
    code: 'tr',
    name: 'Türkçe',
    flag: 'tr',
  },
  vn: {
    code: 'vn',
    name: 'Tiếng Việt',
    flag: 'vn',
  },
  'zh-Hans': {
    code: 'zh-Hans',
    name: '简体中文',
    flag: 'cn',
  },
  'zh-Hant': {
    code: 'zh-Hant',
    name: '繁體中文',
    flag: 'tw',
  },
}
