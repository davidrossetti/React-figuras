import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

const {producto } =useParams();
const [detailObject, setDetailObject]=useState({});

    
    const getProduct = () => {
        const db = getFirestore()
        const querySnapshot = doc (db, 'products', producto)
        
        getDoc(querySnapshot)
        .then((res) => {
          setDetailObject({
            id: res.id, ...res.data()

          })
          

        })
        .catch((error) => console.log(error))
    }

    useEffect (() =>{
    },[])
    getProduct()
   return (
     <div>
       <ItemDetail detail={detailObject}/>
     </div>
   )
  }

 export default ItemDetailContainer
