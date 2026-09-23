// Link permite volver al listado de cursos sin abandonar la aplicación.
import { Link } from "react-router-dom";

// Construye el formulario para registrar un nuevo curso de formación.
function CoursesCreate() {
  return (
    <div className="form-page">
      <h1>Crear Curso</h1>

      {/* El formulario reúne la información académica y el centro asociado. */}
      <form>
        <div className="form-grid">
          {/* Código o número que identifica al curso. */}
          {/* Día en que se desarrolla la formación. */}
          <div className="form-group">
            <label>Número del Curso</label>
            <input type="text" />
          </div>

          {/* Área de conocimiento a la que pertenece el curso. */}
          <div className="form-group">
            <label>Día</label>
            <input type="text" />
          </div>

          {/* Centro de formación responsable del curso. */}
          <div className="form-group">
            <label>Área</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Centro de Formación</label>
            <input type="text" />
          </div>
        </div>

        {/* Acciones para cancelar el registro o guardar el nuevo curso. */}
        <div className="form-actions">
          <Link to="/courses" className="btn-secondary">
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

export default CoursesCreate;
