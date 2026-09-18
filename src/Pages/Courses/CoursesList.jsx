// Importa Link para navegar entre vistas del sistema.
import { Link } from "react-router-dom";

// Define el componente de la lista de cursos del centro de formación.
function CoursesList() {
  // Array inicial con datos de ejemplo para mostrar la vista en el proyecto.
  const courses = [
    // Primer curso con número, día, área y centro asociado.
    {
      id: 1,
      numero_de_curso: "2024-01",
      day: "Lunes",
      area: "Desarrollo",
      center: "Centro Norte",
    },
    // Segundo curso para verificar que se muestren varias filas en la tabla.
    {
      id: 2,
      numero_de_curso: "2024-02",
      day: "Martes",
      area: "Diseño",
      center: "Centro Sur",
    },
  ];

  // Devuelve la estructura visual del listado.
  return (
    <div className="container-table">
      {/* Título visible de la sección de cursos. */}
      <h1>Listado de Cursos</h1>
      {/* Tabla que organiza la información por columnas. */}
      <table className="table-custom">
        {/* Encabezado de la tabla con las columnas principales. */}
        <thead>
          <tr>
            {/* Columna para el número de la fila. */}
            <th className="numero">#</th>
            {/* Columna con el número del curso. */}
            <th>Número del Curso</th>
            {/* Columna con el día de clase. */}
            <th>Día</th>
            {/* Columna para el área del conocimiento. */}
            <th>Área</th>
            {/* Columna con el centro de formación. */}
            <th>Centro de Formación</th>
            {/* Columna para acciones sobre cada curso. */}
            <th>Acciones</th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla con todos los cursos. */}
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.id}>
              {/* Muestra el número de posición del curso. */}
              <td className="numero">{index + 1}</td>
              {/* Muestra el código del curso. */}
              <td>{course.numero_de_curso}</td>
              {/* Muestra el día de la semana asignado. */}
              <td>{course.day}</td>
              {/* Muestra el área académica. */}
              <td>{course.area}</td>
              {/* Muestra el centro de formación del curso. */}
              <td>{course.center}</td>
              {/* Contenedor para los botones de acción del curso. */}
              <td className="acciones">
                {/* Enlace para ver los detalles del curso. */}
                <Link to={`/courses/${course.id}`} className="btn-show">
                  Mostrar
                </Link>
                {/* Enlace para editar el curso. */}
                <Link to={`/courses/${course.id}/edit`} className="btn-edit">
                  Editar
                </Link>
                {/* Botón para eliminar el registro. */}
                <button className="btn-delete" type="button">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Muestra el número total de cursos registrados. */}
      <div className="total">Total de cursos: {courses.length}</div>
    </div>
  );
}

// Exporta el componente para poder importarlo desde la ruta principal.
export default CoursesList;
