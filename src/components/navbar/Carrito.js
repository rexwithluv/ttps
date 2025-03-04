import { useContext } from "react";
import { CarritoContext } from "../../contexts/CarritoContext";
import Link from "next/link";

export default function Carrito() {
  const { carritoVacio, itemsEnCarrito } = useContext(CarritoContext);

  return (
    <li className="nav-item">
      <Link className="nav-link" href={"/carrito"}>
        {carritoVacio && <i className="bi bi-cart" />}
        {!carritoVacio && (
          <span className="bi bi-cart-fill position-relative">
            <sup className="position-absolute top-0 start-100 translate-middle pb-2 fw-bold">
              {itemsEnCarrito}
            </sup>
          </span>
        )}
      </Link>
    </li>
  );
}
