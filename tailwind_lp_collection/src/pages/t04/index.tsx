import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const T04Index: NextPage = () => {
  const imgArr = ["/img/t04/recipe1.jpg", "/img/t04/recipe2.jpg", "/img/t04/recipe3.jpg"]
  const snsArr = [
    { href: "#", name: "Instagram" },
    { href: "#", name: "Twitter" },
    { href: "#", name: "Facebook" },
  ]

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Recipe Diary</title>
        <meta name="description" content="レシピサイト練習ページ" />
        <meta property="og:title" content="Recipe Diary" />
        <meta property="og:description" content="レシピサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t04/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t04/favicon.ico" />
      </Head>

      <main>
        <div className="object-cover relative mb-20 w-full h-screen">
          <Image src="/img/t04/mainvisual.jpg" alt="" layout="fill" objectFit="cover" />
        </div>

        <div className="py-0 px-5 text-center">
          <h1 className="mb-5 text-3xl font-bold">Recipe Diary</h1>
          <p>
            日々の料理レシピをまとめています。
            <br />
            和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、
            <br />
            みなさんの献立にお役立てくださいね！
          </p>
        </div>

        <ul className="my-[60px] md:flex">
          {imgArr.map((item, i) => (
            <li className="relative h-[500px] md:w-1/3" key={i}>
              <Image src={item} alt="" layout="fill" objectFit="cover" />
            </li>
          ))}
        </ul>

        <div className="py-0 px-5 mb-20 text-center">
          <Link href="#">
            <a className="inline-block py-3 px-14 text-sm no-underline border border-gray-800">レシピ一覧を見る</a>
          </Link>
        </div>

        <footer className="p-5 text-xs text-center">
          <ul className="flex justify-center mb-5">
            {snsArr.map((item, i) => (
              <li key={i} className="my-0 mx-2.5 underline">
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <p>&copy; 2021 Harutaka</p>
        </footer>
      </main>
    </div>
  )
}

export default T04Index
