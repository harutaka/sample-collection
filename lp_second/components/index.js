import styles from './index.module.css'

export default function Index() {
  return (
    <section className={styles.index}>
      <div className="inner">
        <h2 className="section-title">INDEX</h2>
        <ol className={styles.indexList}>
          <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
        </ol>
      </div>
    </section>
  )
}