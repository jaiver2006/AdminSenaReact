import { Link } from 'react-router-dom';

function ComputersShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Computador</h1>

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

      <div className="form-actions">
        <Link to="/computers" className="btn-secondary">Volver</Link>
      </div>
    </div>
  );
}

export default ComputersShow;