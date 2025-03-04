"use client";

import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export default function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(JSON.parse(sessionStorage.getItem("carrito")) || []);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

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
    sessionStorage.removeItem("carrito");
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
