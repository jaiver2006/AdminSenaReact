import { Link } from "react-router-dom";

function ApprenticesCreate() {
  return (
    <div className="form-page">
      <h1>Crear Aprendiz</h1>

      {/* El formulario es presentacional por ahora; falta conectar su envio al backend. */}
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Curso</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/apprentices" className="btn-secondary">
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

export default ApprenticesCreate;
