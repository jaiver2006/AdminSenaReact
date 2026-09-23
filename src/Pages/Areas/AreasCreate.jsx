// Link permite volver al listado sin recargar toda la aplicación.
import { Link } from "react-router-dom";

// Muestra el formulario visual para registrar una nueva área de formación.
function AreasCreate() {
  return (
    <div className="form-page">
      <h1>Crear Área</h1>

      {/* El formulario contiene los datos que después se enviarán a una API o base de datos. */}
      <form>
        <div className="form-grid">
          {/* Campo donde el usuario escribe el nombre del área. */}
          <div className="form-group">
            <label>Nombre del Área</label>
            <input type="text" placeholder="Ej: Desarrollo de software" />
          </div>
        </div>

        {/* Acciones para cancelar el formulario o guardar la información ingresada. */}
        <div className="form-actions">
          <Link to="/areas" className="btn-secondary">
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

export default AreasCreate;
