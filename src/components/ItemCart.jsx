import React from 'react'
import { useCartContext } from './CartContext'
import Card from "react-bootstrap/Card";
import "../css/Styles.css";


export default function ItemCart({ product }) {

     const {removeCart}  =  useCartContext();           // Llamamos la funcion de remover el carrito, usando el Hook Context.

  return (
    <div>
        <Card className="mx-auto" style={{ width: '32rem'}}>
        <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title className="text-center">Marca:{product.brand}</Card.Title>
                <Card.Text className="text-center">Modelo:{product.model}</Card.Text>
                <Card.Text className="text-center">${product.price}</Card.Text>
                <Card.Text className="text-center">Unidades en stock: {product.stock}</Card.Text>
                <button className="botonDetail text-center" onClick={() => removeCart(product.id)}>Delete</button>
                <button className="botonDetail text-center" /* onClick={() => Checkout(product.id)} */>Checkout</button>
              </Card.Body>
      </Card> 

    </div>
  )
}

