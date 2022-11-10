import React from 'react'
import { useState, useEffect } from "react";
import { NavLink ,Link, useParams } from "react-router-dom";
import "./ItemListContainer";
import { producsBK } from "./data.js";
import ItemList from "./ItemList";

export default function ItemListContainer({greeting}) {



  const { idcategory } = useParams();                   /*  Sacamos el ID de categoria de la URL */

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // alert("cambio la categoria por eso salta de nuevo este efecto");
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(producsBK);
      }, 1000);
    });

    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category == idcategory));
      } else {
        setProductos(res);
      }
    });
  }, [idcategory]);        /* Si cambia el ID de Categoria se ejecuta de nuevo el componente, por ende la promesa se ejecuta */

  return (
    <div className="text-center"  style={{backgraundColor: "whitesmoke"}}>{greeting}
      <ItemList productos={productos} />;
    </div>
  )
}
