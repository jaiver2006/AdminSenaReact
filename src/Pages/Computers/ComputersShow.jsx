// Link permite regresar al listado del inventario.
import { Link } from "react-router-dom";

// Muestra el detalle de un computador registrado.
function ComputersShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Computador</h1>

      {/* La cuadrícula presenta la identificación y las características del equipo. */}
      <div className="detail-grid">
        <div className="detail-item">
          <strong>ID</strong>
          <span>1</span>
        </div>

        <div className="detail-item">
          <strong>Número</strong>
          <span>PC-01</span>
        </div>

        <div className="detail-item">
          <strong>Marca</strong>
          <span>HP</span>
        </div>
      </div>

      {/* Acción para volver a todos los computadores. */}
      <div className="form-actions">
        <Link to="/computers" className="btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default ComputersShow;
