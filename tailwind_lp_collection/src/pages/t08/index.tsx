/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const T08Index: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Mag88</title>
        <meta name="description" content="ストアサイト練習ページ" />
        <meta property="og:title" content="Mag88" />
        <meta property="og:description" content="ストアサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t08/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t08/favicon.ico" />
      </Head>

      <header className="relative mb-20 h-screen bg-center bg-[url('/img/t08/mainvisual.jpg')] bg-no-repeat bg-cover">
        <h1 className="absolute top-[30px] right-[30px]">
          <Image src="/img/t08/logo.svg" alt="Mag88" width={120} height={40} />
        </h1>
      </header>

      <main>
        <section className="px-[5%] mx-auto mb-20 max-w-7xl text-center">
          <h2 className="mb-5 text-2xl font-bold">A special, long article in a newspaper or magazine</h2>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>

          <div className="flex-col justify-between mt-10 md:flex md:flex-row">
            <Link href="#">
              <a className="block relative mb-[30px] hover:opacity-70 md:mb-0 md:w-[49%]" href="#">
                <Image
                  src="/img/t08/magazine-archive.jpg"
                  alt="テキストテキストテキストテキスト"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-[40%] right-0 left-0 py-[15px] mx-auto max-w-[290px] font-bold text-white bg-black/50">
                  <p className="mb-0.5 text-xl">Archive</p>
                  <p>
                    テキストテキストテキストテキスト
                    <br />
                    テキストテキストテキスト
                  </p>
                </div>
              </a>
            </Link>

            <Link href="#">
              <a className="block relative hover:opacity-70 md:w-[49%]" href="#">
                <Image
                  src="/img/t08/magazine-new.jpg"
                  alt="テキストテキストテキストテキスト"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-[40%] right-0 left-0 py-[15px] mx-auto max-w-[290px] font-bold text-white bg-black/50">
                  <p className="mb-0.5 text-xl">New</p>
                  <p>
                    テキストテキストテキストテキスト
                    <br />
                    テキストテキストテキスト
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </section>

        <section className="pt-[35px] mb-12 h-[520px] text-center bg-center bg-[url('/img/t08/fashion.jpg')] bg-no-repeat bg-cover md:pt-14 md:mb-20">
          <div className="px-[5%] mx-auto max-w-7xl">
            <h2 className="mb-5 text-2xl font-bold">Fashion & Style</h2>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <Link href="#">
              <a className="inline-block py-[14px] px-9 mt-7 text-xs text-gray-800 border border-gray-800 hover:opacity-70">
                Read more
              </a>
            </Link>
          </div>
        </section>

        <section className="py-7 bg-gray-50 md:py-[60px]">
          <div className="justify-between items-center px-[5%] mx-auto max-w-7xl md:flex">
            <div className="text-center md:w-[48%]">
              <Image src="/img/t08/catalog.jpg" alt="catalog" width={1000} height={1000} />
            </div>

            <div className="text-center md:w-[48%]">
              <h2 className="mt-10 mb-5 text-2xl font-bold md:mt-0">Catalog</h2>
              <p className="mb-16 md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        <section className="py-[60px] bg-gray-50">
          <div className="justify-between items-center px-[5%] mx-auto max-w-7xl md:flex">
            <div className="text-center md:w-[48%]">
              <h2 className="mb-5 text-2xl font-bold">Antique</h2>
              <p className="mb-16 md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="md:mb-[30px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <Link href="#">
                <a className="inline-block py-[14px] px-9 mt-7 mb-14 text-xs text-gray-800 border border-gray-800 hover:opacity-70 md:mb-0">
                  Read More
                </a>
              </Link>
            </div>

            <div className="text-center md:w-[48%]">
              <Image src="/img/t08/antique.jpg" alt="antique" width={1000} height={1000} />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-xs bg-[#333]">
        <div className="justify-between py-7 px-[5%] mx-auto max-w-7xl text-white md:flex md:py-24">
          <div className="py-14 mb-7 leading-loose text-center md:mb-0 md:w-1/3">
            <Link href="/t08/">
              <a className="hover:opacity-70">
                <Image src="/img/t08/logo.svg" alt="Mag88" width={120} height={40} />
              </a>
            </Link>
          </div>

          <div className="mb-7 leading-loose md:mb-0 md:w-1/3">
            <p className="mb-[10px] text-base font-bold">タイトル</p>
            <ul>
              {[...Array(5)].map((item, i) => (
                <li key={i} className="before:mr-[5px] before:content-['-']">
                  テキストテキストテキスト
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-7 leading-loose md:mb-0 md:w-1/3">
            <p className="mb-[10px] text-base font-bold">タイトルタイトルタイトル</p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <p className="py-8 text-center bg-white">&copy; Harutaka</p>
      </footer>
    </div>
  )
}

export default T08Index
