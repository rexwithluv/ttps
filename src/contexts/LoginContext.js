import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const loguearse = (name, passwd, usuarios) => {
    const userValido = usuarios.filter((u) => {
      return u.username === name && u.password === passwd;
    });

    console.log(userValido);

    if (userValido) {
      setUsuario(userValido);
      sessionStorage.setItem("usuarioLogin", JSON.stringify(userValido));
    }
  };

  const desloguearse = () => {
    setUsuario(null);
    sessionStorage.removeItem("usuarioLogin");
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
