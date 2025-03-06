export default function Form() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="don_dinosaurio"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contrasenya" className="form-label">
          Contraseña
        </label>
        <input
          type="text"
          className="form-control"
          id="contrasenya"
          placeholder="abc123."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="categoria">Tipo de usuario</label>
        <select defaultValue={"0"} className="form-select" id="categoria">
          <option value="0" disabled>
            Selecciona...
          </option>
          <option value="1">Administrador</option>
          <option value="2">Usuario</option>
        </select>
      </div>
    </form>
  );
}
