import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const T02Index: NextPage = () => {
  return (
    <div className="min-h-screen font-meiryo bg-blue-50">
      <Head>
        <title>PHOTO BOOK</title>
        <meta name="description" content="フォトサイト練習ページ" />
        <meta property="og:title" content="PHOTO BOOK" />
        <meta property="og:description" content="フォトサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t02/summary.jpg" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <main className="mx-auto max-w-[1000px]">
        <h1 className="pt-12 pb-2 text-2xl font-bold">PHOTO BOOK</h1>
        <Image src="/img/t02/mainvisual.jpg" alt="main" width={1000} height={400} />

        {/* <!-- INDEX --> */}
        <section className="mt-16 bg-white">
          <div className="mx-auto w-[600px]">
            <h2 className="pt-8 my-2 text-lg font-bold">INDEX</h2>
            <ol className="pb-6 list-decimal">
              <li className="mx-4 text-sm leading-10">
                タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
              </li>
              <li className="mx-4 text-sm leading-10">
                タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
              </li>
              <li className="mx-4 text-sm leading-10">
                タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
              </li>
              <li className="mx-4 text-sm leading-10">
                タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
              </li>
              <li className="mx-4 text-sm leading-10">
                タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
              </li>
            </ol>
          </div>
        </section>

        {/* <!-- DETAIL --> */}
        <section className="mx-auto mt-16 mb-28 w-[600px]">
          <h2 className="mb-4 text-lg font-bold">DETAIL</h2>
          <div className="flex">
            <div className="pr-5 w-1/2">
              <Image src="/img/t02/detail.jpg" alt="detail" width={270} height={270} />
            </div>
            <div className="ml-5 w-1/2">
              <h3 className="mb-4 text-lg font-bold">タイトルタイトルタイトル</h3>
              <hr className="border-gray-300" />
              <div className="grid grid-cols-4 my-4">
                <div className="text-sm">著者</div>
                <div className="col-span-3 text-sm">タイトルタイトルタイトル</div>
                <div className="text-sm">出版社</div>
                <div className="col-span-3 text-sm">タイトルタイトルタイトル</div>
                <div className="text-sm">発行年</div>
                <div className="col-span-3 text-sm">タイトルタイトルタイトル</div>
              </div>
              <hr className="border-gray-300" />
              <p className="my-4 text-sm">
                テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
              </p>
              <a href="#" className="underline">
                オンラインストアで見る
              </a>
            </div>
          </div>
        </section>

        <footer className="py-4 mx-auto w-[600px] text-[10px]">© 2021 Harutaka</footer>
      </main>
    </div>
  )
}

export default T02Index
