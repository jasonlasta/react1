import React from "react";
import "./styles.css";


export const CartWidget = () => {
    return (
        <div className="cartContainer">
            <button className="cart">
            <i className="bi fa-x10 bi-cart3"></i>
            </button>
            <div className="numCartContainer">
            <p className="numCart">0</p> 
            </div>
        </div>

    );
}
export default CartWidget;