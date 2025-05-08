import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

type WorksImageProps = {
  key: number
  work: string
}
const WorksImage = ({ work }: WorksImageProps) => {
  return (
    <div className="mb-8">
      <Image src={`/img/t07/${work}.jpg`} alt={work} width={640} height={417} layout="responsive" />
    </div>
  )
}

const T07Index: NextPage = () => {
  const headerArr = ["About", "Works", "News", "Contact"]
  const worksArr = ["works1", "works2", "works3", "works4", "works5", "works6"]
  const newsArr = [
    { date: "2020.XX.XX", message: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。" },
    { date: "2020.XX.XX", message: "ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。" },
    {
      date: "2019.XX.XX",
      message: "【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト",
    },
    { date: "2019.XX.XX", message: "デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。" },
    { date: "2019.XX.XX", message: "【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Work - Portfolio</title>
        <meta name="description" content="ポートフォリオサイト練習ページ" />
        <meta property="og:title" content="My Work - Portfolio" />
        <meta property="og:description" content="ポートフォリオサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t07/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t08/favicon.ico" />
      </Head>

      <header className="justify-between items-end py-4 px-[4%] mx-auto md:flex md:py-28 md:max-w-[960px]">
        <div className="text-center">
          <Image src="/img/t07/logo.svg" alt="logo" width={126} height={36} />
        </div>

        <ul className="flex justify-center text-sm">
          {headerArr.map((item, i) => (
            <li key={i} className="self-end ml-8 first:ml-0 hover:opacity-75">
              <Link href="#">
                <a>{item}</a>
              </Link>
            </li>
          ))}
          <li className="ml-8 hover:opacity-75 translate-y-0.5">
            <Link href="https://www.instagram.com">
              <a>
                <Image src="/img/t07/icon-instagram.png" alt="instagram" width={20} height={20} />
              </a>
            </Link>
          </li>
        </ul>
      </header>

      <div className="hidden relative w-full h-[420px] md:block">
        <Image src="/img/t07/mainvisual-pc.jpg" alt="mainvisual" layout="fill" objectFit="cover" />
      </div>
      <div className="relative w-full h-[420px] md:hidden">
        <Image src="/img/t07/mainvisual-sp.jpg" alt="mainvisual" layout="fill" objectFit="cover" />
      </div>

      <main className="mx-auto md:max-w-[960px]">
        {/* About */}
        <section className="my-16">
          <div className="text-2xl font-bold text-center">About</div>
          <div className="my-12 mx-8">
            <p>Xxxxx Ashley</p>

            <div className="py-8">
              <p>2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan</p>
              <p>tel: 000-0000-0000</p>
              <p>url: www.xxxxxx.jp</p>
              <p>mail: xxx@xxxxxx.jp</p>
            </div>

            <div>
              プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
        </section>

        {/* About */}
        <section className="my-28">
          <div className="my-16 text-2xl font-bold text-center">Works</div>

          <div className="grid-cols-3 gap-x-8 mx-8 md:grid">
            {worksArr.map((item, i) => (
              <WorksImage key={i} work={item} />
            ))}
          </div>
        </section>

        {/* News */}
        <section className="my-28">
          <div className="my-16 text-2xl font-bold text-center">News</div>
          {newsArr.map((item, i) => (
            <li
              key={i}
              className="py-4 pl-4 mx-auto w-11/12 text-sm list-none border-t last:border-b border-t-gray-300 md:flex"
            >
              <p className="md:pr-20">{item.date}</p>
              <p>{item.message}</p>
            </li>
          ))}
        </section>

        {/* Contact */}
        <section className="my-28">
          <div className="my-16 text-2xl font-bold text-center">Contact</div>

          <div className="mx-auto w-11/12">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="inline-block w-1/6 align-top">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="py-2 px-4 w-5/6 bg-gray-50 border border-gray-400"
                  placeholder="山田"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="inline-block w-1/6 align-top">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="py-2 px-4 w-5/6 bg-gray-50 border border-gray-400"
                  placeholder="test@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="inline-block w-1/6 align-top">
                  Message
                </label>
                <textarea
                  id="message"
                  className="py-2 px-4 w-5/6 bg-gray-50 border border-gray-400"
                  rows={5}
                  placeholder="メッセージをどうぞ"
                ></textarea>
              </div>
              <button className="block py-4 my-8 mx-auto w-48 text-white hover:text-black bg-gray-800 hover:bg-white rounded-md hover:border hover:border-black">
                送信
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-2 mt-32 text-xs text-center text-white bg-gray-800">&copy; 2021 Harutaka</footer>
    </div>
  )
}

export default T07Index
