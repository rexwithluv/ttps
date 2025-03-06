"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const guardarUsuario = async () => {
    try {
      const method = "POST";

      const response = await fetch("http://localhost:5000/usuarios/", {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error(`Error al eliminar el dato del endpoint ${endpoint}`);
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="username"
          placeholder="don_dinosaurio"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contrasenya" className="form-label">
          Contraseña
        </label>
        <input
          type="text"
          className="form-control"
          id="contrasenya"
          name="password"
          placeholder="abc123."
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tipo">Tipo de usuario</label>
        <select
          defaultValue={"0"}
          className="form-select"
          id="tipo"
          name="tipoUsuario"
          onChange={handleChange}
          required
        >
          <option value="0" disabled>
            Selecciona...
          </option>
          <option value="1">Administrador</option>
          <option value="2">Usuario</option>
        </select>
      </div>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => guardarUsuario()}
        >
          Guardar/Actualizar usuario
        </button>
      </div>
    </form>
  );
}
