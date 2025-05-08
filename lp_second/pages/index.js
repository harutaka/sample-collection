import Head from 'next/head'
import Index from '../components'
import Header from '../components/header'
import Mainvisual from '../components/mainvisual'
import Detail from '../components/detail'
import Footer from '../components/footer'

export default function Hoge() {
  return (
    <>
      <Head>
        <title>PHOTO BOOK</title>
        <meta name="description" content="テキストテキストテキストテキストテキストテキストテキストテキスト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />
        <Mainvisual />
        <Index />
        <Detail />
        <Footer />
      </div>
    </>
  )
}
