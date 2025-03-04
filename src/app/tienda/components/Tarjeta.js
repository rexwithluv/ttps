import { CarritoContext } from "@/contexts/CarritoContext";
import Image from "next/image";
import { useContext } from "react";

export default function Tarjeta({ producto }) {
  const { anyadirAlCarrito } = useContext(CarritoContext);

  return (
    <div className="card">
      <Image
        src={`/images/productos/${producto.imagen}.webp`}
        layout="responsive"
        objectFit="cover"
        width={18}
        height={250}
        className="card-img-top"
        alt="Imagen del producto"
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => anyadirAlCarrito(producto)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
