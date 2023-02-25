

import ItemList from "../../ItemList/ItemList";
import { productos } from "../../data/productos"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productList, setProductList]= useState([])
    const {categoryId}=useParams()
    
    const getProductos =new Promise((res,rej) =>{
        if(categoryId) {
            const filtradoProductos = productos.filter(
                (item) => item.categoria === categoryId
            );
            setTimeout(() => {
                res(filtradoProductos)
            }, 1000);
        } else {
            setTimeout(() => {
                res(productos)
            }, 1000)
        }
        
    
    });

    useEffect(() =>{
        getProductos
        .then((respuesta) => {
            setProductList(respuesta)
            
            
        })
        .catch((error) =>{
            console.log(error)
        });

    }, [categoryId ])

   

  return (
    <div>
        {<ItemList productList={productList}/>}
</div>
  )

};

export default ItemListContainer
