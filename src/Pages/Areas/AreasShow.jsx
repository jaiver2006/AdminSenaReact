// Link permite regresar al listado de áreas sin recargar la página.
import { Link } from "react-router-dom";

// Muestra la información detallada de un área seleccionada.
function AreasShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Área</h1>

      {/* La cuadrícula organiza cada dato del área en una tarjeta informativa. */}
      <div className="detail-grid">
        <div className="detail-item">
          <strong>ID</strong>
          <span>1</span>
        </div>
        <div className="detail-item">
          <strong>Nombre</strong>
          <span>Desarrollo de software</span>
        </div>
      </div>

      {/* Acción para volver al listado principal. */}
      <div className="form-actions">
        <Link to="/areas" className="btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default AreasShow;
