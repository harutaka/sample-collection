/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)
  const navList = [
    { href: "/t12/product", title: "PRODUCTS" },
    { href: "/t12/about", title: "ABOUT" },
    { href: "/t12/company", title: "COMPANY" },
    { href: "mailto:xxxxx@xxx.xxx.com?subject=お問い合わせ", title: "CONTACT" },
  ]

  return (
    /*
    「position: fixed;」でヘッダーを固定し、「z-index: 10;」で前面に表示
    ※他のコンテンツでpositionをrelative、absolute、fixedのいずれかに
    設定している場合は、z-indexの数値が大きい方が前面に表示される
    */
    <header
      id="header"
      className="flex fixed right-0 left-0 z-10 justify-between items-center px-10 mx-auto w-full max-w-7xl h-20 bg-gray-100"
    >
      <h1 className="block w-44">
        <Link href="/t12">
          <a>
            <Image src="/img/t12/logo.svg" alt="Furniture Design" width={260} height={30} />
          </a>
        </Link>
      </h1>

      {/* 
        ハンバーガーメニュー
        メニューが閉じている時は、「left: -300px;」で画面左に隠し、
        「opacity: 0;」で非表示にしている
      */}
      <nav
        id="navi"
        className={`fixed top-0 z-20 py-9 px-12 w-[300px] text-white ${
          open ? "opacity-100" : "opacity-0"
        } duration-500 ${open ? "left-0" : "-left-[300px]"}`}
      >
        <ul className="nav-menu">
          {navList.map((item, i) => (
            <li key={i} className="mb-3.5">
              <Link href={item.href}>
                <a className="text-white">{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 
        ハンバーガーメニュー
        メニューが開いている時は、「left: 0;」「opacity: 1;」で
        画面左に表示する
      */}
      <div
        className="relative z-20 w-[30px] h-[30px] duration-500 cursor-pointer"
        onClick={() => setOpen((status) => !status)}
      >
        <span
          className={`${open ? "bg-white/100" : ""} ${
            open ? "translate-y-1 -rotate-45" : ""
          } block absolute top-2.5 w-[30px] h-0.5 bg-gray-700 rounded duration-500`}
        ></span>
        <span
          className={`${open ? "bg-white/100" : ""} ${
            open ? "-translate-y-1 rotate-45" : ""
          } block absolute bottom-2.5 w-[30px] h-0.5 bg-gray-700 rounded duration-500`}
        ></span>
      </div>

      {/* 
        メニューを開いている時は、全体を黒背景にする
      */}
      <div
        id="mask"
        className={`${
          open ? "block" : "hidden"
        } fixed top-0 left-0 z-10 w-full h-full bg-black opacity-80 cursor-pointer`}
      ></div>
    </header>
  )
}

export default Header
