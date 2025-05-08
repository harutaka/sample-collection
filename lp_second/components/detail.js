import Image from 'next/image'
import styles from './detail.module.css'

export default function Detail() {
  return (
    <section className={styles.detail}>
      <div className="inner">
        <h2 className="section-title">DETAIL</h2>
        <div className={styles.content}>
          <div className={styles.img}>
            {/* <Image src="/detail.jpg" width={350} height={350} /> */}
            <Image src="/detail.jpg" width={270} height={270} layout="fixed" />
          </div>
          <div className={styles.text}>
            <p className={styles.title}>タイトルタイトルタイトル</p>
            <dl>
              <dt>著者</dt>
              <dd>タイトルタイトルタイトル</dd>
              <dt>出版社</dt>
              <dd>タイトルタイトルタイトル</dd>
              <dt>発行年</dt>
              <dd>タイトルタイトルタイトル</dd>
            </dl>
            <p>
              テキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキスト
            </p>
            <a className={styles.link} href="#" target="_blank" rel="noopener noreferrer">オンラインストアで見る</a>
          </div>
        </div>
      </div>
    </section>
  )
}