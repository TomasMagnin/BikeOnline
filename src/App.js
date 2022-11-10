import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";




export default function App() {
  return (
  <div>  
      <BrowserRouter>
                          {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        <NavBar />
                          {/* ACA DECLARO RUTAS PUNTUALES */}
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idcategory" element={<ItemListContainer />} />
            <Route path="/item/:iditem" element={<ItemDetailContainer />} />          {/* En la ruta IMEM siemore tengo un ID de item, cuando entramos a esta ruta siempre va ver los parametros de la variable y las saca usando el HOOK en itemdetailcontaider */}
        </Routes>
                            {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
        <Footer />
      </BrowserRouter>
  </div>
);
}
