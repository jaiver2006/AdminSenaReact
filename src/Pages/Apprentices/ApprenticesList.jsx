// Importa Link para crear enlaces hacia detalles, edición y navegación interna.
import { Link } from "react-router-dom";

// Define el componente principal de la vista de aprendices.
function ApprenticesList() {
  // Guarda información temporal para simular registros antes de conectar backend o base de datos.
  const apprentices = [
    {
      // Identificador único del aprendiz.
      id: 1,
      // Nombre completo del estudiante.
      name: "Ana Gómez",
      // Correo electrónico de contacto.
      email: "ana@gmail.com",
      // Número de teléfono del aprendiz.
      cell_number: "3001234567",
      // Curso actual del aprendiz.
      course: "2024-1",
      // Computador asignado al aprendiz.
      computer: "PC-01",
    },
    {
      // Identificador del segundo aprendiz.
      id: 2,
      // Nombre del segundo estudiante.
      name: "Luis Pérez",
      // Correo del segundo estudiante.
      email: "luis@gmail.com",
      // Número celular del segundo aprendiz.
      cell_number: "3207654321",
      // Curso asignado al segundo estudiante.
      course: "2024-2",
      // Equipo asignado al segundo aprendiz.
      computer: "PC-02",
    },
  ];

  // Retorna el JSX que se renderiza en la pantalla.
  return (
    <div className="container-table">
      {/* Título de la página. */}
      <h1>Listado de Aprendices</h1>
      {/* Crea la tabla para mostrar los aprendices. */}
      <table className="table-custom">
        {/* Define la cabecera de la tabla. */}
        <thead>
          <tr>
            {/* Columna con el número del registro. */}
            <th className="numero">#</th>
            {/* Columna con el nombre del aprendiz. */}
            <th>Nombre</th>
            {/* Columna con el correo electrónico. */}
            <th>Correo Electrónico</th>
            {/* Columna con el teléfono. */}
            <th>Teléfono</th>
            {/* Columna con el curso actual. */}
            <th>Curso</th>
            {/* Columna con el computador asignado. */}
            <th>Computador</th>
            {/* Columna para acciones del registro. */}
            <th>Acciones</th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla con cada fila de aprendiz. */}
        <tbody>
          {apprentices.map((apprentice, index) => (
            <tr key={apprentice.id}>
              {/* Muestra el número del registro en la lista. */}
              <td className="numero">{index + 1}</td>
              {/* Muestra el nombre del aprendiz. */}
              <td>{apprentice.name}</td>
              {/* Muestra el correo del aprendiz. */}
              <td>{apprentice.email}</td>
              {/* Muestra el teléfono del aprendiz. */}
              <td>{apprentice.cell_number}</td>
              {/* Muestra el curso del aprendiz. */}
              <td>{apprentice.course}</td>
              {/* Muestra el computador asignado. */}
              <td>{apprentice.computer}</td>
              {/* Contenedor con los botones de acción para cada registro. */}
              <td className="acciones">
                {/* Enlace para ver el detalle del aprendiz. */}
                <Link to={`/apprentices/${apprentice.id}`} className="btn-show">
                  Mostrar
                </Link>
                {/* Enlace para abrir la edición del aprendiz. */}
                <Link
                  to={`/apprentices/${apprentice.id}/edit`}
                  className="btn-edit"
                >
                  Editar
                </Link>
                {/* Botón para eliminar el aprendiz. */}
                <button className="btn-delete" type="button">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Muestra la cantidad total de aprendices registrados. */}
      <div className="total">Total de aprendices: {apprentices.length}</div>
    </div>
  );
}

// Exporta el componente para poder importarlo en la app.
export default ApprenticesList;
