// Importa el componente Link de React Router para crear navegación entre rutas.
import { Link } from "react-router-dom";

// Define el componente que muestra la lista de computadores registrados en el sistema.
function ComputersList() {
  // Crea el arreglo inicial con datos de ejemplo para mostrar la tabla mientras no haya backend.
  const computers = [
    // Cada objeto representa un computador con su identificador, número y marca.
    { id: 1, number: "PC-01", brand: "HP" },
    // Este segundo registro sirve para verificar que la tabla renderiza varias filas.
    { id: 2, number: "PC-02", brand: "Lenovo" },
    { id: 3, number: "PC-03", brand: "Dell" },
    { id: 4, number: "PC-04", brand: "Acer" },
    { id: 5, number: "PC-05", brand: "Asus" },
    { id: 6, number: "PC-06", brand: "Apple" },
    { id: 7, number: "PC-07", brand: "HP" },
    { id: 8, number: "PC-08", brand: "Lenovo" },
    { id: 9, number: "PC-09", brand: "Dell" },
    { id: 10, number: "PC-10", brand: "Acer" },
    { id: 11, number: "PC-11", brand: "Asus" },
    { id: 12, number: "PC-12", brand: "Apple" },
    { id: 13, number: "PC-13", brand: "HP" },
    { id: 14, number: "PC-14", brand: "Lenovo" },
    { id: 15, number: "PC-15", brand: "Dell" },
    { id: 16, number: "PC-16", brand: "Acer" },
    { id: 17, number: "PC-17", brand: "Asus" },
    { id: 18, number: "PC-18", brand: "Apple" },
    { id: 19, number: "PC-19", brand: "HP" },
    { id: 20, number: "PC-20", brand: "Lenovo" },
  ];

  // Retorna el JSX que se renderiza en la pantalla del listado.
  return (
    <div className="container-table">
      {/* Muestra el título principal de la vista. */}
      <h1>Listado de Computadores</h1>
      {/* Crea la tabla donde se mostrarán los registros. */}
      <table className="table-custom">
        {/* Define la fila de encabezado de la tabla. */}
        <thead>
          <tr>
            {/* Columna para el número de la fila. */}
            <th className="numero">#</th>
            {/* Columna con el identificador del computador. */}
            <th>Número</th>
            {/* Columna con la marca del equipo. */}
            <th>Marca</th>
            {/* Columna para las acciones disponibles sobre cada registro. */}
            <th>Acciones</th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla donde se renderizan los computadores. */}
        <tbody>
          {computers.map((computer, index) => (
            <tr key={computer.id}>
              {/* Muestra el número consecutivo del registro. */}
              <td className="numero">{index + 1}</td>
              {/* Muestra el número del computador como texto. */}
              <td>{computer.number}</td>
              {/* Muestra la marca del computador. */}
              <td>{computer.brand}</td>
              {/* Contenedor donde se ubican los botones de acción para cada fila. */}
              <td className="acciones">
                {/* Enlace para ver el detalle del computador seleccionado. */}
                <Link to={`/computers/${computer.id}`} className="btn-show">
                  Mostrar
                </Link>
                {/* Enlace para abrir la vista de edición del computador. */}
                <Link
                  to={`/computers/${computer.id}/edit`}
                  className="btn-edit"
                >
                  Editar
                </Link>
                {/* Botón visual para la acción de eliminar. */}
                <button className="btn-delete" type="button">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Muestra la cantidad total de registros que están en la tabla. */}
      <div className="total">Total de computadores: {computers.length}</div>
    </div>
  );
}

// Exporta el componente para poder usarlo en la ruta correspondiente de la app.
export default ComputersList;
