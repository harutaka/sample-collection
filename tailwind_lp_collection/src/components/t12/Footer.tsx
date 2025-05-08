import Link from "next/link"

const Footer = () => {
  const linkArr = [
    { href: "https://www.instagram.com/", title: "INSTAGRAM" },
    { href: "https://twitter.com/", title: "TWITTER" },
    { href: "https://www.facebook.com/", title: "FACEBOOK" },
  ]
  return (
    <footer
      id="footer"
      className="absolute right-0 bottom-5 left-0 justify-between px-10 mx-auto w-full max-w-7xl md:flex"
    >
      <ul className="flex mb-1 md:mb-0">
        {linkArr.map((item, i) => (
          <li key={i} className="mr-8 text-sm">
            <Link href={item.href}>
              <a target="_blank" className="hover:opacity-70">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-xs">&copy; Harutaka</p>
    </footer>
  )
}

export default Footer
