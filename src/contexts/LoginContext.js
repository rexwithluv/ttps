"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CarritoContext } from "./CarritoContext";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const { vaciarCarrito } = useContext(CarritoContext);

  const [usuario, setUsuario] = useState(null);
  const [logueado, setLogueado] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const usuarioLogin = JSON.parse(sessionStorage.getItem("usuarioLogin"));

    setUsuario(usuarioLogin);
    setLogueado(usuarioLogin);
  }, []);

  useEffect(() => {
    setIsAdmin(usuario ? usuario.tipoUsuario === "1" : false);
  }, [usuario]);

  const loguearse = (name, passwd, usuarios) => {
    const userValido = usuarios.find((u) => {
      return u.username === name && u.password === passwd;
    });

    if (userValido) {
      setUsuario(userValido);
      setLogueado(true);

      vaciarCarrito();
      sessionStorage.setItem("usuarioLogin", JSON.stringify(userValido));
    }
  };

  const desloguearse = () => {
    setUsuario(null);
    setLogueado(false);
    setIsAdmin(false);

    sessionStorage.removeItem("usuarioLogin");
    vaciarCarrito();
  };

  return (
    <LoginContext.Provider
      value={{
        usuario,
        logueado,
        loguearse,
        desloguearse,
        isAdmin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
