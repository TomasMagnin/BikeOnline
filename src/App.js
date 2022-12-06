import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import CartProvider from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


export default function App() {
  return (
  <div>  
      <BrowserRouter>
                          {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
                          {/* ACA DECLARO RUTAS PUNTUALES */}
        <CartProvider>    {/* Todo lo que este aca Adentro con los Children, del provider */}
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idcategory" element={<ItemListContainer />} />
            <Route path="/item/:iditem" element={<ItemDetailContainer />} />          {/* En la ruta IMEM siemore tengo un ID de item, cuando entramos a esta ruta siempre va ver los parametros de la variable y las saca usando el HOOK en itemdetailcontaider */}
            <Route path="/checkout" element={<Checkout />}/>  
            <Route path="/cart" element={<Cart/>} />
           
        </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
  </div>
);
}
