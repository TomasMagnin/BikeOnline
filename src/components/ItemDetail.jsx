import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../css/Styles.css";
import ItemCount from "./ItemCount";





export default function ItemDetail({ producto }) {
  
console.log(producto.img);

  function addItem(x) {

    alert("quiere agregar " + x + " de este item: " + producto.brand.model);
  }

  return (
    <div className="items">
      {producto.id ? (
        <>
        <Card cstyle={{ width: '26rem' }}>
        <Card.Img variant="top" src={producto.img} />
              <Card.Body>
                <Card.Title>Marca:{producto.brand}</Card.Title>
                <Card.Text>Modelo:{producto.model}</Card.Text>
                <Card.Text>${producto.price}</Card.Text>
                <Card.Text>Unidades en stock: {producto.stock}</Card.Text>
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