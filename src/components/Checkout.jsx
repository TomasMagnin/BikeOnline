import React from 'react'
import { Link } from "react-router-dom";
import {useCartContext} from "./CartContext"
import { getFirestore, doc, getDoc } from "firebase/firestore";  
import "../css/Styles.css";
import Card from "react-bootstrap/Card";
import { useState } from 'react';


export default function Checkout() {

const {cart, totalProducts, totalPrice} = useCartContext();            // Le pedimos el cart al contexto

//Creamos estados para los campos Imput, tiene que ser igual al campo "value" del imput, ya que caundo cambie el imput cambia el estado
const [name, setName]  = useState("");
const [lastName, setLastName]  = useState("");
const [date, setDate]  = useState("");
const [tel, setTel]  = useState("");
const [email, setEmail]  = useState("");

function handleClickBuyButton() {
    alert(name + " " + lastName + " " + tel + " " + email + " " + "Quiere Comprar" + JSON.stringify(cart) + " Total a Pagar: " + totalPrice() * 1000);
    const buyer = {
        buyer: {Nombre: name, Apellido: lastName, Celular: tel, Email: email},
        carrito: cart,
        total: totalPrice(),
    };
}






    
  return (
    <div className='contactosForm'>
        <h2 className='text-center'>Detalle de Compra</h2>
        <div> {cart.map((item) =>  (
            <Card className="mx-auto formx2" style={{ width: '28rem'}}>
                  <Card.Body>
                    <Card.Title className="text-center">Marca: {item.brand}</Card.Title>
                    <Card.Text className="text-center">Modelo: {item.model}</Card.Text>
                    <Card.Text className="text-center">Cantidad Selecionada: {item.quantity}</Card.Text>
                    <Card.Text className="text-center">Precio Unitario u$s {item.price * 1000}</Card.Text>
                  </Card.Body>
          </Card> 
        ))} </div>      {/* Armamos un string con todo lo que tiene adentro la varible cart y lo metemos en el div*/}
        <div className='text-center'>
            <h3 className='titilox2'> Total a Pagar : {totalPrice() * 1000}</h3>
            
                            </div>
                                <h4 className="titulo-formulario letraTitulo1">Datos de Usuario</h4>
                                <form  className="formulario">
                                    <div className="formulario_input">
                                        <label  for="Campo_Nombre"><b>Ingrese Nombre</b></label>
                                        <input type="text" id="Campo_Nombre" placeholder ='Ej: Pedro' required  value={name} onChange= {(e) => setName(e.target.value)} /> {/* Con el onChange seteamos el estado con el valor del input que se ingrese, si cambia el valor de la caja cambia el valor del estado seteandolo con ese valor nuevo, */}
                                    </div> 
                                    <div className="formulario_input">
                                        <label for="Campo_Apellido"><b>Ingrese su Apellido</b></label>
                                        <input type="text" id="Campo_Apellido" value={lastName} onChange= {(e) => setLastName(e.target.value)} placeholder='EJ: Messi'  required />
                                    </div>
                                    <div className="formulario_input">
                                        <label for="Campo_Email"><b>Ingrese su Email</b></label>
                                        <input type="email" id="Campo_Email" value={email} onChange= {(e) => setEmail(e.target.value)} placeholder='Nombre@email.com' />
                                    </div>
                                    <div className="formulario_input">
                                        <label for="Campo_Celular"><b>Ingrese Su Celular</b></label>
                                        <input type="text" id="Campo_Celular" placeholder="Ingrese su Número de Teléfono" value={tel} onChange= {(e) => setTel(e.target.value)} />
                                    </div>                   
                                </form>
                                <div className='text-center'><input type="button" className='botonContactos'   onClick={handleClickBuyButton} value="Comprar"/></div>
                            </div>
  );
}
