import { Link } from 'react-router-dom';

function TeachersEdit() {
  return (
    <div className="form-page">
      <h1>Editar Instructor</h1>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" defaultValue="Carlos Ruiz" />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" defaultValue="carlos@gmail.com" />
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
          <Link to="/teachers" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Actualizar</button>
        </div>
      </form>
    </div>
  );
}

export default TeachersEdit;