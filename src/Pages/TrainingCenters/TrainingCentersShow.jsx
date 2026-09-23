// Link permite regresar al listado de centros.
import { Link } from "react-router-dom";

// Muestra el detalle de un centro de formación seleccionado.
function TrainingCentersShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Centro</h1>

      {/* La cuadrícula presenta la identificación y ubicación del centro. */}
      <div className="detail-grid">
        <div className="detail-item">
          <strong>ID</strong>
          <span>1</span>
        </div>

        <div className="detail-item">
          <strong>Nombre</strong>
          <span>Centro Norte</span>
        </div>

        <div className="detail-item">
          <strong>Ubicación</strong>
          <span>Bogotá</span>
        </div>
      </div>

      {/* Acción para volver a consultar todos los centros. */}
      <div className="form-actions">
        <Link to="/training-centers" className="btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default TrainingCentersShow;
