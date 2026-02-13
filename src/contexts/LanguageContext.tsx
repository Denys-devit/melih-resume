import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Locale } from '../i18n/translations'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'melih-locale'

type TranslationKeys = typeof translations.en

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    return stored === 'en' || stored === 'tr' ? stored : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (l: Locale) => setLocaleState(l)
  const t = translations[locale] as TranslationKeys

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
