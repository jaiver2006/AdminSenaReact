import { Link } from 'react-router-dom';

function TrainingCentersCreate() {
  return (
    <div className="form-page">
      <h1>Crear Centro</h1>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/training-centers" className="btn-secondary">Cancelar</Link>
          <button type="submit" className="btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default TrainingCentersCreate;