// Link permite volver al inventario de computadores sin recargar la aplicación.
import { Link } from "react-router-dom";

// Construye el formulario para registrar un equipo en el inventario.
function ComputersCreate() {
  return (
    <div className="form-page">
      <h1>Crear Computador</h1>

      {/* Los campos se preparan para recibir y guardar los datos del equipo. */}
      <form>
        <div className="form-grid">
          {/* Identificador interno o código asignado al computador. */}
          {/* Marca comercial del equipo que se está registrando. */}
          <div className="form-group">
            <label>Número</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Marca</label>
            <input type="text" />
          </div>
        </div>

        {/* Acciones para cancelar el registro o guardarlo. */}
        <div className="form-actions">
          <Link to="/computers" className="btn-secondary">
            Cancelar
          </Link>
          <button type="submit" className="btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ComputersCreate;
