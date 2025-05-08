/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const MenuItem = () => {
  return (
    <>
      <dt className="mb-6 w-10/12 text-left border-b border-black border-dotted">XXXXXXXX</dt>
      <dd className="pt-2 w-2/12 text-right">&yen;500</dd>
    </>
  )
}

const T11Index: NextPage = () => {
  const navArr = [
    { href: "#menu", title: "MENU" },
    { href: "#about", title: "ABOUT" },
    { href: "#location", title: "LOCATION" },
  ]
  return (
    <div className="min-h-screen text-sm leading-relaxed bg-gray-100">
      <Head>
        <title>COFFEE</title>
        <meta name="description" content="カフェサイト練習ページ" />
        <meta property="og:title" content="COFFEE" />
        <meta property="og:description" content="カフェサイト練習ページ" />
        <meta property="og:image" content="https://tailwind-lp-collection.vercel.app/img/t11/summary.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/img/t11/favicon.ico" />
      </Head>

      <header
        id="header"
        className="relative py-5 px-10 w-full min-h-screen bg-center bg-[url('/img/t11/mainvisual.jpg')] bg-no-repeat bg-cover"
      >
        <nav>
          <ul className="flex justify-end">
            {navArr.map((item, i) => (
              <li key={i} className="ml-8">
                <Link href={item.href}>
                  <a className="font-bold text-white hover:text-red-500 drop-shadow-[1px_1px_2px_#121212] duration-300">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="absolute top-[42%] right-0 left-0 px-4 text-center drop-shadow-[1px_1px_10px_#c0c0c0] md:top-[45%]">
          <Image src="/img/t11/logo.svg" alt="COFFEE" width={460} height={100} />
        </h1>
      </header>

      <main>
        <section id="menu" className="mt-2.5 md:mt-5">
          <div className="relative h-[94px] bg-scroll bg-center bg-[url('/img/t11/menu.jpg')] bg-cover md:h-[300px] md:bg-fixed">
            <h2 className="absolute top-[26%] w-full text-[2rem] font-bold text-center text-white drop-shadow-[1px_1px_10px_#c0c0c0] md:top-[30%] md:text-[4.5rem]">
              MENU
            </h2>
          </div>

          <div className="px-4 pt-[30px] pb-[60px] mx-auto max-w-5xl text-center md:flex md:pt-[90px] md:pb-[150px]">
            <div className="px-[45px] border-black md:w-1/2 md:border-r">
              <h3 className="inline-block mb-6 text-xl font-bold leading-relaxed border-b-[6px] border-red-500 md:mb-16 md:text-[2.5rem]">
                COFFEE
              </h3>
              <dl className="flex flex-wrap mb-2.5 md:mb-0">
                {[...Array(10)].map((_, i) => (
                  <MenuItem key={i} />
                ))}
              </dl>
            </div>
            <div className="px-[45px] md:w-1/2">
              <h3 className="inline-block mb-6 text-xl font-bold leading-relaxed border-b-[6px] border-red-500 md:mb-16 md:text-[2.5rem]">
                FOOD
              </h3>
              <dl className="flex flex-wrap mb-2.5 md:mb-0">
                {[...Array(3)].map((_, i) => (
                  <MenuItem key={i} />
                ))}
              </dl>
              <h3 className="inline-block mb-6 text-xl font-bold leading-relaxed border-b-[6px] border-red-500 md:mb-16 md:text-[2.5rem]">
                OTHER
              </h3>
              <dl className="flex flex-wrap">
                {[...Array(3)].map((_, i) => (
                  <MenuItem key={i} />
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="about" className="mt-5">
          <div className="relative h-[94px] bg-scroll bg-center bg-[url('/img/t11/about.jpg')] bg-cover md:h-[300px] md:bg-fixed">
            <h2 className="absolute top-[26%] w-full text-[2rem] font-bold text-center text-white drop-shadow-[1px_1px_10px_#c0c0c0] md:top-[30%] md:text-[4.5rem]">
              ABOUT
            </h2>
          </div>

          <div className="px-4 pt-[30px] pb-[60px] mx-auto max-w-5xl text-center md:pt-[90px] md:pb-[150px] about-content">
            <div className="about-item">
              <h3 className="inline-block mb-6 text-xl font-bold leading-relaxed border-b-[6px] border-red-500 md:mb-16 md:text-[2.5rem]">
                COFFEE
              </h3>
              <ul className="flex-wrap justify-between mb-10 md:flex">
                {[...Array(4)].map((_, i) => (
                  <li key={i} className="p-[2%] leading-loose text-left md:w-1/2">
                    テキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキスト
                  </li>
                ))}
              </ul>
              <Link href="#">
                <a className="inline-block relative before:absolute after:absolute before:right-0 after:right-0 before:bottom-0 after:bottom-0 w-40 before:w-[2px] after:w-1/5 hover:after:w-full h-12 before:h-1/2 after:h-[2px] hover:before:h-full leading-[3.5] before:bg-red-500 after:bg-red-500 before:duration-300 after:duration-300 cursor-pointer">
                  <span className="block relative before:absolute after:absolute before:top-0 after:top-0 before:left-0 after:left-0 w-full before:w-[2px] after:w-1/5 hover:after:w-full h-full before:h-1/2 after:h-[2px] hover:before:h-full before:bg-red-500 after:bg-red-500 before:duration-300 after:duration-300">
                    Read More
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section id="location" className="mt-5">
          <div className="relative h-[94px] bg-scroll bg-center bg-[url('/img/t11/location.jpg')] bg-cover md:h-[300px] md:bg-fixed">
            <h2 className="absolute top-[26%] w-full text-[2rem] font-bold text-center text-white drop-shadow-[1px_1px_10px_#c0c0c0] md:top-[30%] md:text-[4.5rem]">
              LOCATION
            </h2>
          </div>

          <div className="px-4 pt-[30px] pb-[60px] mx-auto max-w-5xl text-center md:pt-[90px] md:pb-[150px] location-content">
            <div className="location-item">
              <h3 className="inline-block mb-6 text-xl font-bold leading-relaxed border-b-[6px] border-red-500 md:mb-16 md:text-[2.5rem]">
                OUR STORE
              </h3>
              <div className="mb-5 grayscale">
                <iframe
                  className="w-full h-[400px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4585.299293219977!2d139.7062494041788!3d35.64507269733178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b40ba660b1b%3A0x8858088b6942f55f!2z44CSMTUwLTAwMjIg5p2x5Lqs6YO95riL6LC35Yy65oG15q-U5a-_5Y2X!5e0!3m2!1sja!2sjp!4v1592748907506!5m2!1sja!2sjp"
                ></iframe>
              </div>
              <div className="text-left">
                <p className="pb-2.5">
                  X-XX-XX, Ebisuminami, Shibuya-ku, Tokyo 150-0022
                  <br />
                  東京都渋谷区恵比寿南X-XX-XX
                </p>
                <p className="pb-2.5">
                  Open 7 days a Week
                  <br />
                  9:00am to 10:00pm
                </p>
                <p className="pb-2.5">Tel : XX-XXXX-XXXX</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="py-2.5 text-xs text-center">
        <p>&copy; Harutka</p>
      </footer>
    </div>
  )
}

export default T11Index
