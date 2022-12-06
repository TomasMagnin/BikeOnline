import React from 'react'
import { Link } from "react-router-dom";
import {useCartContext} from "./CartContext"
import { getFirestore, doc, getDoc } from "firebase/firestore";  


export default function Checkout() {

const {cart} = useCartContext();            // Le pedimos el cart al contexto
const zzz = {};






    
  return (
    <div>Checkout
        <div>{JSON.stringify(cart)}</div>      {/* Armamos un string con todo lo que tiene adentro la varible cart y lo metemos en el div*/}
    </div>
  )
}
