"use client";

import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export default function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    setCarrito(JSON.parse(sessionStorage.getItem("carrito")) || []);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    const total = carrito.reduce((acc, p) => p.precio * p.cantidad + acc, 0);
    setPrecioTotal(total);
  }, [carrito]);

  const anyadirAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExiste = prevCarrito.find((p) => p.id === producto.id);

      if (productoExiste) {
        return prevCarrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }

      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (idProducto) => {
    setCarrito((prevCarrito) => {
      const producto = prevCarrito.find((p) => p.id === idProducto);

      if (producto.cantidad === 1) {
        return prevCarrito.filter((p) => p.id !== idProducto);
      }

      return prevCarrito.map((p) =>
        p.id === idProducto ? { ...p, cantidad: p.cantidad - 1 } : p
      );
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    sessionStorage.removeItem("carrito");
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        precioTotal,
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
