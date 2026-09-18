import { Link } from 'react-router-dom';

function CoursesCreate() {
  return (
    <div className="form-page">
      <h1>Crear Curso</h1>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Número del Curso</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Día</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Área</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Centro de Formación</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/courses" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default CoursesCreate;