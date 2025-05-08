import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const NewsList = () => {
  return (
    <li className="py-2.5 px-0 last:pr-0 first:pl-0 mb-5 last:mb-0 w-1/3 border-r-0 last:border-r-0 border-black md:py-0 md:px-5 md:mb-0 md:border-r">
      <div className="mb-4">
        <time dateTime="2021-01-01">2021.01.01</time>
        <span className="inline-block ml-2.5 w-12 h-5 text-xs leading-[20px] text-center text-white bg-black">
          NEWS
        </span>
      </div>
      <p>タイトルタイトルタイトルタイトル</p>
    </li>
  )
}

const BusinessItem = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="mb-12 last:mb-0">
      <p className="relative before:absolute before:top-[50%] before:-left-4 mb-2.5 ml-4 before:w-2 before:h-px font-bold before:bg-black">
        {title}
      </p>
      <Image src={src} alt="" width={760} height={480} />
    </div>
  )
}

const T10Index: NextPage = () => {
  const navArr = [
    { href: "#news", word: "NEWS" },
    { href: "#about", word: "ABOUT" },
    { href: "#business", word: "BUSINESS" },
    { href: "#company", word: "COMPANY" },
  ]

  return (
    <div className="min-h-screen text-sm bg-gray-100">
      <Head>
        <title>Web Entertainment Design</title>
        <meta name="description" content="コーポレートサイト練習ページ" />
        <meta property="og:title" content="Web Entertainment Design" />
        <meta property="og:description" content="コーポレートサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t10/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t10/favicon.ico" />
      </Head>

      <header id="header" className="flex justify-between items-center h-20">
        <div className="items-center px-4 mx-auto w-full max-w-5xl md:flex">
          <h1 className="my-2 mr-14 w-20 leading-none md:my-0 md:w-24">
            <Link href="/t10/">
              <a className="block">
                <Image src="/img/t10/logo.svg" alt="Web Entertainment Design" width={540} height={140} />
              </a>
            </Link>
          </h1>
          <nav>
            <ul className="flex">
              {navArr.map((item, i) => (
                <li key={i} className="mr-8 last:mr-0">
                  <Link href={item.href}>
                    <a>{item.word}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Link href="#">
          <a className="hidden justify-center items-center w-48 h-20 text-xs text-white bg-black hover:bg-gray-800 md:flex">
            お問い合わせ
          </a>
        </Link>
      </header>

      <main>
        <div id="mainvisual" className="relative mb-20 w-full h-[calc(100vh-80px)] md:mb-32">
          <Image src="/img/t10/mainvisual.jpg" alt="" layout="fill" objectFit="cover" />
        </div>

        <section id="news" className="px-4 mx-auto mb-32 w-full max-w-5xl">
          <h2 className="after:block mb-6 after:w-10 after:h-px leading-none after:bg-black md:mb-12">
            <span className="block mb-2.5 text-4xl tracking-[0.3em]">NEWS</span>
            <span className="block mb-6 text-sm md:mb-9">ニュース</span>
          </h2>

          <ul className="justify-between md:flex">
            {[...Array(3)].map((_, i) => (
              <NewsList key={i} />
            ))}
          </ul>
        </section>

        <section id="about" className="mb-20 md:flex md:mb-32">
          <div className="relative mb-8 h-[300px] md:mb-0 md:w-7/12 md:h-[400px]">
            <Image src="/img/t10/about.jpg" alt="" layout="fill" objectFit="cover" />
          </div>

          <div className="px-4 w-full md:px-[5%] md:pt-[180px] md:w-5/12">
            <h2 className="after:block mb-6 after:w-10 after:h-px leading-none after:bg-black md:mb-12">
              <span className="block mb-2.5 text-4xl tracking-[0.3em]">ABOUT</span>
              <span className="block mb-6 text-sm md:mb-9">私たちについて</span>
            </h2>
            <p className="leading-loose">
              テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
            </p>
            <p className="leading-loose">
              テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
            </p>
            <p className="leading-loose">
              テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </section>

        <section id="business" className="px-4 mx-auto mb-20 w-full max-w-5xl md:mb-32">
          <h2 className="after:block mb-6 after:w-10 after:h-px leading-none after:bg-black md:mb-12">
            <span className="block mb-2.5 text-4xl tracking-[0.3em]">BUSINESS</span>
            <span className="block mb-6 text-sm md:mb-9">事業内容</span>
          </h2>

          <div className="justify-between p-0 md:flex md:px-[10%]">
            <div className="mt-24 mb-8 md:w-[46%]">
              <BusinessItem src="/img/t10/business1.jpg" title="Web制作・マーケティング" />
              <BusinessItem src="/img/t10/business2.jpg" title="インターネットメディア事業" />
            </div>

            <div className="md:w-[46%]">
              <BusinessItem src="/img/t10/business3.jpg" title="プロモーション企画・制作" />
              <BusinessItem src="/img/t10/business4.jpg" title="ソーシャル企画・運営" />
            </div>
          </div>
        </section>

        <section id="company" className="items-center px-4 mx-auto w-full max-w-5xl md:flex md:relative md:h-[750px]">
          <div className="top-0 left-0 py-10 px-5 mb-5 w-full bg-white md:absolute md:py-[100px] md:pr-[8%] md:pl-[6%] md:mb-0 md:w-[55%]">
            <h2 className="after:block mb-6 after:w-10 after:h-px leading-none after:bg-black md:mb-12">
              <span className="block mb-2.5 text-4xl tracking-[0.3em]">COMPANY</span>
              <span className="block mb-6 text-sm md:mb-9">会社情報</span>
            </h2>

            <dl className="flex flex-wrap items-center">
              <dt className="mt-2.5 first:mt-0 w-1/5">会社名</dt>
              <dd className="mt-2.5 first:mt-0 w-4/5">ウェブエンターテイメントデザイン株式会社</dd>
              <dt className="mt-2.5 first:mt-0 w-1/5">所在地</dt>
              <dd className="mt-2.5 first:mt-0 w-4/5">東京都渋谷区桜丘町99-9 West Building 3F</dd>
              <dt className="mt-2.5 first:mt-0 w-1/5">代表</dt>
              <dd className="mt-2.5 first:mt-0 w-4/5">ＸＸＸＸＸＸ</dd>
              <dt className="mt-2.5 first:mt-0 w-1/5">設立</dt>
              <dd className="mt-2.5 first:mt-0 w-4/5">2021年1月1日</dd>
              <dt className="mt-2.5 first:mt-0 w-1/5">資本金</dt>
              <dd className="mt-2.5 first:mt-0 w-4/5">3,000,000円</dd>
              <dt className="mt-2.5 first:mt-0 w-1/5">事業内容</dt>
              <dd className="mt-2.5 first:mt-0 w-4/5">Web制作・マーケティング</dd>
              <dd className="mt-2.5 first:mt-0 ml-[20%] w-4/5">インターネットメディア事業</dd>
              <dd className="mt-2.5 first:mt-0 ml-[20%] w-4/5">プロモーション企画・制作</dd>
              <dd className="mt-2.5 first:mt-0 ml-[20%] w-4/5">ソーシャル企画・運営</dd>
            </dl>
          </div>

          <div className="top-[115px] right-0 md:absolute md:w-[53%]">
            <div className="relative h-[400px]">
              <Image src="/img/t10/company.jpg" alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="pb-5 bg-white">
        <div className="px-4 mx-auto w-full max-w-5xl">
          <div className="justify-between items-center py-10 md:flex">
            <div className="my-2 w-20 md:my-0 md:w-24">
              <Image src="/img/t10/logo.svg" alt="Web Entertainment Design" width={540} height={140} />
            </div>
            <div>
              <p>
                Web Entertainment Design Inc.
                <br />
                West Building 3F
                <br />
                9-99 Sakuragaokacho Shibuya-ku
                <br />
                Tokyo, Japan 150-0031
              </p>
              <p>T/99-9999-9999</p>
            </div>
          </div>
          <p className="text-xs">&copy; Harutaka</p>
        </div>
      </footer>
    </div>
  )
}

export default T10Index
