import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Navigation from 'components/Navigation'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const hideNavigationOn = ['/404', '/login']

  const showNavigation = !hideNavigationOn.find(route => router.route.startsWith(route))

  return <>
    <Head>
      <title>Train Wedding</title>
    </Head>
    <Component {...pageProps} />
    {showNavigation ? <Navigation /> : null}
  </>
}

export default MyApp
