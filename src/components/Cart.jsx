import React from 'react'
import { useCartContext } from './CartContext'
import { Link } from "react-router-dom";
import ItemCart from './ItemCart';

export default function Cart() {

    const {cart, totalPrice, clearCart} = useCartContext();  // traemos el carrito y el precio total que es lo que mostramos en el Cart.

    if (cart.length === 0) {
        return (
                
                <div className='detailH'>
                    <h2 className='text-center'>No hay elementos en el carrito</h2>
                    <button className='text-center '><Link to="/" className='botonDetail'> Hacer Compras</Link></button>
                </div>
     );
    }

  return (
   <div className='CartParent'>
    {
    cart.map(product => <ItemCart key={product.id} product={product}/>) 
    }
    <div className='conCart1'>
         <Link 
            className= "botonDetail" 
            to="/">
            Seguir comprando
        </Link>
        <Link
            className= "botonDetail"
            to="/checkout"
            >
            Finalizar Compra
        </Link>
    </div>
    <button className= "botonDetail text-center" onClick={clearCart}>Limpiar Carrito</button>
    <p className=' itemsCart'>Total a : {totalPrice() * 1000}</p>
    </div>
  )
}
