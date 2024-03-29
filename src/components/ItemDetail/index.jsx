import React, {useState} from "react";
import './styles.css';
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";




export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }
  return (

    <div className='cardDetail mt-3 container product card d-flex justify-content-between'>
    <div className='card-body text-center'>

    <img className="imagen" src={data.img} alt="" />
    <h1>{data.nombre}</h1>
    <p></p>
    <ul className="detallesProdu">
                  <li>Marca: Stussy </li>
                  <li>Talle: M </li>
                   <li>Precio: $ {data.precio}</li>
                    
    </ul>
    <p>Precio: {data.precio}</p>

    {
        goToCart
        ? <Link className="finalizar btn mt-5 btn-light text-center" to='/cart'>Finalizar Compra</Link>
        : <div className="count2"><ItemCount initial={1} stock={5} onAdd={onAdd}/></div>

    }
    </div>
</div>
    
  )
}

export default ItemDetail; 

