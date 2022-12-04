import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../css/Styles.css";
import {useContext} from "react";  // Imporamos el Hook useContext
import { CartContext } from "./CartContext";     // Importamos el Contexto que queremos usar, en este caso CartContext.




 /* Aca renderizamos cada imtem (articulo) */

export default function Item({ item }) {


  return (
   
        
      <div className="items">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>Marca:{item.brand}</Card.Title>
                <Card.Text>Modelo:{item.model}</Card.Text>
                <Card.Text>Stock: {item.stock}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                <Link className="botonPagesH"  to={`/item/${item.id}`}>Ver Mas</Link>
              </Card.Body>
            </Card>
      </div>

  );
}