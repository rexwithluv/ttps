import { createContext, useState } from "react";

export const CarritoContext = createContext();

export default function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const anyadirAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarDelCarrito = (idProducto) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((producto) => producto.id !== idProducto)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        anyadirAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        carritoVacio: carrito.length === 0,
        itemsEnCarrito: carrito.length,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
