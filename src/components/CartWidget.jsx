import React from 'react'
import { BsCart2 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';


export default function CartWidget() {
  return (
    <div>
      <h2><BsCart2 className='cartnav' style={{marginRight: 45, width: 50, heigth: 50, color: "#80a" }}/></h2>
      <Badge style={{marginRight:10}} bg="primary">1</Badge>
    </div>
    )
}
