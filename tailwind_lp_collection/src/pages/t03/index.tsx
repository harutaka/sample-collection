import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const T03Index: NextPage = () => {
  return (
    <div className="font-meiryo">
      <Head>
        <title>PHOTO BOOK2</title>
        <meta name="description" content="フォトサイト練習ページ" />
        <meta property="og:title" content="PHOTO BOOK2" />
        <meta property="og:description" content="フォトサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t03/summary.jpg" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <main className="mx-auto w-[1000px]">
        <p className="mt-16 text-xl">PHOTO BOOK 2</p>
        <Image src="/img/t03/mainvisual.png" alt="main" width={1000} height={400} />

        <section className="p-[60px] my-16 mx-auto w-[800px] bg-gray-100">
          <p className="mb-[30px] text-lg font-bold text-center">INDEX</p>
          <div className="border border-black">
            <ul className="my-8 mx-auto">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="my-6 text-center">
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 my-16 mx-auto w-[800px]">
          <div className="">
            <Image src="/img/t03/photo1.png" alt="photo1" width={392} height={261} layout="responsive" />
          </div>
          <div className="">
            <Image src="/img/t03/photo2.png" alt="photo2" width={392} height={261} layout="responsive" />
          </div>
          <div className="">
            <Image src="/img/t03/photo3.png" alt="photo3" width={392} height={261} layout="responsive" />
          </div>
          <div className="">
            <Image src="/img/t03/photo4.png" alt="photo4" width={392} height={261} layout="responsive" />
          </div>
        </section>

        <section className="p-[60px] my-16 mx-auto w-[800px] bg-gray-100">
          <p className="mb-8 text-lg font-bold text-center">DETAIL</p>
          <div className="flex text-sm">
            <div className="w-[200px]">
              <p>著者：</p>
              <p className="mb-2">タイトルタイトルタイトル</p>
              <p>出版社：</p>
              <p className="mb-2">タイトルタイトルタイトル</p>
              <p>著者：</p>
              <p className="mb-2">2021年1月1日</p>
            </div>

            <div className="mx-[40px] w-[1px] h-[130px] bg-black"></div>

            <div className="">
              <p className="mb-4">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              <p className="mb-4">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              <p className="mb-4">オンラインストアで見る</p>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-20 mb-4 text-[10px] text-center">© 2021 Harutaka</footer>
      </main>
    </div>
  )
}

export default T03Index
