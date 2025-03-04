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
        isAdmin: usuario !== null && usuario.id === "1",
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
