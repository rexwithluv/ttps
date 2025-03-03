"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Tabs() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:5000/categoriasProductos");
      const data = await response.json();

      setCategorias(data);
    };

    getData();
  }, []);

  const seleccionarCategoria = (id) => {
    sessionStorage.setItem("categoriaSeleccionada", id);
  };

  return (
    <ul className="nav nav-tabs bg-terciary">
      {categorias.map((c) => (
        <li key={c.id} className="nav-item">
          <button
            type="button"
            className="nav-link"
            onClick={() => seleccionarCategoria(c.id)}
          >
            {c.nombre}
          </button>
        </li>
      ))}
    </ul>
  );
}
