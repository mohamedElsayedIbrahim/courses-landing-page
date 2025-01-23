import { NextPageWithLayout } from '@/interfaces/layout'
import { MUIProvider } from '@/providers'
import I18nProvider from '@/providers/I18nProvider'
import '@/styles/globals.css'
import '@/styles/react-slick.css'
import { createEmotionCache } from '@/utils'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache
  Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>React Coursespace</title>
      </Head>
      <I18nProvider>
        <MUIProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </MUIProvider>
      </I18nProvider>
    </CacheProvider>
  )
}

export default App
