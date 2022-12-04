import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";    
import { producsBK } from "./data.js";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";                            //Primero traemos la Funcion GetDirestore, depues traemos el puntero doc (que tiene el contenido de cada item), para traer un solo dato, y getDoc es la promesa que nos trae el dato. El collection es un conjunto de doc.



export default function ItemDetailContainer({ greeting }) {

  const { iditem } = useParams();     /* Sacamos el ID de Item de la URL usando el HOOK de useParams */   
                                      
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const querydb = getFirestore();         //  Hacemos la peticion a Firestore y lo almacenasmos en una variable querydb.
    const queryDoc = doc(querydb, "products", iditem)   // usamos la varible anterior y le decimos en que tabla esta nuestro doc y le pasamos el ID del Item que nos llego por params.
    getDoc(queryDoc)    // Lanzamos la promesa
        .then(res => setProducto({id: res.id, ...res.data()}))          // Capturamos la promesa con el tehn, seteamos los el producto y lo enviamos al ItemDetail, y mostramos el ID y ademas usamos el spread operator del res.data(), para que desparrame todos los campos.
        /* .then(res => console.log({id: res.id, ...res.data()})) */    // Capturamos la promesa con el tehn, hacemos un log al response, y mostramos el UD y ademas usamos el spread operator del data() que es un objeto con todos los datos, para que desparrame todos los campos.
      }, [])



  return (
    <div>
      <ItemDetail producto={producto} />

    </div>
  );
}