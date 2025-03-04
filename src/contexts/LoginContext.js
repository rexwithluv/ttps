import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const loguearse = (usuario) => {
    setUsuario(usuario);
  };

  const desloguearse = () => {
    setUsuario(null);
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
        loguearse,
        desloguearse,
        isAdmin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
