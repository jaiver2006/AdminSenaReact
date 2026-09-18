import { Link } from 'react-router-dom';

function TrainingCentersShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Centro</h1>

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

      <div className="form-actions">
        <Link to="/training-centers" className="btn-secondary">Volver</Link>
      </div>
    </div>
  );
}

export default TrainingCentersShow;