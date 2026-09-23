// Link permite regresar al listado de áreas mediante navegación interna.
import { Link } from "react-router-dom";

// Presenta el formulario para actualizar los datos de un área existente.
function AreasEdit() {
  return (
    <div className="form-page">
      <h1>Editar Área</h1>

      {/* El valor inicial simula el registro que normalmente llegaría desde la API. */}
      <form>
        <div className="form-grid">
          {/* Campo editable con el nombre actual del área seleccionada. */}
          <div className="form-group">
            <label>Nombre del Área</label>
            <input type="text" defaultValue="Desarrollo de software" />
          </div>
        </div>

        {/* Permite cancelar los cambios o confirmar la actualización del área. */}
        <div className="form-actions">
          <Link to="/areas" className="btn-secondary">
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

export default AreasEdit;
