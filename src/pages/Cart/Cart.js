import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { productos } from "../../data/productos"
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  const db= getFirestore();

  const createOrder = (event) => {
    event.preventDefault();
   
    const querySnapshot = collection(db, 'orders')
    


    addDoc(querySnapshot,{
       buyer: {
        email:'prueba@prueba.com',
        name:'pruebaUsuario',
        phone:'1122334455'
      },
      products: cart.map((producto) => {
        console.log(producto)
        return{
           producto:producto.producto,
           precioUSD:producto.precio,
           id:producto.id,
           quantity:producto.quantity
        }



      }),
      //total: cart.reduce((acc, curr) => acc + curr.precioUSD * curr.quantity, 0),
    })
    .then((response) => {
      console.log(response.id)
        alert(`order con id: ${response.id} creada`)
    })
    .catch( (error) => console.log (error))
  };
    //update stock
  const updateStocks = () => {
    cart.forEach( (product) => {
      const querySnapshot = doc(db , 'products' , product.id)
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity
      
      }).then.catch((error) => console.log(error))

    });
  }

  return (
    <div>
      {cart.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.producto}</h2>
          <h3>{producto.quantity} </h3>
          <button onClick={() => removeItem(producto.id)}>borrar producto</button>
        </div>
      ))
      }
      {
        cart.length > 0  && (<button onClick={ clear}>Vaciar carrito</button>,
        <button onClick={createOrder}>Completar compra</button>)
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
