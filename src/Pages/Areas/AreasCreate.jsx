import { Link } from "react-router-dom";

function AreasCreate() {
  return (
    <div className="form-page">
      <h1>Crear Área</h1>

      {/* El submit queda preparado para conectarse a la persistencia de areas. */}
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre del Área</label>
            <input type="text" placeholder="Ej: Desarrollo de software" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/areas" className="btn-secondary">
            Cancelar
          </Link>
          <button type="submit" className="btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AreasCreate;
