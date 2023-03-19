import ItemCount from "../components/ItemCount/ItemCount"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({detail}) => {
  const navigate = useNavigate()     
  const{addItem}=useContext(CartContext);
  const [count, setCount]= useState (1)
  


 

  return (
    <div>
      <h2>{detail.producto}</h2>
      <h2>{detail.categoria}</h2>
      <h2>{detail.precioUSD}</h2>
      <ItemCount count={count} setCount={setCount}/>
      <button disabled={count > detail.stock ? true: false} onClick={() => navigate('/')}>Seguir comprando</button>
      <button onClick={()=> addItem(detail, count)}>Agregar al carrito</button>
      <button onClick={() => navigate('/cart')}>Completar compra</button>
    </div>
   
  )
}

export default ItemDetail
