import { Link } from "react-router-dom";

function ApprenticesShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Aprendiz</h1>

      {/* Por ahora el detalle usa datos fijos; despues puede recibir el id desde la URL. */}
      <div className="detail-grid">
        <div className="detail-item">
          <strong>ID</strong>
          <span>1</span>
        </div>

        <div className="detail-item">
          <strong>Nombre</strong>
          <span>Ana Gómez</span>
        </div>

        <div className="detail-item">
          <strong>Correo</strong>
          <span>ana@gmail.com</span>
        </div>

        <div className="detail-item">
          <strong>Teléfono</strong>
          <span>3001234567</span>
        </div>
      </div>

      <div className="form-actions">
        <Link to="/apprentices" className="btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default ApprenticesShow;
