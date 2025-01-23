export enum Direction {
  rtl = 'rtl',
  ltr = 'ltr',
}

export enum Code {
  en = 'en',
  ar = 'ar',
}

export interface localeType {
  code: Code
  name: string
  direction: Direction
}

export const locales: localeType[] = [
  {
    code: Code.en,
    direction: Direction.ltr,
    name: 'English',
  },
  {
    code: Code.ar,
    direction: Direction.rtl,
    name: 'العربية',
  },
]
