// Link permite volver al listado después de cancelar o guardar los cambios.
import { Link } from "react-router-dom";

// Muestra el formulario para editar la información de un aprendiz.
function ApprenticesEdit() {
  return (
    <div className="form-page">
      <h1>Editar Aprendiz</h1>

      {/* Estos valores simulan el registro cargado a partir del id de la URL. */}
      <form>
        <div className="form-grid">
          {/* Campos editables con la información actual del aprendiz. */}
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

        {/* Permite cancelar la edición o confirmar los cambios realizados. */}
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
