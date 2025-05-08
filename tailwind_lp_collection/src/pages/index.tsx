import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

type LpCardProps = {
  href: string
  imgSrc: string
  title: string
  description: string
}
const LpCard = ({ href, imgSrc, title, description }: LpCardProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <Link href={href}>
        <a>
          <div className="overflow-hidden h-full rounded-lg border-2 border-gray-300 hover:opacity-75">
            <Image
              className="object-cover object-center w-full md:h-36 lg:h-48"
              src={imgSrc}
              alt="blog"
              width={800}
              height={400}
            />
            <div className="p-6">
              <h1 className="mb-3 text-lg font-medium text-gray-900">{title}</h1>
              <p className="mb-3 leading-relaxed">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className="py-2 min-h-screen bg-gray-50">
      <Head>
        <title>ランディングページの練習一覧</title>
        <meta name="description" content="これまで制作した練習ページの一覧です" />
        <meta property="og:title" content="ランディングページの練習一覧" />
        <meta property="og:description" content="これまで制作した練習ページの一覧です" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container px-5 pt-12 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full text-center">
          <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">ランディングページの練習一覧</h1>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">Next.js + Tailwindcss にて制作しています。</p>
        </div>
      </div>

      <section className="text-gray-600">
        <div className="container py-12 px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* 各LPカードここから */}
            <LpCard
              href="/t12/"
              imgSrc="/img/t12/summary.jpg"
              title="Furniture Design"
              description="ストアサイト練習ページ"
            />

            <LpCard href="/t11/" imgSrc="/img/t11/summary.jpg" title="COFFEE" description="カフェサイト練習ページ" />

            <LpCard
              href="/t10/"
              imgSrc="/img/t10/summary.jpg"
              title="Web Entertainment Design"
              description="コーポレートサイト練習ページ"
            />

            <LpCard href="/t09/" imgSrc="/img/t09/summary.jpg" title="Totally" description="ECサイト練習ページ" />

            <LpCard href="/t08/" imgSrc="/img/t08/summary.jpg" title="Mag88" description="ストアサイト練習ページ" />

            <LpCard
              href="/t07/"
              imgSrc="/img/t07/summary.jpg"
              title="My Work - Portfolio"
              description="ポートフォリオサイト練習ページ"
            />

            <LpCard
              href="/t06/"
              imgSrc="/img/t06/summary.jpg"
              title="Wooden Jewelry"
              description="ブランドサイト練習ページ"
            />

            <LpCard
              href="/t05/"
              imgSrc="/img/t05/summary.jpg"
              title="Recipe Diary2"
              description="レシピサイト練習ページ2"
            />

            <LpCard
              href="/t04/"
              imgSrc="/img/t04/summary.jpg"
              title="Recipe Diary"
              description="レシピサイト練習ページ1"
            />

            <LpCard
              href="/t03/"
              imgSrc="/img/t03/summary.jpg"
              title="PHOTO BOOK 2"
              description="フォトサイト練習ページ2"
            />

            <LpCard
              href="/t02/"
              imgSrc="/img/t02/summary.jpg"
              title="PHOTO BOOK"
              description="レシピサイト練習ページ"
            />

            <LpCard
              href="/t01/"
              imgSrc="/img/t01/summary.jpg"
              title="Profile"
              description="プロフィールサイト練習ページ"
            />
          </div>
        </div>
      </section>

      <footer>
        <p className="py-4 mx-auto text-xs text-center">
          © 2021 Harutaka —
          <a
            href="https://twitter.com/harutaka_ini"
            className="ml-1 text-gray-600 hover:opacity-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            @harutaka_ini
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Home
