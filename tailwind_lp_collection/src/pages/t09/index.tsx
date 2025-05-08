/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const T09Index: NextPage = () => {
  const headerLeftArr = ["ALL", "NEW", "VINTAGE", "CATEGORY", "LOOKBOOK", "BLOG"]
  const headerRightArr = ["LOGIN", "CONTACT"]
  return (
    <div className="min-h-screen font-serif text-xs text-gray-800 bg-gray-100">
      <Head>
        <title>Totally</title>
        <meta name="description" content="ECサイト練習ページ" />
        <meta property="og:title" content="Totally" />
        <meta property="og:description" content="ECサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t09/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t09/favicon.ico" />
      </Head>

      <header className="px-4 pt-9 pb-4 mx-auto max-w-5xl md:px-0 md:pt-11 md:pb-6">
        <div className="mx-auto mb-9 w-[109px]">
          <Link href="index.html">
            <a className="block">
              <Image src="/img/t09/logo.svg" alt="TOTALLY" width={1450} height={250} />
            </a>
          </Link>
        </div>

        <nav className="flex overflow-x-scroll justify-between items-center mx-auto max-w-[800px] md:overflow-x-auto">
          <ul className="flex items-center">
            {headerLeftArr.map((item, i) => (
              <li key={i} className="mr-5">
                <Link href="#">
                  <a>{item}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center">
            {headerRightArr.map((item, i) => (
              <li key={i} className="ml-5">
                <Link href="#">
                  <a>{item}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <div id="item" className="justify-between mx-auto mb-[100px] max-w-[800px] md:flex">
          <div className="shrink-0 mb-[10px] max-w-full md:mr-[60px] md:mb-0 md:max-w-[400px]">
            <Image src="/img/t09/item.jpg" alt="" width={800} height={1000} />
          </div>

          <div className="px-8">
            <h1 className="flex items-center mb-5 h-[60px] text-base font-bold border-y border-gray-300">
              TOTALLY Short Sleeve Shirt
            </h1>
            <p className="mb-[30px] leading-loose">
              テキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキスト
            </p>

            <p className="mb-[30px] leading-loose">￥9,999 +tax</p>

            <table className="mb-5 w-full">
              <thead>
                <tr>
                  <th className="p-[10px] w-1/5 text-center border-r border-gray-300">Color</th>
                  <th className="p-[10px] w-1/5 text-center border-r border-gray-300">Size</th>
                  <th className="p-[10px] w-3/5 text-center border-gray-300"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-[10px] text-center border-t border-r border-gray-300">White</td>
                  <td className="p-[10px] text-center border-t border-r border-gray-300">S</td>
                  <td className="p-[10px] text-center border-t border-gray-300">
                    <select name="quantity_s" className="px-4 w-full border-gray-300">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="p-[10px] text-center border-t border-r border-gray-300">White</td>
                  <td className="p-[10px] text-center border-t border-r border-gray-300">M</td>
                  <td className="p-[10px] text-center border-t border-gray-300">
                    <select name="quantity_m" className="px-4 w-full border-gray-300">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="p-[10px] text-center border-t border-r border-gray-300">White</td>
                  <td className="p-[10px] text-center border-t border-r border-gray-300">L</td>
                  <td className="p-[10px] text-center border-t border-gray-300">
                    <select name="quantity_l" className="px-4 w-full border-gray-300">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <Link href="#">
              <a className="block py-4 mb-7 w-full leading-none text-center text-white bg-gray-700">ADD TO CART</a>
            </Link>

            <table className="w-full border-t border-l border-gray-300">
              <thead>
                <tr>
                  <th className="p-2.5 w-1/6 bg-gray-200 border-r border-b border-gray-300">Size</th>
                  <th className="p-2.5 w-[28%] bg-gray-200 border-r border-b border-gray-300">Chest</th>
                  <th className="p-2.5 w-[28%] bg-gray-200 border-r border-b border-gray-300">Weist</th>
                  <th className="p-2.5 w-[28%] bg-gray-200 border-r border-b border-gray-300">Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-gray-200">S</th>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                </tr>
                <tr>
                  <th className="bg-gray-200">M</th>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                </tr>
                <tr>
                  <th className="bg-gray-200">L</th>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                  <td className="p-2.5 text-center border-r border-b border-gray-300">99 ～ 99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer id="footer" className="py-2.5 mx-auto max-w-[800px]">
        <p className="text-[10px] text-center">&copy; Harutaka</p>
      </footer>
    </div>
  )
}

export default T09Index
