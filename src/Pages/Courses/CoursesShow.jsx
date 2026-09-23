// Link permite regresar al listado de cursos.
import { Link } from "react-router-dom";

// Muestra la información principal de un curso seleccionado.
function CoursesShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Curso</h1>

      {/* Cada tarjeta de esta cuadrícula representa un dato del curso. */}
      <div className="detail-grid">
        <div className="detail-item">
          <strong>ID</strong>
          <span>1</span>
        </div>

        <div className="detail-item">
          <strong>Número del Curso</strong>
          <span>2024-01</span>
        </div>

        <div className="detail-item">
          <strong>Día</strong>
          <span>Lunes</span>
        </div>

        <div className="detail-item">
          <strong>Área</strong>
          <span>Desarrollo</span>
        </div>
      </div>

      {/* Acción para volver a consultar todos los cursos. */}
      <div className="form-actions">
        <Link to="/courses" className="btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default CoursesShow;
