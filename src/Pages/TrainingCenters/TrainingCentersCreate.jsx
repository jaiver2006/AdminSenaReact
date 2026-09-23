// Link permite volver al listado de centros sin recargar la página.
import { Link } from "react-router-dom";

// Construye el formulario para registrar un centro de formación.
function TrainingCentersCreate() {
  return (
    <div className="form-page">
      <h1>Crear Centro</h1>

      {/* El formulario recoge la identificación y ubicación del centro. */}
      <form>
        <div className="form-grid">
          {/* Nombre oficial del centro de formación. */}
          {/* Ciudad o ubicación donde funciona el centro. */}
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input type="text" />
          </div>
        </div>

        {/* Acciones para cancelar el registro o guardarlo. */}
        <div className="form-actions">
          <Link to="/training-centers" className="btn-secondary">
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

export default TrainingCentersCreate;
