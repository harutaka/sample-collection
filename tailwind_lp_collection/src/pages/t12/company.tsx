import type { NextPage } from "next"
import Head from "next/head"
import Footer from "@/components/t12/Footer"
import Header from "@/components/t12/Header"

const Company: NextPage = () => {
  return (
    <div className="relative min-h-screen text-sm bg-gray-100">
      <Head>
        <title>Company | Furniture Design</title>
        <link rel="icon" href="/img/t12/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="px-10 pt-28 pb-40 mx-auto w-full max-w-7xl">
          <h1 className="mb-8 text-lg font-bold">Company</h1>

          <div id="company" className="max-w-2xl">
            <dl className="flex flex-wrap mb-5">
              <dt className="py-5 px-2.5 w-[30%] border-b border-gray-300">社名</dt>
              <dd className="py-5 px-2.5 w-[70%] border-b border-gray-300">株式会社ファニチャーデザイン</dd>
              <dt className="py-5 px-2.5 w-[30%] border-b border-gray-300">住所</dt>
              <dd className="py-5 px-2.5 w-[70%] border-b border-gray-300">〒107-0062 東京都港区南青山１丁目××××××</dd>
              <dt className="py-5 px-2.5 w-[30%] border-b border-gray-300">設立</dt>
              <dd className="py-5 px-2.5 w-[70%] border-b border-gray-300">XXXX年XX月</dd>
              <dt className="py-5 px-2.5 w-[30%] border-b border-gray-300">資本金</dt>
              <dd className="py-5 px-2.5 w-[70%] border-b border-gray-300">XXXX万円</dd>
              <dt className="py-5 px-2.5 w-[30%] border-b border-gray-300">従業員数</dt>
              <dd className="py-5 px-2.5 w-[70%] border-b border-gray-300">XX名</dd>
              <dt className="py-5 px-2.5 w-[30%]">事業内容</dt>
              <dd className="py-5 px-2.5 w-[70%]">
                家具、インテリアの企画・生産
                <br />
                家具、インテリアの販売
                <br />
                店舗の企画・デザイン・設計
              </dd>
            </dl>

            <div>
              <iframe
                className="w-full h-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2914382280856!2d139.72342666557796!3d35.669825288204194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c820ac932eb%3A0xc68079dd10afd971!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1611987713735!5m2!1sja!2sjp"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Company
