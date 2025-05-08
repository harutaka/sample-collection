import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/t12/Footer"
import Header from "@/components/t12/Header"
import ItemList from "@/components/t12/ItemList"
import ProductItem from "@/components/t12/ProductItem"

const T12Index: NextPage = () => {
  return (
    /*
    フッターを画面下に配置するために、
    「position: relative;」を設定
    「min-height」で最小の高さを画面の高さにあわせる
    */
    <div className="relative min-h-screen text-sm bg-gray-100">
      <Head>
        <title>Furniture Design</title>
        <meta name="description" content="ストアサイト練習ページ" />
        <meta property="og:title" content="Furniture Design" />
        <meta property="og:description" content="ストアサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t12/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t12/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div id="top" className="px-10 pt-20 pb-40 mx-auto w-full max-w-7xl">
          <ItemList total={8} start={1} />
          <Link href="/t12/product">
            <a className="block text-center">View More</a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default T12Index
