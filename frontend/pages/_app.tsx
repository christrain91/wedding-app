import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Navigation from 'components/Navigation'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <>
    <Head>
      <title>Train Wedding</title>
    </Head>
    <Component {...pageProps} />
    {!router.route.startsWith('/login') && <Navigation />}
  </>
}

export default MyApp
