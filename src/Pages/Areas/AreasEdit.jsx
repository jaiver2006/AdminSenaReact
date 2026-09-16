import { Link } from "react-router-dom";

function AreasEdit() {
  return (
    <div className="form-page">
      <h1>Editar Área</h1>

      {/* Valor inicial de ejemplo; la API deberia proporcionar el registro real. */}
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre del Área</label>
            <input type="text" defaultValue="Desarrollo de software" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/areas" className="btn-secondary">
            Cancelar
          </Link>
          <button type="submit" className="btn-primary">
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AreasEdit;
