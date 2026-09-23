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
    {
      id: 3,
      numero_de_curso: "2024-03",
      day: "Miércoles",
      area: "Electrónica",
      center: "Centro Industrial",
    },
    {
      id: 4,
      numero_de_curso: "2024-04",
      day: "Jueves",
      area: "Gestión administrativa",
      center: "Centro Oriente",
    },
    {
      id: 5,
      numero_de_curso: "2024-05",
      day: "Viernes",
      area: "Contabilidad",
      center: "Centro Financiero",
    },
    {
      id: 6,
      numero_de_curso: "2024-06",
      day: "Lunes",
      area: "Multimedia",
      center: "Centro Creativo",
    },
    {
      id: 7,
      numero_de_curso: "2024-07",
      day: "Martes",
      area: "Mecánica",
      center: "Centro Automotriz",
    },
    {
      id: 8,
      numero_de_curso: "2024-08",
      day: "Miércoles",
      area: "Agropecuaria",
      center: "Centro Rural",
    },
    {
      id: 9,
      numero_de_curso: "2024-09",
      day: "Jueves",
      area: "Salud",
      center: "Centro de Servicios",
    },
    {
      id: 10,
      numero_de_curso: "2024-10",
      day: "Viernes",
      area: "Cocina",
      center: "Centro Gastronómico",
    },
    {
      id: 11,
      numero_de_curso: "2024-11",
      day: "Lunes",
      area: "Construcción",
      center: "Centro de la Construcción",
    },
    {
      id: 12,
      numero_de_curso: "2024-12",
      day: "Martes",
      area: "Logística",
      center: "Centro Logístico",
    },
    {
      id: 13,
      numero_de_curso: "2024-13",
      day: "Miércoles",
      area: "Marketing",
      center: "Centro Comercial",
    },
    {
      id: 14,
      numero_de_curso: "2024-14",
      day: "Jueves",
      area: "Redes",
      center: "Centro Tecnológico",
    },
    {
      id: 15,
      numero_de_curso: "2024-15",
      day: "Viernes",
      area: "Turismo",
      center: "Centro Turístico",
    },
    {
      id: 16,
      numero_de_curso: "2024-16",
      day: "Lunes",
      area: "Recursos humanos",
      center: "Centro Empresarial",
    },
    {
      id: 17,
      numero_de_curso: "2024-17",
      day: "Martes",
      area: "Electricidad",
      center: "Centro de Energía",
    },
    {
      id: 18,
      numero_de_curso: "2024-18",
      day: "Miércoles",
      area: "Textil",
      center: "Centro Textil",
    },
    {
      id: 19,
      numero_de_curso: "2024-19",
      day: "Jueves",
      area: "Mantenimiento",
      center: "Centro Industrial",
    },
    {
      id: 20,
      numero_de_curso: "2024-20",
      day: "Viernes",
      area: "Programación",
      center: "Centro Norte",
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
