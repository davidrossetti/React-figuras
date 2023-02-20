import Item from "../Item/Item"

const ItemList = ({productList}) => {
  console.log(productList)
  return (
    <div>
      {
        productList.map((product) => (
            <div key={product.id}>
                <Item articulo={product}/>
            </div>
        ))
      }
    </div>
  )
}

export default ItemList




