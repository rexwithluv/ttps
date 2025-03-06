import { CarritoContext } from "@/contexts/CarritoContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function Tarjeta({ producto }) {
  const { anyadirAlCarrito } = useContext(CarritoContext);
  const [imagen, setImagen] = useState(producto.imagen);

  const formatearPrecio = (precio) => `${precio.toString().replace(".", ",")}€`;

  useEffect(() => {
    if (producto.imagen === "") {
      const getImage = async () => {
        const response = await fetch("https://picsum.photos/1500/1500");
        setImagen(response.url);
      };

      getImage();
    }
  }, [producto]);

  return (
    <div className="card">
      <Image
        src={
          imagen.startsWith("http")
            ? imagen
            : `/images/productos/${producto.imagen}.webp`
        }
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
        <div className="card-text">
          <p>{formatearPrecio(producto.precio)}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => anyadirAlCarrito(producto)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
