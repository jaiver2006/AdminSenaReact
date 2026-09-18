// Importa NavLink para crear enlaces de navegación con estilo activo.
import { NavLink } from "react-router-dom";
// Importa la imagen del logo del SENA desde la carpeta de assets.
import logoSena from "../assets/Img/sena-logo.png";

// Sidebar representa el menú lateral del panel administrativo.
function Sidebar() {
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
    <aside className="sidebar">
      <div className="logo">
        <h1>SENA</h1>
        <img src={logoSena} alt="Logo SENA" width="100" />
        <p>Panel Administrativo</p>
      </div>

      <ul className="menu">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className={`fas ${item.icon}`} /> {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
