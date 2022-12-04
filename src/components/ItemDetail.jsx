import React from "react";
import Card from "react-bootstrap/Card";
import "../css/Styles.css";
import ItemCount from "./ItemCount";
import {useCartContext} from "./CartContext"
import { useState } from "react";





export default function ItemDetail({ producto }) {

  const [goToCart, setGoToCart] = useState(false);

  const {addCart} = useCartContext();







  function addItem(quantity) {
      setGoToCart(true);
      addCart(producto, quantity)    // producto es el objeto del producto, quantity es la cantidad que eligio el usuarui para el carrito
  }

  return (
    <div className="items2">
      {producto.id ? (
        <>
        
      <Card className="mx-auto" style={{ width: '32rem'}}>
        <Card.Img variant="top" src={producto.img} />
              <Card.Body>
                <Card.Title className="text-center">Marca:{producto.brand}</Card.Title>
                <Card.Text className="text-center">Modelo:{producto.model}</Card.Text>
                <Card.Text className="text-center">${producto.price}</Card.Text>
                <Card.Text className="text-center">Unidades en stock: {producto.stock}</Card.Text>
              <ItemCount ini={1} max={producto.stock} addItem={addItem} />
              </Card.Body>
      </Card> 
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}