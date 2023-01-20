import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./styles.css";
import ItemCart from '../ItemCart';
import { addDoc, collection, getFirestore } from "firebase/firestore";


export const Cart = () => {
    const {cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Jason',
            email:'jasonlasta@gmail.com',
            phone:'1135523697',
            address: 'alberdi'
        },
        items: cart.map(product => ({id: product.id, title: product.title,price: product.price, quntity: product.quantity})),
        total: totalPrice() ,
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))


    }

    if (cart.length === 0) {
        return (
            <>
            <div className="container">
             <h1 className="d-flex justify-content-center mt-5">No hay productos agregados</h1>

         
           <Link className="btn d-flex justify-content-center" to='/'>Ver Productos</Link>
           

            </div>
              
            </>
        );
    }
    
    return (
        <div className="container">
            <>

            {
                cart.map(product => <ItemCart key={product.id} product={product} />)

            }
            <p className="d-flex justify-content-center">
                total: {totalPrice()}
            </p>
            <div className="container d-flex justify-content-center">
            
            <button onClick={handleClick}>Terminar Compra</button>

            </div>

            </>
            
        

         



        </div>
       

    )
}
export default Cart;
