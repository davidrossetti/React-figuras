import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productos } from "../../data/productos";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
const {producto } =useParams();
const [detailObject, setDetailObject]=useState({});
    const getProduct = new Promise((res, rej) =>{
      setTimeout(() => {
        const findProduct=productos.find(item => item.id == producto)
        res(findProduct)
      }, 1000);
       
    })
    
    useEffect (() =>{
      getProduct
      .then((response) =>{
        setDetailObject(response);
      })
      .catch((error) =>{
        console.log(error)
      })
    },[])

   return (
     <div>
       <ItemDetail detail={detailObject}/>
     </div>
   )
  }

 export default ItemDetailContainer
