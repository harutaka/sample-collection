import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import Footer from "@/components/t12/Footer"
import Header from "@/components/t12/Header"
import ItemDetailMain from "@/components/t12/ItemDetailMain"

const Item1: NextPage = () => {
  const router = useRouter()
  const tempItemId = router.query.itemId || "item1"
  const itemId = Array.isArray(tempItemId) ? "item1" : tempItemId

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Head>
        <title>プロダクトタイトル | Furniture Design</title>
        <link rel="icon" href="/img/t12/favicon.ico" />
      </Head>

      <Header />

      <ItemDetailMain title="プロダクトタイトル" itemId={itemId} />

      <Footer />
    </div>
  )
}

export default Item1
