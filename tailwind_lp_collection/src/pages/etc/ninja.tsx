/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Course01 = () => {
  return (
    <a href="#" className="underline">
      リンク先に飛ばすよ
    </a>
  )
}

const Course02 = () => {
  return <span className="hover:opacity-50 cursor-pointer">spanタグが透過します</span>
}

const Course03 = () => {
  return <div className="w-[300px] h-[300px] bg-red-600 border border-solid shadow-2xl"></div>
}

const Course04 = () => {
  return <p className="inline pb-2 border-b-2 border-blue-500 border-dotted">テキストにドットのボーダーを付けます</p>
}

const Course05 = () => {
  return (
    <>
      <textarea
        cols={30}
        rows={10}
        placeholder="テキスト"
        className="placeholder:text-red-600 border border-black"
      ></textarea>
      <input
        type="text"
        placeholder="テキストテキスト"
        className="placeholder:text-red-600 border border-black"
      ></input>
    </>
  )
}

const Course06 = () => {
  return (
    <div className="flex justify-center items-center w-[300px] h-[300px] bg-blue-600">
      <p className="text-white">ど真ん中</p>
    </div>
  )
}

const Course07 = () => {
  const liStr = [
    "リストの最初の文字",
    "サンプルテキスト",
    "サンプルテキスト",
    "サンプルテキスト",
    "リストの5番目（緑色）",
    "サンプルテキスト",
    "サンプルテキスト",
    "リストの最後の文字（青色）",
  ]
  return (
    <section>
      <div className="text-red-600">この文字を赤にしてください</div>
      <p className="mt-4 text-blue-600">この文字を青色にしてください</p>
      <input
        className="mt-4 w-[200px] placeholder:text-green-600 border"
        placeholder="プレースホルダーを緑に指定"
        name="green"
        type="text"
      ></input>
      <div className="text-pink-600" data-text="target">
        この文字をピンクにしてください
      </div>
      <ul className="mt-8">
        {liStr.map((item, i) => {
          let classStr = "first:text-red-600 last:text-blue-600"
          if (i === 4) classStr += " text-green-600"
          return (
            <li key={i} className={classStr}>
              {item}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const Course08 = () => {
  return (
    <>
      <p className="before:content-['▼']">手前に逆三角を付与します</p>
      <h3 className="before:inline-block after:inline-block mt-8 before:mr-2 after:ml-2 before:w-8 after:w-8 before:h-0.5 after:h-0.5 before:align-middle after:align-middle before:bg-black after:bg-black">
        両端に横棒を付与します
      </h3>
    </>
  )
}

const Course09 = () => {
  return (
    <dl className="">
      <dt className="float-left">屋号</dt>
      <dd className="mb-4 ml-24 w-[400px] border-b border-gray-500 border-dotted">忍者CODE</dd>
      <dt className="float-left">住所</dt>
      <dd className="mb-4 ml-24 w-[400px] border-b border-gray-500 border-dotted">滋賀県甲賀市</dd>
      <dt className="float-left">事業</dt>
      <dd className="mb-4 ml-24 w-[400px] border-b border-gray-500 border-dotted">
        <ul>
          <li>■手裏剣を使用して悪を討つ</li>
          <li>■剣術を練習して果物切る</li>
        </ul>
      </dd>
    </dl>
  )
}

const Course10 = () => {
  return (
    <div className="p-3 w-[300px] border border-solid">
      <p className="pl-4 -indent-4">1.テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p className="pl-4 -indent-4 break-words">
        2.faseifjosafijojgaoigorjodjoaeojffaseifjosafijojgaoigorgaoigorjodjoaeojf
      </p>
    </div>
  )
}

const Course11 = () => {
  return (
    <input
      name="sample"
      type="text"
      placeholder="文字の太さ普通"
      className="pl-2 w-[200px] h-[30px] focus:font-bold border border-gray-600"
    />
  )
}

const Course12 = () => {
  return (
    <div className="flex relative items-center p-3 w-[400px] h-[60px] border border-solid">
      <div>このテキストをY軸中央にしましょう</div>
      <span className="inline-block absolute top-[50%] w-[380px] h-px bg-blue-600"></span>
    </div>
  )
}

const Course13 = () => {
  return (
    <>
      <div className="bg-gray-800">
        <Image src="https://ninjacode.work/assets/img/kv.png" alt="kv" />
      </div>
      <div>
        <p>テキストテキスト</p>
        <p>テキストテキスト</p>
        <p>テキストテキスト</p>
      </div>
    </>
  )
}

const Course14 = () => {
  const mojiList: string[] = []
  for (let i = 1; i < 7; i++) {
    if (i % 2 === 1) {
      mojiList.push("[奇数]文字赤色")
    } else {
      mojiList.push("[偶数]文字緑色")
    }
  }

  return (
    <>
      <ul>
        {mojiList.map((item, i) => (
          <li key={i} className="odd:text-red-600 even:text-green-600">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

const Course15 = () => {
  return (
    <>
      <div className="overflow-hidden relative w-[200px] h-[50px] border border-solid">
        <div className="absolute w-[300px]">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
      </div>
    </>
  )
}

const Course17 = () => {
  const liArr = ["株式会社忍者Code", "東京都目黒区目黒1丁目1-1", "03-xxxx-xxxx"]
  return (
    <>
      <ul className="inline-block border-y border-black border-solid">
        {liArr.map((item, i) => (
          <li key={i} className="py-4 border-t first:border-t-0 border-black border-dotted">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

const Course19 = () => {
  return (
    <>
      <div className="bg-gray-900/50">
        <p className="p-5 text-black">文字は黒色で背景は黒の透過0.5いれて</p>
      </div>
    </>
  )
}

const Course20 = () => {
  return (
    <>
      <div>
        <select name="year" className="w-20 border border-black">
          <option value="2021" selected>
            2021
          </option>
          <option value="2022">2022</option>
        </select>
        年
        <select name="month" className="w-12 border border-black">
          <option value="8" selected>
            8
          </option>
          <option value="9">9</option>
        </select>
        月
        <select name="day" className="w-12 border border-black">
          <option value="27" selected>
            27
          </option>
          <option value="28">28</option>
        </select>
        日
      </div>
    </>
  )
}

const Course21 = () => {
  return (
    <>
      <p>pタグの中にこのように{"<div></div>"}を文章として表出してください。</p>
    </>
  )
}

const Course22 = () => {
  return (
    <>
      <div style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
        <p className="text-black">ninjacode ☆忍者CODE☆ この文字を縦書きしよう</p>
      </div>
    </>
  )
}

const Course23 = () => {
  return (
    <div>
      <div className="mb-4">
        <span className="inline-block min-w-[250px] bg-yellow-300">この要素の長さと</span>
      </div>
      <div className="mb-4">
        <span className="inline-block min-w-[250px] bg-yellow-300">この要素の長さを統一してみましょう！</span>
      </div>
    </div>
  )
}

const Course26 = () => {
  return (
    <>
      <input type="color" id="head" name="head" value="#e66465" />
      <label htmlFor="head">Head</label>
    </>
  )
}

const Course29 = () => {
  const liArr = ["A", "B", "C", "D", "E"]
  return (
    <ul>
      {liArr.map((item, i) => (
        <li key={i} className="p-1 my-4 max-w-xs border border-gray-300">{`カテゴリー${item}`}</li>
      ))}
    </ul>
  )
}

const Course32 = () => {
  return (
    <div
      className="block relative before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-1/2 after:left-1/2
    w-8 before:w-1 after:w-1 h-8 before:h-8 after:h-8 before:bg-gray-700 after:bg-gray-700 before:rotate-45 after:-rotate-45
    before:translate-x-1/2 after:translate-x-1/2 before:translate-y-1/2 after:translate-y-1/2"
    ></div>
  )
}

const Course35 = () => {
  return <div className="text-xl font-bold tracking-widest">この文字の間隔を空けましょう。</div>
}

const Course36 = () => {
  return (
    <p className="leading-10">
      この文字の間隔を空けてみましょう
      <br />
      この文字の間隔を空けてみましょう
      <br />
      この文字の間隔を空けてみましょう
      <br />
    </p>
  )
}

const Course37 = () => {
  const liArr = ["A", "B", "C", "D"]
  return (
    <section>
      {liArr.map((item, i) => {
        if (i % 2 === 0) {
          return <div>{`テキスト${item}`}</div>
        } else {
          return <p className="first-of-type:text-red-600">{`テキスト${item}`}</p>
        }
      })}
    </section>
  )
}

const Course39 = () => {
  return (
    <p className="text-2xl font-bold text-red-600" style={{ textShadow: "5px 5px 5px #000" }}>
      この文字にテキストシャドーをつけてみよう
    </p>
  )
}

const Course40 = () => {
  return <div className="p-12 w-[200px] h-[200px] text-xl text-white bg-black">要素の幅と高さは変わりません</div>
}

const Course41 = () => {
  const liArr = [1, 2, 3, 4, 5, 6]
  return (
    <ul className="">
      {liArr.map((item, i) => (
        <li key={i} className={i > 2 ? "text-red-600" : ""}>
          {`${item}番目の要素です`}
        </li>
      ))}
    </ul>
  )
}

const Course43 = () => {
  return (
    <section className="flex flex-col">
      <div className="order-2">これが2番目</div>
      <div className="order-3">これが3番目</div>
      <div className="order-1">これが1番目</div>
    </section>
  )
}

const Course44 = () => {
  return (
    <div className="overflow-y-auto m-auto w-[200px] h-24">
      <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </div>
  )
}

const Course45 = () => {
  return (
    <input
      type="text"
      placeholder="テキストボックスです"
      className="border border-gray-600 shadow-[0_3px_1px_rgba(0,_0,_0,_0.2)_inset]"
    />
  )
}

const Course46 = () => {
  return (
    <div className="">
      <p className="inline-block overflow-hidden w-[120px] h-12">
        テキストテキストテキストテキストテキストテキストテキストテキスト1
      </p>
      <p className="inline-block overflow-hidden ml-8 w-[120px] h-12">
        テキストテキストテキストテキストテキストテキストテキストテキスト2
      </p>
    </div>
  )
}

const Course47 = () => {
  return (
    <div className="">
      <p className="text-xl text-red-600 md:text-black">この文字の色をスマホ時に赤色に変えよう</p>
    </div>
  )
}

const Course48 = () => {
  return (
    <div className="">
      <p className="text-xl text-red-600 md:text-green-600 lg:text-black">
        この文字の色をスマホ時に緑色/赤色に変えよう
      </p>
    </div>
  )
}

const Course49 = () => {
  return <div className="mt-16 w-48 h-24 bg-red-600 rotate-45"></div>
}

const Course50 = () => {
  return (
    <>
      <p className="mb-4">テスト１テスト１テスト１</p>
      <p className="invisible mb-4">テスト２テスト２テスト２</p>
      <p className="mb-4">テスト３テスト３テスト３</p>
    </>
  )
}

const Course51 = () => {
  return (
    <section className="grid grid-cols-2 gap-0 w-[400px]">
      <div className="w-full h-24 bg-red-600"></div>
      <div className="w-full h-24 bg-green-600"></div>
      <div className="w-full h-24 bg-yellow-300"></div>
      <div className="w-full h-24 bg-blue-600"></div>
    </section>
  )
}

const Course52 = () => {
  return (
    <div className="overflow-y-auto m-auto w-[200px] h-24" style={{ scrollbarColor: "yello blue" }}>
      <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </div>
  )
}

// 忍者Codeのテストページ
const Ninja: NextPage = () => {
  return (
    <>
      <Head>
        <title>忍者Codeテスト</title>
      </Head>

      <div className="container m-8">
        <Course52 />
      </div>
    </>
  )
}

export default Ninja
