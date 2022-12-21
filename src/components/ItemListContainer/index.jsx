import React,{useState,useEffect} from "react";
import "./styles.css";

import ItemList from '../ItemList';
import {useParams} from 'react-router-dom';



const product = [
    {
        "id": 1,
        "nombre": "Nike Air Force",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7127b71b/products/NI_CZ1691-100/NI_CZ1691-100-1.JPG",
        "imgHover": "/public/assets/img/buso2.jpg",
        "precio": 40,
        "category": 'zapatillas',
    },
    {
        "id": 2,
        "nombre": "Nike Dunk",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwef5f4826/products/NI_DH7614-001/NI_DH7614-001-1.JPG",
        "imgHover": "/public/assets/img/remera2.jpg",
        "precio": 30,
        "category": 'zapatillas',
    },
    {
        "id": 3,
        "nombre": "Vans Old School",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0dadcf9f/products/VA_VN000D3HY28/VA_VN000D3HY28-1.JPG",
        "imgHover": "/public/assets/imgremera4.jpg",
        "precio": 40,
        "category": 'zapatillas',
    },
    {
        "id": 4,
        "nombre": "Remera Nike",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw892d0dcb/products/NI_AR5004-010/NI_AR5004-010-1.JPG",
        "imgHover": "/public/assets/img/buso2.jpg",
        "precio": 40,
        "category": 'indumentaria',
    },
    {
        "id": 5,
        "nombre": "Buzo Nike",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb957454b/products/NI_DM6775-200/NI_DM6775-200-1.JPG",
        "imgHover": "/public/assets/img/remera2.jpg",
        "precio": 30,
        "category": 'indumentaria',
    },
    {
        "id": 6,
        "nombre": "Pantalon Adidas",
        "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe026ce24/products/AD_HC4501/AD_HC4501-1.JPG",
        "imgHover": "/public/assets/imgremera4.jpg",
        "precio": 40,
        "category": 'indumentaria',
    },
]


export const ItemListContainer = () => {
    const [data, setData ] = useState([]);

    const {categoriaId} = useParams ();

    useEffect (() => {
        const getData = new Promise(resolve=> {
            setTimeout (() => {
                resolve(product);
            }, 1000); 
        });
        if (categoriaId) {

            getData.then(res => setData(res.filter(zapatillas => zapatillas.category === categoriaId)) );
        } else {

            getData.then(res => setData(res))
        }


    }, [categoriaId])
    



    return (

       <div className="container">
        <div className="itemTitulo d-flex justify-content-center mt-3"><h1>Bienvenidos a SourCream</h1></div>
        
        <div className="d-flex justify-content-between mx-auto mt-5"><ItemList data={data} /> </div>
       </div>

    );
}
export default ItemListContainer;