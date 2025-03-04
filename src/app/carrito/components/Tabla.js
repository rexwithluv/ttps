"use client";

import { CarritoContext } from "@/contexts/CarritoContext";
import { useContext } from "react";

export default function Tabla() {
  const { carrito, eliminarDelCarrito, precioTotal, vaciarCarrito } =
    useContext(CarritoContext);

  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.cantidad}</td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                <i className="bi bi-trash-fill" />
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>{precioTotal}</td>
          <td>{carrito.reduce((acc, p) => p.cantidad + acc, 0)}</td>
          <td>
            <button type="button" className="btn btn-secondary" onClick={() =>vaciarCarrito()}>
              Pagar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
