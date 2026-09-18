import { Link } from 'react-router-dom';

function ComputersCreate() {
  return (
    <div className="form-page">
      <h1>Crear Computador</h1>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Número</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Marca</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/computers" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default ComputersCreate;