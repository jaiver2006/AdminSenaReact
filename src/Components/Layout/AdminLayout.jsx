import Sidebar from '../Sidebar';

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="main">
        <div className="header-panel">
          <h2>Panel de Administración</h2>
          <p>Gestión Académica SENA</p>
        </div>

        {children}
      </main>
    </div>
  );
}

export default AdminLayout;