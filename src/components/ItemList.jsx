import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";



/* Aca renderizamos todo el listado del componetnte item, usando map, para crear 
    el arrary nuevos con los item de la seccion selecionada. */

export default function ItemList({ productos }) {
 
  return (
    <div className="items">
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}