import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { productos } from "../../data/productos";

const ItemDetailContainer = () => {
  console.log(id)
     const {id}=useParams();
    
//     const getProduct = new Promise((res, rej) =>{
//       setTimeout(() => {
//         const findProduct=productos.find(item => item.id == id)
//         res(findProduct)
//       }, 1000);
       
//     })
    
//     useEffect (() =>{
//       getProduct
//       .then((response) =>{
//         console.log(response)
//       })
//       .catch((error) =>{
//         console.log(error)
//       })
//     },[])

   return (
     <div>
      
     </div>
   )
 }

 export default ItemDetailContainer
