import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/pagination'

import Navigation from 'components/Navigation'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const hideNavigationOn = ['/404', '/login', '/unauthorised']
  const showNavigation = !hideNavigationOn.find(route => router.route.startsWith(route))

  return <>
    <Head>
      <title>Train Wedding</title>
    </Head>
    <main key={router.route}>
      <Component {...pageProps} key={router.route} />
      {showNavigation ? <Navigation /> : null}
    </main>
  </>
}

export default MyApp
