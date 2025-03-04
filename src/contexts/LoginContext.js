"use client";

import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
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

      sessionStorage.setItem("usuarioLogin", JSON.stringify(userValido));
    }
  };

  const desloguearse = () => {
    setUsuario(null);
    setLogueado(false);
    setIsAdmin(false);

    sessionStorage.removeItem("usuarioLogin");
    sessionStorage.removeItem("carrito");
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
