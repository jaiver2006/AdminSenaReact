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
    {
      id: 3,
      name: "Sofía Martínez",
      email: "sofia@gmail.com",
      cell_number: "3154567890",
      course: "2024-3",
      computer: "PC-03",
    },
    {
      id: 4,
      name: "Diego Torres",
      email: "diego@gmail.com",
      cell_number: "3019876543",
      course: "2024-4",
      computer: "PC-04",
    },
    {
      id: 5,
      name: "Valentina Rojas",
      email: "valentina@gmail.com",
      cell_number: "3182345678",
      course: "2024-5",
      computer: "PC-05",
    },
    {
      id: 6,
      name: "Mateo Vargas",
      email: "mateo@gmail.com",
      cell_number: "3001112233",
      course: "2024-6",
      computer: "PC-06",
    },
    {
      id: 7,
      name: "Camila Herrera",
      email: "camila@gmail.com",
      cell_number: "3012223344",
      course: "2024-7",
      computer: "PC-07",
    },
    {
      id: 8,
      name: "Samuel Castro",
      email: "samuel@gmail.com",
      cell_number: "3023334455",
      course: "2024-8",
      computer: "PC-08",
    },
    {
      id: 9,
      name: "Isabella Moreno",
      email: "isabella@gmail.com",
      cell_number: "3034445566",
      course: "2024-9",
      computer: "PC-09",
    },
    {
      id: 10,
      name: "Nicolás Vargas",
      email: "nicolas@gmail.com",
      cell_number: "3045556677",
      course: "2024-10",
      computer: "PC-10",
    },
    {
      id: 11,
      name: "Gabriela Silva",
      email: "gabriela@gmail.com",
      cell_number: "3056667788",
      course: "2024-11",
      computer: "PC-11",
    },
    {
      id: 12,
      name: "Juan Esteban Díaz",
      email: "juan.diaz@gmail.com",
      cell_number: "3067778899",
      course: "2024-12",
      computer: "PC-12",
    },
    {
      id: 13,
      name: "Mariana Ortiz",
      email: "mariana@gmail.com",
      cell_number: "3078889900",
      course: "2024-13",
      computer: "PC-13",
    },
    {
      id: 14,
      name: "Sebastián León",
      email: "sebastian@gmail.com",
      cell_number: "3089990011",
      course: "2024-14",
      computer: "PC-14",
    },
    {
      id: 15,
      name: "Daniela Pardo",
      email: "daniela@gmail.com",
      cell_number: "3091234567",
      course: "2024-15",
      computer: "PC-15",
    },
    {
      id: 16,
      name: "Alejandro Mesa",
      email: "alejandro@gmail.com",
      cell_number: "3102345678",
      course: "2024-16",
      computer: "PC-16",
    },
    {
      id: 17,
      name: "Laura Prieto",
      email: "laura.prieto@gmail.com",
      cell_number: "3113456789",
      course: "2024-17",
      computer: "PC-17",
    },
    {
      id: 18,
      name: "Tomás Cárdenas",
      email: "tomas@gmail.com",
      cell_number: "3124567890",
      course: "2024-18",
      computer: "PC-18",
    },
    {
      id: 19,
      name: "Sara Quintero",
      email: "sara@gmail.com",
      cell_number: "3135678901",
      course: "2024-19",
      computer: "PC-19",
    },
    {
      id: 20,
      name: "David Molina",
      email: "david@gmail.com",
      cell_number: "3146789012",
      course: "2024-20",
      computer: "PC-20",
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
