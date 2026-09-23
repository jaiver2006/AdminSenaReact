// Link permite regresar al inventario después de editar o cancelar.
import { Link } from "react-router-dom";

// Presenta los datos actuales de un computador para poder modificarlos.
function ComputersEdit() {
  return (
    <div className="form-page">
      <h1>Editar Computador</h1>

      {/* Los valores iniciales representan el equipo seleccionado. */}
      <form>
        <div className="form-grid">
          {/* Código que identifica el computador dentro del inventario. */}
          {/* Marca actual del computador. */}
          <div className="form-group">
            <label>Número</label>
            <input type="text" defaultValue="PC-01" />
          </div>

          <div className="form-group">
            <label>Marca</label>
            <input type="text" defaultValue="HP" />
          </div>
        </div>

        {/* Permite descartar los cambios o actualizar el registro. */}
        <div className="form-actions">
          <Link to="/computers" className="btn-secondary">
            Cancelar
          </Link>
          <button type="submit" className="btn-primary">
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ComputersEdit;
