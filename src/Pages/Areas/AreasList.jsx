import { Link } from "react-router-dom";

// Este componente muestra la lista de áreas del sistema.
// Se usa para administrar la información sin tener que crear una vista separada por cada registro.
function AreasList() {
  // Array de ejemplo que representa los datos reales que después pueden venir desde una API o base de datos.
  // Cada objeto tiene un id y un nombre para identificar cada área del programa.
  const areas = [
    { id: 1, name: "Desarrollo de software" },
    { id: 2, name: "Diseño gráfico" },
    { id: 3, name: "Electrónica" },
    { id: 4, name: "Gestión administrativa" },
    { id: 5, name: "Contabilidad" },
    { id: 6, name: "Producción multimedia" },
    { id: 7, name: "Mecánica" },
    { id: 8, name: "Producción agropecuaria" },
    { id: 9, name: "Servicios de salud" },
    { id: 10, name: "Gastronomía" },
    { id: 11, name: "Construcción" },
    { id: 12, name: "Logística" },
    { id: 13, name: "Mercadeo y ventas" },
    { id: 14, name: "Redes y telecomunicaciones" },
    { id: 15, name: "Turismo" },
    { id: 16, name: "Recursos humanos" },
    { id: 17, name: "Electricidad" },
    { id: 18, name: "Industria textil" },
    { id: 19, name: "Mantenimiento" },
    { id: 20, name: "Programación" },
  ];

  // El return devuelve la estructura visual que se muestra en la pantalla.
  return (
    <div className="container-table">
      {/* Título principal del listado. */}
      <h1>Listado de Áreas</h1>

      {/* La etiqueta table organiza los datos en filas y columnas. */}
      <table className="table-custom">
        {/* Encabezado de la tabla: define las columnas visibles. */}
        <thead>
          <tr>
            {/* Columna para el número correlativo. */}
            <th className="numero">#</th>
            {/* Columna del nombre del área. */}
            <th>Nombre del Área</th>
            {/* Columna de acciones (mostrar, editar, eliminar). */}
            <th>Acciones</th>
          </tr>
        </thead>

        {/* Cuerpo de la tabla donde se muestran todos los registros. */}
        <tbody>
          {/* map recorre cada área y crea una fila por cada elemento del arreglo. */}
          {areas.map((area, index) => (
            <tr key={area.id}>
              {/* index + 1 muestra el número real del registro en la lista. */}
              <td className="numero">{index + 1}</td>
              {/* Muestra el nombre del área que viene del arreglo. */}
              <td>{area.name}</td>
              {/* Contenedor de acciones para cada área. */}
              <td className="acciones">
                {/* Link permite navegar a la vista de detalle del área. */}
                <Link to={`/areas/${area.id}`} className="btn-show">
                  Mostrar
                </Link>
                {/* Link permite navegar a la edición del área seleccionada. */}
                <Link to={`/areas/${area.id}/edit`} className="btn-edit">
                  Editar
                </Link>
                {/* button representa la acción de eliminar, aunque por ahora es solo visual. */}
                <button className="btn-delete" type="button">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Muestra la cantidad total de registros existentes en la tabla. */}
      <div className="total">Total de áreas: {areas.length}</div>
    </div>
  );
}

// Exporta el componente para poder importarlo en la ruta principal de la aplicación.
export default AreasList;
