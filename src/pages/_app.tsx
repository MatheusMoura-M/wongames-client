import { CartProvider } from '@/hooks/use-cart'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { useApollo } from '@/utils/apollo'
import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta
                name="description"
                content="The best Game Stores in the world!"
              />
            </Head>

            <GlobalStyles />

            <NextNProgress color="#F231A5" />

            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default App
