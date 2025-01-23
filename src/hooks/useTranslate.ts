import { TranslateFunction } from '@/interfaces/translations'
import { I18nContext } from '@/providers/I18nProvider'
import { useContext } from 'react'

const useTranslate = (): TranslateFunction => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslate must be used within an I18nProvider')
  }
  return context.translate
}

export default useTranslate
