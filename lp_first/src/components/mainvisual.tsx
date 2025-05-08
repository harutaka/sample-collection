import Image from "next/image"
import { css } from "@kuma-ui/core"

const styles = {
  mainvisual: css`
    margin-bottom: 80px;
  `,
  mainImg: css`
    width: 100%;
    max-width: 1920px;
    height: 600px;
    object-fit: cover;
  `,
}

const Mainvisual = () => {
  return (
    <div className={styles.mainvisual}>
      <Image src="/mainvisual.jpg" alt="テキスト" width={1920} height={600} className={styles.mainImg} />
    </div>
  )
}
export default Mainvisual
