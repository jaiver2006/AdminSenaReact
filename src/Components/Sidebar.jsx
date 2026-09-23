// Importa NavLink para crear enlaces de navegación con estilo activo.
import { Link, NavLink } from "react-router-dom";
// Importa la imagen del logo del SENA desde la carpeta de assets.
import logoSena from "../assets/Img/sena-logo.png";

// Sidebar representa el menú lateral del panel administrativo.
function Sidebar({ isOpen }) {
  // Array con todas las opciones del menú y su ruta y icono.
  const items = [
    { to: "/areas", label: "Áreas", icon: "fa-layer-group" },
    { to: "/computers", label: "Computadores", icon: "fa-desktop" },
    { to: "/training-centers", label: "Centros", icon: "fa-building" },
    { to: "/courses", label: "Cursos", icon: "fa-book" },
    { to: "/teachers", label: "Instructores", icon: "fa-chalkboard-user" },
    { to: "/apprentices", label: "Aprendices", icon: "fa-user-graduate" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="logo">
        <Link to="/" className="logo-link" aria-label="Ir al panel principal">
          <h1>SENA</h1>
          <img src={logoSena} alt="Logo SENA" width="100" />
          <p>Panel Administrativo</p>
        </Link>
      </div>

      <p className="menu-caption">Navegación principal</p>
      <ul className="menu">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="menu-icon">
                <i className={`fas ${item.icon}`} />
              </span>
              <span>{item.label}</span>
              <i className="fas fa-chevron-right menu-arrow" />
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sidebar-status">
        <span className="status-indicator" />
        <span>
          <strong>Sistema activo</strong>
          <small>Gestión académica</small>
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
