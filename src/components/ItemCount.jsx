import React, { useState } from "react";

export default function ItemCount({ ini, max, addItem }) {

    
  const [count, setCount] = useState(ini);
  function restar() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < max) {
      setCount(count + 1);
    }
  }

  return (
    <div className="countDetail">
      <button className="botonDetail" onClick={restar}>-</button>
      <span className="numberDetail">{count}</span>
      <button className="botonDetail" onClick={sumar}>+</button>
      <button className="botonDetail botonDetailx" onClick={() => addItem(count)}>AGREGAR</button>
    </div>
  );
}