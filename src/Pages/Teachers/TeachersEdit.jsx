// Link permite volver al listado después de cancelar o actualizar.
import { Link } from "react-router-dom";

// Presenta la información de un instructor para modificarla.
function TeachersEdit() {
  return (
    <div className="form-page">
      <h1>Editar Instructor</h1>

      {/* Los valores iniciales representan los datos actuales del instructor. */}
      <form>
        <div className="form-grid">
          {/* Datos personales y de asignación que pueden ser actualizados. */}
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" defaultValue="Carlos Ruiz" />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" defaultValue="carlos@gmail.com" />
          </div>

          <div className="form-group">
            <label>Área</label>
            <input type="text" defaultValue="Desarrollo" />
          </div>

          <div className="form-group">
            <label>Centro</label>
            <input type="text" defaultValue="Centro Norte" />
          </div>
        </div>

        {/* Permite descartar los cambios o confirmar la actualización. */}
        <div className="form-actions">
          <Link to="/teachers" className="btn-secondary">
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

export default TeachersEdit;
