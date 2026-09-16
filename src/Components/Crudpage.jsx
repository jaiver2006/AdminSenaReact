function CrudPage({ title, columns, rows = [] }) {
  return (
    <section className="crud-page">
      <h1>{title}</h1>

      <table>
        <thead>
          <tr>
            <th>#</th>
            {/* Las columnas se reciben por props para reutilizar esta tabla. */}
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* Se muestra un estado vacio cuando no existen registros. */}
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 2}>
                No hay registros disponibles.
              </td>
            </tr>
          ) : (
            /* Cada fila usa su id como clave y conserva el orden recibido. */
            rows.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>

                {columns.map((column) => (
                  <td key={column.key}>
                    {row[column.key] || "Sin información"}
                  </td>
                ))}

                <td className="acciones">
                  {/* Estas acciones son visuales hasta conectar la fuente de datos. */}
                  <button type="button">Mostrar</button>
                  <button type="button">Editar</button>
                  <button type="button">Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <p className="total">Total: {rows.length}</p>
    </section>
  );
}

export default CrudPage;
