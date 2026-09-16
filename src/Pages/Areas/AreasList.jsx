import { Link } from "react-router-dom";

function AreasList() {
  // Datos de ejemplo para presentar la lista mientras se conecta el backend.
  const areas = [
    { id: 1, name: "Desarrollo de software" },
    { id: 2, name: "Diseño gráfico" },
    { id: 3, name: "Electrónica" },
  ];

  return (
    <div className="container-table">
      <h1>Listado de Áreas</h1>

      <table className="table-custom">
        <thead>
          <tr>
            <th className="numero">#</th>
            <th>Nombre del Área</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* Cada fila enlaza con las vistas asociadas al area seleccionada. */}
          {areas.map((area, index) => (
            <tr key={area.id}>
              <td className="numero">{index + 1}</td>
              <td>{area.name}</td>
              <td className="acciones">
                <Link to={`/areas/${area.id}`} className="btn-show">
                  Mostrar
                </Link>
                <Link to={`/areas/${area.id}/edit`} className="btn-edit">
                  Editar
                </Link>
                <button className="btn-delete" type="button">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total">Total de áreas: {areas.length}</div>
    </div>
  );
}

export default AreasList;
