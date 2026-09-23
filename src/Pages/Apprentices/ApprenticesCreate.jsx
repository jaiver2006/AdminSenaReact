// Link permite cancelar el registro y volver al listado de aprendices.
import { Link } from "react-router-dom";

// Construye el formulario visual para registrar un nuevo aprendiz.
function ApprenticesCreate() {
  return (
    <div className="form-page">
      <h1>Crear Aprendiz</h1>

      {/* El formulario es presentacional por ahora; después puede conectarse al backend. */}
      <form>
        <div className="form-grid">
          {/* Datos básicos que identifican y permiten contactar al aprendiz. */}
          {/* Curso al que pertenece actualmente el aprendiz. */}
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

        {/* Acciones para descartar el registro o guardarlo. */}
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
