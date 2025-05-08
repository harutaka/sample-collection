import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Footer from "@/components/t12/Footer"
import Header from "@/components/t12/Header"
import ItemList from "@/components/t12/ItemList"

const Product2: NextPage = () => {
  return (
    <div className="relative min-h-screen text-sm bg-gray-100">
      <Head>
        <title>Products | Furniture Design</title>
        <link rel="icon" href="/img/t12/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div id="content" className="px-10 pt-28 pb-40 mx-auto w-full max-w-7xl">
          <h1 className="mb-8 text-lg font-bold">Products</h1>

          <ItemList total={4} start={13} />

          <ul className="flex justify-center">
            <li className="px-5">
              <Link href="/t12/product">
                <a className="hover:opacity-70">1</a>
              </Link>
            </li>
            <li className="px-5">2</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Product2
