

import ItemList from "../../ItemList/ItemList";
import { productos } from "../../data/productos"
import { useEffect,useState } from "react";


const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]= useState([])
    const getProductos =new Promise((res,rej) =>{
        setTimeout(() => {
            res(productos)
        }, 3000)
    });

    useEffect(() =>{
        getProductos
        .then((respuesta) => {
            setProductList(respuesta)
            
            
        })
        .catch((error) =>{
            console.log(error)
        });

    }, [ ])

   

  return (
    <div>
        <ItemList productList={productList}/>
</div>
  )

};

export default ItemListContainer
