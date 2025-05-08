import type { NextPage } from "next"
import Head from "next/head"
import Footer from "@/components/t12/Footer"
import Header from "@/components/t12/Header"

const About: NextPage = () => {
  return (
    <div className="relative min-h-screen text-sm bg-gray-100">
      <Head>
        <title>About | Furniture Design</title>
        <link rel="icon" href="/img/t12/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="px-10 pt-28 pb-40 mx-auto w-full max-w-7xl">
          <h1 className="mb-8 text-lg font-bold">About</h1>
          <div id="about" className="max-w-2xl">
            <p className="mb-8 leading-relaxed">
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p className="mb-8 leading-relaxed">
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
