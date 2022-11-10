import React from 'react'
import { BsCart2 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';


export default function CartWidget() {
  return (
    <a href=""><BsCart2 style={{marginRight: 50, width: 55, heigth: 100, color: "#80a" }}/> <Badge style={{marginRight:10}} bg="primary">1</Badge></a>
    
    )
}
