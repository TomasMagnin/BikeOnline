import React from 'react'
import { useCartContext } from './CartContext'
import { Link } from "react-router-dom";
import ItemCart from './ItemCart';

export default function Cart() {

    const {cart, totalPrice} = useCartContext();  // traemos el carrito y el precio total que es lo que mostramos en el Cart.

    if (cart.length === 0) {
        return (
                
                <div>
                    <p>No hay elementos en el carrito</p>
                    <Link to="/"> Hacer Compras</Link>
                </div>
     );
    }


  return (
   <>
    {
    cart.map(product => <ItemCart key={product.id} product={product}/>) 
    }
    <p>Total: {totalPrice()}</p>
    </>  


  )
}
