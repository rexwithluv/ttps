import Link from "next/link";
import { usePathname } from "next/navigation";
import Carrito from "./navbar/Carrito";
import User from "./navbar/User";
import Admin from "./navbar/Admin";

export default function Navbar() {
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
          <Carrito />
          <Admin />
          <User />
        </ul>
      </div>
    </nav>
  );
}
