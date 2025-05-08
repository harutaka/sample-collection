import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const T01Index: NextPage = () => {
  const imgs = ["/img/t01/bicycle1.jpg", "/img/t01/bicycle2.jpg", "/img/t01/bicycle3.jpg"]

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="プロフィールサイト練習ページ" />
        <meta property="og:title" content="Profile" />
        <meta property="og:description" content="プロフィールサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t01/summary.jpg" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <header
        id="header"
        className="flex justify-between items-center py-0 px-[4%] my-auto mx-auto max-w-[960px] text-center"
      >
        <h1 className="py-2.5 px-0 w-[120px] leading-none">
          <Link href="index.html">
            <a>
              <Image src="/img/t01/logo.svg" alt="Profile" width={120} height={40} />
            </a>
          </Link>
        </h1>
        <nav>
          <ul className="flex py-0 px-2.5">
            <li className="ml-[30px]">
              <Link href="#about">
                <a className="text-[#24292e] hover:opacity-70">About</a>
              </Link>
            </li>
            <li className="ml-[30px]">
              <Link href="#bicycle">
                <a className="text-[#24292e] hover:opacity-70">Bicycle</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div id="mainvisual" className="mb-[80px]">
          <Image src="/img/t01/mainvisual.jpg" alt="テキスト" width={1920} height={600} className="object-cover" />
        </div>

        <section id="about" className="py-0 px-[4%] mx-auto mt-0 mb-[100px] max-w-[960px] text-center">
          <h2 className="inline-block mb-[60px] text-[2rem] font-bold text-center border-b border-[#383e45] border-solid">
            About
          </h2>
          <div className="flex justify-center items-center">
            <div className="mr-[30px]">
              <Image
                src="/img/t01/about.jpg"
                className="rounded-[50%]"
                width={100}
                height={100}
                alt="テキストテキストテキスト"
              />
            </div>
            <div className="text-left">
              <h3 className="my-2.5 mx-0 text-base font-bold">KAKERU MIYAICHI</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        <section id="bicycle" className="py-0 px-[4%] mx-auto mt-0 mb-[100px] max-w-[960px] text-center">
          <h2 className="inline-block mb-[60px] text-[2rem] font-bold text-center border-b border-[#383e45] border-solid">
            Bicycle
          </h2>
          <ul className="flex justify-between">
            {imgs.map((item) => {
              return (
                <li className="w-[32%]" key={item}>
                  <Image src={item} alt="テキストテキストテキスト" width={640} height={424} />
                  <h3 className="my-2.5 mx-0 text-base font-bold">タイトルタイトル</h3>
                  <p>テキストテキストテキスト</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>

      <footer id="footer" className="py-2.5 px-0 text-[0.5rem] text-center">
        <p>&copy; 2021 Harutaka</p>
      </footer>
    </>
  )
}

export default T01Index
