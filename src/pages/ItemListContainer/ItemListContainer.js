

import ItemList from "../../ItemList/ItemList";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
    const [productList, setProductList]= useState([])
    const {categoryId}=useParams()
    

    const getProductos = () => {
        const db = getFirestore();
        const querySnapshot =  collection(db, 'products')
        
        if(categoryId) {
            const filteredQuery = query(
                querySnapshot,
                where('categoria', '==' ,categoryId)
            )
            getDocs(filteredQuery)
            .then((response) =>{
                const list = response.docs.map((doc) => {
                    console.log(list)
                    return{
                        id: doc.id,
                        ...doc.data(),
                    } 
                })
                setProductList(list)
                //console.log(list)
            } )
            .catch(error => console.log(error))
           
        }else{
            
            getDocs(querySnapshot)
            .then((response) =>{
               
                const list = response.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data(),
                        
                    } 
                })
                setProductList(list)
            } )
            .catch(error => console.log(error))
        }


       
    }
    
    useEffect(() =>{ 
        getProductos();
    }, [categoryId ])


 

   

  return (
    <div>
        {<ItemList productList={productList}/>}
</div>
  )

};

export default ItemListContainer
