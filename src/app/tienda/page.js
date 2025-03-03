"use client";

import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import Tarjeta from "./components/Tarjeta";

export default function Tienda() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setCategoriaSeleccionada(sessionStorage.getItem("categoriaSeleccionada"));
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:5000/productos");
      const data = await response.json();

      const filtered = data.filter((p) => {
        return p.categoria === categoriaSeleccionada;
      });

      setProductos(filtered);
    };

    getData();
  }, [categoriaSeleccionada]);

  return (
    <>
      <Tabs setCategoriaSeleccionada={setCategoriaSeleccionada}/>
      <div>
        {productos.map((p) => (
          <Tarjeta key={p.id} producto={p} />
        ))}
      </div>
    </>
  );
}
