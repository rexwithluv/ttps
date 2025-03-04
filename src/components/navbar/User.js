import { LoginContext } from "@/contexts/LoginContext";
import Link from "next/link";
import { useContext } from "react";

export default function User() {
  const { logueado, desloguearse } = useContext(LoginContext);

  return (
    <>
      {!logueado ? (
        <li className="nav-item">
          <Link className="nav-link" href={"/login"}>
            <i className="bi bi-person-fill" />
          </Link>
        </li>
      ) : (
        <li className="nav-item dropdown">
          <button
            type="button"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-person-fill" />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button type="button" className="dropdown-item">
                Editar perfil
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => desloguearse()}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </li>
      )}
    </>
  );
}
