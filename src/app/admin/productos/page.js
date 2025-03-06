"use client";

import { useState } from "react";
import Tabla from "../components/Tabla";
import Form from "./components/Form";

export default function Productos() {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  return (
    <div>
      <Form productoSeleccionado={productoSeleccionado} />
      <Tabla
        endpoint={"productos"}
        setDatoSeleccionado={setProductoSeleccionado}
      />
    </div>
  );
}
