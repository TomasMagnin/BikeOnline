import React from 'react'
import { Link } from "react-router-dom";
import {useCartContext} from "./CartContext"
import { getFirestore, doc, getDoc } from "firebase/firestore";  
import "../css/Styles.css";
import Card from "react-bootstrap/Card";
import { useState } from 'react';


export default function Checkout() {

const {cart, totalProducts, totalPrice} = useCartContext();            // Le pedimos el cart al contexto

//Creamos estados para los campos Imput
const [name, setName]  = useState("");
const [tel, setTel]  = useState("");
const [email, setEmail]  = useState("");

function handleClickBuyButton() {
    alert("Quiere Comprar" + JSON.stringify(cart) + "Total a Pagar: " + totalPrice() * 1000);
}






    
  return (
    <div className='contactosForm'>
        <div> {cart.map((item) =>  (
            <Card className="mx-auto formx2" style={{ width: '28rem'}}>
                  <Card.Body>
                    <Card.Title className="text-center">Marca: {item.brand}</Card.Title>
                    <Card.Text className="text-center">Modelo: {item.model}</Card.Text>
                    <Card.Text className="text-center">Cantidad Selecionada: {item.quantity}</Card.Text>
                    <Card.Text className="text-center">Precio Unitario $ {item.price * 1000}</Card.Text>
                  </Card.Body>
          </Card> 
          
        ))} </div>      {/* Armamos un string con todo lo que tiene adentro la varible cart y lo metemos en el div*/}
        <div className='text-center'>
            <h1 className='titilox2'> Total a Pagar : {totalPrice() * 1000}</h1>
            <input type="button" className='botonContactos'   onClick={handleClickBuyButton} value="Comprar"/>
        </div>
        
                            
                              
                               <h2 className="titulo-formulario letraTitulo1">Registrar Usuario</h2>
                               
                                <form  className="formulario">
                                    <div className="formulario_input">
                                        <label  for="Campo_Nombre"><b>Ingrese Nombre</b></label>
                                        <input type="text" id="Campo_Nombre" /* value={"Ej: Pedro"} */ placeholder='Ej: Pedro' required />
                                    </div> 
                                    <div className="formulario_input">
                                        <label for="Campo_Apellido"><b>Ingrese su Apellido</b></label>
                                        <input type="text" id="Campo_Apellido" /* value={"EJ: Messi"}*/ placeholder='EJ: Messi'  required />
                                    </div>
                                    <div className="formulario_input">
                                        <label for="Campo_Email"><b>Ingrese su Email</b></label>
                                        <input type="email" id="Campo_Email" /* value={"Nombre@email.com"}*/ placeholder='Nombre@email.com' />
                                    </div>
                                    <div className="formulario_input">
                                        <label for="Campo_Celular"><b>Ingrese Su Celular</b></label>
                                        <input type="text" id="Campo_Celular" placeholder="Ingrese su Número de Teléfono" /* value={"*54-9-351-5555555"}*/ />
                                    </div>
                                    <div className="formulario_input">
                                        <label for="Campo_Fecha_Nacimiento"><b>Ingrese su Fecha de Nacimiento</b></label>
                                        <input type="date" id="Campo_Fecha_Nacimiento" value={"1950-09-18"} />
                                    </div>  
                                    <div className="formulario_input">
                                        <label for="text"><b>Elija su Sexo</b></label>
                                        <select name="text" id="text">
                                            <option value={"Masculino"}>Masculino</option>
                                            <option value={"Femenino"}>Femenino</option>
                                        </select>
                                    </div>
                                    <div className="formulario_input">
                                        <p>Lea los terminos y condiciones y haga clic para aceptar</p>
                                        <label for="Campo_Aceptar"><b>Acepto los Términos y Condiciones</b></label>
                                        <input type="checkbox" id="Campo_Aceptar"  required  value={"1"} />
                                    </div>
                                    <div className="formulario_input_buttons">
                                        <input type="submit" className="botonContactos" />
                                        <input type="reset" className="botonContactos" />
                                    </div>                   
                                </form>
                                
                              
    </div>
                          
  );
}
