import React, { Children } from 'react'
import { useEffect, useState, useContext } from 'react';


const CartContext = React.createContext([]);                            // Usamos este Hook para crear el componente, lo asignamos a una vribale y lo exportamos.

export const useCartContext = () => useContext(CartContext);            // Creamos y exportaMOS esta funcion donde le pasamos el useContext, para luego por usarlo en todod los componentes sin tener que importar el contexto.




export default function CartProvider({children}) {

    // Aca colocamos toda la Logica.

    const [cart, setCart] = useState(  JSON.parse(localStorage.getItem("cart")) || []);    // Creamos el estado para el Carrito. ademas, nos trae lo que tenemos en el local starge guardado del carrito, sino lo carga vacio

    const clearCart = () => setCart([]);                                // Seteamos un array vacio para limpiar el carrito.

    const inCart = (id) => {                                            // Para saber si un producto esta en el carrito.
        return cart.find(item => item.id === id) ? true : false;
    }

    const removeCart = (id) => {                                        // Ramover Item del carrito, haciendo un filter y creando un nuevo array con todos los productos menos el que tenga el ID seleccinoado.
        setCart(cart.filter(item => item.id !== id));               
    }

   


    const addCart = (item, quantity) => {
        if (inCart(item.id)) {                                          // Si el Producto esta en el carrito se ejecuta el IF,   
            setCart(cart.map(product => {                               // Creamos un nuevo array con el map,  Dejamos todo tal cual esta pero al cuantity lo aumentamos por el quantity que le pasamos 
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product      
            }));
        } else {                                                        // Si el producto no esta en el carrito, 
            setCart([...cart, {...item, quantity}]);                    // Seteamos un nuevo array, con todos los objetos que ya teniamos (usando el spread en ...cart), y creamos un nuevo objeto con todos los campos de item mas el quantity (...item, quantity)
        }
    }

                                                                        // Con esta funcion calculamos el precio total, Usando reduce, colocamos el acumulador en 0, y luego la suma de item seleccionado lo multiplicamos por el precio unitario. Por cada producto que agregamos se se renderiza.
    const totalPrice = () => {                                                  
        return cart.reduce((acc, act) => acc + act.quantity * act.price, 0);    
    }
        

    const totalProducts = () => cart.reduce((acum, productNow) => acum + productNow.quantity, 0)    // Iniciamos un acumulador en 0, y sumamos la cantidad de productos seleccionados al cumulador y asi por cada seleccion de item


    useEffect(() => {
        /* localStorage.setItem("cart", JSON.stringify(cart)); */              // Mostramos en pantalla el contenido del carrito, solo para verificar que ande.    

    }, [cart])                                                          // Cualquier cabio en el carro ejecutamos este use efect y guardamos los cambios en el localStorage
    


    /* console.log("carrito", cart); */
    



  return (
    <CartContext.Provider value={{ clearCart, inCart, removeCart, addCart, totalPrice, totalProducts, cart }}> {/* Devolvemos a los children las propiedades. */}
            {children}
    </CartContext.Provider>
  )
}
