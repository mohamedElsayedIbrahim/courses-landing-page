import { useEffect, useState } from 'react'

import { localeType } from '@/enums/Locales'
import useReloadApp from './useReloadApp'
import useStore from './useStore'

const useChangeLanguage = () => {
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
    localeCode,
    currentLocale,
    setCurrentLocale,
  }
}

export default useChangeLanguage
