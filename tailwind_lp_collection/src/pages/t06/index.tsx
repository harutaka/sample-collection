import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const T06Index: NextPage = () => {
  return (
    <div className="min-h-screen font-serif text-gray-800 bg-gray-100">
      <Head>
        <title>Wooden Jewelry</title>
        <meta name="description" content="ブランドサイト練習ページ" />
        <meta property="og:title" content="Wooden Jewelry" />
        <meta property="og:description" content="ブランドサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t06/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t06/favicon.ico" />
      </Head>

      <div className="pt-[4%] mx-auto mb-0 w-[90vw] h-auto">
        <Image src="/img/t06/mainvisual.jpg" alt="mainvisual" width={1920} height={900} />
      </div>

      <header className="flex items-center py-8 px-0 mx-auto mt-0 mb-[30px] w-[90vw]">
        <h1 className="mr-[50px] w-[110px] leading-[1px]">
          <Link href="#">
            <a>
              <Image src="/img/t06/logo.svg" alt="Wooden Jewelry" width={1000} height={140} />
            </a>
          </Link>
        </h1>

        <nav>
          <ul className="flex">
            <li className="mr-[30px] text-sm">
              <Link href="#concept">
                <a>Concept</a>
              </Link>
            </li>
            <li className="mr-[30px] text-sm">
              <Link href="#work">
                <a>Work</a>
              </Link>
            </li>
            <li className="text-sm">
              <Link href="mailto:xxx@xxx.xxx?subject=お問い合わせ">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="px-[18px] mx-auto max-w-[1000px]">
        <main>
          <section id="concept" className="flex items-center mb-14">
            <div className="w-1/2">
              <Image src="/img/t06/concept.jpg" alt="concept" width={1000} height={1000} />
            </div>
            <div className="px-[7%] w-1/2">
              <h2 className="mb-1 text-2xl">私たちの考えるジュエリーとは</h2>
              <span className="inline-block mb-6">Concept</span>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </section>

          <section id="work" className="flex items-center mb-14">
            <div className="px-[7%] w-1/2">
              <h2 className="mb-1 text-2xl">ハンドメイドにこだわる理由</h2>
              <span className="inline-block mb-6">Work</span>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="w-1/2">
              <Image src="/img/t06/work.jpg" alt="work" width={1000} height={1000} />
            </div>
          </section>

          <footer className="flex justify-between py-5 text-sm">
            <div className="w-[110px]">
              <Image src="/img/t06/logo.svg" alt="Wooden Jewelry" width={1000} height={140} />
            </div>
            <p>&copy; 2021 Harutaka</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default T06Index
