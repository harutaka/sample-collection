import Head from "next/head"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
