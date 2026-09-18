import { Link } from 'react-router-dom';

function CoursesEdit() {
  return (
    <div className="form-page">
      <h1>Editar Curso</h1>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Número del Curso</label>
            <input type="text" defaultValue="2024-01" />
          </div>

          <div className="form-group">
            <label>Día</label>
            <input type="text" defaultValue="Lunes" />
          </div>

          <div className="form-group">
            <label>Área</label>
            <input type="text" defaultValue="Desarrollo" />
          </div>

          <div className="form-group">
            <label>Centro</label>
            <input type="text" defaultValue="Centro Norte" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/courses" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Actualizar</button>
        </div>
      </form>
    </div>
  );
}

export default CoursesEdit;