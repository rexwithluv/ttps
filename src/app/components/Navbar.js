import Link from "next/link";
import Carrito from "./Carrito";

export default function Navbar() {
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
              <Link className="nav-link" href={"/"}>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Tienda
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
                Sobre nosotros
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={"/"}>
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

          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              <i className="bi bi-person-fill" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
