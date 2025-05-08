import Image from "next/image"
import { css } from "@kuma-ui/core"

const styles = {
  ul: css`
    display: flex;
    justify-content: space-between;
  `,
  li: css`
    width: 32%;
  `,
}

const imgs = ["/bicycle1.jpg", "/bicycle2.jpg", "/bicycle3.jpg"]

const Bicycle = () => {
  return (
    <section className="wrapper">
      <h2 className="section-title">Bicycle</h2>
      <ul className={styles.ul}>
        {imgs.map((item) => {
          return (
            <li className={styles.li} key={item}>
              <Image src={item} alt="テキストテキストテキスト" width={640} height={200} />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Bicycle
