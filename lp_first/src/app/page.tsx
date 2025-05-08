import Header from "@/components/header"
import About from "@/components/about"
import Bicycle from "@/components/bicycle"
import Mainvisual from "@/components/mainvisual"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Mainvisual />
        <About />
        <Bicycle />
      </main>
      <Footer />
    </>
  )
}
