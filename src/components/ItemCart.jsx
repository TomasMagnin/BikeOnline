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
                <Card.Text className="text-center">Unidades en Stock: {product.stock - product.quantity}</Card.Text>
                <Card.Text className="text-center">Cantidad Selecionada: {product.quantity}</Card.Text>
                <Card.Text className="text-center">Precio Unitario ${product.price * 1000}</Card.Text>
                <Card.Text className="text-center">Subtotal ${(product.price * product.quantity) * 1000 }</Card.Text>
                <Card.Text className='text-center'><button className="botonDetail itemsCart" onClick={() => removeCart(product.id)}> Eliminar Producto </button></Card.Text>
                
              </Card.Body>
      </Card> 

    </div>
  )
}

