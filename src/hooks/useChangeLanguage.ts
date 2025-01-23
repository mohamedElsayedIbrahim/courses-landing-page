import { useEffect, useState } from 'react'

import { localeType } from '@/enums/Locales'
import useReloadApp from './useReloadApp'
import useStore from './useStore'

const useChangeLanguage = (): {
  currentLocale: localeType | null
  setCurrentLocale: React.Dispatch<React.SetStateAction<localeType | null>>
} => {
  const reloadApp = useReloadApp()
  const { localeCode, setDirection, setLocaleCode } = useStore()
  const [currentLocale, setCurrentLocale] = useState<localeType | null>(null)

  useEffect(() => {
    if (currentLocale && currentLocale.code !== localeCode) {
      setLocaleCode(currentLocale.code)
      setDirection(currentLocale.direction)
      reloadApp()
    }
  }, [currentLocale, localeCode, reloadApp, setDirection, setLocaleCode])

  return {
    currentLocale,
    setCurrentLocale,
  }
}

export default useChangeLanguage
