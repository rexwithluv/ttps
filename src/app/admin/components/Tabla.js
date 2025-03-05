"use client";

import { useEffect, useState } from "react";

export default function Tabla({ endpoint }) {
  const [datos, setDatos] = useState([]);
  const [headers, setHeaders] = useState([]);

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/${endpoint}`);
    const data = await response.json();

    setDatos(data);
  };
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const eliminarDato = async (datoId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/${endpoint}/${datoId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Error al eliminar el dato del endpoint ${endpoint}`);
      }

      getData();
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:5000/${endpoint}`);
      const data = await response.json();

      setDatos(data);
    };

    getData()
  }, [endpoint]);

  useEffect(() => {
    setHeaders(datos[0] ? Object.keys(datos[0]) : []);
  }, [datos]);

  return (
    <table className="table ">
      <thead>
        <tr>
          {headers.map((h, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            // biome-ignore lint/a11y/noHeaderScope: <explanation>
            <th key={i} scope="col">
              {capitalize(h)}
            </th>
          ))}
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato) => (
          <tr key={dato.id}>
            {headers.map((h, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <td key={i}>{dato[h]}</td>
            ))}
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => eliminarDato(dato.id)}
              >
                <i className="bi bi-trash-fill" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
