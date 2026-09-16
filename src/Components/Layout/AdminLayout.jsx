import Sidebar from "../Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      {/* El menu permanece visible mientras cambia el contenido de cada ruta. */}
      <Sidebar />

      <main className="main">{children}</main>
    </div>
  );
}

export default AdminLayout;
