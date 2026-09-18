import { Link } from 'react-router-dom';

function CoursesShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Curso</h1>

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

      <div className="form-actions">
        <Link to="/courses" className="btn-secondary">Volver</Link>
      </div>
    </div>
  );
}

export default CoursesShow;