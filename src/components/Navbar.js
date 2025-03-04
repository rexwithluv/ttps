import Link from "next/link";
import Carrito from "./Carrito";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { LoginContext } from "@/contexts/LoginContext";

export default function Navbar() {
  const { logueado, desloguearse } = useContext(LoginContext);
  const actualPath = usePathname();

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" href={"/"}>
          TTPS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${actualPath === "/" && "active"}`}
                href={"/"}
              >
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${actualPath === "/tienda" && "active"}`}
                href={"/tienda"}
              >
                Tienda
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${actualPath === "/nosotros" && "active"}`}
                href={"/nosotros"}
              >
                Sobre nosotros
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${actualPath === "/contacto" && "active"}`}
                href={"/contacto"}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav ms-auto fs-5">
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              <Carrito />
            </Link>
          </li>

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
        </ul>
      </div>
    </nav>
  );
}
