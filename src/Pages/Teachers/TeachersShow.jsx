// Link permite regresar al listado de instructores.
import { Link } from "react-router-dom";

// Muestra el detalle del instructor seleccionado.
function TeachersShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Instructor</h1>

      {/* La cuadrícula agrupa la identificación y la información laboral. */}
      <div className="detail-grid">
        <div className="detail-item">
          <strong>ID</strong>
          <span>1</span>
        </div>

        <div className="detail-item">
          <strong>Nombre</strong>
          <span>Carlos Ruiz</span>
        </div>

        <div className="detail-item">
          <strong>Correo</strong>
          <span>carlos@gmail.com</span>
        </div>

        <div className="detail-item">
          <strong>Área</strong>
          <span>Desarrollo</span>
        </div>
      </div>

      {/* Acción para volver a consultar todos los instructores. */}
      <div className="form-actions">
        <Link to="/teachers" className="btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default TeachersShow;
