"use client";

import { useState } from "react";
import Tabla from "../components/Tabla";
import Form from "./components/Form";

export default function Usuarios() {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});

  return (
    <div>
      <Form usuarioSeleccionado={usuarioSeleccionado} />
      <Tabla
        endpoint={"usuarios"}
        setDatoSeleccionado={setUsuarioSeleccionado}
      />
    </div>
  );
}
