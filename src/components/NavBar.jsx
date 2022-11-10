import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";
import "../css/Styles.css";




export default function NavBar() {

  return (
        
              <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand> BikeOnline <img></img> </Navbar.Brand>
                <Navbar.Toggle className="sclassName" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto text-center mx-auto  ">
                    <NavLink className="NvLn" to="/">Inicio</NavLink>
                    <NavLink className="NvLn" to="/category/MTB">Mountain Bike</NavLink>
                    <NavLink className="NvLn" to="/category/Route">Ruta</NavLink>
                    <NavLink className="NvLn" to="/category/Electric">Electricas</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
              <CartWidget/>
            </Navbar>    

  );
}