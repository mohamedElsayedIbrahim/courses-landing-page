import useChangeLanguage from '@/hooks/useChangeLanguage'
import { AllTranslationKeys, I18nContextType, Translations } from '@/interfaces/translations'
import { ar } from '@/locale/ar'
import { en } from '@/locale/en'
import { createContext, FC, ReactNode, useCallback, useMemo } from 'react'

const translations: Record<string, Translations> = {
  ar,
  en,
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface Props {
  children: ReactNode
}

const I18nProvider: FC<Props> = ({ children }) => {
  const { localeCode } = useChangeLanguage()
  const translate = useCallback(
    (key: AllTranslationKeys, params: { [s: string]: unknown } | ArrayLike<unknown> = {}) => {
      const keys = key.split('.')
      let translation: string | Translations | undefined = translations[localeCode]

      for (const currentKey of keys) {
        if (typeof translation === 'string') break
        translation = translation ? (translation[currentKey] as Translations) : undefined
      }

      if (typeof translation !== 'string') {
        return key
      }

      if (params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          if (typeof translation === 'string') {
            translation = translation.replace(`{${paramKey}}`, String(paramValue))
          }
        })
      }

      return translation
    },
    [localeCode]
  )

  const contextValue = useMemo(() => ({ translate }), [translate])

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

export default I18nProvider
