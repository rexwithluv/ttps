"use client";

import { useEffect, useState } from "react";

export default function Form({ productoSeleccionado }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState(0.0);

  useEffect(() => {
    if (productoSeleccionado) {
      setNombre(productoSeleccionado.nombre ?? "");
      setDescripcion(productoSeleccionado.descripcion ?? "");
      setCategoria(productoSeleccionado.categoria ?? "0");
      setImagen(productoSeleccionado.imagen ?? "");
      setPrecio(productoSeleccionado.precio ?? 0.0);
    }
  }, [productoSeleccionado]);

  const guardarProducto = async () => {
    try {
      const URL = "http://localhost:5000/productos/";

      const producto = {
        nombre: nombre,
        descripcion: descripcion,
        categoria: categoria,
        imagen: imagen,
        precio: precio,
      };

      const response = await fetch(URL);
      const productos = await response.json();

      const productoExiste = productos.find(
        (p) => p.imagen === producto.imagen
      );

      if (!productoExiste) {
        await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        });
      } else {
        await fetch(`URL${productoExiste.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        });
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre del producto
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          placeholder="Vinilo Folklore"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">
          Descripción del producto
        </label>
        <textarea
          className="form-control"
          name="descripcion"
          id="descripcion"
          rows="3"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="categoria">Selecciona una categoría</label>
        <select
          className="form-select"
          name="categoria"
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="0">
            Selecciona...
          </option>
          <option value="1">Álbumes</option>
          <option value="2">Ropa</option>
          <option value="3">Hogar</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="imagen">
          Nombre de la imagen (sin extensión)
        </label>
        <input
          type="text"
          className="form-control"
          id="imagen"
          name="imagen"
          placeholder="vinilo-folklore"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="precio">
          Precio del producto
        </label>
        <input
          type="number"
          className="form-control"
          id="precio"
          name="precio"
          placeholder="00.00"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => guardarProducto()}
        >
          Guardar/Actualizar producto
        </button>
      </div>
    </form>
  );
}
