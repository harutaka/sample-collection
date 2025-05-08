import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const T05Index: NextPage = () => {
  const snsArr = [
    { href: "#", name: "Instagram" },
    { href: "#", name: "Twitter" },
    { href: "#", name: "Facebook" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Recipe Diary</title>
        <meta name="description" content="レシピサイト練習ページ" />
        <meta property="og:title" content="Recipe Diary" />
        <meta property="og:description" content="レシピサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t05/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t05/favicon.ico" />
      </Head>

      <main>
        <section className="mb-[60px] md:flex">
          <div className="relative h-screen md:w-1/2 md:h-[700px]">
            <Image src="/img/t05/recipe.jpg" alt="" layout="fill" objectFit="cover" />
          </div>

          <div className="px-[5%] pt-10 md:w-1/2">
            <h1 className="mb-5 text-[1.75rem] font-bold">ひよこ豆とアボガドのタコス</h1>
            <p>
              たっぷりのひよこ豆とレンズ豆にアボガドとトマトを添えて、少しライムを絞ったらおいしいタコスのできあがりです。
            </p>

            {/* content-title */}
            <h2 className="pb-[5px] mx-0 mt-10 mb-[15px] text-lg font-bold border-b border-b-gray-300">
              材料（2人分）
            </h2>
            {/* ingredient-list */}
            <dl className="flex flex-wrap">
              {[...Array(5)].map(() => (
                <>
                  <dt className="py-1.5 px-0 w-5/6 border-b border-b-gray-300 border-dashed">テキストテキスト</dt>
                  <dd className="py-1.5 px-0 w-1/6 text-right border-b border-b-gray-300 border-dashed">1個</dd>
                </>
              ))}
            </dl>

            {/* content-title */}
            <h2 className="pb-[5px] mx-0 mt-10 mb-[15px] text-lg font-bold border-b border-b-gray-300">作り方</h2>
            {/* step-list */}
            <ol>
              {[...Array(5)].map((_, i) => (
                <li key={i} className="py-1.5 px-0 ml-5 list-decimal border-b border-b-gray-300 border-dashed">
                  テキストテキストテキストテキスト
                </li>
              ))}
            </ol>
          </div>
        </section>

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

export default T05Index
