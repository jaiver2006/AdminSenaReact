// Link permite regresar al listado de instructores sin recargar la aplicación.
import { Link } from "react-router-dom";

// Construye el formulario para registrar un nuevo instructor.
function TeachersCreate() {
  return (
    <div className="form-page">
      <h1>Crear Instructor</h1>

      {/* El formulario reúne los datos personales y laborales del instructor. */}
      <form>
        <div className="form-grid">
          {/* Nombre completo de la persona que impartirá la formación. */}
          {/* Correo utilizado como medio de contacto institucional. */}
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" />
          </div>

          {/* Área de conocimiento en la que está especializado el instructor. */}
          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" />
          </div>

          {/* Centro donde el instructor desarrolla sus actividades. */}
          <div className="form-group">
            <label>Área</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Centro</label>
            <input type="text" />
          </div>
        </div>

        {/* Acciones para cancelar el registro o guardarlo. */}
        <div className="form-actions">
          <Link to="/teachers" className="btn-secondary">
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

export default TeachersCreate;
