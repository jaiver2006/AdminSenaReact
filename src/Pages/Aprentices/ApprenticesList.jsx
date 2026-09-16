import { Link } from "react-router-dom";

function ApprenticesList() {
  // Datos temporales que luego pueden reemplazarse por una consulta a la API.
  const apprentices = [
    {
      id: 1,
      name: "Ana Gómez",
      email: "ana@gmail.com",
      cell_number: "3001234567",
      course: "2024-1",
      computer: "PC-01",
    },
    {
      id: 2,
      name: "Luis Pérez",
      email: "luis@gmail.com",
      cell_number: "3207654321",
      course: "2024-2",
      computer: "PC-02",
    },
  ];

  return (
    <div className="container-table">
      <h1>Listado de Aprendices</h1>

      <table className="table-custom">
        <thead>
          <tr>
            <th className="numero">#</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Teléfono</th>
            <th>Curso</th>
            <th>Computador</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* El id del aprendiz permite construir los enlaces de detalle y edicion. */}
          {apprentices.map((apprentice, index) => (
            <tr key={apprentice.id}>
              <td className="numero">{index + 1}</td>
              <td>{apprentice.name}</td>
              <td>{apprentice.email}</td>
              <td>{apprentice.cell_number}</td>
              <td>{apprentice.course}</td>
              <td>{apprentice.computer}</td>
              <td className="acciones">
                <Link to={`/apprentices/${apprentice.id}`} className="btn-show">
                  Mostrar
                </Link>
                <Link
                  to={`/apprentices/${apprentice.id}/edit`}
                  className="btn-edit"
                >
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

      <div className="total">Total de aprendices: {apprentices.length}</div>
    </div>
  );
}

export default ApprenticesList;
