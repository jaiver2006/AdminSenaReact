// Componente reutilizable para mostrar tablas con columnas y filas configurables.
function CrudPage({ title, columns, rows = [] }) {
  return (
    <div className="container-table">
      {/* El título identifica el módulo que está siendo administrado. */}
      <h1>{title}</h1>

      {/* La tabla genera sus encabezados y celdas a partir de la configuración recibida. */}
      <table className="table-custom">
        <thead>
          <tr>
            <th className="numero">#</th>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* Muestra un mensaje cuando el módulo todavía no tiene registros. */}
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 2}
                style={{ textAlign: "center", padding: "20px" }}
              >
                No hay registros.
              </td>
            </tr>
          ) : (
            /* Recorre cada fila y agrega sus acciones de consulta, edición y eliminación. */
            rows.map((row, index) => (
              <tr key={row.id}>
                <td className="numero">{index + 1}</td>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key] ?? "Sin información"}</td>
                ))}
                <td className="acciones">
                  <button className="btn-show" type="button">
                    Mostrar
                  </button>
                  <button className="btn-edit" type="button">
                    Editar
                  </button>
                  <button className="btn-delete" type="button">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Informa cuántos registros están representados en la tabla. */}
      <div className="total">Total: {rows.length}</div>
    </div>
  );
}

export default CrudPage;
