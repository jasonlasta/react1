import React, {useState, useContext } from "react";
import Item from "../components/Item";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext); // hook exportar 2 cosas

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    
/*  console.log('carrito1: ', cart); */
    
 const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
        setCart(cart.map(product => {
            return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
        }));
    } else {
        setCart([...cart, {...item, quantity }]);
    }
   }

   const totalPrice = () => {
    return cart.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
    }, 0);

   }

   const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
 

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; 

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider; 