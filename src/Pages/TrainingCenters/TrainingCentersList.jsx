import { Link } from "react-router-dom";

function TrainingCentersList() {
  // Arreglo de centros de formación que se muestran en la tabla.
  const centers = [
    { id: 1, name: "Centro Norte", location: "Bogotá" },
    { id: 2, name: "Centro Sur", location: "Medellín" },
    { id: 3, name: "Centro Industrial", location: "Cali" },
    { id: 4, name: "Centro Oriente", location: "Bucaramanga" },
    { id: 5, name: "Centro Financiero", location: "Barranquilla" },
    { id: 6, name: "Centro Creativo", location: "Cartagena" },
    { id: 7, name: "Centro Automotriz", location: "Pereira" },
    { id: 8, name: "Centro Rural", location: "Villavicencio" },
    { id: 9, name: "Centro de Servicios", location: "Manizales" },
    { id: 10, name: "Centro Gastronómico", location: "Santa Marta" },
    { id: 11, name: "Centro de la Construcción", location: "Ibagué" },
    { id: 12, name: "Centro Logístico", location: "Cúcuta" },
    { id: 13, name: "Centro Comercial", location: "Neiva" },
    { id: 14, name: "Centro Tecnológico", location: "Armenia" },
    { id: 15, name: "Centro Turístico", location: "San Andrés" },
    { id: 16, name: "Centro Empresarial", location: "Tunja" },
    { id: 17, name: "Centro de Energía", location: "Valledupar" },
    { id: 18, name: "Centro Textil", location: "Dosquebradas" },
    { id: 19, name: "Centro de Mantenimiento", location: "Popayán" },
    { id: 20, name: "Centro de Innovación", location: "Pasto" },
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
