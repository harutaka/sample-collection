import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>
        <Link href="/">
          <a><Image src="/logo.svg" alt="PHOTO BOOK" width={160} height={18} /></a>
        </Link>
      </h1>
    </header>
  )
}