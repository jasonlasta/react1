import React from "react";
import "./styles.css";
import { useCartContext } from "../../context/CartContext";


export const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <div className="cartContainer">
            <button className="cart">
            <i className="bi fa-x10 bi-cart3"></i>
            </button>
            <div className="numCartContainer">
            <p className="numCart">{totalProducts() || '' }</p> 
            </div>
        </div>

    );
}
export default CartWidget;