import Header from "../components/Header.tsx";
import Mainvisual from "../components/Mainvisual.tsx";
import About from "../components/About.tsx";
import Bicycle from "../components/Bicycle.tsx";
import Footer from "../components/Footer.tsx";

export default function Profile() {
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
  );
}
