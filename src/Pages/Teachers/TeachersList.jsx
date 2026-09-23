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
    {
      id: 3,
      name: "Jorge Ramírez",
      email: "jorge@gmail.com",
      area: "Electrónica",
      center: "Centro Industrial",
    },
    {
      id: 4,
      name: "Laura Sánchez",
      email: "laura@gmail.com",
      area: "Gestión administrativa",
      center: "Centro Oriente",
    },
    {
      id: 5,
      name: "Andrés Castillo",
      email: "andres@gmail.com",
      area: "Contabilidad",
      center: "Centro Financiero",
    },
    {
      id: 6,
      name: "Paola Méndez",
      email: "paola@gmail.com",
      area: "Multimedia",
      center: "Centro Creativo",
    },
    {
      id: 7,
      name: "Ricardo Gómez",
      email: "ricardo@gmail.com",
      area: "Mecánica",
      center: "Centro Automotriz",
    },
    {
      id: 8,
      name: "Natalia Correa",
      email: "natalia@gmail.com",
      area: "Agropecuaria",
      center: "Centro Rural",
    },
    {
      id: 9,
      name: "Felipe Navarro",
      email: "felipe@gmail.com",
      area: "Salud",
      center: "Centro de Servicios",
    },
    {
      id: 10,
      name: "Claudia Reyes",
      email: "claudia@gmail.com",
      area: "Cocina",
      center: "Centro Gastronómico",
    },
    {
      id: 11,
      name: "Mauricio Peña",
      email: "mauricio@gmail.com",
      area: "Construcción",
      center: "Centro de la Construcción",
    },
    {
      id: 12,
      name: "Diana Bernal",
      email: "diana@gmail.com",
      area: "Logística",
      center: "Centro Logístico",
    },
    {
      id: 13,
      name: "Esteban Arias",
      email: "esteban@gmail.com",
      area: "Marketing",
      center: "Centro Comercial",
    },
    {
      id: 14,
      name: "Carolina Vera",
      email: "carolina@gmail.com",
      area: "Redes",
      center: "Centro Tecnológico",
    },
    {
      id: 15,
      name: "Óscar Muñoz",
      email: "oscar@gmail.com",
      area: "Turismo",
      center: "Centro Turístico",
    },
    {
      id: 16,
      name: "Patricia Rincón",
      email: "patricia@gmail.com",
      area: "Recursos humanos",
      center: "Centro Empresarial",
    },
    {
      id: 17,
      name: "Hernán Gil",
      email: "hernan@gmail.com",
      area: "Electricidad",
      center: "Centro de Energía",
    },
    {
      id: 18,
      name: "Mónica Duarte",
      email: "monica@gmail.com",
      area: "Textil",
      center: "Centro Textil",
    },
    {
      id: 19,
      name: "Gustavo Salazar",
      email: "gustavo@gmail.com",
      area: "Mantenimiento",
      center: "Centro Industrial",
    },
    {
      id: 20,
      name: "Beatriz Lozano",
      email: "beatriz@gmail.com",
      area: "Programación",
      center: "Centro Norte",
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
