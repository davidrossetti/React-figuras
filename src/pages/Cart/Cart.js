import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { productos } from "../../data/productos"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      {cart.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.producto}</h2>
          <h3>{producto.quantity} </h3>
          <button onClick={() => removeItem(producto.id)}>borrar producto</button>
        </div>
      ))}
      {
        cart.length > 0  && <button onClick={ clear}>Vaciar carrito</button>
      }
      {
        cart.length === 0 && <div>
            <h2> Carrito vacio</h2>
            <button onClick={() => navigate ('/')}>Regresar </button>
        </div>
      }
      
    </div>
  );
};

export default Cart
