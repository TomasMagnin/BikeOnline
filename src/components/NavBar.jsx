import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink, Link } from "react-router-dom";
import "../css/Styles.css";




export default function NavBar() {

  return (
        
              <Navbar bg="light" className="nav1" expand="lg">
              <NavLink to={"/"} className="navBrand"> BikeOnline <img className="iconNav" src="../IconHeader.png" alt="logo" /></NavLink>
              <Container>
                <Navbar.Toggle  aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav ">
                  <Nav className=" navNav me-auto text-center mx-auto">
                    <NavLink className="NvLn" to="/">Home</NavLink>
                    <NavLink className="NvLn" to="/category/Mountain">Mountain Bike</NavLink>
                    <NavLink className="NvLn" to="/category/Route">Route</NavLink>
                    <NavLink className="NvLn" to="/category/Electric">Electric</NavLink>
                  </Nav>
                </Navbar.Collapse>
                
              </Container>
             <Link to="cart"><CartWidget/></Link> 
            </Navbar>    

  );
}
