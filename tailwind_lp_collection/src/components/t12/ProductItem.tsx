import Image from "next/image"
import Link from "next/link"

type ItemProps = {
  key: number
  href: string
  img: string
  title: string
  price: string
}
const ProductItem = ({ href, img, title, price }: ItemProps) => {
  return (
    <li className="mb-10 w-[47%] md:w-[23%]">
      <Link href={href}>
        <a className="hover:opacity-70">
          <Image src={img} alt="" width={800} height={800} />
          <p className="mt-2.5 text-sm">{title}</p>
          <p className="text-sm">{price}</p>
        </a>
      </Link>
    </li>
  )
}

export default ProductItem
