import React,{useState,useEffect} from "react";
import "./styles.css";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

import ItemList from '../ItemList';
import {useParams} from 'react-router-dom';

export const ItemListContainer = () => {
    const [data, setData ] = useState([]);

    const {categoriaId} = useParams ();

    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products'); 
        if (categoriaId) {
        const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
         } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))

            
        } 


    }, [categoriaId])
    



    return (

       <div className="container ml-3">

        <div className="itemTitulo d-flex justify-content-center mt-3"><h1>Bienvenidos a SourCream</h1></div>
        <div className="mt-5 ml-3 d-flex justify-content-between"><ItemList data={data} /> </div>
        
       </div>
        

    );
}
export default ItemListContainer;