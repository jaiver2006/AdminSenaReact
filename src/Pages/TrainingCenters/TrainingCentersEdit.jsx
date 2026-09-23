// Link permite regresar al listado de centros después de editar.
import { Link } from "react-router-dom";

// Presenta los datos de un centro existente para actualizarlos.
function TrainingCentersEdit() {
  return (
    <div className="form-page">
      <h1>Editar Centro</h1>

      {/* Los valores iniciales simulan la información cargada desde el backend. */}
      <form>
        <div className="form-grid">
          {/* Nombre que identifica al centro dentro del sistema. */}
          {/* Ubicación actual del centro de formación. */}
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" defaultValue="Centro Norte" />
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input type="text" defaultValue="Bogotá" />
          </div>
        </div>

        {/* Permite cancelar la edición o guardar los cambios. */}
        <div className="form-actions">
          <Link to="/training-centers" className="btn-secondary">
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

export default TrainingCentersEdit;
