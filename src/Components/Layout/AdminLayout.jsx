import { useState } from "react";
import Sidebar from "../Sidebar";
import FooterFormulario from "../FooterFormulario";

// Layout principal: conserva el menú lateral, encabezado, contenido y footer.
function AdminLayout({ children }) {
  // Controla si el menú lateral está visible en la interfaz.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Botón que abre o cierra el menú lateral, especialmente útil en móvil. */}
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Abrir o cerrar menú"
      >
        ☰
      </button>

      {/* Menú lateral con las rutas principales de la aplicación. */}
      <Sidebar isOpen={sidebarOpen} />

      <main className="main">
        {/* Encabezado fijo del área de administración. */}
        <div className="header-panel">
          <h2>Panel de Administración</h2>
          <p>Gestión Académica SENA</p>
        </div>

        {/* Aquí se renderiza la página correspondiente a la ruta actual. */}
        {children}
        {/* Pie de página compartido por las vistas del panel. */}
        <FooterFormulario />
      </main>
    </div>
  );
}

export default AdminLayout;
