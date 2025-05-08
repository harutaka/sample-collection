import Image from 'next/image'
import styles from './mainvisual.module.css'

export default function Mainvisual() {
  return (
    <div className={styles.mainvisual}>
      <Image
        src="/mainvisual.jpg"
        alt="テキストテキストテキスト"
        width={1000}
        height={400}
      />
    </div>
  )
}