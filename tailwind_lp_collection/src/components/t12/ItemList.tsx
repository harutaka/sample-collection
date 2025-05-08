import ProductItem from "./ProductItem"

type ItemProps = {
  total: number
  start: number
}
const ItemList = ({ total, start }: ItemProps) => {
  return (
    <ul className="flex flex-wrap justify-between">
      {[...Array(total)].map((item, i) => {
        const itemName = `item${i + start}`
        return (
          <ProductItem
            key={i}
            href={`/t12/item/${itemName}`}
            img={`/img/t12/${itemName}.jpg`}
            title="プロダクトタイトルプロダクトタイトル"
            price="&yen;99,999 +tax"
          />
        )
      })}
    </ul>
  )
}

export default ItemList
