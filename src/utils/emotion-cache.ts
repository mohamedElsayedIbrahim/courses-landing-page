import { Direction } from '@/enums/Locales'
import createCache, { EmotionCache } from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export function createEmotionCache(direction?: Direction): EmotionCache {
  const stylisPlugins = [prefixer]

  if (direction === Direction.rtl) stylisPlugins.push(rtlPlugin)

  return createCache({
    key: `css-${direction}`,
    stylisPlugins,
    prepend: true,
  })
}
