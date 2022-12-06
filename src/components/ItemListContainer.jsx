import React from 'react'
import { useState, useEffect } from "react";
import { NavLink ,Link, useParams } from "react-router-dom";
import "./ItemListContainer";
import ItemList from "./ItemList";
import { getFirestore, collection ,getDocs, query, where } from "firebase/firestore";                           //Primero traemos la Funcion GetDirestore, depues traemos el puntero doc (que tiene el contenido de cada item), para traer un solo dato, y getDoc es la promesa que nos trae el dato. El collection es un conjunto de doc.

export default function ItemListContainer({greeting}) {



  const { idcategory } = useParams();                                                                           //  Sacamos el ID de categoria de la URL 

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const querydb = getFirestore();                                                                             // Traemos el Firestore
    const queryCollection = collection(querydb, "products");                                                    // y Traemos la coleccion completa de items
    
    if (idcategory) {                                                                                           // Si esta varible tiene contenido filtramos usando queryFilter sino emtregamos la coleccion completa para el inicio
        const queryFilter = query(queryCollection, where("category", "==", idcategory))                         // Con el query y el where filtramos los datos de la coleccion, en este caso filtramos por categoria y la comparamos por la categoria que nos llega por params.                              
        getDocs(queryFilter)                                                                                    // Traemos los datos filtrados.
            .then(res => setProductos(res.docs.map(product => ({id: product.id, ...product.data() }))));        //Seteamos  los objetos que nos llegan de nuestra base, lo mapea dentro de un nuevo array colocando el ID y todos los campos que dispersa el spread operator.
    } else {
        getDocs(queryCollection)                                                                                // Traemos los datos de la coleccion completa de nuestra base..
            .then(res => setProductos(res.docs.map(product => ({id: product.id, ...product.data() }))));
    }


  }, [idcategory]);                                                                                             /* Si cambia el ID de Categoria se ejecuta de nuevo el componente, por ende la promesa se ejecuta */

  return (
    <div className="text-center"  style={{backgraundColor: "whitesmoke"}}>{greeting}
      <ItemList productos={productos} />
    </div>
  )
}
