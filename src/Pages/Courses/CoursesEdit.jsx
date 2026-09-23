// Link permite regresar al listado de cursos después de la edición.
import { Link } from "react-router-dom";

// Presenta los datos de un curso existente para permitir su actualización.
function CoursesEdit() {
  return (
    <div className="form-page">
      <h1>Editar Curso</h1>

      {/* Los valores iniciales simulan la información cargada desde el backend. */}
      <form>
        <div className="form-grid">
          {/* Código que identifica al curso. */}
          {/* Día programado para las clases del curso. */}
          <div className="form-group">
            <label>Número del Curso</label>
            <input type="text" defaultValue="2024-01" />
          </div>

          {/* Área académica relacionada con el curso. */}
          <div className="form-group">
            <label>Día</label>
            <input type="text" defaultValue="Lunes" />
          </div>

          {/* Centro que administra la formación. */}
          <div className="form-group">
            <label>Área</label>
            <input type="text" defaultValue="Desarrollo" />
          </div>

          <div className="form-group">
            <label>Centro</label>
            <input type="text" defaultValue="Centro Norte" />
          </div>
        </div>

        {/* Permite cancelar la edición o guardar la actualización. */}
        <div className="form-actions">
          <Link to="/courses" className="btn-secondary">
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

export default CoursesEdit;
