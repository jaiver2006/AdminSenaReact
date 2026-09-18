function CrudPage({ title, columns, rows = [] }) {
  return (
    <div className="container-table">
      <h1>{title}</h1>

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
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 2} style={{ textAlign: 'center', padding: '20px' }}>
                No hay registros.
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr key={row.id}>
                <td className="numero">{index + 1}</td>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key] ?? 'Sin información'}</td>
                ))}
                <td className="acciones">
                  <button className="btn-show" type="button">Mostrar</button>
                  <button className="btn-edit" type="button">Editar</button>
                  <button className="btn-delete" type="button">Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="total">Total: {rows.length}</div>
    </div>
  );
}

export default CrudPage;