import { css } from "@kuma-ui/core"

const styles = {
  footer: css`
    font-size: 0.5rem;
    padding: 10px 0;
    text-align: center;
  `,
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2020 Profile</p>
    </footer>
  )
}

export default Footer
