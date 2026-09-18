import { Link } from 'react-router-dom';

function ComputersEdit() {
  return (
    <div className="form-page">
      <h1>Editar Computador</h1>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Número</label>
            <input type="text" defaultValue="PC-01" />
          </div>

          <div className="form-group">
            <label>Marca</label>
            <input type="text" defaultValue="HP" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/computers" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Actualizar</button>
        </div>
      </form>
    </div>
  );
}

export default ComputersEdit;