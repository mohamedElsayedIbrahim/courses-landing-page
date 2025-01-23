import { Code, Direction } from '@/enums/Locales'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Store = {
  direction: Direction
  setDirection: (direction: Direction) => void
  localeCode: Code
  setLocaleCode: (locale: Code) => void
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      localeCode: Code.en,
      direction: Direction.ltr,
      setLocaleCode: (localeCode) => set(() => ({ localeCode })),
      setDirection: (direction) => set(() => ({ direction })),
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useStore
