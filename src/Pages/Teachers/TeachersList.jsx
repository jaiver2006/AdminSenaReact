// Importa Link para poder navegar a rutas como detalle y edición de instructores.
import { Link } from "react-router-dom";

// Define el componente para mostrar la lista de instructores del sistema.
function TeachersList() {
  // Arreglo con datos de ejemplo para hacer visible la tabla de instructores.
  const teachers = [
    // Registro del primer instructor con nombre, correo, área y centro de trabajo.
    {
      id: 1,
      name: "Carlos Ruiz",
      email: "carlos@gmail.com",
      area: "Desarrollo",
      center: "Centro Norte",
    },
    // Registro del segundo instructor para comprobar que la tabla renderiza varias filas.
    {
      id: 2,
      name: "María López",
      email: "maria@gmail.com",
      area: "Diseño",
      center: "Centro Sur",
    },
  ];

  // Devuelve la estructura visual de la pantalla de instructores.
  return (
    <div className="container-table">
      {/* Título principal que identifica la pantalla. */}
      <h1>Listado de Instructores</h1>
      {/* Tabla con la lista de instructores organizada por columnas. */}
      <table className="table-custom">
        {/* Encabezado de la tabla con los nombres de las columnas. */}
        <thead>
          <tr>
            {/* Número consecutivo para cada instructor. */}
            <th className="numero">#</th>
            {/* Nombre del instructor. */}
            <th>Nombre</th>
            {/* Correo electrónico del instructor. */}
            <th>Correo electrónico</th>
            {/* Área de formación o especialidad. */}
            <th>Área</th>
            {/* Centro donde trabaja el instructor. */}
            <th>Centro</th>
            {/* Acciones para cada instructor. */}
            <th>Acciones</th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla donde aparecen cada uno de los instructores. */}
        <tbody>
          {/* Recorre la lista para crear una fila por cada instructor. */}
          {teachers.map((teacher, index) => (
            <tr key={teacher.id}>
              {/* Muestra el número del registro. */}
              <td className="numero">{index + 1}</td>
              {/* Muestra el nombre del instructor. */}
              <td>{teacher.name}</td>
              {/* Muestra el correo del instructor. */}
              <td>{teacher.email}</td>
              {/* Muestra el área del instructor. */}
              <td>{teacher.area}</td>
              {/* Muestra el centro de formación asociado. */}
              <td>{teacher.center}</td>
              {/* Contenedor para los botones de acción de cada instructor. */}
              <td className="acciones">
                {/* Enlace para ver el detalle completo del instructor. */}
                <Link to={`/teachers/${teacher.id}`} className="btn-show">
                  Mostrar
                </Link>
                {/* Enlace para entrar a la vista de edición. */}
                <Link to={`/teachers/${teacher.id}/edit`} className="btn-edit">
                  Editar
                </Link>
                {/* Botón para eliminar el instructor. */}
                <button className="btn-delete" type="button">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Muestra la cantidad total de instructores recordados en la lista. */}
      <div className="total">Total de instructores: {teachers.length}</div>
    </div>
  );
}

// Exporta el componente para reutilizarlo en la navegación principal.
export default TeachersList;
