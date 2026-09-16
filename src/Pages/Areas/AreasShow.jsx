import { Link } from 'react-router-dom';

function AreasShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Área</h1>

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

      <div className="form-actions">
        <Link to="/areas" className="btn-secondary">Volver</Link>
      </div>
    </div>
  );
}

export default AreasShow;