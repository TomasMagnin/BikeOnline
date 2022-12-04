import React from 'react'
import { useCartContext } from './CartContext'

export default function ItemCart({ product }) {

     const {removeCart}  =  useCartContext();           // Llamamos la funcion de remover el carrito, usando el Hook Context.

  return (
    <div>
        <img src="product.img" alt="" />
        <p>Model: {product.brand}</p>
        <p>Model: {product.model}</p>
        <p>Model: {product.quantity}</p>
        <p>Model: {product.price}</p>
        <p>Model: {product.stock}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeCart(product.id)}>Delete</button>

    </div>
  )
}
