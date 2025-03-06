"use client";

import { useEffect, useState } from "react";

export default function Form({ usuarioSeleccionado }) {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("0");

  useEffect(() => {
    if (usuarioSeleccionado) {
      setNombre(usuarioSeleccionado.username ?? "");
      setPassword(usuarioSeleccionado.password ?? "");
      setTipoUsuario(usuarioSeleccionado.tipoUsuario ?? "0");
    }
  }, [usuarioSeleccionado]);

  const guardarUsuario = async () => {
    try {
      const usuario = {
        username: nombre,
        password: password,
        tipoUsuario: tipoUsuario,
      };

      const response = await fetch("http://localhost:5000/usuarios/");
      const usuarios = await response.json();

      const usuarioExiste = usuarios.find(
        (u) => u.username === usuario.username
      );

      if (!usuarioExiste) {
        await fetch("http://localhost:5000/usuarios/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        });
      } else {
        await fetch(`http://localhost:5000/usuarios/${usuarioExiste.id}`, {
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
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="username"
          placeholder="don_dinosaurio"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tipo">Tipo de usuario</label>
        <select
          className="form-select"
          id="tipo"
          name="tipoUsuario"
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
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
