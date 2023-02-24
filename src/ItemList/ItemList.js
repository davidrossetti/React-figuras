//1:57

import Item from "../Item/Item"
import './style.css';
import { Link } from "react-router-dom";

const ItemList = ({productList}) => {
  console.log(productList.id)
  return (
    <div className='itemList'>
      {
        productList.map((productList) => (
            <div key={productList.id}>
      
              <Link to={`/item/${productList.id}`}>
                
              <Item articulo={productList}/>
              </Link>
                
            </div>
        ))}
    </div>
  );
};

export default ItemList




