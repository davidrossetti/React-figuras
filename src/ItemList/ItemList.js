import Item from "../Item/Item"
import './style.css';

const ItemList = ({productList}) => {
  console.log(productList)
  return (
    <div className='itemList'>
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




