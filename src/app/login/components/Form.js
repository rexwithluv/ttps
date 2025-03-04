import { useState } from "react";

export default function Form({ loguearse, usuarios }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    loguearse(username, password, usuarios);
  };

  return (
    <form className="bg-last px-4 py-5 border rounded-3 fs-5">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Nombre de usuario:
        </label>

        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="taylor_swift"
          onBlur={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña:
        </label>

        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="●●●●●●●●"
          onBlur={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="text-center mt-4">
        <button type="button" className="btn btn-primary" onClick={doLogin}>
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}
