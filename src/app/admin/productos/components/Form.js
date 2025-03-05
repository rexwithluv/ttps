export default function Form() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre del producto
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Vinilo Folklore"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">
          Descripción del producto
        </label>
        <textarea className="form-control" id="descripcion" rows="3" />
      </div>
      <div className="mb-3">
        <label htmlFor="categoria">Selecciona una categoría</label>
        <select defaultValue={"0"} className="form-select" id="categoria">
          <option value="0" disabled>
            Selecciona...
          </option>
          <option value="1">Álbumes</option>
          <option value="2">Ropa</option>
          <option value="3">Hogar</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="imagen">
          Nombre de la imagen (sin extensión)
        </label>
        <input
          type="text"
          className="form-control"
          id="imagen"
          placeholder="vinilo-folklore"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="precio">
          Precio del producto
        </label>
        <input
          type="number"
          className="form-control"
          id="precio"
          placeholder="00.00"
        />
      </div>
    </form>
  );
}
