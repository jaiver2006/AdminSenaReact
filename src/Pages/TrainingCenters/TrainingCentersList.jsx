import { Link } from "react-router-dom";

function TrainingCentersList() {
  // Arreglo de centros de formación que se muestran en la tabla.
  const centers = [
    { id: 1, name: "Centro Norte", location: "Bogotá" },
    { id: 2, name: "Centro Sur", location: "Medellín" },
  ];

  return (
    <div className="container-table">
      <h1>Listado de Centros</h1>

      <table className="table-custom">
        <thead>
          <tr>
            <th className="numero">#</th>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* Recorre cada centro y crea una fila con sus datos y acciones. */}
          {centers.map((center, index) => (
            <tr key={center.id}>
              <td className="numero">{index + 1}</td>
              <td>{center.name}</td>
              <td>{center.location}</td>
              <td className="acciones">
                {/* Enlace para ver el detalle del centro. */}
                <Link
                  to={`/training-centers/${center.id}`}
                  className="btn-show"
                >
                  Mostrar
                </Link>
                {/* Enlace para editar el centro. */}
                <Link
                  to={`/training-centers/${center.id}/edit`}
                  className="btn-edit"
                >
                  Editar
                </Link>
                {/* Botón para eliminar el centro. */}
                <button className="btn-delete" type="button">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Muestra la cantidad total de centros disponibles. */}
      <div className="total">Total de centros: {centers.length}</div>
    </div>
  );
}

export default TrainingCentersList;
