import { en } from 'src/locale'

export interface Translations {
  [key: string]: string | Translations
}

export type TranslationKeys<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object ? `${K}` | `${K}.${TranslationKeys<T[K]>}` : `${K}`
    }[Extract<keyof T, string>]
  : never

export type Translation = TranslationKeys<typeof en>

export type AllTranslationKeys = TranslationKeys<typeof en>

type ExtractParams<T> = T extends `${string}{${infer Param}}${string}` ? Param : never

type TranslationParams<T> = {
  [K in keyof T]: ExtractParams<T[K]> extends never
    ? Record<string, never>
    : {
        [P in ExtractParams<T[K]>]: string | number | undefined
      }
}

export type TranslateFunction = <K extends AllTranslationKeys>(
  key: K,
  params?: TranslationParams<typeof en>[keyof TranslationParams<typeof en>]
) => string

export interface I18nContextType {
  translate: TranslateFunction
}

export type TranslationFields = Record<keyof typeof en, string | Translations>
