/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

type ServiceItemProps = {
  className: string
  title: string
  title2: string
  text: string
}
const ServiceItem = ({ className, title, title2, text }: ServiceItemProps) => {
  return (
    <div
      className={`${className} bg-bottom bg-cover min-h-[540px] md:h-[80vh] flex-grow py-[8%] px-[6%] basis-full md:basis-1`}
    >
      <h2 className="mb-4 text-2xl">
        {title}
        <br />
        {title2}
      </h2>
      <p className="tracking-wider leading-relaxed">{text}</p>
    </div>
  )
}

const S01Index: NextPage = () => {
  const footerArr = ["お知らせnote", "FAQ", "プライバシーポリシー", "利用規約", "特定商取引法に関する表記", "運営会社"]

  return (
    <div className="font-noto tracking-wider leading-relaxed text-gray-800">
      <Head>
        <title>FLOWER｜かわいいが届くお花便</title>
        <meta name="description" content="あなた好みのお花がポストに届く定期便アプリ" />
        <meta name="twitter:card" content="summary" />
        <link rel="stylesheet" media="screen" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" />
        <link rel="icon" href="/img/s01/favicon.ico" />
      </Head>

      <header className="relative pt-12 h-screen min-h-[660px] text-center bg-center bg-[url('/img/s01/bg_header_pink_sp.jpg')] bg-cover md:bg-bottom md:bg-[url('/img/s01/bg_header_pink.jpg')] md:bg-no-repeat">
        <div className="my-4 mx-auto w-[131px] h-[116px] bg-center bg-[url('/img/s01/header_logo.png')] bg-no-repeat bg-contain duration-200 md:mt-[15vh]"></div>

        <div className="pb-6 mx-auto mt-4 text-white duration-200 md:mt-6 md:text-xl md:font-normal">
          かわいいが届くお花便
        </div>

        <div className="absolute right-0 bottom-6 left-0 pt-[260px] mx-auto text-center duration-200 md:pt-6">
          <div className="py-6 px-4 w-full">
            <div className="flex justify-center">
              <Link href="#">
                <a className="mr-8">
                  <Image src="/img/s01/Badge_Appstore.png" alt="" width={164} height={49} />
                </a>
              </Link>
              <Link href="#">
                <a className="">
                  <Image src="/img/s01/Badge_Googleplaystore.png" alt="" width={164} height={49} />
                </a>
              </Link>
            </div>

            <div className="my-6 mx-auto">
              <p className="mb-1 text-sm text-white">* 北海道、沖縄、離島エリアは現在対象外です</p>
            </div>
          </div>
        </div>
      </header>

      <section className="block">
        <div className="flex flex-wrap text-white">
          <ServiceItem
            className="bg-violet-400 bg-[url('/img/s01/bg_service01.jpg')]"
            title="届くのは"
            title2="あなた好みのお花だけ"
            text="FLOWERのお花は季節やトレンドに合わせてプロがセレクトしたもの。雰囲気の異なる複数のお花から毎回好きなものが選べます。"
          />
          <ServiceItem
            className="bg-violet-400 bg-[url('/img/s01/bg_service02.jpg')]"
            title="お花はポストに投函"
            title2="忙しくても大丈夫"
            text="お花は専用BOXに入れてポストに直接お届け。不在で受け取れなくても安心して使えます。"
          />
          <ServiceItem
            className="bg-violet-400 bg-[url('/img/s01/bg_service03.jpg')]"
            title="FLOWERなら"
            title2="いつもかわいく飾れる"
            text="専用の花器を使うと、届いたお花をさっと生けるだけでかわいい空間のできあがり。お花のある暮らしがもっと楽しくなります。"
          />
        </div>
      </section>

      <section className="text-center">
        <div className="flex flex-wrap ">
          {/* item price */}
          <div className="basis-96 grow py-[16%] px-[6%] bg-gray-100 md:py-16">
            <h2 className="mb-4 text-xl text-gray-800">
              お部屋に飾りやすいサイズの
              <br />
              ブーケを気軽に
            </h2>
            <div className="mx-auto max-w-[400px] md:w-[400px]">
              {/* content */}
              <div className="flex flex-col mb-4">
                {/* bouquet */}
                <div className="relative basis-[200px] mx-0 mt-6 mb-2 bg-center bg-[url('/img/s01/price_bouquetimg.png')] bg-no-repeat bg-[length:200px_200px]">
                  <div className="absolute -top-6 right-0 left-0 mx-auto w-32 h-12 bg-center bg-[url('/img/s01/price_trial.png')] bg-cover"></div>
                </div>
                {/* bouquet_price */}
                <div className="my-4 mx-auto font-bold">
                  <p>お花とグリーン5～7本のブーケ</p>
                  <p>
                    <span className="text-xl">880円</span> / 1回
                  </p>
                </div>
                {/* footnote */}
                <div className="text-sm">
                  <p>* 送料別途396円</p>
                  <p>* 価格はすべて税込みです</p>
                </div>
              </div>
            </div>
          </div>

          {/* item frequency */}
          <div className="basis-96 grow py-[16%] px-[6%] m-auto bg-white md:py-16 md:mx-6">
            <h2 className="mb-4 text-xl text-gray-800">
              月に2回の注文で、
              <br />
              お花がいつもある丁度いいペース
            </h2>
            <div className="mt-6">
              <Image src="/img/s01/img_frequency.png" alt="" width={174} height={156} />
            </div>
          </div>
        </div>
      </section>

      <section className="block py-[16%] px-[6%] bg-[#ead5dc] md:py-0">
        <div className="flex flex-col grow h-[730px] md:flex-wrap">
          <div className="grow mb-6 max-h-fit md:order-2 md:mt-[140px] md:w-1/2">
            <h2 className="text-2xl text-center">どんなお花が届くの？</h2>
          </div>
          <div className="mx-auto w-1/2 h-[730px] bg-center bg-[url('/img/s01/bg_flower.jpg')] bg-no-repeat bg-contain md:order-1"></div>
          <div className="grow mx-auto max-w-[400px] md:order-3">
            <h3 className="mt-6 mb-4 text-2xl text-center">かわいいお花だけ</h3>
            <p>
              色やサイズなど、かわいくおしゃれに飾れるお花にこだわってセレクト。季節やトレンドに合わせてブーケを作っています。
            </p>
            <h3 className="mt-6 mb-4 text-2xl text-center">元気な状態で</h3>
            <p>お花は注文を受けてから市場で直接仕入れているから新鮮。お花の元気を保つ専用BOXでお届けします。</p>
            <h3 className="mt-6 mb-4 text-2xl text-center">そのまま飾れる</h3>
            <p>あらかじめ飾るのに最適な長さに茎をカットしてお届け。箱から出して、そのまま花器に入れるだけでOKです。</p>
          </div>
        </div>
      </section>

      <section className="pt-[16%] bg-[#e7e3df] md:pt-[10%]">
        <div className="flex flex-col h-[980px] md:flex-wrap md:h-[730px]">
          {/* item title */}
          <div className="grow max-h-fit md:order-1 md:w-1/2">
            <h2 className="text-2xl text-center">
              かんたん、かわいい
              <br />
              FLOWERのための花の器
            </h2>
            <div className="flex mt-4">
              <p className="inline-block py-1 px-2 mx-auto font-bold bg-white">初回限定25%OFF</p>
            </div>
          </div>

          {/* item img */}
          <div className="mx-auto w-1/2 h-[730px] bg-bottom bg-[url('/img/s01/bg_vase.jpg')] bg-no-repeat bg-contain md:order-3 md:bg-cover"></div>

          {/* item body */}
          <div className="grow py-[2%] px-[6%] mx-auto max-w-[400px] md:order-2 md:p-0 md:mt-8 md:w-[400px]">
            <p>
              お花を飾るのに欠かせないのが花器。でも、お花と花器の相性もさまざま。手持ちにぴったりのものがなくて、いまいちかわいく飾れない…なんてことも。そこで、誰でもかんたんに、かわいくお花を飾れる専用の花器をつくりました。お花のある暮らしが、もっと楽しみになりますように。
            </p>
            <div className="flex justify-between my-6 mx-auto">
              <div className="relative grow max-w-[98px] h-[116px] bg-[url('/img/s01/vase_bell.jpg')] bg-cover">
                <p className="absolute right-0 bottom-1 left-0 m-auto text-sm text-center">bell</p>
              </div>
              <div className="relative grow max-w-[98px] h-[116px] bg-[url('/img/s01/vase_moon.jpg')] bg-cover">
                <p className="absolute right-0 bottom-1 left-0 m-auto text-sm text-center">moon</p>
              </div>
              <div className="relative grow max-w-[98px] h-[116px] bg-[url('/img/s01/vase_candle.jpg')] bg-cover">
                <p className="absolute right-0 bottom-1 left-0 m-auto text-sm text-center">candle</p>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="inline-block order-1 p-1 mr-4 w-[100px] text-sm font-bold text-center border-2 border-black">
                初回注文後
                <br />
                2週間以内
              </div>
              <div className="order-2">
                <div className="text-lg">1,800円（税込1,980円）</div>
                <div className="text-xs">通常価格 2,400円（税込2,640円）</div>
              </div>
            </div>
            <div className="text-xs">アプリ内でご購入いただけます。</div>
          </div>
        </div>
      </section>

      <section className="py-[16%] px-[4%] text-center md:py-[12%]">
        <h2 className="text-2xl text-center">
          FLOWERだから続けられる、
          <br />
          お花のある暮らし
        </h2>
        <div className="flex flex-wrap">
          <div className="basis-[223px] grow pt-20 mt-6 w-20 bg-top bg-[url('/img/s01/icon01.png')] bg-no-repeat bg-[length:80px]">
            <h3 className="mb-4 text-xl">お世話がかんたん</h3>
            <p className="text-sm">
              お花の栄養剤をセットでお届け。
              <br />
              こまめな水換えは不要です。
            </p>
          </div>
          <div className="basis-[223px] grow pt-20 mt-6 w-20 bg-top bg-[url('/img/s01/icon02.png')] bg-no-repeat bg-[length:80px]">
            <h3 className="mb-4 text-xl">アプリがお知らせ</h3>
            <p className="text-sm">
              お花のお届けはアプリがお知らせ。
              <br />
              受け取り忘れの心配はありません。
            </p>
          </div>
          <div className="basis-[223px] grow pt-20 mt-6 w-20 bg-top bg-[url('/img/s01/icon03.png')] bg-no-repeat bg-[length:80px]">
            <h3 className="mb-4 text-xl">安心の保証つき</h3>
            <p className="text-sm">
              万が一枯れたお花が届いても、
              <br />
              返金対応いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="pt-[16%] text-center bg-[#efdfc5] md:px-[4%] md:pt-0 md:h-[420px]">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="z-10 basis-[223px] pt-[76px] h-[69px] bg-top bg-[url('/img/s01/logo_vertical_navy.png')] bg-no-repeat bg-[length:118px] md:order-2 md:mt-[60px] md:-ml-[250px]">
            <h3 className="mt-4 ml-6">かわいいが届くお花便</h3>
          </div>
          <div className="mx-auto -mt-10 w-[70%] h-[50%] min-h-[278px] bg-center bg-[url('/img/s01/bg_download2.jpg')] bg-no-repeat bg-cover md:m-0 md:h-[422px] md:bg-contain md-order-1 md:4/5"></div>
        </div>
      </section>

      <section className="relative px-[8%] pt-[8%] pb-[32%] min-h-[164px] text-white bg-neutral-700">
        <Link href="#">
          <a>
            <div className="absolute top-6 right-[92px]">
              <Image src="/img/s01/icon_instagram.png" alt="" width={64} height={64} />
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div className="absolute top-6 right-[24px]">
              <Image src="/img/s01/Icon_Twitter.png" alt="" width={64} height={64} />
            </div>
          </a>
        </Link>
        <div className="flex flex-col mb-12 md:flex-row md:w-[90%]">
          {footerArr.map((item, i) => (
            <div key={i} className="grow mb-4 md:basis-auto">
              <div className="text-sm">
                <Link href="#">
                  <a>{item}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-40 left-0 m-auto text-xs text-center text-gray-400">
          <p>Copyright ***</p>
        </div>
      </section>

      <div className="fixed bottom-0 z-10 py-6 px-4 w-full h-[97px] bg-white/80 backdrop-blur md:hidden">
        <div className="flex justify-center">
          <Link href="#">
            <a>
              <div className="mr-4">
                <Image src="/img/s01/Badge_Appstore.png" alt="" width={164} height={49} />
              </div>
            </a>
          </Link>
          <Link href="#">
            <a>
              <div className="">
                <Image src="/img/s01/Badge_Googleplaystore.png" alt="" width={164} height={49} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default S01Index
