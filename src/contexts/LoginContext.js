"use client";

import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    setUsuario(JSON.parse(sessionStorage.getItem("usuarioLogin")));
    setLogueado(JSON.parse(sessionStorage.getItem("usuarioLogin")));
  }, []);

  const loguearse = (name, passwd, usuarios) => {
    const userValido = usuarios.filter((u) => {
      return u.username === name && u.password === passwd;
    });

    if (userValido) {
      setUsuario(userValido[0]);
      setLogueado(true);

      sessionStorage.setItem("usuarioLogin", JSON.stringify(userValido));
    }
  };

  const desloguearse = () => {
    setUsuario(null);
    setLogueado(false);

    JSON.parse(sessionStorage.removeItem("usuarioLogin"));
  };

  const isAdmin = (usuario) => {
    if (usuario !== null) {
      return usuario.id === "1";
    }
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
