import { Link } from 'react-router-dom';

function TeachersCreate() {
  return (
    <div className="form-page">
      <h1>Crear Instructor</h1>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Área</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Centro</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/teachers" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default TeachersCreate;