import { Link } from "react-router-dom";

function ApprenticesEdit() {
  return (
    <div className="form-page">
      <h1>Editar Aprendiz</h1>

      {/* Estos valores son de ejemplo hasta cargar el aprendiz usando el id de la URL. */}
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" defaultValue="Ana Gómez" />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" defaultValue="ana@gmail.com" />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input type="text" defaultValue="3001234567" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/apprentices" className="btn-secondary">
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

export default ApprenticesEdit;
