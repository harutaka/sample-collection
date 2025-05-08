import Image from "next/image"
import { css } from "@kuma-ui/core"

const styles = {
  content: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  imgblock: css`
    margin-right: 30px;
  `,
  img: css`
    border-radius: 50%;
  `,
  text: css`
    text-align: left;
  `,
}

const About = () => {
  return (
    <section className="wrapper">
      <h2 className="section-title">About</h2>
      <div className={styles.content}>
        <div className={styles.imgblock}>
          <Image src="/about.jpg" className={styles.img} width={100} height={100} alt="テキストテキストテキスト" />
        </div>
        <div className={styles.text}>
          <h3 className="content-title">Taro Yamada</h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
