
import { productos } from "../../data/productos"
import { useEffect,useState } from "react";


const IntemListContainer = ({greeting}) => {
    const [productList, setProducList]= useState([])
    const getProductos =new Promise((res,rej) =>{
        setTimeout(() => {
            res(productos)
        }, 3000)
    });

    useEffect(() =>{
        getProductos
        .then((respuesta) => {
            console.log(respuesta);
            setProducList(respuesta)
        })
        .catch((error) =>{
            console.log(error)
        });

    }, [ ])


  return (
    <div>
    
    </div>
  )

};

export default IntemListContainer
