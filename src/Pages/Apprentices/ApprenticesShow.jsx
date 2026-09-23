// Link permite regresar al listado sin recargar la aplicación.
import { Link } from "react-router-dom";

// Presenta la información detallada de un aprendiz.
function ApprenticesShow() {
  return (
    <div className="detail-card">
      <h1>Detalle del Aprendiz</h1>

      {/* Por ahora el detalle usa datos fijos; después puede recibir el id desde la URL. */}
      <div className="detail-grid">
        {/* Cada elemento de la cuadrícula representa un dato del aprendiz. */}
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

      {/* Botón de navegación para regresar a todos los aprendices. */}
      <div className="form-actions">
        <Link to="/apprentices" className="btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default ApprenticesShow;
